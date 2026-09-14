$files = @(
    "services\shopify-website.html",
    "services\wordpress-website.html",
    "services\landing-pages.html",
    "services\web-applications.html",
    "services\erp-crm.html",
    "services\ios-app-development.html",
    "services\android-app-development.html",
    "services\hybrid-apps.html"
)

foreach ($file in $files) {
    $content = Get-Content $file -Raw
    
    # Replace parent directory references
    $content = $content -replace '\.\.\/index\.html', '/'
    $content = $content -replace '\.\.\/about\.html', '/about'
    $content = $content -replace '\.\.\/services\.html', '/services'
    $content = $content -replace '\.\.\/contact\.html', '/contact'
    
    # Replace service links with href attribute
    $content = $content -replace 'href="seo-sem\.html"', 'href="/services/seo-sem"'
    $content = $content -replace 'href="social-media-marketing\.html"', 'href="/services/social-media-marketing"'
    $content = $content -replace 'href="google-meta-ads\.html"', 'href="/services/google-meta-ads"'
    $content = $content -replace 'href="branding-strategy\.html"', 'href="/services/branding-strategy"'
    $content = $content -replace 'href="custom-code-website\.html"', 'href="/services/custom-code-website"'
    $content = $content -replace 'href="wordpress-website\.html"', 'href="/services/wordpress-website"'
    $content = $content -replace 'href="shopify-website\.html"', 'href="/services/shopify-website"'
    $content = $content -replace 'href="landing-pages\.html"', 'href="/services/landing-pages"'
    $content = $content -replace 'href="web-applications\.html"', 'href="/services/web-applications"'
    $content = $content -replace 'href="erp-crm\.html"', 'href="/services/erp-crm"'
    $content = $content -replace 'href="ios-app-development\.html"', 'href="/services/ios-app-development"'
    $content = $content -replace 'href="android-app-development\.html"', 'href="/services/android-app-development"'
    $content = $content -replace 'href="hybrid-apps\.html"', 'href="/services/hybrid-apps"'
    
    Set-Content -Path $file -Value $content
    Write-Host "Updated: $file"
}

Write-Host "`nAll files updated successfully!"
