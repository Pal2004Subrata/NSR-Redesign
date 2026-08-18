# 🏛️ National Skills Registry (NSR) — Web Platform Redesign

[![React](https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.x-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Security](https://img.shields.io/badge/ISO%2027001%3A2013-UKAS%20Certified-10B981)](#security--trust)
[![NASSCOM](https://img.shields.io/badge/NASSCOM-TrustedSourcing-E11D48)](#institutional-governance)
[![NSDL](https://img.shields.io/badge/NSDL-Database%20Mgmt%20Ltd-0284C7)](#institutional-governance)

> **Credible Data. Credible People.**  
> A modern, responsive, and animated digital overhaul of India's central repository of trusted and verified IT & knowledge professionals, created as a joint initiative of **NASSCOM** and **NSDL Database Management Limited (NDML)**.

🔗 **Official Legacy Portal:** [https://nationalskillsregistry.com](https://nationalskillsregistry.com/)

---

## 🌟 Executive Summary & Problem Solved

The **National Skills Registry (NSR)** provides a centralized, biometric-anchored digital credentials ecosystem for over **3.7 Million IT professionals** and **330+ enterprise subscribers**. This redesign transforms the legacy portal into an intuitive, high-performance GovTech experience with instant verification, frictionless navigation, and institutional authority.

---

## ✨ Key Platform Features

### 🎴 1. Interactive 3D ITPIN Credential Card
- **3D Card Flip Animation:** View both card front (ITPIN, biometric chip, digital photo badge) and card back (EBC verification audit trails, UIDAI KYC status, cryptographic SHA-256 hash).
- **Interactive QR Validator:** Click-to-verify credential simulation with instant visual feedback and celebratory confetti.

### 👥 2. Dual-Persona Action Gateway
- **Knowledge Professionals:** Direct registration wizard, profile login, AMC subscription management, and grievance tracking.
- **Subscriber Companies & Background Checkers (BGC):** Corporate employer portal, primary-source verification requests, and EBC empanelment access.

### 📊 3. Live Registry Statistics Dashboard
- Real-time animated counters displaying verified ITPIN holders (3.7M+), empanelled enterprises (330+), and verified employment histories with monthly growth metrics.

### ⚡ 4. Global Command + K Spotlight Search
- Instant universal keyboard shortcut (`Cmd + K` or `Ctrl + K`) to search across circulars, FAQs, certificate downloads, and portal services.

### 🛡️ 5. Ecosystem Subsystems & Modals
- **Exit Employment Exchange (EEE):** Standardized relieving record clearance engine.
- **Multi-Step Registration Stepper:** 4-step wizard with validation, document upload simulation, and OTP challenge.
- **Root Certificate Trust Guide:** Interactive guide for resolving CCA/NSDL browser SSL security warnings.
- **Role-Based Login Modal:** Instant switching between Candidate, Corporate HR, and BGC Agency logins.

### 📖 6. Comprehensive Multi-Page Institutional Architecture
- **Home:** Hero, Dual-Persona Hub, Stats, Feature Grid, News Ticker, Partner Marquee.
- **About Us:** Background, Genesis, Mission, Institutional Framework.
- **Know NSR:** Deep-dive tabs for Context, Process Flow, Stakeholder Benefits, and exhaustive FAQs.
- **NSR in Media:** Live circulars, press releases, video walkthroughs, and news coverage.
- **Contact Us:** Full NDML helpdesk contacts, branch addresses, and interactive ticket submission.

### 🎁 7. Bonus Round Easter Egg
- **Konami Code Sequence:** Type `↑` `↑` `↓` `↓` `←` `→` `←` `→` `B` `A` anywhere on the home page.
- **Secret Emblem Click:** Click the GovTech Shield Seal in the Hero section **5 times** in succession.
- **Features:** 8-bit retro arcade chime (Web Audio API), celebratory confetti cannons, holographic *Level-99 Developer Clearance* card, and copyable audit token.

---

## 🛠️ Technology Stack

| Layer | Technology | Purpose |
| :--- | :--- | :--- |
| **Framework** | [React 18](https://react.dev/) | Component-driven declarative UI |
| **Build Tool** | [Vite 8](https://vitejs.dev/) | Lightning-fast HMR and optimized production bundling |
| **Styling** | Vanilla CSS3 + Modern CSS Variables | Zero-runtime CSS design system, Glassmorphism, HSL color tokens |
| **Typography** | `Plus Jakarta Sans`, `Outfit`, `JetBrains Mono` | High-legibility modern GovTech typography |
| **Icons** | [Lucide React](https://lucide.dev/) | Lightweight, pixel-perfect icon set |
| **Effects** | [Canvas-Confetti](https://www.npmjs.com/package/canvas-confetti) + Web Audio API | Micro-interactions and interactive feedback |

---

## 📂 Project Structure

```
Company Project/
├── index.html                   # Entry HTML with Google Fonts & SEO metadata
├── DECISIONS.md                 # Technical decisions, tradeoffs & AI verification
├── README.md                    # Platform documentation
├── package.json                 # Project dependencies and build scripts
├── vite.config.js               # Vite configuration
└── src/
    ├── App.jsx                  # Main router, modal manager & keyboard listeners
    ├── App.css                  # Global app shell layout
    ├── index.css                # Design system tokens, utilities & reset
    ├── main.jsx                 # Application DOM root
    ├── assets/                  # Brand vectors and media assets
    ├── components/
    │   ├── Navbar.jsx / .css        # Top institutional strip, drawer & navigation
    │   ├── Hero.jsx / .css          # Hero section with 3D ITPIN Card & trust pillars
    │   ├── PersonaHub.jsx / .css    # Candidate & Enterprise action hub
    │   ├── StatsDashboard.jsx / .css# Registry metrics and counter statistics
    │   ├── FeaturesGrid.jsx / .css  # EEE, Root Cert, Tip of Day & Video Tour
    │   ├── NewsTicker.jsx / .css    # Live circulars & regulatory update feed
    │   ├── PartnersMarquee.jsx / .css# Marquee of 330+ participating tech giants
    │   ├── Modals.jsx / .css        # 10 interactive popups (Auth, Register, Search, Easter Egg)
    │   └── Footer.jsx / .css        # Compliance footer, helpdesk & legal links
    └── pages/
        ├── AboutUs.jsx / .css       # Institutional background & objectives
        ├── KnowNsr.jsx / .css       # Comprehensive process & FAQ knowledge base
        ├── ContactUs.jsx / .css     # Official NDML helpdesk & office directory
        └── NsrInMedia.jsx / .css    # Newsroom, press releases & media library
```

---

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v18.0 or higher recommended)
- **npm** (v9.0 or higher)

### 1. Clone the Repository
```bash
git clone https://github.com/Pal2004Subrata/NSR-Redesign.git
cd NSR-Redesign
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm run dev
```
Open your browser at `http://localhost:5173/` (or the port shown in your terminal).

### 4. Build for Production
```bash
npm run build
```
Generates a highly optimized static bundle in the `dist/` directory ready for deployment to Vercel, Netlify, or GitHub Pages.

---

## 📑 Architectural Decisions

Detailed rationale on data ingestion strategies, development trade-offs, and verification workflows can be found in **[`DECISIONS.md`](./DECISIONS.md)**.

---

## 📜 Institutional Compliance & Credits

- **National Skills Registry (NSR)** is a joint initiative of **NASSCOM** and **NSDL Database Management Limited (NDML)**.
- Built with standard-compliant, accessible (WCAG AA), and high-performance frontend practices.
