import React, { useState } from 'react';
import { 
  UserCheck, UserPlus, KeyRound, FileCheck, CreditCard, 
  HelpCircle, ArrowRight, Building2, ShieldAlert, Sparkles, 
  CheckCircle2, Compass, FileText, ChevronRight, Lock, 
  Search, ShieldCheck, Zap, Download
} from 'lucide-react';
import './PersonaHub.css';

export default function PersonaHub({ 
  onOpenRegister, 
  onOpenLogin, 
  onOpenTour, 
  onOpenGrievance, 
  onOpenForgot, 
  onOpenEbcModal,
  onOpenAmcModal
}) {
  const [activeTab, setActiveTab] = useState('professionals'); // 'professionals' | 'companies'

  return (
    <section className="persona-section" id="professionals">
      <div className="container">
        
        {/* Section Header with Segmented Tab Switcher */}
        <div className="hub-top-container">
          <div className="hub-tag">
            <Sparkles size={14} className="text-cyan" />
            <span>Interactive Registry Gateway</span>
          </div>
          <h2 className="hub-main-title">Select Your Gateway Portal</h2>
          <p className="hub-subtitle">
            Whether you are an aspiring IT professional building career trust or an enterprise verifying global talent.
          </p>

          {/* Segmented Persona Tabs */}
          <div className="segmented-control">
            <button 
              className={`segment-btn ${activeTab === 'professionals' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('professionals')}
            >
              <UserCheck size={18} />
              <span>For Knowledge Professionals</span>
              {activeTab === 'professionals' && <div className="active-pill-glow"></div>}
            </button>

            <button 
              className={`segment-btn ${activeTab === 'companies' ? 'is-active' : ''}`}
              onClick={() => setActiveTab('companies')}
            >
              <Building2 size={18} />
              <span>For Companies & Verifiers</span>
              {activeTab === 'companies' && <div className="active-pill-glow"></div>}
            </button>
          </div>
        </div>

        {/* TAB 1: KNOWLEDGE PROFESSIONALS */}
        {activeTab === 'professionals' && (
          <div className="persona-content-grid animate-fade">
            
            {/* NEW USER SECTION CARD */}
            <div className="persona-card glass-panel new-user-card">
              <div className="card-ribbon ribbon-blue">FIRST TIME VISITOR</div>
              
              <div className="persona-card-header">
                <div className="icon-badge icon-badge-primary">
                  <UserPlus size={24} />
                </div>
                <div>
                  <h3 className="card-headline">New User Registration</h3>
                  <p className="card-sub">Create your lifetime ITPIN and secure your verified profile</p>
                </div>
              </div>

              <div className="action-items-list">
                {/* Main Highlight Action */}
                <div className="action-item primary-action-box" onClick={() => onOpenRegister()}>
                  <div className="action-item-left">
                    <div className="action-number">01</div>
                    <div>
                      <strong className="action-title">Register Now</strong>
                      <span className="action-desc">Fast 4-step digital onboarding with Aadhaar KYC</span>
                    </div>
                  </div>
                  <div className="action-btn-pill">
                    <span>Start</span>
                    <ArrowRight size={14} />
                  </div>
                </div>

                {/* Secondary Actions */}
                <div className="action-item" onClick={() => onOpenTour()}>
                  <div className="action-item-left">
                    <Compass size={18} className="item-icon text-cyan" />
                    <div>
                      <strong className="action-title">View Interactive Demo</strong>
                      <span className="action-desc">Watch how NSR profiles work in 2 minutes</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="chevron" />
                </div>

                <div className="action-item" onClick={() => onOpenRegister('resume')}>
                  <div className="action-item-left">
                    <FileText size={18} className="item-icon text-emerald" />
                    <div>
                      <strong className="action-title">Complete Your Pending Registration</strong>
                      <span className="action-desc">Resume using your Ack number or mobile OTP</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="chevron" />
                </div>

                <div className="action-item" onClick={() => onOpenTour()}>
                  <div className="action-item-left">
                    <Sparkles size={18} className="item-icon text-amber" />
                    <div>
                      <strong className="action-title">Registration Process Explained</strong>
                      <span className="action-desc">Understanding biometrics, verification & fees</span>
                    </div>
                  </div>
                  <ChevronRight size={16} className="chevron" />
                </div>
              </div>

              <div className="card-footer-tip">
                <CheckCircle2 size={15} className="text-emerald" />
                <span>Your ITPIN is globally recognized across 330+ top tech firms.</span>
              </div>
            </div>

            {/* ALREADY REGISTERED SECTION CARD */}
            <div className="persona-card glass-panel registered-user-card">
              <div className="card-ribbon ribbon-emerald">EXISTING MEMBER</div>

              <div className="persona-card-header">
                <div className="icon-badge icon-badge-emerald">
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className="card-headline">Already Registered?</h3>
                  <p className="card-sub">Manage your profile, renew maintenance, or check BGC status</p>
                </div>
              </div>

              <div className="action-items-grid">
                
                {/* Access Profile */}
                <div className="grid-action-card highlight-grid-card" onClick={() => onOpenLogin('professional')}>
                  <div className="grid-card-icon"><Lock size={18} /></div>
                  <div className="grid-card-content">
                    <strong>Access Your Profile</strong>
                    <span>Login via ITPIN or Email</span>
                  </div>
                  <ArrowRight size={14} className="grid-arrow" />
                </div>

                {/* Forgot Credentials */}
                <div className="grid-action-card" onClick={onOpenForgot}>
                  <div className="grid-card-icon"><KeyRound size={18} /></div>
                  <div className="grid-card-content">
                    <strong>Forgot ITPIN / Password</strong>
                    <span>Instant reset via registered phone</span>
                  </div>
                  <ChevronRight size={14} className="grid-arrow" />
                </div>

                {/* EBC Verification */}
                <div className="grid-action-card" onClick={onOpenEbcModal}>
                  <div className="grid-card-icon"><FileCheck size={18} /></div>
                  <div className="grid-card-content">
                    <strong>EBC Verification</strong>
                    <span>Employment Background Status</span>
                  </div>
                  <span className="mini-badge">Live Check</span>
                </div>

                {/* AMC Payment */}
                <div className="grid-action-card" onClick={onOpenAmcModal}>
                  <div className="grid-card-icon"><CreditCard size={18} /></div>
                  <div className="grid-card-content">
                    <strong>AMC Payment & Renewals</strong>
                    <span>Multi-year discount offers</span>
                  </div>
                  <span className="mini-badge badge-save">Save 20%</span>
                </div>

                {/* Query / Grievance */}
                <div className="grid-action-card" onClick={onOpenGrievance}>
                  <div className="grid-card-icon"><HelpCircle size={18} /></div>
                  <div className="grid-card-content">
                    <strong>Query / Grievance Redressal</strong>
                    <span>Submit and track tickets 24/7</span>
                  </div>
                  <ChevronRight size={14} className="grid-arrow" />
                </div>

                {/* Profile Guidance */}
                <div className="grid-action-card" onClick={onOpenTour}>
                  <div className="grid-card-icon"><Compass size={18} /></div>
                  <div className="grid-card-content">
                    <strong>Profile Access Guidance</strong>
                    <span>Step-by-step troubleshooting</span>
                  </div>
                  <ChevronRight size={14} className="grid-arrow" />
                </div>

              </div>

              <div className="card-footer-cta-strip">
                <span>Need immediate guidance on your profile access?</span>
                <button className="btn-text-link" onClick={onOpenGrievance}>Contact NSR Helpdesk →</button>
              </div>

            </div>

          </div>
        )}

        {/* TAB 2: COMPANIES & VERIFIERS */}
        {activeTab === 'companies' && (
          <div className="persona-content-grid animate-fade" id="companies">
            
            {/* Corporate Subscriber Portal */}
            <div className="persona-card glass-panel corporate-card">
              <div className="card-ribbon ribbon-blue">ENTERPRISE ACCESS</div>

              <div className="persona-card-header">
                <div className="icon-badge icon-badge-primary">
                  <Building2 size={24} />
                </div>
                <div>
                  <h3 className="card-headline">Subscriber Company Portal</h3>
                  <p className="card-sub">Access NSR candidate verification and employee management console</p>
                </div>
              </div>

              <div className="corporate-grid">
                <div className="corporate-action-item" onClick={() => onOpenLogin('company')}>
                  <div className="corp-icon"><Lock size={20} /></div>
                  <div>
                    <strong>Subscriber Company Login</strong>
                    <p>Secure portal login for registered HR & Compliance teams.</p>
                  </div>
                  <button className="btn btn-primary btn-sm">Enter Portal</button>
                </div>

                <div className="corporate-action-item" onClick={() => onOpenLogin('bgc')}>
                  <div className="corp-icon"><ShieldCheck size={20} /></div>
                  <div>
                    <strong>Background Checker (BGC) Console</strong>
                    <p>Authorized verification agency data entry & validation portal.</p>
                  </div>
                  <button className="btn btn-outline-primary btn-sm">BGC Login</button>
                </div>

                <div className="corporate-action-item" onClick={() => alert('Opening Empanelment application form...')}>
                  <div className="corp-icon"><Zap size={20} /></div>
                  <div>
                    <strong>Join as Subscriber Company</strong>
                    <p>Empanel your organization to streamline pre-employment screening.</p>
                  </div>
                  <button className="btn btn-danger btn-sm">Empanel Now</button>
                </div>
              </div>
            </div>

            {/* Exit Employment Exchange (EEE) */}
            <div className="persona-card glass-panel eee-summary-card">
              <div className="card-ribbon ribbon-emerald">EXCLUSIVE FEATURE</div>

              <div className="persona-card-header">
                <div className="icon-badge icon-badge-emerald">
                  <Sparkles size={24} />
                </div>
                <div>
                  <h3 className="card-headline">Exit Employment Exchange (EEE)</h3>
                  <p className="card-sub">Centralized repository of employee transition records</p>
                </div>
              </div>

              <div className="eee-content-body">
                <p className="eee-p">
                  NSR's <strong>Exit Employment Exchange (EEE)</strong> enables subscriber companies to record and verify accurate departure reasons, relieving letters, and transition clearance dates.
                </p>
                <div className="eee-features-list">
                  <div className="eee-feat-item">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Eliminates fake relieving letters & fraudulent tenure claims</span>
                  </div>
                  <div className="eee-feat-item">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Reduces background verification turn-around time by 80%</span>
                  </div>
                  <div className="eee-feat-item">
                    <CheckCircle2 size={16} className="text-emerald" />
                    <span>Secure API integration with your HRMS / Workday / SAP</span>
                  </div>
                </div>

                <div className="eee-cta-wrap">
                  <button className="btn btn-primary w-full" onClick={() => alert('Accessing Exit Employment Exchange Console...')}>
                    <span>Access EEE Corporate Console</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}

      </div>
    </section>
  );
}
