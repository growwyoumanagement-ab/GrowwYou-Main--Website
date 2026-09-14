/**
 * admin.js - Portfolio Admin Dashboard Controller
 * Fetches JSON, generates UI forms for nested structures, and saves data.
 */

const AdminController = {
    data: null,
    currentTab: 'about',

    async init() {
        this.cacheDOM();
        this.bindEvents();
        await this.loadData();
    },

    cacheDOM() {
        this.navItems = document.querySelectorAll('.nav-item');
        this.formContainer = document.getElementById('form-container');
        this.sectionTitle = document.getElementById('current-section-title');
        this.saveBtn = document.getElementById('save-btn');
        this.addBtn = document.getElementById('add-item-btn');
        this.toast = document.getElementById('status-toast');
    },

    bindEvents() {
        this.navItems.forEach(btn => {
            btn.addEventListener('click', (e) => {
                const tab = e.currentTarget.dataset.tab;
                this.switchTab(tab);
            });
        });

        this.saveBtn.addEventListener('click', () => this.saveData());
        
        this.addBtn.addEventListener('click', () => {
            this.addNewItemToCurrentSection();
        });
    },

    async loadData() {
        try {
            const response = await fetch('/api/projects');
            if (!response.ok) throw new Error('Failed to load data');
            this.data = await response.json();
            this.switchTab(this.currentTab);
        } catch (error) {
            this.showToast('Error loading data: ' + error.message, 'error');
        }
    },

    switchTab(tab) {
        this.currentTab = tab;
        
        // Update Side Nav
        this.navItems.forEach(btn => {
            btn.classList.toggle('active', btn.dataset.tab === tab);
        });

        // Set Title
        const labels = {
            'about': 'About & Hero',
            'genesis_milestones': 'Genesis Milestones',
            'saas': 'SaaS Products',
            'mobile': 'Mobile Apps',
            'websites': 'Websites',
            'portfolios': 'Portfolios',
            'marketing': 'Marketing & SEO',
            'team': 'Our Team',
            'testimonials': 'Client Testimonials',
            'messages': 'Inbox Messages'
        };
        this.sectionTitle.textContent = labels[tab];

        // Toggle "Add Item" button
        if (['about', 'marketing', 'genesis_milestones', 'messages'].includes(tab)) {
            this.addBtn.classList.add('hidden');
        } else {
            this.addBtn.classList.remove('hidden');
        }
        
        // Hide Save button for messages since it's read/delete only
        if (tab === 'messages') {
            this.saveBtn.style.display = 'none';
        } else {
            this.saveBtn.style.display = 'flex';
        }

        this.renderForm();
    },

    renderForm() {
        this.formContainer.innerHTML = '';
        
        if (this.currentTab === 'messages') {
            this.renderMessagesView();
            return;
        }

        const sectionData = this.data[this.currentTab];

        if (this.currentTab === 'about') {
            this.renderAboutForm(sectionData);
        } else if (this.currentTab === 'marketing') {
            this.renderMarketingForm(sectionData);
        } else if (this.currentTab === 'genesis_milestones') {
            this.renderGenesisMilestonesForm(sectionData);
        } else if (Array.isArray(sectionData)) {
            // Arrays: saas, mobile, websites, portfolios, team, testimonials
            if (sectionData.length === 0) {
                this.formContainer.innerHTML = '<p style="color: var(--text-muted)">No items found. Click "Add New Item" to create one.</p>';
            }
            sectionData.forEach((item, index) => {
                if (this.currentTab === 'team') {
                    this.renderTeamCard(item, index);
                } else if (this.currentTab === 'testimonials') {
                    this.renderTestimonialCard(item, index);
                } else {
                    this.renderProjectCard(item, index, this.currentTab);
                }
            });
        }
    },

    // ─── Component Renderers ──────────────────────────────────────────────────

    async renderMessagesView() {
        this.formContainer.innerHTML = '<div class="loader">Loading messages...</div>';
        try {
            const resp = await fetch('/api/admin/messages');
            if(!resp.ok) throw new Error('Failed to fetch messages');
            const messages = await resp.json();
            
            this.formContainer.innerHTML = '';
            if (messages.length === 0) {
                this.formContainer.innerHTML = '<p style="color: var(--text-muted)">Your inbox is currently empty.</p>';
                return;
            }
            
            messages.forEach(msg => {
                const card = document.createElement('div');
                card.className = 'edit-card';
                card.style.position = 'relative';
                
                const header = document.createElement('div');
                header.className = 'edit-card-header';
                
                const titleBlock = document.createElement('div');
                titleBlock.innerHTML = `
                    <h3 style="margin-bottom: 4px; color: var(--cyan)">${msg.name} <span style="font-size: 0.8rem; color: var(--text-muted)">(${msg.email})</span></h3>
                    <p style="font-size: 0.85rem; color: var(--text-muted)">Subject: ${msg.subject || 'No Subject'} &bull; Date: ${new Date(msg.timestamp).toLocaleString()}</p>
                `;
                
                const delBtn = document.createElement('button');
                delBtn.className = 'btn btn-outline';
                delBtn.style.borderColor = 'rgba(239,68,68,0.5)';
                delBtn.style.color = '#ef4444';
                delBtn.textContent = 'Delete';
                delBtn.onclick = async () => {
                    if(confirm('Delete this message?')) {
                        const dr = await fetch('/api/admin/messages/' + msg._id, {method:'DELETE'});
                        if(dr.ok) this.renderMessagesView();
                    }
                };
                
                header.appendChild(titleBlock);
                header.appendChild(delBtn);
                card.appendChild(header);
                
                const body = document.createElement('div');
                body.style.padding = '1rem';
                body.style.background = 'rgba(255,255,255,0.02)';
                body.style.borderRadius = '8px';
                body.style.whiteSpace = 'pre-wrap';
                body.style.color = 'var(--text-primary)';
                body.style.marginTop = '1rem';
                body.textContent = msg.message;
                
                card.appendChild(body);
                this.formContainer.appendChild(card);
            });
            
        } catch(e) {
            this.formContainer.innerHTML = `<p style="color: red">Error: ${e.message}</p>`;
        }
    },

    renderGenesisMilestonesForm(milestones) {
        // Render Genesis Story Text
        const textData = this.data.genesis_text;
        if (textData) {
            const textCard = this.createCard('Genesis Story Text');
            textCard.appendChild(this.createInput('Large Opening Text', 'textarea', textData.large_text, v => textData.large_text = v));
            textCard.appendChild(this.createInput('Middle Paragraph', 'textarea', textData.paragraph_1, v => textData.paragraph_1 = v));
            textCard.appendChild(this.createInput('Closing Paragraph (HTML allowed)', 'textarea', textData.paragraph_2, v => textData.paragraph_2 = v));
            this.formContainer.appendChild(textCard);
        }

        // Render Genesis Milestones Array
        const milestonesCard = this.createCard('Genesis Timeline Milestones');
        const listContainer = document.createElement('div');
        
        const renderList = () => {
            listContainer.innerHTML = '';
            milestones.forEach((ms, i) => {
                const box = document.createElement('div');
                box.className = 'array-container';
                box.style.marginBottom = '16px';
                
                box.appendChild(this.createInput('Milestone Title/Year', 'text', ms.year, v => ms.year = v));
                box.appendChild(this.createInput('Milestone Description', 'text', ms.text, v => ms.text = v));
                
                const delBtn = document.createElement('button');
                delBtn.className = 'btn btn-danger btn-small';
                delBtn.style.marginTop = '8px';
                delBtn.textContent = 'Remove Milestone';
                delBtn.onclick = () => { milestones.splice(i, 1); renderList(); };
                box.appendChild(delBtn);
                
                listContainer.appendChild(box);
            });
            const addBtn = document.createElement('button');
            addBtn.className = 'add-array-item';
            addBtn.innerHTML = '+ Add Milestone';
            addBtn.onclick = () => { milestones.push({year: 'New Milestone', text: 'New Description'}); renderList(); };
            listContainer.appendChild(addBtn);
        };
        renderList();
        milestonesCard.appendChild(listContainer);
        this.formContainer.appendChild(milestonesCard);
    },

    renderAboutForm(about) {
        const card = this.createCard('Basic Information');
        card.appendChild(this.createInput('Name', 'text', about.name, (val) => about.name = val));
        card.appendChild(this.createInput('Title', 'text', about.title, (val) => about.title = val));
        card.appendChild(this.createInput('Tagline', 'text', about.tagline, (val) => about.tagline = val));
        card.appendChild(this.createInput('Bio', 'textarea', about.bio, (val) => about.bio = val));

        const socialCard = this.createCard('Social Links');
        Object.keys(about.social).forEach(key => {
            socialCard.appendChild(this.createInput(key.charAt(0).toUpperCase() + key.slice(1), 'text', about.social[key], (val) => about.social[key] = val));
        });

        this.formContainer.appendChild(card);
        this.formContainer.appendChild(socialCard);
    },

    renderMarketingForm(marketing) {
        // Services String Array
        const svcCard = this.createCard('Marketing Services');
        svcCard.appendChild(this.createStringArrayManager(marketing.services, 'Service'));
        this.formContainer.appendChild(svcCard);

        // Stats Array of Objects
        const statsCard = this.createCard('Statistics / Counters');
        const statsList = document.createElement('div');
        statsList.className = 'array-container';
        
        const renderStats = () => {
            statsList.innerHTML = '';
            marketing.stats.forEach((stat, i) => {
                const row = document.createElement('div');
                row.className = 'array-item';
                row.innerHTML = `
                    <input type="text" class="form-control" placeholder="Label" value="${stat.label}">
                    <input type="number" class="form-control" placeholder="Value" value="${stat.value}">
                    <input type="text" class="form-control" placeholder="Prefix (e.g. $)" value="${stat.prefix || ''}">
                    <input type="text" class="form-control" placeholder="Suffix (e.g. +)" value="${stat.suffix || ''}">
                    <button class="btn btn-danger btn-small" title="Delete">×</button>
                `;
                
                const inputs = row.querySelectorAll('input');
                inputs[0].addEventListener('input', e => stat.label = e.target.value);
                inputs[1].addEventListener('input', e => stat.value = Number(e.target.value));
                inputs[2].addEventListener('input', e => stat.prefix = e.target.value);
                inputs[3].addEventListener('input', e => stat.suffix = e.target.value);
                
                row.querySelector('button').addEventListener('click', () => {
                    marketing.stats.splice(i, 1);
                    renderStats();
                });
                statsList.appendChild(row);
            });
            const addBtn = document.createElement('button');
            addBtn.className = 'add-array-item';
            addBtn.innerHTML = '+ Add Stat';
            addBtn.onclick = () => { marketing.stats.push({label:'', value:0, suffix:''}); renderStats(); };
            statsList.appendChild(addBtn);
        };
        renderStats();
        statsCard.appendChild(statsList);
        this.formContainer.appendChild(statsCard);

        // Case Studies Array
        const casesCard = this.createCard('Case Studies');
        const casesList = document.createElement('div');
        
        const renderCases = () => {
            casesList.innerHTML = '';
            marketing.case_studies.forEach((cs, i) => {
                const box = document.createElement('div');
                box.className = 'array-container';
                box.style.marginBottom = '16px';
                
                box.appendChild(this.createInput('Title', 'text', cs.title, v => cs.title = v));
                box.appendChild(this.createInput('Result / Metric', 'text', cs.result, v => cs.result = v));
                box.appendChild(this.createInput('Description', 'textarea', cs.description, v => cs.description = v));
                
                const delBtn = document.createElement('button');
                delBtn.className = 'btn btn-danger btn-small';
                delBtn.style.marginTop = '8px';
                delBtn.textContent = 'Remove Case Study';
                delBtn.onclick = () => { marketing.case_studies.splice(i, 1); renderCases(); };
                box.appendChild(delBtn);
                
                casesList.appendChild(box);
            });
            const addBtn = document.createElement('button');
            addBtn.className = 'add-array-item';
            addBtn.innerHTML = '+ Add Case Study';
            addBtn.onclick = () => { marketing.case_studies.push({title:'', result:'', description:''}); renderCases(); };
            casesList.appendChild(addBtn);
        };
        renderCases();
        casesCard.appendChild(casesList);
        this.formContainer.appendChild(casesCard);
    },

    renderProjectCard(item, index, sectionKey) {
        const card = this.createCard(item.title || `Unnamed Project (ID: ${item.id})`);
        
        // Header Delete Button
        const delBtn = document.createElement('button');
        delBtn.className = 'btn btn-danger btn-small';
        delBtn.textContent = 'Delete Card';
        delBtn.onclick = () => {
            if(confirm('Are you sure you want to delete this specific project?')) {
                this.data[sectionKey].splice(index, 1);
                this.renderForm();
            }
        };
        card.querySelector('.item-header').appendChild(delBtn);

        // Standard Fields
        card.appendChild(this.createInput('UUID / ID', 'text', item.id, (val) => item.id = val));
        card.appendChild(this.createInput('Title', 'text', item.title, (val) => {
            item.title = val;
            card.querySelector('h3').textContent = val;
        }));
        card.appendChild(this.createInput('Description', 'textarea', item.description, (val) => item.description = val));
        card.appendChild(this.createInput('Project URL', 'text', item.url, (val) => item.url = val));

        // Images Array
        const imagesLabel = document.createElement('label');
        imagesLabel.textContent = 'Project Images (URLs or paths like /static/images/...)';
        imagesLabel.style.display = 'block';
        imagesLabel.style.marginBottom = '8px';
        imagesLabel.style.color = 'var(--text-muted)';
        card.appendChild(imagesLabel);
        
        // Handle migration edge case in live admin interface
        if (!item.images) {
            item.images = item.image ? [item.image] : [];
            delete item.image;
        }
        card.appendChild(this.createImageUploadManager(item.images));

        // Category specific optional fields
        if (typeof item.metrics !== 'undefined') {
            card.appendChild(this.createInput('Metrics', 'text', item.metrics, (val) => item.metrics = val));
        }
        if (typeof item.platform !== 'undefined') {
            card.appendChild(this.createInput('Platform', 'text', item.platform, (val) => item.platform = val));
        }
        if (typeof item.downloads !== 'undefined') {
            card.appendChild(this.createInput('Downloads', 'text', item.downloads, (val) => item.downloads = val));
        }
        
        // Tech Stack Array
        const stackLabel = document.createElement('label');
        stackLabel.textContent = 'Tech Stack';
        stackLabel.style.display = 'block';
        stackLabel.style.marginBottom = '8px';
        stackLabel.style.color = 'var(--text-muted)';
        card.appendChild(stackLabel);
        
        card.appendChild(this.createStringArrayManager(item.tech_stack, 'Technology'));

        this.formContainer.appendChild(card);
    },

    renderTeamCard(item, index) {
        const card = this.createCard(item.name || `Unnamed Member (ID: ${item.id})`);
        
        // Header Delete Button
        const delBtn = document.createElement('button');
        delBtn.className = 'btn btn-danger btn-small';
        delBtn.textContent = 'Remove Member';
        delBtn.onclick = () => {
            if(confirm('Are you sure you want to remove this team member?')) {
                this.data['team'].splice(index, 1);
                this.renderForm();
            }
        };
        card.querySelector('.item-header').appendChild(delBtn);

        // Standard Fields
        card.appendChild(this.createInput('UUID / ID', 'text', item.id, (val) => item.id = val));
        card.appendChild(this.createInput('Name', 'text', item.name, (val) => {
            item.name = val;
            card.querySelector('h3').textContent = val;
        }));
        card.appendChild(this.createInput('Role / Title', 'text', item.role, (val) => item.role = val));
        card.appendChild(this.createInput('Bio', 'textarea', item.bio, (val) => item.bio = val));

        // Images Array (Used for Avatar / Alternate poses)
        const imagesLabel = document.createElement('label');
        imagesLabel.textContent = 'Avatar Images (First image is primary)';
        imagesLabel.style.display = 'block';
        imagesLabel.style.marginBottom = '8px';
        imagesLabel.style.color = 'var(--text-muted)';
        card.appendChild(imagesLabel);
        
        if (!item.images) item.images = [];
        card.appendChild(this.createImageUploadManager(item.images));

        this.formContainer.appendChild(card);
    },

    renderTestimonialCard(item, index) {
        const card = this.createCard(item.name || `Unnamed Client`);
        
        // Header Delete Button
        const delBtn = document.createElement('button');
        delBtn.className = 'btn btn-danger btn-small';
        delBtn.textContent = 'Remove Testimonial';
        delBtn.onclick = () => {
            if(confirm('Are you sure you want to remove this testimonial?')) {
                this.data['testimonials'].splice(index, 1);
                this.renderForm();
            }
        };
        card.querySelector('.item-header').appendChild(delBtn);

        // Standard Fields
        card.appendChild(this.createInput('UUID / ID', 'text', item.id, (val) => item.id = val));
        card.appendChild(this.createInput('Client Name', 'text', item.name, (val) => {
            item.name = val;
            card.querySelector('h3').textContent = val;
        }));
        card.appendChild(this.createInput('Company / Role', 'text', item.role, (val) => item.role = val));
        card.appendChild(this.createInput('Star Rating (1-5)', 'number', item.rating, (val) => item.rating = Number(val)));
        card.appendChild(this.createInput('Review / Quote', 'textarea', item.review, (val) => item.review = val));

        // Images Array (Used for Avatar / Alternate poses)
        const imagesLabel = document.createElement('label');
        imagesLabel.textContent = 'Client Avatar (Optional)';
        imagesLabel.style.display = 'block';
        imagesLabel.style.marginBottom = '8px';
        imagesLabel.style.color = 'var(--text-muted)';
        card.appendChild(imagesLabel);
        
        if (!item.images) item.images = [];
        card.appendChild(this.createImageUploadManager(item.images));

        this.formContainer.appendChild(card);
    },

    addNewItemToCurrentSection() {
        const arr = this.data[this.currentTab];
        if (!Array.isArray(arr)) return;

        const newItem = {
            id: this.currentTab + '-' + Date.now(),
            title: 'New ' + this.currentTab,
            description: '',
            url: '#',
            images: ['/static/images/placeholder.jpg'],
            tech_stack: []
        };
        
        // Add specific keys based on tab
        if(this.currentTab === 'saas') newItem.metrics = '';
        if(this.currentTab === 'mobile') { newItem.platform = 'iOS & Android'; newItem.downloads = ''; }
        if(this.currentTab === 'team') {
            newItem.name = 'New Member';
            newItem.role = 'Role Title';
            newItem.bio = '';
            delete newItem.title;
            delete newItem.description;
            delete newItem.url;
            delete newItem.tech_stack;
        }
        if(this.currentTab === 'testimonials') {
            newItem.name = 'Client Name';
            newItem.role = 'CEO / Company';
            newItem.review = '';
            newItem.rating = 5;
            delete newItem.title;
            delete newItem.description;
            delete newItem.url;
            delete newItem.tech_stack;
        }

        arr.unshift(newItem);
        this.renderForm();
    },

    // ─── UI Factory Helpers ───────────────────────────────────────────────────

    createCard(title) {
        const card = document.createElement('div');
        card.className = 'item-card';
        card.innerHTML = `<div class="item-header"><h3>${title}</h3></div>`;
        return card;
    },

    createInput(labelText, type, value, onChange) {
        const group = document.createElement('div');
        group.className = 'form-group';
        
        const label = document.createElement('label');
        label.textContent = labelText;
        group.appendChild(label);

        const input = document.createElement(type === 'textarea' ? 'textarea' : 'input');
        input.className = 'form-control';
        if (type !== 'textarea') input.type = type;
        input.value = value || '';
        if(type === 'textarea') input.rows = 3;
        
        input.addEventListener('input', (e) => onChange(e.target.value));
        group.appendChild(input);
        
        return group;
    },

    createStringArrayManager(stringArray, placeholder) {
        const container = document.createElement('div');
        container.className = 'array-container';

        const renderItems = () => {
            container.innerHTML = '';
            stringArray.forEach((str, i) => {
                const row = document.createElement('div');
                row.className = 'array-item';
                
                const inp = document.createElement('input');
                inp.className = 'form-control';
                inp.value = str;
                inp.addEventListener('input', e => stringArray[i] = e.target.value);
                
                const btn = document.createElement('button');
                btn.className = 'btn btn-danger btn-small';
                btn.textContent = '×';
                btn.onclick = () => { stringArray.splice(i, 1); renderItems(); };
                
                row.appendChild(inp);
                row.appendChild(btn);
                container.appendChild(row);
            });

            const addBtn = document.createElement('button');
            addBtn.className = 'add-array-item';
            addBtn.innerHTML = `+ Add ${placeholder}`;
            addBtn.onclick = () => { stringArray.push(''); renderItems(); };
            container.appendChild(addBtn);
        };
        renderItems();
        return container;
    },

    createImageUploadManager(imagesArray) {
        const container = document.createElement('div');
        container.className = 'array-container';

        const renderItems = () => {
            container.innerHTML = '';
            
            // Image Preview Grid
            const grid = document.createElement('div');
            grid.style.display = 'grid';
            grid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(120px, 1fr))';
            grid.style.gap = '10px';
            grid.style.marginBottom = '16px';
            
            imagesArray.forEach((imgUrl, i) => {
                const imgWrap = document.createElement('div');
                imgWrap.style.position = 'relative';
                
                const img = document.createElement('img');
                img.src = imgUrl;
                img.style.width = '100%';
                img.style.height = '120px';
                img.style.objectFit = 'cover';
                img.style.borderRadius = '8px';
                img.style.border = '1px solid rgba(255,255,255,0.1)';
                
                const delBtn = document.createElement('button');
                delBtn.className = 'btn btn-danger btn-small';
                delBtn.textContent = '×';
                delBtn.style.position = 'absolute';
                delBtn.style.top = '4px';
                delBtn.style.right = '4px';
                delBtn.style.padding = '0';
                delBtn.style.width = '24px';
                delBtn.style.height = '24px';
                delBtn.onclick = () => { imagesArray.splice(i, 1); renderItems(); };
                
                imgWrap.appendChild(img);
                imgWrap.appendChild(delBtn);
                grid.appendChild(imgWrap);
            });
            container.appendChild(grid);

            // Upload Input
            const uploadWrap = document.createElement('div');
            uploadWrap.style.display = 'flex';
            uploadWrap.style.gap = '10px';
            uploadWrap.style.alignItems = 'center';
            
            const fileInput = document.createElement('input');
            fileInput.type = 'file';
            fileInput.accept = 'image/*';
            fileInput.multiple = true;
            fileInput.className = 'form-control';
            fileInput.style.padding = '8px';
            
            const statusText = document.createElement('span');
            statusText.style.color = 'var(--text-muted)';
            statusText.style.fontSize = '0.85rem';
            
            fileInput.addEventListener('change', async (e) => {
                const files = e.target.files;
                if (!files.length) return;
                
                statusText.textContent = 'Uploading...';
                fileInput.disabled = true;
                
                for (const file of files) {
                    const formData = new FormData();
                    formData.append('image', file);
                    
                    try {
                        const res = await fetch('/api/admin/upload-image', {
                            method: 'POST',
                            body: formData
                        });
                        const data = await res.json();
                        
                        if (res.ok && data.success) {
                            imagesArray.push(data.url);
                        } else {
                            alert('Upload failed: ' + (data.error || 'Unknown error'));
                        }
                    } catch (err) {
                        alert('Upload error: ' + err.message);
                    }
                }
                
                statusText.textContent = '';
                fileInput.disabled = false;
                fileInput.value = ''; // trigger reset
                renderItems();
            });
            
            uploadWrap.appendChild(fileInput);
            uploadWrap.appendChild(statusText);
            container.appendChild(uploadWrap);
        };
        
        renderItems();
        return container;
    },

    // ─── API Save ─────────────────────────────────────────────────────────────

    async saveData() {
        this.saveBtn.disabled = true;
        this.saveBtn.innerHTML = 'Saving...';
        
        try {
            const response = await fetch('/api/admin/save', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(this.data)
            });
            
            const result = await response.json();
            if(!response.ok) throw new Error(result.error || 'Server error');
            
            this.showToast(result.message || 'Saved successfully!', 'success');
        } catch(err) {
            this.showToast(err.message, 'error');
        } finally {
            this.saveBtn.disabled = false;
            this.saveBtn.innerHTML = `
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                    <polyline points="17 21 17 13 7 13 7 21"></polyline>
                    <polyline points="7 3 7 8 15 8"></polyline>
                </svg> Save Changes`;
        }
    },

    showToast(msg, type) {
        this.toast.textContent = msg;
        this.toast.className = 'toast ' + type;
        this.toast.style.display = 'block';
        
        setTimeout(() => {
            this.toast.style.display = 'none';
        }, 4000);
    }
};

document.addEventListener('DOMContentLoaded', () => {
    AdminController.init();
});
