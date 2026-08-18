import React from 'react';
import { 
  ShieldCheck, Award, Lock, Mail, Phone, 
  MapPin, ExternalLink, Heart, Globe, ArrowUp 
} from 'lucide-react';
import './Footer.css';

export default function Footer({ onNavigate, onOpenGrievance, onOpenRegister, onOpenLogin }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleLink = (page) => {
    if (onNavigate) onNavigate(page);
    else window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrapper" id="contact">
      
      {/* Top Pre-Footer Help & Security Banner */}
      <div className="pre-footer-banner">
        <div className="container pre-footer-content">
          <div className="security-badges-group">
            <div className="sec-badge-item">
              <ShieldCheck size={28} className="text-emerald" />
              <div>
                <strong>ISO/IEC 27001:2013</strong>
                <span>Information Security Management Certified</span>
              </div>
            </div>
            <div className="sec-badge-item">
              <Award size={28} className="text-amber" />
              <div>
                <strong>UKAS Accredited</strong>
                <span>Global Assurance & Data Governance Standards</span>
              </div>
            </div>
          </div>

          <div className="helpdesk-contact-quick">
            <div className="help-call">
              <Phone size={18} className="text-cyan" />
              <div>
                <span>NSR National Helpdesk</span>
                <strong>+91 (022) 4090 1122</strong>
              </div>
            </div>
            <button className="btn btn-outline-light btn-sm" onClick={onOpenGrievance}>
              <Mail size={14} />
              <span>Submit Ticket</span>
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="main-footer-body">
        <div className="container footer-grid">
          
          {/* Column 1: Brand & Overview */}
          <div className="footer-col brand-col">
            <div className="footer-brand" onClick={() => handleLink('home')} style={{ cursor: 'pointer' }}>
              <div className="footer-emblem">NSR</div>
              <div>
                <span className="footer-title">National Skills Registry</span>
                <span className="footer-tagline">Credible Data, Credible People</span>
              </div>
            </div>

            <p className="footer-desc">
              A joint initiative by <strong>NASSCOM</strong> and <strong>NSDL Database Management Limited (NDML)</strong> creating a trusted repository of knowledge professionals to combat credential fraud and promote transparent hiring.
            </p>

            <div className="footer-gov-row">
              <span className="gov-pill">NASSCOM TrustedSourcing</span>
              <span className="gov-pill">NDML Powered</span>
            </div>

            <div className="footer-official-site-box">
              <a 
                href="https://nationalskillsregistry.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="footer-official-link"
              >
                <Globe size={13} className="text-cyan" />
                <span>Live Government Portal: <strong>nationalskillsregistry.com</strong></span>
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* Column 2: Knowledge Professionals */}
          <div className="footer-col">
            <h4 className="footer-heading">Knowledge Professionals</h4>
            <ul className="footer-links-list">
              <li><button className="footer-btn-link" onClick={() => handleLink('about')}>About NSR Background & Objectives</button></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenRegister(); }}>New User Registration</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin('professional'); }}>Candidate Profile Login</a></li>
              <li><button className="footer-btn-link" onClick={() => handleLink('home')}>EBC Verification Status</button></li>
              <li><button className="footer-btn-link" onClick={() => handleLink('home')}>Annual Maintenance (AMC)</button></li>
              <li><button className="footer-btn-link" onClick={() => handleLink('home')}>Root Certificate Error Fix</button></li>
            </ul>
          </div>

          {/* Column 3: Subscriber Companies */}
          <div className="footer-col">
            <h4 className="footer-heading">For Companies</h4>
            <ul className="footer-links-list">
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin('company'); }}>Subscriber Company Login</a></li>
              <li><a href="#" onClick={(e) => { e.preventDefault(); onOpenLogin('bgc'); }}>Background Checker Login</a></li>
              <li><a href="#eee">Exit Employment Exchange (EEE)</a></li>
              <li><a href="#companies">Become a Subscriber</a></li>
              <li><a href="#partners">Empanelled Companies List</a></li>
              <li><a href="#faqs">Corporate BGC Guidelines</a></li>
              <li><a href="https://nir.ndml.in" target="_blank" rel="noreferrer">NIR e-Insurance Account <ExternalLink size={11} /></a></li>
            </ul>
          </div>

          {/* Column 4: Contact & Office */}
          <div className="footer-col">
            <h4 className="footer-heading">NDML Contact Desk</h4>
            <div className="contact-details">
              <div className="contact-line">
                <MapPin size={16} className="contact-icon" />
                <span>NDML, 4th Floor, Tower 3, One International Center, Senapati Bapat Marg, Prabhadevi, Mumbai 400 013.</span>
              </div>
              <div className="contact-line">
                <Phone size={16} className="contact-icon" />
                <span>022 - 4914 2575 / 2576 / 8422993909</span>
              </div>
              <div className="contact-line">
                <Mail size={16} className="contact-icon" />
                <a href="mailto:nsr@ndml.in" style={{ color: 'inherit' }}>nsr@ndml.in</a>
              </div>
              <div className="contact-line">
                <button className="footer-btn-link" onClick={() => handleLink('contact')} style={{ marginTop: '0.35rem', color: 'var(--primary-600)', fontWeight: 700 }}>
                  View Full Contact & Helpdesk Details →
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Legal Bar */}
      <div className="bottom-legal-bar">
        <div className="container bottom-legal-content">
          <p className="copyright-text">
            © {new Date().getFullYear()} National Skills Registry (NSR) • NSDL Database Management Limited & NASSCOM. All Rights Reserved.
          </p>

          <div className="legal-links">
            <a href="#privacy">Privacy Policy</a>
            <span>•</span>
            <a href="#terms">Terms & Conditions</a>
            <span>•</span>
            <a href="#hyperlink">Hyperlinking Policy</a>
            <span>•</span>
            <a href="#disclaimer">Security Disclaimer</a>
            <span>•</span>
            <button className="scroll-top-btn" onClick={scrollToTop} title="Scroll to top">
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>

    </footer>
  );
}
