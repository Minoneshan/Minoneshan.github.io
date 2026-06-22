# 🎬 Visual Walkthrough: Your New Portfolio

Here's what a visitor sees when they land on your site.

---

## 🏠 Homepage (`/`)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
                    Mo Minoneshan      Home Projects Notes Resume Contact
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

QUANTITATIVE RESEARCHER

Quantitative Finance, Risk Modeling, and Systematic Research

I build data-driven models and tools for scenario analysis, portfolio 
risk, derivatives pricing, macro-financial forecasting, and systematic 
investment research.

[View Projects] [Download Resume] [GitHub]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

SELECTED WORK                                           All projects →

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Hypothetical Stress Scenario │  │ Copula-Tail VaR Engine      │
│ Engine                      │  │                             │
│                             │  │ Tail-risk model using EVT   │
│ Conditional scenario gener- │  │ and t-copulas for multi-    │
│ ation for cross-asset risk  │  │ asset portfolios.           │
│ factors.                    │  │                             │
│                             │  │ Python EVT Copula VaR       │
│ Python Streamlit Copulas    │  │                             │
│ PCA                         │  │ [Demo] [Docs] [GitHub]      │
│                             │  │                             │
│ [Demo] [Docs] [GitHub]      │  └─────────────────────────────┘
└─────────────────────────────┘

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Monte Carlo Option Pricer   │  │ CPI Transformer Risk        │
│                             │  │ Dashboard                   │
│ High-performance C++ option │  │                             │
│ pricing with OpenMP acceler-│  │ Deep-learning inflation     │
│ ation and variance reducti- │  │ forecasting with explainab- │
│ on.                         │  │ ility dashboard.            │
│                             │  │                             │
│ C++ OpenMP Derivatives      │  │ PyTorch Transformers Macro  │
│                             │  │                             │
│ [Demo] [Docs] [GitHub]      │  │ [Demo] [Docs] [GitHub]      │
└─────────────────────────────┘  └─────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

RESEARCH AREAS

Systematic Macro    Tail Risk    Derivatives Pricing
Portfolio Construction    Scenario Generation    Stochastic Modeling
Machine Learning in Finance

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

EXPERIENCE & EDUCATION                           Full resume →

M.S. Financial Engineering                      Graduate
Columbia University

Product Management Analyst Intern                Internship
USAA

B.S. Mathematics                                 Undergraduate
University of Texas at Austin

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

© 2026 Mo Minoneshan              LinkedIn  GitHub  Email
```

---

## 📊 Projects Page (`/projects.html`)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROJECTS

A collection of applied quantitative finance, risk, and machine learning 
projects. Each includes a live demo when available, technical 
documentation, methodology, implementation notes, and results.

[All] [Risk] [Derivatives] [Machine Learning] [Macro] [Optimization] [C++]

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Hypothetical Stress Scenario │  │ Copula-Tail VaR Engine      │
│ Engine                      │  │                             │
│ Cross-asset scenario gener- │  │ Tail-risk model using EVT   │
│ ation under pinned shocks.  │  │ and t-copulas.              │
│                             │  │                             │
│ Python Streamlit Copulas    │  │ Python EVT Copula VaR       │
│ PCA Risk Conditional Gaussian│  │                             │
│                             │  │ [Demo] [Docs] [GitHub]      │
│ [Demo] [Docs] [GitHub]      │  │                             │
└─────────────────────────────┘  └─────────────────────────────┘

┌─────────────────────────────┐  ┌─────────────────────────────┐
│ Monte Carlo Option Pricer   │  │ CPI Transformer Risk        │
│                             │  │ Dashboard                   │
│ High-performance C++ pricing│  │ Deep-learning inflation     │
│ with OpenMP.                │  │ forecasting with SHAP.      │
│                             │  │                             │
│ C++ OpenMP Derivatives      │  │ PyTorch Transformers Macro  │
│ Monte Carlo                 │  │                             │
│                             │  │ [Demo] [Docs] [GitHub]      │
│ [Demo] [Docs] [GitHub]      │  │                             │
└─────────────────────────────┘  └─────────────────────────────┘

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📄 Project Landing Page (`/projects/stress-scenario-engine/`)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Projects / Stress Scenario Engine

HYPOTHETICAL STRESS SCENARIO ENGINE

A cross-asset risk engine that generates statistically consistent 
market scenarios conditional on user-specified shocks.

[Launch Demo] [Read Documentation] [View GitHub]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

PROBLEM

Risk managers often need to ask:

┌─────────────────────────────────────────────────┐
│ "If equities fall 20% and rates rise 150 bps,   │
│ what should happen to FX, commodities, and      │
│ related futures?"                               │
└─────────────────────────────────────────────────┘

This project builds a conditional scenario engine that estimates realistic 
co-movements across risk factors...

METHODS

• Conditional multivariate Gaussian
• EWMA covariance estimation
• Ledoit–Wolf shrinkage covariance
• Gaussian copula
• Student-t copula
• PCA conditioning

OUTPUTS

• Scenario table across all risk factors
• Conditional mean shock vector
• Simulated scenario distribution
• CSV export
• Validation summary

[Launch Demo] [Read Full Documentation]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📚 Documentation Page (`/projects/stress-scenario-engine/docs.html`)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

┌──────────────────────────┐  │ Projects / Stress Scenario   │
│ Search docs...           │  │ Engine / Documentation       │
│                          │  │                              │
│ Stress Scenario Engine   │  │ HYPOTHETICAL STRESS SCENARIO │
│ Mo Minoneshan · 2026     │  │ ENGINE                       │
│                          │  │                              │
├──────────────────────────┤  │ Mo Minoneshan · 2026         │
│ Overview                 │  │                              │
│                          │  │ [GitHub] [Demo] [PDF]        │
│ Front Matter             │  │                              │
│ 0. Executive Summary     │  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ 1. Motivation            │  │                              │
│                          │  │ OVERVIEW                     │
│ Risk Factors & Data      │  │                              │
│ 2. Risk Factor Universe  │  │ This project builds a        │
│   2.1 Equities           │  │ scenario engine that gener-  │
│   2.2 Rates              │  │ ates statistically consist-  │
│   2.3 FX                 │  │ ent cross-asset market       │
│   2.4 Commodities        │  │ scenarios conditional on     │
│   2.5 Futures Mapping    │  │ a small set of user-speci-  │
│ 3. Data Pipeline         │  │ fied shocks.                 │
│                          │  │                              │
│ Methodology              │  │ ┌────────────────────────┐   │
│ 4. Baseline Model        │  │ │ MODEL                  │   │
│   4.1 Conditional Gaussian│  │ │ Partition the factor   │   │
│   4.2 Conditional Mean   │  │ │ returns as X = (Xp,Xf)│   │
│   4.3 Conditional Cov.   │  │ │ The engine estimates:  │   │
│   4.4 Sampling           │  │ │ Xf | Xp = xp          │   │
│ 5. Covariance Estimation │  │ └────────────────────────┘   │
│   5.1 EWMA Covariance    │  │                              │
│   5.2 Shrinkage          │  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│ 6. Extensions            │  │                              │
│   6.1 Copula Extension   │  │ 0. EXECUTIVE SUMMARY         │
│   6.2 PCA Conditioning   │  │                              │
│                          │  │ The engine answers ques-     │
│ Application              │  │ tions of the form: "If       │
│ 7. Implementation        │  │ equities fall 20% and 10Y    │
│ 8. Demo Walkthrough      │  │ rates rise 150 bps, what is  │
│ 9. Results               │  │ the implied move in FX,      │
│ 10. Validation           │  │ commodities, and related     │
│ 11. Limitations          │  │ futures?"                    │
│ 12. Future Work          │  │                              │
│                          │  │ It uses a conditional multi- │
│ Appendix                 │  │ variate Gaussian as baseline,│
│ A. Derivations           │  │ with EWMA and shrinkage      │
│ B. API Reference         │  │ covariance estimators, and   │
│ C. Factor Dictionary     │  │ optional copula and PCA      │
│                          │  │ extensions for heavier tails │
│                          │  │ and dimensionality reduction.│
│                          │  │                              │
│                          │  │ [← Back] [Next →]            │
└──────────────────────────┘  └──────────────────────────────┘
```

**Left sidebar features:**
- 🔍 Live search (filters sections)
- 📍 Scrollspy (current section highlighted)
- 📋 Numbered chapters (0-12 + Appendix A-C)
- 📱 Mobile toggle (`☰ Contents`)

**Right content area features:**
- 📐 Math: `$$\int_0^\infty e^{-x^2} dx$$`
- 💻 Code blocks with syntax highlighting
- 📊 Tables, callouts, figures
- 🔗 Breadcrumb + prev/next navigation

---

## 🎬 Demo Page (`/projects/stress-scenario-engine/demo.html`)

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Projects / Stress Scenario Engine / Demo

INTERACTIVE DEMO

Select risk factors, pin shocks, generate scenarios, and export results.

┌─────────────────────────────────────────────────────────────┐
│                                                             │
│  STREAMLIT APP EMBEDDED HERE                               │
│                                                             │
│  ┌─────────────────────────────────────────────────────┐  │
│  │ Select Risk Factors                                 │  │
│  │ ☑ NQ1 (Nasdaq) ☑ TY1 (10Y) ☑ EURUSD ☑ CL1        │  │
│  │                                                     │  │
│  │ Pin Shocks                                          │  │
│  │ NQ1: -20% [────────●──────] -30%                  │  │
│  │ TY1: +150 bps [───●─────] +200 bps               │  │
│  │                                                     │  │
│  │ [Generate 1000 Scenarios]                          │  │
│  │                                                     │  │
│  │ Results:                                            │  │
│  │ ┌────────────┬──────────┬──────────┐              │  │
│  │ │ Factor     │ Mean     │ Std Dev  │              │  │
│  │ ├────────────┼──────────┼──────────┤              │  │
│  │ │ NQ1        │ -20.0%   │ 3.1%     │              │  │
│  │ │ EURUSD     │ -2.6%    │ 1.4%     │              │  │
│  │ │ Gold       │ +4.2%    │ 2.0%     │              │  │
│  │ └────────────┴──────────┴──────────┘              │  │
│  │                                                     │  │
│  │ [Download CSV]                                      │  │
│  └─────────────────────────────────────────────────────┘  │
│                                                             │
└─────────────────────────────────────────────────────────────┘

[Read Documentation] [Back to project]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

---

## 📱 Mobile View

```
━━━━━━━━━━━━━━━━━━━━━━
☰ Mo Minoneshan
━━━━━━━━━━━━━━━━━━━━━━

Home Projects Notes Resume Contact

━━━━━━━━━━━━━━━━━━━━━━

QUANTITATIVE RESEARCHER

Quantitative Finance,
Risk Modeling, and
Systematic Research

I build data-driven
models...

[View Projects]
[Download Resume]
[GitHub]

━━━━━━━━━━━━━━━━━━━━━━

SELECTED WORK

┌──────────────────┐
│ Stress Scenario  │
│ Engine           │
│                  │
│ Conditional      │
│ scenario gener.  │
│                  │
│ Python Streamlit │
│ Copulas PCA      │
│                  │
│ [Demo] [Docs]    │
│ [GitHub]         │
└──────────────────┘

┌──────────────────┐
│ Copula-Tail VaR  │
│ Engine           │
│                  │
│ Tail-risk model  │
│ with EVT & copul.│
│                  │
│ Python EVT Copul │
│ VaR              │
│                  │
│ [Demo] [Docs]    │
│ [GitHub]         │
└──────────────────┘

━━━━━━━━━━━━━━━━━━━━━━

RESEARCH AREAS

Systematic Macro
Tail Risk
Derivatives Pricing
Portfolio Construction
...

━━━━━━━━━━━━━━━━━━━━━━
```

---

## 🎨 Color Palette Used

```
Primary Accent:      #0f4c81 (navy blue)
Links/Highlights:    #2563eb (bright blue)
Soft Accent:         #dbeafe (very light blue)

Background:          #ffffff (white)
Soft Background:     #f8fafc (very light gray)
Dark Section:        #0b1220 (very dark blue)

Text Primary:        #111827 (near-black)
Text Secondary:      #4b5563 (medium gray)
Text Muted:          #6b7280 (light gray)

Borders:             #e5e7eb (light gray)
Code Background:     #0d1424 (very dark)
```

---

## ✨ Interactive Features

### On Homepage
- **Sticky header** with fade effect (scrolls smoothly)
- **Project cards** hover animation (lift + shadow)
- **Mobile nav toggle** (☰ button on small screens)
- **Responsive grid** (auto-fill columns based on width)

### On Projects Page
- **Filter chips** (click to filter by tag: Risk, ML, etc.)
- **Project cards** dynamically show/hide based on filters

### On Documentation Pages
- **Sidebar search** (live filtering of nav items)
- **Scrollspy** (section highlighting as you scroll)
- **Math rendering** (KaTeX: `$$...$$`)
- **Code syntax highlighting** (Prism: Python, C++, SQL)
- **Mobile sidebar toggle** (☰ Contents button)
- **Prev/Next navigation** (at bottom of page)

---

## 📊 What Recruiters Notice

| Visitor Type | Sees | Impression |
|---|---|---|
| **Trader / PM** | Demo videos, results | "Can this person build working tools?" |
| **Quant Researcher** | Methods, math, validation | "Are they rigorous and honest?" |
| **Quant Dev** | Code, GitHub links, implementation | "Can they ship production code?" |
| **Risk Manager** | Limitations, backtests, assumptions | "Are they careful about edge cases?" |
| **Everyone** | Clean design, no fluff | "This person is serious." |

---

**The whole site says:** Professional, technical, no nonsense. Built for researchers who understand finance deeply.

---
