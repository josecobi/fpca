# Fells Prospect Community - Nonprofit Website Demo

A complete, production-ready nonprofit organization website built with Astro and PageCMS. This demo showcases how non-technical users can easily manage content through an intuitive CMS interface.

## 🎯 Project Overview

This website serves as a demonstration for nonprofit organizations evaluating whether they can manage their website content independently using PageCMS. It includes all essential pages and features needed for a modern nonprofit website.

### Key Features

- ✅ **Fully Responsive Design** - Mobile-first approach with Tailwind CSS
- ✅ **Content Management** - PageCMS integration for easy content editing
- ✅ **Blog System** - Posts with tags, filtering, and featured content
- ✅ **Events Calendar** - Upcoming and past events with registration links
- ✅ **Team Directory** - Staff and board member profiles
- ✅ **Donation Pages** - Multiple giving levels and transparency
- ✅ **Volunteer Portal** - Opportunities and application forms
- ✅ **Newsletter Signup** - Email subscription forms
- ✅ **SEO Optimized** - Meta tags, structured data, and performance-focused
- ✅ **100/100 Lighthouse Ready** - Optimized for top performance scores

## 📁 Project Structure

```
nonprofit-demo/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.astro     # Navigation header
│   │   ├── Footer.astro     # Site footer
│   │   ├── BlogCard.astro   # Blog post card
│   │   ├── EventCard.astro  # Event card
│   │   ├── TeamMember.astro # Team member card
│   │   ├── NewsletterForm.astro
│   │   └── Button.astro     # CTA button component
│   ├── content/             # Content collections (managed via PageCMS)
│   │   ├── config.ts        # Content schema definitions
│   │   ├── blog/            # Blog posts (MDX)
│   │   ├── events/          # Events (MDX)
│   │   └── team/            # Team members (MDX)
│   ├── layouts/
│   │   └── Layout.astro     # Main page layout
│   ├── pages/               # Page routes
│   │   ├── index.astro      # Homepage
│   │   ├── about.astro      # About page
│   │   ├── blog/            # Blog listing & posts
│   │   ├── events/          # Events listing & details
│   │   ├── team.astro       # Team page
│   │   ├── donate.astro     # Donation page
│   │   ├── membership.astro # Membership page
│   │   ├── newsletter.astro # Newsletter signup
│   │   ├── contact.astro    # Contact page
│   │   └── volunteer.astro  # Volunteer opportunities
│   └── styles/
│       └── global.css       # Global styles with Tailwind
├── public/
│   ├── favicon.svg
│   └── images/              # Static images
├── .pages.yml              # PageCMS configuration
├── astro.config.mjs        # Astro configuration
├── tailwind.config.mjs     # Tailwind CSS config
└── package.json
```

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd PageCMS-Demo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:4321`

### Available Commands

| Command | Action |
|---------|--------|
| `npm install` | Install dependencies |
| `npm run dev` | Start dev server at `localhost:4321` |
| `npm run build` | Build production site to `./dist/` |
| `npm run preview` | Preview production build locally |
| `npm run astro` | Run Astro CLI commands |

## 📝 Content Management with PageCMS

### What is PageCMS?

PageCMS provides a user-friendly interface for managing website content without requiring technical knowledge. It's perfect for nonprofit staff who need to:

- Create and edit blog posts
- Add and update events
- Manage team member profiles
- Update contact information

### Managing Content

Content is managed through three collections:

#### 1. Blog Posts (`src/content/blog/`)

Create and edit blog posts with:
- Title and description
- Publish date and author
- Featured images
- Tags for categorization
- Rich text content (Markdown/MDX)
- Featured post designation

#### 2. Events (`src/content/events/`)

Manage events with:
- Event title and description
- Date, time, and location
- Featured images
- Registration links
- Past/upcoming status
- Detailed event information

#### 3. Team Members (`src/content/team/`)

Add team profiles with:
- Name and role
- Short bio and profile photo
- Contact information (email)
- Display order
- Extended biography

### PageCMS Configuration

The `.pages.yml` file contains the complete PageCMS configuration. This file defines:
- Content collection structures
- Field types and validation
- Required vs optional fields
- Widget types for editing

## 🎨 Customization Guide

### Branding & Colors

Update the color scheme in your Tailwind configuration or by modifying the classes:

- **Primary Color**: Currently `blue-600` - used for CTAs, links, headers
- **Secondary Color**: Currently `orange-500` - used for accent CTAs
- **Neutral Colors**: Gray scale for text and backgrounds

### Organization Information

Update organization-specific content in:

1. **Footer Component** (`src/components/Footer.astro`)
   - Organization name
   - Address and contact info
   - Social media links
   - Tax ID number

2. **Homepage** (`src/pages/index.astro`)
   - Mission statement
   - Impact statistics
   - Hero text and CTAs

3. **About Page** (`src/pages/about.astro`)
   - Organization history
   - Mission and vision
   - Values and milestones

### Form Integrations

This demo uses placeholder forms. Integrate with your preferred service:

#### Contact Form
- **Current**: Formspree placeholder
- **Alternatives**: Netlify Forms, Google Forms, Typeform
- **Update**: `src/pages/contact.astro` (line with `action="https://formspree.io/..."`)

#### Newsletter Signup
- **Current**: Formspree placeholder
- **Alternatives**: Mailchimp, ConvertKit, SendGrid
- **Update**: `src/components/NewsletterForm.astro`

#### Donation Widget
- **Current**: Placeholder widget area
- **Alternatives**: Stripe, PayPal, Donorbox, Give WP
- **Update**: `src/pages/donate.astro` (donation widget section)

### Images

Replace placeholder images with your own:

1. **Blog Post Images**: Update `image` field in blog post frontmatter
2. **Event Images**: Update `image` field in event frontmatter
3. **Team Photos**: Update `image` field in team member frontmatter
4. **Logo**: Replace in `src/components/Header.astro`

## 🚀 Deployment

### Deploy to Netlify

1. **Push to GitHub**
   ```bash
   git add .
   git commit -m "Initial setup"
   git push
   ```

2. **Connect to Netlify**
   - Go to [Netlify](https://netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Connect your Git repository
   - Netlify will auto-detect Astro settings

3. **Build Settings** (auto-configured)
   - Build command: `npm run build`
   - Publish directory: `dist`

4. **Deploy**
   - Click "Deploy site"
   - Your site will be live in minutes!

### Deploy to Vercel

1. **Push to GitHub** (same as above)

2. **Connect to Vercel**
   - Go to [Vercel](https://vercel.com)
   - Click "Add New Project"
   - Import your Git repository

3. **Configure** (auto-detected)
   - Framework: Astro
   - Build command: `npm run build`
   - Output directory: `dist`

4. **Deploy**
   - Click "Deploy"
   - Done!

### Other Deployment Options

- **GitHub Pages**: See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/github/)
- **Cloudflare Pages**: See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/cloudflare/)
- **AWS Amplify**: See [Astro deployment docs](https://docs.astro.build/en/guides/deploy/aws/)



 ### Accessing PageCMS

  ## PageCMS is accessed through their web platform, not directly on your Netlify site:

  1. Go to https://pagescms.org
  2. Sign in with GitHub
    - Click "Sign in with GitHub"
    - Authorize PagesCMS to access your repositories
  3. Select your repository
    - Choose your nonprofit-demo repository (or whatever you named it)
    - PagesCMS will detect the .pages.yml configuration file
  4. Start editing content
    - You'll see three content collections:
        - Blog Posts - Create/edit blog posts
      - Events - Manage events
      - Team Members - Update team profiles
      - Media - Upload images to public/images

  ## How it works

  PageCMS connects directly to your GitHub repository and commits changes when you save content. Since your Netlify site is connected to your GitHub repo:

  1. You edit content in PagesCMS
  2. PagesCMS commits the changes to GitHub
  3. Netlify detects the commit and automatically rebuilds/deploys your site
  4. Your changes go live in a few minutes

  No additional setup is needed on Netlify - it all works through GitHub integration!
  
## 📊 Performance Optimization

This site is built for exceptional performance:

- **Static Site Generation**: All pages pre-rendered at build time
- **Minimal JavaScript**: Astro ships zero JS by default
- **Optimized Images**: Use Astro's Image component for automatic optimization
- **Tailwind CSS**: Only ships styles actually used
- **Code Splitting**: Automatic per-page optimization

### Lighthouse Scores

Target scores (can achieve 95-100 across all metrics):
- Performance: 95-100
- Accessibility: 95-100
- Best Practices: 95-100
- SEO: 95-100

## 🔒 Security Best Practices

- All forms use HTTPS
- No sensitive data stored in frontend code
- Environment variables for API keys (use `.env` file)
- Regular dependency updates via `npm update`

## 🆘 Support & Documentation

### Resources

- [Astro Documentation](https://docs.astro.build)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [PageCMS Documentation](https://pagescms.org/docs)
- [MDX Documentation](https://mdxjs.com)

### Common Issues

**Build Fails**
- Run `npm install` to ensure all dependencies are installed
- Check that all content files have valid frontmatter
- Ensure dates are in correct format (YYYY-MM-DD)

**Styling Issues**
- Clear browser cache
- Run `npm run build` to rebuild Tailwind CSS
- Check for typos in class names

**Content Not Updating**
- Restart dev server (`npm run dev`)
- Clear Astro cache: `rm -rf .astro`
- Rebuild: `npm run build`

## 🎯 Success Criteria

This demo is successful when:

- ✅ All pages are fully functional and responsive
- ✅ Content can be easily edited via PageCMS
- ✅ Site achieves 95+ Lighthouse scores
- ✅ Non-technical users can add blog posts without help
- ✅ Non-technical users can update events without help
- ✅ Forms are working (with real integrations)
- ✅ Site looks professional and trustworthy
- ✅ Easy to deploy to Netlify/Vercel

## 📄 License

This is a demo template. Feel free to use it as a starting point for your nonprofit website.

## 🤝 Contributing

This is a demo project, but suggestions and improvements are welcome! Feel free to:
- Report issues
- Suggest features
- Submit pull requests

## 💡 Demo Mode

This site includes a "Demo Mode" notice that can be removed when deploying for a real organization. Simply remove or comment out the demo banner in the Layout component.

## 📞 Questions?

For questions about this demo or implementing it for your organization, please open an issue or reach out to the development team.

---

**Built with ❤️ for nonprofit organizations making a difference in their communities.**
