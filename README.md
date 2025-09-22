# Passivhaus

A modern, high-performance website built with Gatsby and headless WordPress CMS, delivering educational content about passive building construction and energy-efficient architecture.

## 🚀 Features

- **Static Site Generation**: Lightning-fast performance with Gatsby's SSG approach
- **Headless CMS Integration**: WordPress as headless CMS with GraphQL API
- **Automated Deployments**: GitHub Actions CI/CD pipeline triggered by content updates
- **SEO Optimized**: Built-in sitemap generation and meta tag management
- **Responsive Design**: Mobile-first approach with modern CSS architecture
- **Progressive Images**: Optimized image loading with Gatsby Image plugin
- **Type Safety**: Full TypeScript implementation for robust development
- **Content Management**: Dynamic blog posts, news, and educational content
- **Analytics Integration**: Google Tag Manager for comprehensive tracking
- **Cookie Consent**: GDPR-compliant cookie management
- **Security Monitoring**: Snyk vulnerability scanning and dependency monitoring

## 🛠️ Tech Stack

### Frontend

- **Gatsby 5.15.0** - React-based static site generator
- **React 18.2.0** - Modern React with latest features
- **TypeScript 5.9.2** - Type-safe development
- **Sass 1.72.0** - Advanced CSS preprocessing
- **React Helmet** - SEO and meta tag management
- **React Icons 5.5.0** - Comprehensive icon library

### Content Management

- **WordPress (Headless)** - Content management system
- **GraphQL** - Efficient data fetching at build time
- **gatsby-source-wordpress** - WordPress integration plugin

### Build Tools & Optimization

- **Gatsby Image** - Optimized image processing and lazy loading
- **Gatsby Sharp** - Image transformation and optimization
- **ESLint** - Code linting with TypeScript support
- **Prettier** - Code formatting
- **Gatsby Transformer Remark** - Markdown processing
- **Snyk** - Security vulnerability scanning and monitoring

### Deployment & Analytics

- **GitHub Actions** - Automated CI/CD pipeline
- **Google Tag Manager** - Analytics and tracking
- **Sitemap Generation** - Automatic XML sitemap creation
- **Cookie Consent** - GDPR compliance

## 📦 Installation

1. Clone the repository:

```bash
git clone https://github.com/wszczawinski/Passivhaus.git
cd Passivhaus
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run develop
```

## 🚀 Deployment Pipeline

The application uses an automated deployment pipeline:

1. **Content Updates**: WordPress webhooks trigger builds when content changes
2. **Code Changes**: GitHub Actions automatically build and deploy on push
3. **Security Scanning**: Snyk monitors dependencies for vulnerabilities
4. **Static Generation**: Gatsby generates optimized static files
5. **Performance**: Pre-built pages ensure fast loading times

### Build Process

- Static site generation with Gatsby
- Image optimization and responsive image generation
- CSS optimization and minification
- JavaScript bundling and code splitting
- Sitemap and SEO metadata generation
- Security vulnerability scanning with Snyk
