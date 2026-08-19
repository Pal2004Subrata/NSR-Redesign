import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, Search, ChevronDown, User, Building2, 
  Lock, ExternalLink, Menu, X, ArrowRight, CheckCircle2,
  HelpCircle, Phone, Globe, Sparkles, BookOpen, Layers, Award,
  Compass, Users, Workflow, TrendingUp, Cpu, UserCheck, FileCheck
} from 'lucide-react';
import './Navbar.css';

export default function Navbar({ currentPage, onNavigate, onOpenLogin, onOpenRegister, onOpenSearch, onOpenGrievance }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 15) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [activeNavKey, setActiveNavKey] = useState(currentPage || 'home');

  useEffect(() => {
    if (currentPage) setActiveNavKey(currentPage);
  }, [currentPage]);

  const toggleDropdown = (name) => {
    setActiveDropdown(activeDropdown === name ? null : name);
  };

  const handleNavClick = (page, anchor = null) => {
    setActiveDropdown(null);
    setMobileMenuOpen(false);
    setActiveNavKey(anchor || page);
    if (onNavigate) onNavigate(page, anchor);
    if (anchor) {
      setTimeout(() => {
        const el = document.getElementById(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
  };

  return (
    <header className={`header-wrapper ${scrolled ? 'is-scrolled' : ''}`}>
      {/* Top Institutional Trust Strip */}
      <div className="top-gov-strip">
        <div className="navbar-container-fluid top-strip-inner">
          <div className="top-left-trust">
            <div className="gov-partner-badge">
              <span className="gov-nasscom-tag">nasscom</span>
              <span className="gov-tag-desc">TrustedSourcing Initiative</span>
            </div>
            <div className="top-v-divider"></div>
            <div className="gov-partner-badge hidden-mobile">
              <span className="gov-nsdl-tag">NSDL</span>
              <span className="gov-tag-desc">Database Management Limited</span>
            </div>
            <div className="top-v-divider hidden-mobile"></div>
            <div className="trust-cert-pill hidden-tablet">
              <ShieldCheck size={13} className="text-emerald" />
              <span>ISO 27001:2013 & UKAS Certified</span>
            </div>
          </div>

          <div className="top-right-utilities">
            <a 
              href="https://nationalskillsregistry.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="top-utility-link official-portal-highlight"
              title="Visit the official National Skills Registry website"
            >
              <Globe size={12} className="text-cyan" />
              <span>Official Site: <strong>nationalskillsregistry.com</strong></span>
              <ExternalLink size={11} />
            </a>
            <span className="top-dot-sep">•</span>
            <a href="#stats" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'stats'); }} className="top-utility-link">
              <span className="pulse-dot-mini"></span>
              <span>Registry Stats</span>
            </a>
            <span className="top-dot-sep">•</span>
            <button onClick={onOpenGrievance} className="top-utility-link btn-plain-link">
              <HelpCircle size={13} />
              <span>Query / Grievance</span>
            </button>
            <span className="top-dot-sep">•</span>
            <div className="quick-dropdown-container">
              <button 
                className="quick-menu-trigger"
                onClick={() => toggleDropdown('quickLinks')}
              >
                <span>Quick Links</span>
                <ChevronDown size={12} className={activeDropdown === 'quickLinks' ? 'rotate-180' : ''} />
              </button>
              {activeDropdown === 'quickLinks' && (
                <div className="quick-dropdown-pane glass-panel">
                  <a href="https://nationalskillsregistry.com/" target="_blank" rel="noopener noreferrer" onClick={() => setActiveDropdown(null)}>
                    <Globe size={14} className="text-emerald" />
                    <div>
                      <strong>Official NSR Website</strong>
                      <span>nationalskillsregistry.com <ExternalLink size={10} style={{ display: 'inline', marginLeft: 3 }} /></span>
                    </div>
                  </a>
                  <a href="#eee" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'eee'); }}>
                    <Sparkles size={14} className="text-rose" />
                    <div>
                      <strong>Exit Employment Exchange</strong>
                      <span>Verified employee exit clearance</span>
                    </div>
                  </a>
                  <a href="#certificate" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'certificate'); }}>
                    <ShieldCheck size={14} className="text-cyan" />
                    <div>
                      <strong>Root Certificate Download</strong>
                      <span>NSDL Browser security trust file</span>
                    </div>
                  </a>
                  <a href="#partners" onClick={(e) => { e.preventDefault(); handleNavClick('home', 'partners'); }}>
                    <Building2 size={14} className="text-blue" />
                    <div>
                      <strong>Subscriber Companies</strong>
                      <span>330+ participating tech giants</span>
                    </div>
                  </a>
                  <a href="https://nir.ndml.in" target="_blank" rel="noreferrer" onClick={() => setActiveDropdown(null)}>
                    <ExternalLink size={14} className="text-amber" />
                    <div>
                      <strong>NSDL NIR Portal</strong>
                      <span>National Insurance-policy Repository</span>
                    </div>
                  </a>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Spacious Navbar */}
      <nav className="main-navbar">
        <div className="navbar-container-fluid nav-main-flex">
          
          {/* Left: Official Animated Vector Brand Lockup */}
          <a href="#" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }} className="brand-lockup">
            <div className="brand-logo-vector">
              <svg viewBox="0 0 48 48" className="nsr-vector-svg" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Center Badge Disc */}
                <circle cx="24" cy="24" r="17" fill="#ffffff" stroke="#e6decb" strokeWidth="1" />
                
                {/* Rotating Golden Orbit Ring (Zero Wobble / Zero Crop) */}
                <circle 
                  cx="24" 
                  cy="24" 
                  r="20" 
                  stroke="url(#goldRingGrad)" 
                  strokeWidth="2" 
                  strokeDasharray="40 12 25 12" 
                  strokeLinecap="round" 
                  className="nsr-orbit-ring" 
                />

                {/* Rotating Satellite Beacon Node */}
                <g className="nsr-satellite-orbit">
                  <circle cx="24" cy="4" r="2.5" fill="#f59e0b" filter="drop-shadow(0 0 3px rgba(245, 158, 11, 0.6))" />
                </g>

                {/* Brand Monogram */}
                <text x="24" y="28.5" textAnchor="middle" fontFamily="var(--font-display)" fontSize="13.5" fontWeight="900" fill="#9f1239" letterSpacing="0.3">NSR</text>
                
                <defs>
                  <linearGradient id="goldRingGrad" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#f59e0b" />
                    <stop offset="0.5" stopColor="#d97706" />
                    <stop offset="1" stopColor="#b45309" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            
            <div className="brand-meta-column">
              <div className="brand-title-line">
                <span className="brand-main-title">NATIONAL SKILLS REGISTRY</span>
              </div>
              <div className="brand-sub-line">
                <span className="brand-tagline">Credible Data, Credible People</span>
                <span className="brand-sub-dot">•</span>
                <span className="brand-parent-note">A NASSCOM & NDML INITIATIVE</span>
              </div>
            </div>
          </a>

          {/* Center: Navigation Links */}
          <div className="nav-navigation-menu desktop-nav-only">
            <button 
              onClick={() => handleNavClick('home')} 
              className={`nav-link-item ${activeNavKey === 'home' ? 'is-active-tab' : ''}`}
            >
              Home
            </button>

            <button 
              onClick={() => handleNavClick('about')} 
              className={`nav-link-item ${activeNavKey === 'about' ? 'is-active-tab' : ''}`}
            >
              About Us
            </button>
            
            <div 
              className="nav-dropdown-item"
              onMouseEnter={() => setActiveDropdown('knowNsr')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button 
                onClick={() => handleNavClick('know-nsr', 'context')}
                className={`nav-link-item dropdown-btn ${activeNavKey === 'know-nsr' || activeNavKey === 'context' ? 'is-active-tab' : ''}`}
              >
                <span>Know NSR</span>
                <ChevronDown size={13} className={activeDropdown === 'knowNsr' ? 'rotate-180' : ''} />
              </button>
              
              {activeDropdown === 'knowNsr' && (
                <div className="nav-mega-menu glass-panel know-nsr-mega">
                  <div className="mega-menu-inner-grid-10">
                    <button onClick={() => handleNavClick('know-nsr', 'context')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Compass size={16} /></div>
                      <div>
                        <strong>NSR Context</strong>
                        <span>Industry genesis & background</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'attributes')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><ShieldCheck size={16} /></div>
                      <div>
                        <strong>NSR Attributes</strong>
                        <span>Singularity & biometric fact sheet</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'users')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Users size={16} /></div>
                      <div>
                        <strong>Users & Service Providers</strong>
                        <span>Professionals, companies, EBCs & POS</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'processes')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Workflow size={16} /></div>
                      <div>
                        <strong>NSR Process Flows</strong>
                        <span>5-stage registration & verification flow</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'benefits')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Award size={16} /></div>
                      <div>
                        <strong>NSR Benefits</strong>
                        <span>For professionals, firms & industry</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'milestones')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><TrendingUp size={16} /></div>
                      <div>
                        <strong>NSR Milestones</strong>
                        <span>Historical progress & registrations</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'system-features')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Cpu size={16} /></div>
                      <div>
                        <strong>NSR System Features</strong>
                        <span>Anytime access, audit trails & Maker/Checker</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'security-features')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><Lock size={16} /></div>
                      <div>
                        <strong>NSR Security Features</strong>
                        <span>ISO 27001, 256-bit encryption & RBAC</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'steering-committee')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><UserCheck size={16} /></div>
                      <div>
                        <strong>NSR Steering Committee</strong>
                        <span>NASSCOM, NDML & industry leadership</span>
                      </div>
                    </button>

                    <button onClick={() => handleNavClick('know-nsr', 'empanelled-checkers')} className="mega-link-item-clean">
                      <div className="mega-mini-icon"><FileCheck size={16} /></div>
                      <div>
                        <strong>Empanelment of BGCs</strong>
                        <span>EBC criteria, procedure & questionnaire</span>
                      </div>
                    </button>
                  </div>
                </div>
              )}
            </div>

            <button 
              onClick={() => handleNavClick('home', 'professionals')} 
              className={`nav-link-item ${activeNavKey === 'professionals' ? 'is-active-tab' : ''}`}
            >
              Knowledge Professionals
            </button>
            
            <button 
              onClick={() => handleNavClick('home', 'companies')} 
              className={`nav-link-item ${activeNavKey === 'companies' ? 'is-active-tab' : ''}`}
            >
              Companies
            </button>
            
            <button 
              onClick={() => handleNavClick('media')} 
              className={`nav-link-item ${activeNavKey === 'media' ? 'is-active-tab' : ''}`}
            >
              NSR in Media
            </button>
            
            <button 
              onClick={() => handleNavClick('home', 'faqs')} 
              className={`nav-link-item ${activeNavKey === 'faqs' ? 'is-active-tab' : ''}`}
            >
              FAQs
            </button>
            
            <button 
              onClick={() => handleNavClick('contact')} 
              className={`nav-link-item ${activeNavKey === 'contact' ? 'is-active-tab' : ''}`}
            >
              Contact Us
            </button>
          </div>

          {/* Right: Actions & CTAs */}
          <div className="nav-right-actions desktop-nav-only">
            {/* Login Selector Button */}
            <div className="login-dropdown-wrapper">
              <button 
                className="btn-nav-login"
                onClick={() => onOpenLogin('professional')}
              >
                <Lock size={14} />
                <span>Login</span>
              </button>
            </div>

            {/* Glowing High-Impact Register CTA */}
            <button 
              className="btn-nav-register"
              onClick={() => onOpenRegister()}
            >
              <User size={15} />
              <span>Register Now</span>
              <div className="btn-shine"></div>
            </button>
          </div>

          {/* Mobile Actions */}
          <div className="mobile-toggle-wrapper mobile-nav-only">
            <button 
              className="mobile-icon-btn"
              onClick={() => onOpenLogin && onOpenLogin('professional')}
              aria-label="Login"
              title="Sign In"
            >
              <Lock size={18} />
            </button>
            <button 
              className="mobile-icon-btn mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation"
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="mobile-full-drawer glass-panel-dark">
          <div className="mobile-drawer-inner">
            <div className="mobile-nav-list">
              <button 
                onClick={() => handleNavClick('home')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'home' ? 'is-active' : ''}`}
              >
                <span>Home</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('about')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'about' ? 'is-active' : ''}`}
              >
                <span>About NSR (NDML & NASSCOM)</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              {/* Know NSR Accordion for Mobile */}
              <div className="mobile-nav-accordion">
                <button 
                  onClick={() => toggleDropdown('knowNsrMobile')}
                  className={`mobile-nav-item-btn ${activeNavKey === 'know-nsr' ? 'is-active' : ''}`}
                >
                  <div className="mobile-item-title-wrap">
                    <span>Know NSR</span>
                    <span className="mobile-subtag-pill">10 Modules</span>
                  </div>
                  <ChevronDown size={16} className={`mobile-chevron ${activeDropdown === 'knowNsrMobile' ? 'rotate-180' : ''}`} />
                </button>

                {activeDropdown === 'knowNsrMobile' && (
                  <div className="mobile-submenu-grid">
                    <button onClick={() => handleNavClick('know-nsr', 'context')} className="mobile-sublink-btn">
                      <Compass size={14} className="text-blue" />
                      <span>1. NSR Context & Genesis</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'attributes')} className="mobile-sublink-btn">
                      <ShieldCheck size={14} className="text-emerald" />
                      <span>2. NSR Attributes & Singularity</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'users')} className="mobile-sublink-btn">
                      <Users size={14} className="text-blue" />
                      <span>3. Users & Service Providers</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'processes')} className="mobile-sublink-btn">
                      <Workflow size={14} className="text-rose" />
                      <span>4. NSR Process Flows</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'benefits')} className="mobile-sublink-btn">
                      <Award size={14} className="text-amber" />
                      <span>5. NSR Benefits Matrix</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'milestones')} className="mobile-sublink-btn">
                      <TrendingUp size={14} className="text-emerald" />
                      <span>6. NSR Milestones</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'system-features')} className="mobile-sublink-btn">
                      <Cpu size={14} className="text-blue" />
                      <span>7. System Features & Maker-Checker</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'security-features')} className="mobile-sublink-btn">
                      <Lock size={14} className="text-rose" />
                      <span>8. Security & ISO 27001</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'steering-committee')} className="mobile-sublink-btn">
                      <UserCheck size={14} className="text-blue" />
                      <span>9. Steering Committee</span>
                    </button>
                    <button onClick={() => handleNavClick('know-nsr', 'empanelled-checkers')} className="mobile-sublink-btn">
                      <FileCheck size={14} className="text-emerald" />
                      <span>10. Empanelment of BGCs</span>
                    </button>
                  </div>
                )}
              </div>

              <button 
                onClick={() => handleNavClick('home', 'professionals')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'professionals' ? 'is-active' : ''}`}
              >
                <span>Knowledge Professionals</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('home', 'companies')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'companies' ? 'is-active' : ''}`}
              >
                <span>Subscriber Companies</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('home', 'eee')} 
                className="mobile-nav-item-btn"
              >
                <span>Exit Employment Exchange (EEE)</span>
                <span className="mobile-badge-tag">Hot</span>
              </button>

              <button 
                onClick={() => handleNavClick('home', 'stats')} 
                className="mobile-nav-item-btn"
              >
                <span>Registry Statistics (3.7M+)</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('media')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'media' ? 'is-active' : ''}`}
              >
                <span>NSR in Media (Press & Leaders)</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('home', 'certificate')} 
                className="mobile-nav-item-btn"
              >
                <span>Root Certificate Download</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('home', 'faqs')} 
                className="mobile-nav-item-btn"
              >
                <span>FAQs & Help Center</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>

              <button 
                onClick={() => handleNavClick('contact')} 
                className={`mobile-nav-item-btn ${activeNavKey === 'contact' ? 'is-active' : ''}`}
              >
                <span>Contact Us & Helplines</span>
                <ArrowRight size={15} className="mobile-chevron" />
              </button>
            </div>

            {/* Mobile CTAs & Utility Bar */}
            <div className="mobile-cta-box">
              <button 
                className="btn btn-danger btn-lg w-full"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenRegister();
                }}
              >
                <User size={18} /> Register Profile (New ITPIN)
              </button>
              
              <div className="mobile-login-row">
                <button 
                  className="btn btn-primary w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin('professional');
                  }}
                >
                  <Lock size={16} /> Candidate Login
                </button>
                <button 
                  className="btn btn-outline-light w-full"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLogin('company');
                  }}
                >
                  <Building2 size={16} /> Employer Portal
                </button>
              </div>

              {/* Mobile Quick Support Link */}
              <div className="mobile-support-strip">
                <button 
                  onClick={() => {
                    setMobileMenuOpen(false);
                    if (onOpenGrievance) onOpenGrievance();
                  }}
                  className="mobile-support-btn"
                >
                  <HelpCircle size={14} className="text-cyan" />
                  <span>Submit Query / Grievance</span>
                </button>
                <a 
                  href="https://nationalskillsregistry.com/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="mobile-support-btn"
                >
                  <Globe size={14} className="text-emerald" />
                  <span>nationalskillsregistry.com</span>
                  <ExternalLink size={11} />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
