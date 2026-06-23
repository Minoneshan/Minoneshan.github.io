# Mo Minoneshan — Personal Website

A clean, professional personal website built with pure HTML, CSS, and JavaScript. No build step, zero dependencies, deploys instantly on GitHub Pages at `minoneshan.github.io`.

## Site Structure

```
/
├── index.html                          # Homepage
├── projects.html                       # Projects index with filters
├── notes.html                          # Technical notes
├── resume.html                         # Resume page
├── contact.html                        # Contact page
├── Minoneshan_Resume.pdf               # PDF resume (update your own)
├── assets/
│   ├── css/
│   │   ├── style.css                   # Main design system
│   │   └── docs.css                    # Book-style documentation layout
│   └── js/
│       ├── main.js                     # Nav toggle, project filters
│       └── docs.js                     # Sidebar search, scrollspy
└── projects/
    ├── stress-scenario-engine/
    │   ├── index.html                  # Landing page
    │   ├── demo.html                   # Interactive demo stub
    │   └── docs.html                   # Book-style documentation
    ├── copula-var/
    │   ├── index.html
    │   ├── demo.html
    │   └── docs.html
    ├── monte-carlo-pricer/
    │   ├── index.html
    │   ├── demo.html
    │   └── docs.html
    └── cpi-transformer/
        ├── index.html
        ├── demo.html
        └── docs.html
```

## 🎨 Design System

The site uses a professional, institutional quant aesthetic:

- **Colors**: Clean navy accents (`#0f4c81`), light backgrounds (`#f8fafc`), dark text
- **Typography**: Inter (sans-serif), JetBrains Mono (code)
- **Components**: Cards, pills, timeline, callouts, code blocks
- **Math**: KaTeX for equations (via CDN)
- **Code**: Prism syntax highlighting (Python, C++, SQL via CDN)

All colors and spacing are defined in CSS custom properties (`--accent`, `--bg`, etc.) in `assets/css/style.css`.

## 🚀 Getting Started

### Local Preview

The site is plain HTML/CSS/JS and works offline. Open in any browser:

```bash
open index.html
```

Or serve locally with Python:

```bash
python3 -m http.server 8000
# Visit http://localhost:8000
```

### Deploy to GitHub Pages

1. **Enable GitHub Pages** in your repo settings (Settings → Pages → Deploy from a branch → `main`)
2. **Ensure this is your GitHub Pages repo** (named `YourUsername.github.io`)
3. **Push changes**:
   ```bash
   git add .
   git commit -m "Update portfolio"
   git push origin main
   ```
4. **Visit** `https://minoneshan.github.io` (after ~2 min)

## ✏️ Customization Guide

### 1. Update Your Name & Contact

**Files to edit:**
- `index.html`, `projects.html`, `notes.html`, `resume.html`, `contact.html`

Find and replace all instances of:
- `"Mo Minoneshan"` → your name
- `you@example.com` → your email
- `"Quantitative Research"` → your tagline
- LinkedIn & GitHub URLs

### 2. Update Your Resume

1. Replace `Minoneshan_Resume.pdf` with your own PDF (keep the same filename or update links)
2. Links on `index.html`, `resume.html` already point to it

### 3. Customize Colors

Edit `assets/css/style.css` at the top:

```css
:root {
  --bg: #ffffff;
  --accent: #0f4c81;           /* Change this to your brand color */
  --accent-bright: #2563eb;
  --bg-dark: #0b1220;
  /* ... etc ... */
}
```

### 4. Update Project Content

Each project has a 3-page structure:

#### Landing Page (`projects/{name}/index.html`)
- Short overview, problem statement, methods, outputs
- Links to Demo and Documentation

#### Demo Page (`projects/{name}/demo.html`)
- Placeholder for your interactive demo
- Replace the `<div>` with an `<iframe>` to your Streamlit, Hugging Face Spaces, or hosted notebook:
  ```html
  <iframe 
    src="https://your-streamlit-app.streamlitapp.com" 
    width="100%" 
    height="640"
    style="border: none; border-radius: var(--radius);">
  </iframe>
  ```

#### Documentation Page (`projects/{name}/docs.html`)
- Book-style layout with searchable sidebar
- Supports KaTeX math (`$$...$$`) and Prism code blocks (````python`, etc.)
- Structure:
  ```html
  <section id="section-id">
    <h2><span class="sec-num">1</span>Section Title</h2>
    <p>Content with math: $$\int_0^\infty e^{-x^2} dx$$</p>
    <pre><code class="language-python">code here</code></pre>
  </section>
  ```
- Add corresponding sidebar nav items in the `<ul class="docs-nav">`

### 5. Add More Projects

1. Create a new folder: `projects/my-new-project/`
2. Copy structure from an existing project (e.g., `copula-var/`)
3. Update the HTML files with your content
4. Add a project card to `projects.html`:
   ```html
   <article class="project-card" data-tags="risk ml">
     <h3><a href="projects/my-new-project/index.html">Project Name</a></h3>
     <p class="desc">Short description...</p>
     <div class="tags">
       <span class="tag">Python</span>
       <span class="tag">Risk</span>
     </div>
     <div class="card-actions">
       <a href="projects/my-new-project/demo.html" class="btn btn-secondary btn-sm">Demo</a>
       <a href="projects/my-new-project/docs.html" class="btn btn-secondary btn-sm">Documentation</a>
       <a href="https://github.com/..." class="btn btn-ghost btn-sm" target="_blank">GitHub</a>
     </div>
   </article>
   ```

### 6. Update Research Notes

Edit `notes.html` to add your own technical writeups. The page uses the same card layout as projects.

### 7. Update Homepage

- Hero headline & subheading: edit in `index.html` `<section class="hero">`
- Featured projects: add/remove project cards
- Research areas pills: edit `<div class="pill-grid">`
- Experience timeline: edit `<div class="timeline">`

## 📐 Key Components

### Buttons

```html
<!-- Primary (dark) -->
<a href="#" class="btn btn-primary">Click me</a>

<!-- Secondary (outlined) -->
<a href="#" class="btn btn-secondary">Click me</a>

<!-- Ghost (minimal) -->
<a href="#" class="btn btn-ghost">Click me</a>

<!-- Small variant -->
<a href="#" class="btn btn-secondary btn-sm">Small</a>
```

### Cards

Project cards and timeline items use grid layouts. Customize with CSS in `assets/css/style.css`:
- `.project-card` — project cards
- `.timeline-item` — experience timeline
- `.card-grid` — responsive grid

### Documentation Sidebar

The searchable sidebar in `docs.html` includes:
- Live text search filtering nav items
- Scrollspy (active section highlighting)
- Mobile-friendly collapse toggle

Sidebar structure in HTML:
```html
<ul class="docs-nav">
  <li class="nav-part">Section Name</li>
  <li><a href="#section-1"><span class="num">1</span>Title</a></li>
  <li class="sub"><a href="#section-1-1"><span class="num">1.1</span>Subsection</a></li>
  <!-- ... -->
</ul>
```

## 🔧 Advanced Customization

### Change Fonts

Edit `assets/css/style.css`:

```css
:root {
  --font-sans: "Your Font", sans-serif;
  --font-mono: "Your Mono Font", monospace;
}
```

Also update the Google Fonts import in `<head>` of any HTML file.

### Add Dark Mode

Extend CSS with:

```css
@media (prefers-color-scheme: dark) {
  :root {
    --bg: #0d1117;
    --text: #e0e0e0;
    /* ... etc ... */
  }
}
```

### Embed External Content

Demos support `<iframe>` embeds:
- **Streamlit**: `https://your-app.streamlitapp.com`
- **Hugging Face Spaces**: `https://huggingface.co/spaces/username/space-name`
- **Observable / Jupyter**: Embed via iFrame
- **Figma**: Embed prototype links

## 📄 CDN Dependencies

The site uses three external CDNs (all via jsDelivr, very reliable):

1. **Google Fonts** (Inter, JetBrains Mono) — zero bloat, cached
2. **KaTeX** (math rendering) — only loaded on documentation pages
3. **Prism** (code syntax highlighting) — only loaded on documentation pages

No npm, no build step, no Node modules. This keeps the site fast and future-proof.

## ✅ Deployment Checklist

Before going live:

- [ ] Replace all `you@example.com` with your real email
- [ ] Update LinkedIn and GitHub URLs
- [ ] Replace `Minoneshan_Resume.pdf` with your resume
- [ ] Update all project cards with your projects
- [ ] Replace demo placeholders with actual embedded apps
- [ ] Fill in documentation with your real methodology
- [ ] Test all links locally (`python3 -m http.server 8000`)
- [ ] Push to GitHub and verify at `https://minoneshan.github.io`

## 📱 Mobile Responsiveness

The site is fully responsive:
- Mobile nav toggle on screens < 820px
- Stacked layout on small screens
- Touch-friendly buttons and spacing

Test with:
```bash
# In Chrome DevTools: Ctrl+Shift+M (or Cmd+Shift+M)
```

## 🎯 Best Practices for Recruiters

This site is designed to impress:

1. **Technical**: Show methodology with math, code, derivations
2. **Demo**: Make it interactive — Streamlit, notebooks, WASM
3. **Credible**: Include validation, backtests, limitations, honest caveats
4. **Professional**: Clean design, institutional colors, serious tone
5. **Accessible**: Fast load, no dependencies, works offline

Each project page supports:
- **Landing**: 30-second pitch
- **Demo**: Hands-on interaction
- **Documentation**: Deep technical dive
- **GitHub**: Proof of implementation

## 🤝 Questions?

- **Styling**: Edit `assets/css/style.css` for layout, `assets/css/docs.css` for docs
- **Content**: Update HTML files directly (no templating)
- **Deployment**: GitHub Pages auto-deploys on `git push` to `main`

---

Built for serious quants. Deploy instantly. Impress everyone.
