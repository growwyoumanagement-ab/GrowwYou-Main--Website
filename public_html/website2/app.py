"""
Immersive Story-Driven Portfolio — Flask Backend
Author: Nitin
"""

import json
import os
import uuid
import base64
from datetime import datetime
from functools import wraps
from flask import Flask, render_template, jsonify, request, Response
from werkzeug.utils import secure_filename
from flask_cors import CORS
from pymongo import MongoClient
from bson.objectid import ObjectId
import dotenv

# Load environment variables from .env file for local development
dotenv.load_dotenv()

# Harden Flask paths for Vercel Serverless isolated execution
ROOT_DIR = os.path.dirname(os.path.abspath(__file__))
app = Flask(__name__,
            static_folder=os.path.join(ROOT_DIR, 'static'),
            template_folder=os.path.join(ROOT_DIR, 'templates'))
CORS(app)

# MongoDB setup (Secured via environment variable)
MONGO_URI = os.environ.get('MONGO_URI')
if not MONGO_URI:
    raise ValueError("FATAL ERROR: MONGO_URI environment variable is not set. Please create a .env file locally!")

mongo_client = MongoClient(MONGO_URI, serverSelectionTimeoutMS=5000)
db = mongo_client.portfolio_db
projects_col = db.projects
submissions_col = db.submissions

def load_projects():
    """Load project data from MongoDB."""
    data = projects_col.find_one({'_id': 'config'})
    if not data:
        # Fallback for empty DB scenario (try to load local if exists during dev)
        data_path = os.path.join(os.path.dirname(__file__), 'data', 'projects.json')
        if os.path.exists(data_path):
            with open(data_path, 'r') as f:
                return json.load(f)
        return {}
    return data

# ─── Auth ──────────────────────────────────────────────────────────────────────

def check_auth(username, password):
    """Check if a username / password combination is valid."""
    # simple hardcoded admin credentials
    return username == 'admin' and password == 'admin123'

def authenticate():
    """Sends a 401 response that enables basic auth"""
    return Response(
    'Could not verify your access level for that URL.\n'
    'You have to login with proper credentials', 401,
    {'WWW-Authenticate': 'Basic realm="Admin Access Area"'})

def requires_auth(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        auth = request.authorization
        if not auth or not check_auth(auth.username, auth.password):
            return authenticate()
        return f(*args, **kwargs)
    return decorated

# ─── Routes ────────────────────────────────────────────────────────────────────

@app.route('/')
def index():
    """Serve the main immersive portfolio page."""
    projects = load_projects()
    return render_template('index.html', data=projects)

@app.route('/api/projects')
def api_projects():
    """Return all project data as JSON."""
    projects = load_projects()
    return jsonify(projects)

@app.route('/api/projects/<category>')
def api_projects_by_category(category):
    """Return projects filtered by category."""
    projects = load_projects()
    if category in projects:
        return jsonify(projects[category])
    return jsonify({'error': 'Category not found'}), 404

@app.route('/api/contact', methods=['POST'])
def api_contact():
    """Handle contact form submissions."""
    data = request.get_json()
    
    if not data:
        return jsonify({'error': 'No data provided'}), 400
    
    required_fields = ['name', 'email', 'message']
    for field in required_fields:
        if field not in data or not data[field].strip():
            return jsonify({'error': f'{field} is required'}), 400
    
    # Store submission to MongoDB
    submission = {
        'name': data['name'],
        'email': data['email'],
        'message': data['message'],
        'subject': data.get('subject', 'No subject'),
        'timestamp': datetime.now().isoformat()
    }
    
    submissions_col.insert_one(submission)
    
    return jsonify({'success': True, 'message': 'Message received! I\'ll get back to you soon.'})


@app.route('/admin')
@requires_auth
def admin_dashboard():
    """Serve the admin dashboard."""
    return render_template('admin.html')


@app.route('/api/admin/upload-image', methods=['POST'])
@requires_auth
def api_admin_upload_image():
    """Handle image uploads from the admin dashboard."""
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image file provided'}), 400
            
        file = request.files['image']
        if file.filename == '':
            return jsonify({'error': 'No image selected'}), 400

        if file:
            # Read file bytes and convert to Base64 String
            # This bypasses the need for S3 or a local filesystem on Vercel
            file_bytes = file.read()
            encoded_string = base64.b64encode(file_bytes).decode('utf-8')
            
            # Reconstruct as Data URI
            mime_type = file.mimetype or 'image/jpeg'
            data_uri = f"data:{mime_type};base64,{encoded_string}"
            
            # Return data URI so the frontend saves it directly into the projects document
            return jsonify({'success': True, 'url': data_uri})
            
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/api/admin/messages', methods=['GET'])
@requires_auth
def get_messages():
    """Fetch all contact form submissions."""
    try:
        submissions = list(submissions_col.find().sort('_id', -1))
        # Convert ObjectId to string for frontend
        for msg in submissions:
            msg['_id'] = str(msg['_id'])
        return jsonify(submissions)
    except Exception:
        return jsonify([])


@app.route('/api/admin/messages/<string:msg_id>', methods=['DELETE'])
@requires_auth
def delete_message(msg_id):
    """Delete a specific message by its target ID."""
    try:
        result = submissions_col.delete_one({'_id': ObjectId(msg_id)})
        if result.deleted_count > 0:
            return jsonify({'success': True})
        return jsonify({'error': 'Message not found'}), 404
    except Exception:
        return jsonify({'error': 'Invalid ID'}), 400


@app.route('/api/admin/save', methods=['POST'])
@requires_auth
def api_admin_save():
    """Safely overwrite the projects data in MongoDB."""
    try:
        new_data = request.get_json()
        if not new_data:
            return jsonify({'error': 'No data provided'}), 400

        # Enforce that the identifier matches
        new_data['_id'] = 'config'
        projects_col.replace_one({'_id': 'config'}, new_data, upsert=True)
            
        return jsonify({'success': True, 'message': 'Portfolio updated successfully!'})
    except Exception as e:
        return jsonify({'error': str(e)}), 500

# ─── Main ──────────────────────────────────────────────────────────────────────

if __name__ == '__main__':
    app.run(debug=True, port=8080)
