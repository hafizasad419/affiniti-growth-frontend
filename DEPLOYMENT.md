# Deployment Guide - Affiniti Growth Solutions Website

## 🚀 Quick Deployment Options

### Option 1: Static Hosting (Recommended)

The website is built as a static React application and can be deployed to any static hosting provider.

#### Netlify (Easiest)
1. Drag and drop the `dist/` folder to Netlify
2. Or connect your Git repository for automatic deployments
3. Set build command: `pnpm run build`
4. Set publish directory: `dist`

#### Vercel
1. Install Vercel CLI: `npm i -g vercel`
2. Run `vercel` in the project directory
3. Follow the prompts
4. Automatic deployments on Git push

#### AWS S3 + CloudFront
1. Upload `dist/` contents to S3 bucket
2. Enable static website hosting
3. Configure CloudFront for CDN
4. Set up custom domain if needed

### Option 2: Traditional Web Hosting

Upload the contents of the `dist/` folder to your web server's public directory (usually `public_html/` or `www/`).

## 🔧 Build Process

### Development
```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev
# Opens at http://localhost:5173
```

### Production Build
```bash
# Create optimized production build
pnpm run build

# Preview production build locally
pnpm run preview
```

## 📁 File Structure After Build

```
dist/
├── index.html                 # Main HTML file
├── assets/
│   ├── index-[hash].js       # Bundled JavaScript
│   ├── index-[hash].css      # Bundled CSS
│   └── *.png                 # Optimized images
└── [other static files]
```

## 🌐 Domain Configuration

### DNS Settings
Point your domain to your hosting provider:
- **A Record:** Point to hosting provider's IP
- **CNAME:** Point to hosting provider's domain
- **Cloudflare:** Use their DNS for additional optimization

### SSL Certificate
Most modern hosting providers offer free SSL certificates:
- Netlify: Automatic Let's Encrypt
- Vercel: Automatic SSL
- Cloudflare: Free SSL option

## 📧 Email Configuration

### Application Form Emails
The application form sends emails to `nate@affinitisolutions.com`. Ensure:
1. Email server is configured to receive from the domain
2. Check spam filters for form submissions
3. Consider using a service like EmailJS for reliability

### Contact Form Integration
If you need server-side email processing:
1. Set up a simple Node.js/Express server
2. Use services like SendGrid, Mailgun, or AWS SES
3. Deploy the API separately (Vercel Functions, Netlify Functions, etc.)

## 🔒 Security Considerations

### Static Site Security
- No server-side vulnerabilities (static files only)
- Use HTTPS everywhere (free with most hosting providers)
- Consider adding security headers via hosting provider

### Form Security
- Client-side validation only (for UX)
- Server-side validation needed for production email processing
- Consider adding CAPTCHA for spam protection

## 📊 Analytics & Monitoring

### Google Analytics
Add to `index.html` in the `dist/` folder or modify the build process:
```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### Performance Monitoring
- Use hosting provider's built-in analytics
- Consider tools like Lighthouse for performance audits
- Monitor Core Web Vitals for SEO

## 🔄 Continuous Deployment

### Git-based Deployment
1. Push code to GitHub/GitLab
2. Connect repository to hosting provider
3. Automatic builds on push to main branch
4. Set build command: `pnpm run build`
5. Set output directory: `dist`

### Environment Variables
For different environments, you can set:
- `VITE_API_URL` for API endpoints
- `VITE_GA_ID` for Google Analytics
- `VITE_ENVIRONMENT` for environment-specific features

## 🐛 Troubleshooting

### Common Issues

#### Build Fails
- Check Node.js version (18+ required)
- Clear node_modules: `rm -rf node_modules && pnpm install`
- Check for TypeScript errors if any

#### Routing Issues (404 on refresh)
Configure your hosting provider for SPA routing:

**Netlify:** Create `_redirects` file in `public/`:
```
/*    /index.html   200
```

**Vercel:** Create `vercel.json`:
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

#### Images Not Loading
- Ensure images are in `src/assets/` directory
- Check import paths in components
- Verify build includes all assets

### Performance Optimization

#### Image Optimization
- Images are already optimized for web
- Consider WebP format for better compression
- Use lazy loading for below-the-fold images

#### Bundle Size
- Current bundle is optimized (~392KB JS)
- Consider code splitting for larger applications
- Use Vite's built-in optimizations

## 📞 Support

### Technical Issues
- Check browser console for JavaScript errors
- Verify all dependencies are installed
- Ensure build process completes successfully

### Business Configuration
- Update contact information in components
- Modify Calendly links as needed
- Adjust application form email destination

---

**Ready to deploy your professional React website!**

