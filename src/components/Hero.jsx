import React, { useState } from 'react';
import { 
  ShieldCheck, ArrowRight, CheckCircle2, QrCode, 
  Sparkles, Fingerprint, RefreshCw, Award, Lock, Users, Building,
  UserCheck, Building2, ExternalLink, Globe
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './Hero.css';

export default function Hero({ onOpenRegister, onOpenLogin, onOpenVerifyModal, onOpenTour, onOpenEasterEgg }) {
  const [isCardFlipped, setIsCardFlipped] = useState(false);
  const [qrVerified, setQrVerified] = useState(false);
  const [sealClicks, setSealClicks] = useState(0);

  const handleQrClick = () => {
    setQrVerified(true);
    confetti({
      particleCount: 50,
      spread: 60,
      origin: { y: 0.6 }
    });
    setTimeout(() => setQrVerified(false), 4000);
  };

  const handleSealClick = () => {
    const nextCount = sealClicks + 1;
    setSealClicks(nextCount);
    if (nextCount >= 5) {
      setSealClicks(0);
      if (onOpenEasterEgg) {
        onOpenEasterEgg('GovTech Seal Secret (5 Clicks)');
      }
    } else {
      // Auto-reset if user doesn't finish in 3 seconds
      setTimeout(() => setSealClicks(0), 3000);
    }
  };

  return (
    <section className="hero-section">
      {/* Background Decorative Gradients & Mesh */}
      <div className="hero-bg-glow hero-bg-glow-1"></div>
      <div className="hero-bg-glow hero-bg-glow-2"></div>
      <div className="hero-grid-pattern"></div>

      <div className="container hero-centered-container">
        {/* Top: Centered Site Name & Info Block */}
        <div className="hero-centered-content">
          
          {/* Institutional Trust Top Badge (with secret 5-click easter egg) */}
          <div 
            className="govtech-emblem-badge clickable-easter-egg-seal"
            onClick={handleSealClick}
            title={sealClicks > 0 ? `Secret Easter Egg: ${5 - sealClicks} more clicks!` : 'National Digital Trust Infrastructure'}
            style={{ cursor: 'pointer', userSelect: 'none' }}
          >
            <div className="govtech-seal-icon">
              <ShieldCheck size={16} />
            </div>
            <div className="govtech-badge-text">
              <span className="govtech-badge-main">NATIONAL CENTRAL DIGITAL TRUST INFRASTRUCTURE</span>
              <span className="govtech-badge-sub">Joint Initiative of NASSCOM & NSDL Database Management Limited</span>
            </div>
          </div>

          {/* Authoritative Main Heading (Centered) */}
          <div className="govtech-heading-block text-center">
            <h1 className="govtech-hero-title">
              National Skills Registry
            </h1>
            <span className="govtech-hero-tagline">
              Credible Data. Credible People.
            </span>
          </div>

          <p className="govtech-hero-description text-center">
            India's central digital credentials ecosystem anchored by biometric uniqueness and independent source verification. Empowering <strong>3.7 Million+ IT & knowledge professionals</strong> and <strong>330+ subscriber enterprises</strong> with permanent, fraud-proof career fact sheets.
          </p>

          {/* Dual-Persona Institutional Action Gateway */}
          <div className="govtech-dual-persona-grid-centered">
            
            {/* Persona 1: Professionals */}
            <div className="govtech-persona-card persona-professionals">
              <div className="persona-card-header">
                <div className="persona-icon-circle bg-blue-subtle">
                  <UserCheck size={20} className="text-blue" />
                </div>
                <div>
                  <span className="persona-label">FOR CANDIDATES</span>
                  <h3 className="persona-heading">Knowledge Professionals</h3>
                </div>
              </div>
              
              <ul className="persona-perks-list">
                <li><CheckCircle2 size={13} className="text-emerald" /><span>Permanent 12-Digit ITPIN Card</span></li>
                <li><CheckCircle2 size={13} className="text-emerald" /><span>Eliminates repeated background checks</span></li>
              </ul>

              <div className="persona-cta-row">
                <button 
                  className="btn btn-primary btn-sm w-full"
                  onClick={() => onOpenRegister()}
                >
                  <span>Register Profile</span>
                  <ArrowRight size={14} />
                </button>
                <button 
                  className="btn btn-outline-light btn-sm"
                  onClick={() => onOpenLogin('professional')}
                >
                  <span>Login</span>
                </button>
              </div>
            </div>

            {/* Persona 2: Companies & Verifiers */}
            <div className="govtech-persona-card persona-enterprises">
              <div className="persona-card-header">
                <div className="persona-icon-circle bg-rose-subtle">
                  <Building2 size={20} className="text-rose" />
                </div>
                <div>
                  <span className="persona-label">FOR CORPORATES</span>
                  <h3 className="persona-heading">Subscriber Companies</h3>
                </div>
              </div>

              <ul className="persona-perks-list">
                <li><CheckCircle2 size={13} className="text-emerald" /><span>Instant EBC primary-source verification</span></li>
                <li><CheckCircle2 size={13} className="text-emerald" /><span>Exit Employment Exchange (EEE) sync</span></li>
              </ul>

              <div className="persona-cta-row">
                <button 
                  className="btn btn-outline-primary btn-sm w-full"
                  onClick={() => onOpenLogin('company')}
                >
                  <span>Employer Portal</span>
                  <ExternalLink size={13} />
                </button>
                <button 
                  className="btn btn-outline-light btn-sm"
                  onClick={() => onOpenTour('companies')}
                >
                  <span>Tour</span>
                </button>
              </div>
            </div>

          </div>

          {/* Verified Institutional Trust Pillars & Official Site Link in Single Cohesive Line */}
          <div className="govtech-trust-pillars-row-centered">
            <div className="trust-pillar-item">
              <Lock size={15} className="text-blue" />
              <span><strong>ISO 27001:2013</strong> UKAS Certified</span>
            </div>
            <div className="pillar-dot">•</div>
            <div className="trust-pillar-item">
              <ShieldCheck size={15} className="text-emerald" />
              <span><strong>CCA-Approved</strong> Signatures</span>
            </div>
            <div className="pillar-dot">•</div>
            <div className="trust-pillar-item">
              <Fingerprint size={15} className="text-rose" />
              <span><strong>Biometric</strong> Singularity</span>
            </div>
            <div className="pillar-dot">•</div>
            <a 
              href="https://nationalskillsregistry.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="trust-pillar-item trust-pillar-link"
              title="Open the official live NSR website in a new tab"
            >
              <Globe size={15} className="text-blue" />
              <span>Official Site: <strong className="portal-inline-url">nationalskillsregistry.com</strong></span>
              <ExternalLink size={12} className="portal-inline-arrow" />
            </a>
          </div>

        </div>

        {/* Bottom: Centered Interactive 3D ITPIN Card */}
        <div className="hero-card-showcase-bottom">
          <div className="interactive-card-wrapper animate-float">
            
            {/* The 3D Flippable Card */}
            <div className={`itpin-card ${isCardFlipped ? 'is-flipped' : ''}`}>
              
              {/* Card FRONT */}
              <div className="itpin-card-front">
                <div className="card-top-bar">
                  <div className="card-brand-group">
                    <span className="card-nasscom-logo">nasscom</span>
                    <span className="card-nsr-logo">NSR</span>
                  </div>
                  <div className="ebc-verified-badge">
                    <CheckCircle2 size={12} />
                    <span>EBC VERIFIED</span>
                  </div>
                </div>

                <div className="card-chip-strip">
                  <div className="smart-chip">
                    <div className="chip-line"></div>
                    <div className="chip-line"></div>
                  </div>
                  <Fingerprint size={28} className="biometric-icon" />
                </div>

                <div className="card-middle-info">
                  <div className="cardholder-details">
                    <span className="label-tiny">KNOWLEDGE PROFESSIONAL</span>
                    <h3 className="cardholder-name">Aarav S. Sharma</h3>
                    <span className="cardholder-role">Principal Systems Architect</span>
                  </div>

                  <div className="itpin-number-block">
                    <span className="label-tiny">ITPIN (IDENTIFICATION NUMBER)</span>
                    <span className="itpin-code">8829 • 4102 • 9934</span>
                  </div>
                </div>

                <div className="card-bottom-footer">
                  <div className="validity-info">
                    <span className="label-tiny">ISSUED BY</span>
                    <span className="val-text">NSDL Database Mgmt Ltd</span>
                  </div>

                  <div 
                    className={`qr-code-box ${qrVerified ? 'verified-qr' : ''}`}
                    onClick={handleQrClick}
                    title="Click QR to verify credentials instantly"
                  >
                    <QrCode size={36} />
                    <span className="qr-hint">{qrVerified ? '✓ Validated' : 'Click to Verify'}</span>
                  </div>
                </div>

                <div className="card-hologram-shimmer"></div>
              </div>

              {/* Card BACK */}
              <div className="itpin-card-back">
                <div className="card-back-header">
                  <span className="card-back-title">NSR SECURE CREDENTIAL RECORD</span>
                  <ShieldCheck size={18} className="text-cyan" />
                </div>

                <div className="card-back-data-rows">
                  <div className="data-row">
                    <span className="data-label">Background Checker (BGC):</span>
                    <span className="data-val">First Advantage India Pvt Ltd</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Employment Check Status:</span>
                    <span className="data-val text-emerald">Positive Verified (100%)</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Identity / Aadhaar KYC:</span>
                    <span className="data-val">UIDAI Biometrics Matched</span>
                  </div>
                  <div className="data-row">
                    <span className="data-label">Digital Signature Hash:</span>
                    <span className="data-val font-mono">0x9F4C...B82E71</span>
                  </div>
                </div>

                <div className="card-back-footer">
                  <div className="iso-tag">
                    <Award size={14} />
                    <span>ISO 27001:2013 UKAS Accredited</span>
                  </div>
                  <p className="card-legal">
                    Property of NASSCOM NSR. Tamper-evident digital token.
                  </p>
                </div>
              </div>

            </div>

            {/* Card Flip Controls & Live Verification State */}
            <div className="card-controls-bar">
              <button 
                className="btn-flip"
                onClick={() => setIsCardFlipped(!isCardFlipped)}
              >
                <RefreshCw size={14} />
                <span>{isCardFlipped ? 'View Card Front' : 'Flip to View EBC Record'}</span>
              </button>

              <button 
                className="btn-verify-quick"
                onClick={onOpenVerifyModal}
              >
                <QrCode size={14} />
                <span>Quick Verify ITPIN</span>
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
