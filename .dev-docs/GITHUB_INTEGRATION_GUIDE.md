# 🔗 GitHub Integration Guide

This guide shows how to integrate your GitHub repositories into your portfolio website and add your profile photo.

---

## 📸 Part 1: Add Profile Photo

Your `profile.jpeg` is already in the root folder. Here's how to use it:

### Option A: Add to Homepage Header (Recommended for Professional Look)

Add a profile photo section in the hero area. Update the homepage:

```html
<!-- After the hero section, before "Selected Work" -->
<section class="profile-section">
  <div class="container">
    <div class="profile-container">
      <img src="profile.jpeg" alt="Mo Minoneshan" class="profile-photo" />
      <div class="profile-info">
        <h2>Mo Minoneshan</h2>
        <p class="profile-subtitle">Quantitative Researcher</p>
        <p class="profile-bio">MFE @ Columbia | UT Austin BS Mathematics</p>
      </div>
    </div>
  </div>
</section>
```

### Option B: Add to Resume Page (Minimal Impact)

Add a small profile photo at the top of `resume.html`:

```html
<div class="resume-header">
  <img src="../profile.jpeg" alt="Mo Minoneshan" class="resume-photo" />
  <h1>Mo Minoneshan</h1>
</div>
```

### CSS to Add to `assets/css/style.css`:

```css
.profile-photo {
  width: 120px;
  height: 120px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid var(--color-border);
}

.profile-container {
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 40px;
  background: var(--color-bg-soft);
  border-radius: 8px;
}

.profile-info h2 {
  margin: 0 0 8px;
  color: var(--color-text);
}

.profile-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0;
}

.profile-bio {
  color: var(--color-muted);
  margin: 8px 0 0;
  font-size: 0.95rem;
}

@media (max-width: 640px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
    gap: 16px;
  }
}
```

---

## 🔗 Part 2: GitHub Repository Mapping

Based on your GitHub profile, here's my **recommendation on which projects to feature** on your portfolio website:

### ✅ **TIER 1: Featured Projects (Add to Website)**

These are your most professionally impressive projects. These 4 are already on your site:

| Project | Real GitHub Repo | Description | Recommendation |
|---------|------------------|-------------|-----------------|
| **Stress Scenario Engine** | Need to create/link | Cross-asset scenario generation | ✅ Featured (generic name - update with real repo) |
| **Copula-Tail VaR Engine** | Need to create/link | Tail-risk modeling with EVT & copulas | ✅ Featured (generic name - update with real repo) |
| **Monte Carlo Pricer** | Need to create/link | C++ option pricing with variance reduction | ✅ Featured (generic name - update with real repo) |
| **CPI Transformer** | Need to create/link | ML inflation forecasting | ✅ Featured (generic name - update with real repo) |

### ⭐ **TIER 2: Strong Candidates (Consider Adding)**

These are serious, substantive projects worth featuring:

| GitHub Repo | Type | Best For | Add to Site? | Why |
|------------|------|----------|------------|-----|
| **TradingAgents** | Python · Multi-Agent LLM | Shows modern ML/LLM finance | ✅ YES | Interesting quant ML framework |
| **Waterbridge_MM** | Python · 2025 Challenge | Forecasting challenge | ✅ YES | Recent, competitive, results-oriented |
| **NivoDashboard** | Python | Backend dashboard work | ⚠️ MAYBE | Portfolio construction work |
| **Adobe-MA2023** | Jupyter · Data Analysis | Internship project | ⚠️ MAYBE | Good for showing analytics pipeline |
| **QSG-Index-Rebalance-Project** | Jupyter | Index methodology | ⚠️ MAYBE | Relevant to quant research |
| **OFI_Feature_Engineering_Project** | Jupyter | Feature engineering | ⚠️ MAYBE | Shows data science depth |

### 📚 **TIER 3: Learning/Reference (Skip for Now)**

These are learning resources or forks—don't feature these:
- Python-100-Days (fork)
- langchain (fork)
- CFEM-Seminar (fork)
- Data-Science-Interview-Resources (fork)
- fastai (fork)
- fastbook (fork)
- Coursera-Deep-Learning (fork)
- experiment-with-pytorch-torchtext (fork)
- OOP-Design-Patterns (fork)
- BigDataAnalytics (fork)
- Dataquest_solutions (fork)

### 🛠️ **TIER 4: Older/Less Relevant (Skip)**

These are earlier work—good for history, but not portfolio highlights:
- CS313E-UTAustin (2024)
- Personal_page (2024, old website)
- ProgFund-DataStructure (2023)
- leetcode (2023)
- DA-UTAustin-2023 (2023)
- Dataquest-eBayCars (2023)
- Trading_Test (old)

---

## 🎯 My Recommendations

### Strategy 1: Pure Quant (Recommended)
**Featured Projects (6 total):**
1. Stress Scenario Engine (existing)
2. Copula-Tail VaR Engine (existing)
3. Monte Carlo Pricer (existing)
4. CPI Transformer (existing)
5. **TradingAgents** — Modern multi-agent LLM trading framework
6. **Waterbridge_MM** — Recent forecasting competition with rigorous results

**GitHub Links:**
- Each project card: Add direct repo link (e.g., `https://github.com/Minoneshan/TradingAgents`)
- "View on GitHub" button in footer of docs pages

### Strategy 2: Balanced (Alternative)
**Featured Projects (8 total):**
- The 4 core projects above (1-4)
- TradingAgents
- Waterbridge_MM
- **Adobe-MA2023** — Real internship work, data pipeline
- **QSG-Index-Rebalance-Project** — Index rebalancing work

---

## 🚀 Implementation: Add GitHub Links

### Step 1: Update Project Cards with GitHub Links

Edit `projects.html`. Change the generic `https://github.com/Minoneshan` to specific repos:

**Example 1: Stress Scenario Engine**
```html
<!-- Old (generic) -->
<a href="https://github.com/Minoneshan" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">GitHub</a>

<!-- New (specific) - when you create the repo -->
<a href="https://github.com/Minoneshan/stress-scenario-engine" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">GitHub</a>
```

**Example 2: TradingAgents (already exists)**
```html
<a href="https://github.com/Minoneshan/TradingAgents" class="btn btn-ghost btn-sm" target="_blank" rel="noopener">GitHub</a>
```

### Step 2: Add GitHub Links to Project Landing Pages

Edit each `projects/*/index.html` to include a GitHub button:

```html
<!-- In the action button row -->
<div class="btn-row">
  <a href="./demo.html" class="btn btn-primary">Launch Demo</a>
  <a href="./docs.html" class="btn btn-secondary">Read Documentation</a>
  <a href="https://github.com/Minoneshan/REPO-NAME" class="btn btn-ghost" target="_blank" rel="noopener">View on GitHub</a>
</div>
```

### Step 3: Add GitHub Links to Documentation Pages

Edit each `projects/*/docs.html` to include a GitHub link in the header:

```html
<!-- After the title section -->
<div class="docs-header-actions">
  <a href="https://github.com/Minoneshan/REPO-NAME" class="btn btn-sm" target="_blank">
    → View on GitHub
  </a>
  <a href="../index.html" class="btn btn-sm btn-ghost">
    ← Back to Project
  </a>
</div>
```

### Step 4: Add Projects Section to Resume Page

Edit `resume.html` to include a "Projects" section that links to the portfolio:

```html
<section class="resume-section">
  <h2>Featured Projects</h2>
  <div class="projects-list">
    <div class="project-item">
      <h3>Stress Scenario Engine</h3>
      <p>Cross-asset scenario generation using conditional Gaussian, copulas, and PCA</p>
      <p><a href="https://github.com/Minoneshan/stress-scenario-engine">View on GitHub</a></p>
    </div>
    <div class="project-item">
      <h3>TradingAgents</h3>
      <p>Multi-agent LLM framework for quantitative trading research</p>
      <p><a href="https://github.com/Minoneshan/TradingAgents">View on GitHub</a></p>
    </div>
    <!-- ... more projects ... -->
  </div>
</section>
```

---

## 🎨 Profile Photo CSS Variants

### Variant 1: Small Circle (Contact Page)
```css
.profile-photo-small {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid var(--color-accent);
}
```

### Variant 2: Large Square (Resume Page)
```css
.profile-photo-large {
  width: 200px;
  height: 200px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid var(--color-border);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}
```

### Variant 3: Small Inline (Project Cards)
```css
.author-photo {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: cover;
  vertical-align: middle;
  margin-right: 8px;
}
```

---

## 📋 Checklist for Full Integration

- [ ] **Profile Photo**
  - [ ] Decide: Homepage hero, resume page, or both?
  - [ ] Add profile photo CSS to `assets/css/style.css`
  - [ ] Add profile section HTML to chosen page(s)
  - [ ] Test responsive sizing on mobile

- [ ] **GitHub Links for Existing 4 Projects**
  - [ ] Create repos for: stress-scenario-engine, copula-var, monte-carlo-pricer, cpi-transformer
  - [ ] Update `projects.html` with correct GitHub URLs
  - [ ] Update each project's `index.html` with GitHub button
  - [ ] Update each project's `docs.html` with GitHub link

- [ ] **Add 2 More Featured Projects** (TradingAgents + Waterbridge_MM)
  - [ ] Create new project folders: `projects/trading-agents/`, `projects/waterbridge-mm/`
  - [ ] Create `index.html`, `demo.html`, `docs.html` for each
  - [ ] Add project cards to `projects.html`
  - [ ] Add filter tags if needed

- [ ] **Update Resume Page**
  - [ ] Add profile photo
  - [ ] Add "Featured Projects" section with links
  - [ ] Add GitHub profile link

- [ ] **Update Contact Page**
  - [ ] Add small profile photo
  - [ ] Add link to GitHub profile

- [ ] **Testing**
  - [ ] Test all GitHub links (external links)
  - [ ] Test profile photo loads correctly
  - [ ] Check responsive behavior on mobile
  - [ ] Verify image file path is correct

---

## 🔗 Quick GitHub URL Reference

For your exact repository URLs, use this format:
```
https://github.com/Minoneshan/{REPO-NAME}
```

Replace `{REPO-NAME}` with (all lowercase, with hyphens):
- `stress-scenario-engine`
- `copula-var-engine` (or `copula-tail-var`)
- `monte-carlo-pricer`
- `cpi-transformer`
- `TradingAgents` (already exists)
- `Waterbridge_MM` (already exists)
- `Adobe-MA2023` (if adding)
- etc.

---

## 📸 Profile Photo Implementation Example

**Add this to homepage (`index.html`), right after the hero section:**

```html
    <!-- ===== Profile ===== -->
    <section class="section" style="background: var(--color-bg-soft)">
      <div class="container">
        <div class="profile-container">
          <img src="profile.jpeg" alt="Mo Minoneshan" class="profile-photo" />
          <div class="profile-info">
            <h2>Mo Minoneshan</h2>
            <p class="profile-subtitle">Quantitative Researcher</p>
            <p class="profile-bio">
              M.S. Financial Engineering, Columbia University <br>
              B.S. Mathematics, University of Texas at Austin
            </p>
            <p class="profile-bio">
              NYC-based quantitative researcher focused on scenario analysis, risk modeling, and systematic investment research.
            </p>
          </div>
        </div>
      </div>
    </section>

    <hr class="divider" />
```

Then add to `assets/css/style.css`:

```css
/* Profile Section */
.profile-container {
  display: flex;
  align-items: center;
  gap: 32px;
  padding: 40px;
  background: var(--color-white);
  border-radius: 8px;
  border: 1px solid var(--color-border);
}

.profile-photo {
  width: 140px;
  height: 140px;
  border-radius: 8px;
  object-fit: cover;
  border: 2px solid var(--color-accent);
  flex-shrink: 0;
}

.profile-info h2 {
  margin: 0 0 8px;
  color: var(--color-text);
  font-size: 1.5rem;
}

.profile-subtitle {
  font-size: 1.1rem;
  font-weight: 600;
  color: var(--color-accent);
  margin: 0 0 12px;
}

.profile-bio {
  color: var(--color-muted);
  margin: 8px 0;
  line-height: 1.6;
}

@media (max-width: 640px) {
  .profile-container {
    flex-direction: column;
    text-align: center;
    padding: 24px;
    gap: 16px;
  }

  .profile-photo {
    width: 100px;
    height: 100px;
  }
}
```

---

## 🎯 Summary

**Your action items:**
1. ✅ Profile photo: Add to homepage and/or resume (CSS included above)
2. ✅ GitHub links: Update project cards with specific repo URLs
3. ✅ Add 2 more projects: TradingAgents + Waterbridge_MM (optional but recommended)
4. ✅ Create GitHub repos for your 4 core projects if they don't exist yet

**That's it!** Your portfolio will then show professional credentials + working code links.
