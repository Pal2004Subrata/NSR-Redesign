import React, { useState } from 'react';
import { 
  Lightbulb, Download, ShieldCheck, PlayCircle, 
  Mail, ExternalLink, ChevronRight, CheckCircle2,
  AlertTriangle, FileCode2, ArrowUpRight, Sparkles, RefreshCw
} from 'lucide-react';
import './FeaturesGrid.css';

const TIPS = [
  {
    id: 1,
    title: "Verify Current Employer Confirmation",
    desc: "Check if your present employer company has confirmed your employment details on NSR. If not, contact your HR operations team to validate your profile.",
    tag: "Employment Integrity"
  },
  {
    id: 2,
    title: "Biometric KYC for Global Mobility",
    desc: "Ensure your biometric POS registration is completed to unlock 1-click international visa credential verification.",
    tag: "Visa & Mobility"
  },
  {
    id: 3,
    title: "Maintain Lifetime ITPIN Continuity",
    desc: "Never create multiple ITPINs. Your ITPIN stays with you across career changes from campus to leadership roles.",
    tag: "Profile Security"
  }
];

export default function FeaturesGrid({ onOpenTour, onOpenCertModal, onOpenEeeModal }) {
  const [currentTipIndex, setCurrentTipIndex] = useState(0);
  const [downloadedCert, setDownloadedCert] = useState(false);

  const nextTip = () => {
    setCurrentTipIndex((prev) => (prev + 1) % TIPS.length);
  };

  const handleDownloadCert = () => {
    setDownloadedCert(true);
    setTimeout(() => setDownloadedCert(false), 3000);
  };

  const currentTip = TIPS[currentTipIndex];

  return (
    <section className="features-section" id="features">
      <div className="container">
        
        {/* Section Header */}
        <div className="section-header">
          <div className="hub-tag">
            <Sparkles size={14} />
            <span>Essential Tools & Resources</span>
          </div>
          <h2 className="section-title">NSR Ecosystem Services</h2>
          <p className="section-subtitle">
            Everything you need for seamless employment verification, digital certificate trust, and compliance.
          </p>
        </div>

        {/* Dynamic 3-Column / Bento-Grid Layout */}
        <div className="bento-grid">
          
          {/* Bento Item 1: Exit Employment Exchange (EEE) Featured Card (Spans 2 cols) */}
          <div className="bento-card bento-hero-card glass-panel" id="eee">
            <div className="eee-bg-mesh"></div>
            <div className="eee-badge-row">
              <span className="badge badge-rose">Flagship Service</span>
              <span className="eee-sub-tag">NASSCOM TrustedSourcing</span>
            </div>

            <div className="eee-main-body">
              <h3 className="eee-heading">Exit Employment Exchange (EEE)</h3>
              <p className="eee-text">
                The industry-standard platform eliminating discrepancies in relieving dates, tenure, and exit clearance. Accelerate joining timelines and protect both employees and enterprises against fraudulent credentials.
              </p>

              <div className="eee-metrics-row">
                <div className="eee-metric">
                  <strong>85%</strong>
                  <span>Faster Verification Turnaround</span>
                </div>
                <div className="eee-metric">
                  <strong>Zero</strong>
                  <span>Tenure Discrepancy Risk</span>
                </div>
                <div className="eee-metric">
                  <strong>100%</strong>
                  <span>Employer Authorized</span>
                </div>
              </div>

              <div className="eee-btn-row">
                <button className="btn btn-primary" onClick={onOpenEeeModal}>
                  <span>Explore EEE Benefits</span>
                  <ChevronRight size={16} />
                </button>
                <a href="#professionals" className="btn btn-outline-primary">
                  <span>How it Protects You</span>
                </a>
              </div>
            </div>
          </div>

          {/* Bento Item 2: Tip of the Day Interactive Card */}
          <div className="bento-card tip-card glass-panel">
            <div className="tip-top-header">
              <div className="tip-badge">
                <Lightbulb size={16} className="text-amber" />
                <span>Tip of the Day</span>
              </div>
              <button 
                className="tip-refresh-btn" 
                onClick={nextTip}
                title="Next Tip"
              >
                <RefreshCw size={14} />
              </button>
            </div>

            <div className="tip-body">
              <span className="tip-category">{currentTip.tag}</span>
              <h4 className="tip-title">{currentTip.title}</h4>
              <p className="tip-desc">{currentTip.desc}</p>
            </div>

            <div className="tip-footer">
              <span className="tip-page-indicator">Tip {currentTipIndex + 1} of {TIPS.length}</span>
              <button className="btn-text-action" onClick={nextTip}>
                Next Tip →
              </button>
            </div>
          </div>

          {/* Bento Item 3: Facing Certificate Error? Root Certificate Center */}
          <div className="bento-card cert-card glass-panel" id="certificate">
            <div className="cert-header">
              <div className="cert-icon-box">
                <FileCode2 size={24} />
              </div>
              <span className="badge badge-cyan">Security & Trust</span>
            </div>

            <div className="cert-body">
              <h4 className="cert-title">Facing Certificate Error?</h4>
              <p className="cert-desc">
                Download and install official NSDL Root CA Certificates on your browser to ensure seamless and secure HTTPS encryption.
              </p>

              <div className="cert-specs">
                <div className="cert-spec-item">
                  <ShieldCheck size={14} className="text-emerald" />
                  <span>SHA-256 Bit Root Encryption</span>
                </div>
                <div className="cert-spec-item">
                  <CheckCircle2 size={14} className="text-emerald" />
                  <span>Chrome, Edge, Safari & Firefox Compatible</span>
                </div>
              </div>
            </div>

            <div className="cert-action-row">
              <button 
                className={`btn ${downloadedCert ? 'btn-primary' : 'btn-outline-primary'} w-full`}
                onClick={handleDownloadCert}
              >
                <Download size={16} />
                <span>{downloadedCert ? '✓ Root Certificate Downloaded' : 'Download Root Certificate'}</span>
              </button>
            </div>
          </div>

          {/* Bento Item 4: NSR Interactive Tour */}
          <div className="bento-card tour-card glass-panel" id="tour">
            <div className="tour-content">
              <div className="tour-badge">
                <PlayCircle size={16} />
                <span>Interactive Walkthrough</span>
              </div>
              <h4 className="tour-title">Take the NSR Digital Tour</h4>
              <p className="tour-desc">
                Discover the end-to-end NSR ecosystem for both Knowledge Professionals and Corporate Subscribers.
              </p>
              <div className="tour-cta-group">
                <button className="btn btn-danger btn-sm" onClick={() => onOpenTour('professionals')}>
                  <PlayCircle size={14} />
                  <span>For Professionals</span>
                </button>
                <button className="btn btn-outline-light btn-sm" onClick={() => onOpenTour('companies')}>
                  <PlayCircle size={14} />
                  <span>For Companies</span>
                </button>
              </div>
            </div>
          </div>

          {/* Bento Item 5: NSR Newsletter & NIR e-Insurance Link */}
          <div className="bento-card newsletter-card glass-panel">
            <div className="news-card-inner">
              <div className="newsletter-top">
                <Mail size={22} className="text-cyan" />
                <h4 className="news-title">NSR Insights & Circulars</h4>
              </div>
              <p className="news-desc">
                Subscribe to monthly policy updates, background checking benchmarks, and hiring intelligence.
              </p>
              <div className="newsletter-input-box">
                <input type="email" placeholder="Enter corporate or personal email" />
                <button className="btn btn-primary btn-sm">Subscribe</button>
              </div>
              <div className="nir-link-box">
                <a href="https://nir.ndml.in" target="_blank" rel="noreferrer" className="nir-anchor">
                  <span>Explore NIR (National Insurance Repository) by NSDL</span>
                  <ArrowUpRight size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
