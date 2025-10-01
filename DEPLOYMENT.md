# Deployment Guide - ClownCoins Casino Landing Page

## Quick Start Checklist

Before deploying, ensure you have:

- [ ] Replaced placeholder images with actual assets
- [ ] Configured Typeform URL in `scripts/main.js`
- [ ] Set up analytics tracking (optional)
- [ ] Updated legal content with actual dates and contact info
- [ ] Tested the site locally

## Deployment Options

### 1. Netlify (Recommended)

1. **Connect Repository**
   - Go to [netlify.com](https://netlify.com)
   - Connect your Git repository or drag & drop the folder

2. **Configure Build Settings**
   - Build command: (leave empty for static site)
   - Publish directory: `clowncoinscasino-landing`

3. **Custom Domain** (Optional)
   - Add your custom domain in Site Settings
   - Configure DNS records

4. **Environment Variables** (if needed)
   - Add any API keys or configuration variables

### 2. Vercel

1. **Install Vercel CLI**
   ```bash
   npm i -g vercel
   ```

2. **Deploy**
   ```bash
   cd clowncoinscasino-landing
   vercel
   ```

3. **Follow prompts** to configure the deployment

### 3. GitHub Pages

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin YOUR_REPO_URL
   git push -u origin main
   ```

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Scroll to Pages section
   - Select source branch (usually `main`)
   - Set folder to root or docs

### 4. AWS S3 + CloudFront

1. **Create S3 Bucket**
   - Create bucket with public read access
   - Upload all files to bucket

2. **Configure CloudFront**
   - Create CloudFront distribution
   - Set S3 bucket as origin
   - Configure custom domain and SSL

### 5. Firebase Hosting

1. **Install Firebase CLI**
   ```bash
   npm install -g firebase-tools
   ```

2. **Initialize Project**
   ```bash
   firebase init hosting
   ```

3. **Deploy**
   ```bash
   firebase deploy
   ```

## Pre-Deployment Optimization

### Image Optimization

```bash
# Install image optimization tools
npm install -g imagemin-cli imagemin-pngquant imagemin-mozjpeg

# Optimize images
imagemin assets/images/*.png --out-dir=assets/images --plugin=pngquant
imagemin assets/images/*.jpg --out-dir=assets/images --plugin=mozjpeg
```

### CSS/JS Minification

```bash
# Install minification tools
npm install -g clean-css-cli uglify-js

# Minify CSS
cleancss -o styles/base.min.css styles/base.css
cleancss -o styles/layout.min.css styles/layout.css
cleancss -o styles/components.min.css styles/components.css

# Minify JavaScript
uglifyjs scripts/main.js -o scripts/main.min.js
```

### Update HTML for Production

Update the HTML file to use minified versions:

```html
<!-- Replace in index.html -->
<link rel="stylesheet" href="./styles/base.min.css">
<link rel="stylesheet" href="./styles/layout.min.css">
<link rel="stylesheet" href="./styles/components.min.css">
<script defer src="./scripts/main.min.js"></script>
```

## Post-Deployment Tasks

### 1. SSL Certificate
- Most hosting providers offer free SSL certificates
- Ensure HTTPS is enabled and working

### 2. Analytics Setup
- Configure Google Analytics or your preferred analytics platform
- Test that events are being tracked correctly

### 3. Performance Testing
- Run Lighthouse audit
- Test on multiple devices and browsers
- Check Core Web Vitals scores

### 4. SEO Verification
- Submit sitemap to Google Search Console
- Test Open Graph tags with Facebook Debugger
- Verify Twitter Card tags

### 5. Monitoring
- Set up uptime monitoring
- Monitor analytics for user behavior
- Track conversion rates

## Environment-Specific Configuration

### Development
```javascript
// In scripts/main.js
const CONFIG = {
  environment: 'development',
  typeformUrl: 'https://form.typeform.com/to/DEV_FORM_ID',
  analytics: {
    trackingId: null // Disabled in development
  }
};
```

### Production
```javascript
// In scripts/main.js
const CONFIG = {
  environment: 'production',
  typeformUrl: 'https://form.typeform.com/to/PROD_FORM_ID',
  analytics: {
    trackingId: 'GA_MEASUREMENT_ID'
  }
};
```

## Security Considerations

### 1. Content Security Policy
Add to HTML head:
```html
<meta http-equiv="Content-Security-Policy" content="default-src 'self'; script-src 'self' 'unsafe-inline' https://embed.typeform.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https:;">
```

### 2. HTTPS Enforcement
Configure your hosting provider to:
- Redirect HTTP to HTTPS
- Use HSTS headers

### 3. Form Security
- Use Typeform's built-in security features
- Consider adding CAPTCHA if needed
- Validate all form submissions

## Monitoring and Maintenance

### Regular Tasks
- [ ] Monitor site uptime
- [ ] Check analytics for unusual patterns
- [ ] Update dependencies (if using any)
- [ ] Review and update legal content
- [ ] Test contact forms and CTAs

### Performance Monitoring
- [ ] Run monthly Lighthouse audits
- [ ] Monitor Core Web Vitals
- [ ] Check page load times
- [ ] Review mobile performance

### Content Updates
- [ ] Update launch dates as needed
- [ ] Refresh hero content periodically
- [ ] Keep legal pages current
- [ ] Update contact information

## Troubleshooting

### Common Issues

**Images not loading**
- Check file paths and names
- Ensure images are optimized for web
- Verify file permissions

**Typeform not working**
- Check embed URL is correct
- Verify Typeform is published
- Test in incognito mode

**Analytics not tracking**
- Verify tracking ID is correct
- Check browser console for errors
- Test with Google Analytics Debugger

**Mobile issues**
- Test on actual devices
- Check viewport meta tag
- Verify responsive breakpoints

## Support

For deployment issues:
- Check hosting provider documentation
- Review browser console for errors
- Test locally first
- Contact: contact@clowncoinscasino.com

---

**Note**: Always test thoroughly in a staging environment before deploying to production.
