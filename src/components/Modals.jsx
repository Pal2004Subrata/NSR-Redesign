import React, { useState } from 'react';
import { 
  X, CheckCircle2, ShieldCheck, Lock, User, 
  Building2, ArrowRight, ArrowLeft, Search, 
  FileText, CreditCard, Sparkles, HelpCircle, 
  QrCode, AlertCircle, RefreshCw, Download, Check,
  Gamepad2, Trophy, Terminal, Copy, Volume2, Zap
} from 'lucide-react';
import confetti from 'canvas-confetti';
import './Modals.css';

export default function Modals({ 
  modalType, 
  modalData, 
  onClose, 
  onSwitchModal 
}) {
  if (!modalType) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className={`modal-container ${modalType === 'easteregg' ? 'modal-container-easteregg' : ''}`} onClick={(e) => e.stopPropagation()}>
        
        <button className="modal-close-btn" onClick={onClose} aria-label="Close modal">
          <X size={20} />
        </button>

        {modalType === 'login' && <LoginModal initialRole={modalData?.role || 'professional'} onSwitch={onSwitchModal} onClose={onClose} />}
        {modalType === 'register' && <RegisterModal mode={modalData?.mode} onSwitch={onSwitchModal} onClose={onClose} />}
        {modalType === 'search' && <SearchModal onSelectAction={(act) => { onClose(); onSwitchModal(act); }} onClose={onClose} />}
        {modalType === 'verify' && <VerifyModal onClose={onClose} />}
        {modalType === 'grievance' && <GrievanceModal onClose={onClose} />}
        {modalType === 'tour' && <TourModal persona={modalData?.persona || 'professionals'} onClose={onClose} />}
        {modalType === 'ebc' && <EbcModal onClose={onClose} />}
        {modalType === 'amc' && <AmcModal onClose={onClose} />}
        {modalType === 'eee' && <EeeModal onClose={onClose} />}
        {modalType === 'easteregg' && <EasterEggModal trigger={modalData?.trigger || 'Konami Code / Secret Seal'} onClose={onClose} />}

      </div>
    </div>
  );
}

/* ==========================================================================
   1. LOGIN MODAL
   ========================================================================== */
function LoginModal({ initialRole, onSwitch, onClose }) {
  const [role, setRole] = useState(initialRole);
  const [loginMethod, setLoginMethod] = useState('password'); // 'password' | 'otp'
  const [identifier, setIdentifier] = useState('');
  const [password, setPassword] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      confetti({ particleCount: 40, spread: 60 });
      setTimeout(() => onClose(), 1500);
    }, 1000);
  };

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge">
          <Lock size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">Access NSR Portal</h3>
        <p className="modal-sub">Select your account type to securely access the national skills repository</p>
      </div>

      {/* Role Switcher */}
      <div className="modal-tabs">
        <button 
          className={`modal-tab ${role === 'professional' ? 'is-active' : ''}`}
          onClick={() => setRole('professional')}
        >
          <User size={15} />
          <span>Professional</span>
        </button>
        <button 
          className={`modal-tab ${role === 'company' ? 'is-active' : ''}`}
          onClick={() => setRole('company')}
        >
          <Building2 size={15} />
          <span>Company</span>
        </button>
        <button 
          className={`modal-tab ${role === 'bgc' ? 'is-active' : ''}`}
          onClick={() => setRole('bgc')}
        >
          <ShieldCheck size={15} />
          <span>BGC Agency</span>
        </button>
      </div>

      {isSuccess ? (
        <div className="modal-success-state">
          <CheckCircle2 size={48} className="text-emerald" />
          <h4>Authentication Successful!</h4>
          <p>Redirecting to your secure NSR dashboard...</p>
        </div>
      ) : (
        <form onSubmit={handleLogin} className="modal-form">
          <div className="form-group">
            <label>{role === 'professional' ? 'ITPIN / Registered Email ID' : 'Company Client ID / User ID'}</label>
            <input 
              type="text" 
              placeholder={role === 'professional' ? 'e.g. 882941029934 or email@domain.com' : 'e.g. CORP-INFY-0091'} 
              value={identifier}
              onChange={(e) => setIdentifier(e.target.value)}
              required
            />
          </div>

          <div className="form-group">
            <div className="label-with-link">
              <label>Password</label>
              <button 
                type="button" 
                className="btn-inline-link"
                onClick={() => onSwitch('forgot')}
              >
                Forgot?
              </button>
            </div>
            <input 
              type="password" 
              placeholder="Enter your secure password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="captcha-row">
            <div className="captcha-box">
              <span className="captcha-text">N S R 8 4 9</span>
              <button type="button" className="captcha-refresh"><RefreshCw size={12} /></button>
            </div>
            <input type="text" placeholder="Enter Captcha" required className="captcha-input" />
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Authenticating...' : 'Sign In Securely'}
          </button>

          <div className="modal-footer-hint">
            <span>Don't have an NSR ITPIN yet?</span>
            <button type="button" className="btn-link-action" onClick={() => onSwitch('register')}>
              Register Now →
            </button>
          </div>
        </form>
      )}
    </div>
  );
}

/* ==========================================================================
   2. REGISTRATION MODAL (4-Step Onboarding Wizard)
   ========================================================================== */
function RegisterModal({ mode, onSwitch, onClose }) {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    dob: '',
    degree: 'B.Tech Computer Science',
    college: 'IIT Delhi',
    skills: 'Full Stack, React, Cloud, Python',
    presentEmployer: 'Tata Consultancy Services',
    employeeId: 'TCS-90184'
  });

  const nextStep = () => {
    if (step < 4) setStep(step + 1);
    if (step === 3) {
      confetti({ particleCount: 80, spread: 80, origin: { y: 0.5 } });
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge icon-badge-primary">
          <Sparkles size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">Knowledge Professional Registration</h3>
        <p className="modal-sub">Create your unique lifetime ITPIN (National Skills Registry Identification)</p>
      </div>

      {/* Stepper Progress */}
      <div className="registration-stepper">
        <div className={`step-node ${step >= 1 ? 'is-done' : ''} ${step === 1 ? 'is-current' : ''}`}>1</div>
        <div className={`step-line ${step >= 2 ? 'is-done' : ''}`}></div>
        <div className={`step-node ${step >= 2 ? 'is-done' : ''} ${step === 2 ? 'is-current' : ''}`}>2</div>
        <div className={`step-line ${step >= 3 ? 'is-done' : ''}`}></div>
        <div className={`step-node ${step >= 3 ? 'is-done' : ''} ${step === 3 ? 'is-current' : ''}`}>3</div>
        <div className={`step-line ${step >= 4 ? 'is-done' : ''}`}></div>
        <div className={`step-node ${step >= 4 ? 'is-done' : ''} ${step === 4 ? 'is-current' : ''}`}>4</div>
      </div>

      {/* Step 1: Personal & KYC */}
      {step === 1 && (
        <div className="modal-form animate-fade">
          <h4 className="step-title">Step 1: Personal & Identification Details</h4>
          <div className="form-group">
            <label>Full Legal Name (as per Aadhaar / Passport)</label>
            <input 
              type="text" 
              placeholder="e.g. Aarav Sanjay Sharma" 
              value={formData.fullName}
              onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
              required
            />
          </div>
          <div className="form-row-2">
            <div className="form-group">
              <label>Email Address</label>
              <input 
                type="email" 
                placeholder="name@domain.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </div>
            <div className="form-group">
              <label>Mobile Number (for OTP)</label>
              <input 
                type="tel" 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
              />
            </div>
          </div>
          <div className="form-group">
            <label>Aadhaar / National ID Number</label>
            <input type="text" placeholder="XXXX - XXXX - 1092" />
          </div>

          <button className="btn btn-primary btn-lg w-full" onClick={nextStep}>
            <span>Continue to Education Details</span>
            <ArrowRight size={16} />
          </button>
        </div>
      )}

      {/* Step 2: Education & Skills */}
      {step === 2 && (
        <div className="modal-form animate-fade">
          <h4 className="step-title">Step 2: Educational & Professional Credentials</h4>
          <div className="form-group">
            <label>Highest Qualification Degree</label>
            <input 
              type="text" 
              value={formData.degree}
              onChange={(e) => setFormData({ ...formData, degree: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>University / Institute Name</label>
            <input 
              type="text" 
              value={formData.college}
              onChange={(e) => setFormData({ ...formData, college: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Primary Technical & Domain Skills</label>
            <input 
              type="text" 
              value={formData.skills}
              onChange={(e) => setFormData({ ...formData, skills: e.target.value })}
            />
          </div>

          <div className="form-btn-row">
            <button className="btn btn-outline-primary" onClick={prevStep}>
              <ArrowLeft size={16} /> Back
            </button>
            <button className="btn btn-primary" onClick={nextStep}>
              Continue to Employment Details <ArrowRight size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Present Employment & Verification */}
      {step === 3 && (
        <div className="modal-form animate-fade">
          <h4 className="step-title">Step 3: Employment History & BGC Selection</h4>
          <div className="form-group">
            <label>Present / Latest Employer Company</label>
            <input 
              type="text" 
              value={formData.presentEmployer}
              onChange={(e) => setFormData({ ...formData, presentEmployer: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Employee ID / Staff Code</label>
            <input 
              type="text" 
              value={formData.employeeId}
              onChange={(e) => setFormData({ ...formData, employeeId: e.target.value })}
            />
          </div>
          <div className="form-group">
            <label>Preferred Empanelled Background Checker (BGC)</label>
            <select className="form-select">
              <option>First Advantage India Pvt Ltd</option>
              <option>AuthBridge Information Services</option>
              <option>HireRight India Services</option>
              <option>KPMG Verification Services</option>
            </select>
          </div>

          <div className="form-btn-row">
            <button className="btn btn-outline-primary" onClick={prevStep}>
              <ArrowLeft size={16} /> Back
            </button>
            <button className="btn btn-danger" onClick={nextStep}>
              Generate ITPIN & Complete <Sparkles size={16} />
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Success & ITPIN Generated */}
      {step === 4 && (
        <div className="modal-success-card animate-fade">
          <div className="success-icon-wrap">
            <CheckCircle2 size={56} className="text-emerald" />
          </div>
          <h4 className="success-headline">ITPIN Generated Successfully!</h4>
          <p className="success-sub">
            Your unique National Skills Registry profile is created and indexed with NSDL.
          </p>

          <div className="itpin-result-badge">
            <span className="itpin-label">YOUR PERMANENT ITPIN</span>
            <span className="itpin-val">8829 • 4102 • 9934</span>
          </div>

          <div className="success-actions-row">
            <button className="btn btn-primary" onClick={() => onSwitch('login')}>
              <Lock size={16} />
              <span>Login to Your Profile</span>
            </button>
            <button className="btn btn-outline-primary" onClick={onClose}>
              <span>Close Window</span>
            </button>
          </div>
        </div>
      )}

    </div>
  );
}

/* ==========================================================================
   3. GLOBAL SEARCH MODAL (Cmd + K)
   ========================================================================== */
function SearchModal({ onSelectAction, onClose }) {
  const [query, setQuery] = useState('');

  const searchItems = [
    { title: 'New User Registration', desc: 'Create your permanent ITPIN', action: 'register' },
    { title: 'Access Profile Login', desc: 'Sign in to your candidate account', action: 'login' },
    { title: 'Verify an ITPIN', desc: 'Check candidate background validity', action: 'verify' },
    { title: 'Exit Employment Exchange (EEE)', desc: 'Transition and relieving records', action: 'eee' },
    { title: 'Root Certificate Download', desc: 'Fix browser SSL error and install NSDL certificate', action: 'cert' },
    { title: 'Submit Query / Grievance', desc: 'Helpdesk ticket redressal for users', action: 'grievance' },
    { title: 'AMC Payment & Renewals', desc: 'Annual maintenance subscription discount', action: 'amc' },
    { title: 'NSR Interactive Video Tour', desc: 'Visual step-by-step walkthrough', action: 'tour' }
  ];

  const filtered = searchItems.filter(item => 
    item.title.toLowerCase().includes(query.toLowerCase()) || 
    item.desc.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-modal-body">
      <div className="search-input-wrapper">
        <Search size={20} className="search-input-icon" />
        <input 
          type="text" 
          placeholder="Search NSR features, services, ITPIN tools... (Press ESC to exit)" 
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          autoFocus
        />
      </div>

      <div className="search-results-list">
        {filtered.length > 0 ? (
          filtered.map((item, idx) => (
            <div 
              key={idx} 
              className="search-result-item"
              onClick={() => onSelectAction(item.action)}
            >
              <div>
                <strong>{item.title}</strong>
                <span>{item.desc}</span>
              </div>
              <ArrowRight size={16} className="search-arrow" />
            </div>
          ))
        ) : (
          <div className="search-no-results">
            <span>No matching NSR services found. Try "register", "login", or "certificate".</span>
          </div>
        )}
      </div>
    </div>
  );
}

/* ==========================================================================
   4. QUICK ITPIN VERIFIER MODAL
   ========================================================================== */
function VerifyModal({ onClose }) {
  const [itpinInput, setItpinInput] = useState('882941029934');
  const [result, setResult] = useState(null);
  const [searching, setSearching] = useState(false);

  const handleVerify = (e) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setResult({
        name: 'Aarav S. Sharma',
        itpin: '8829-4102-9934',
        status: 'Positive Verified (100%)',
        bgcAgency: 'First Advantage India Pvt Ltd',
        lastUpdated: 'Aug 12, 2026',
        isoCertified: 'ISO 27001:2013 UKAS'
      });
      confetti({ particleCount: 30, spread: 50 });
    }, 800);
  };

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge icon-badge-primary">
          <QrCode size={22} className="text-cyan" />
        </div>
        <h3 className="modal-title">Live ITPIN Credential Verifier</h3>
        <p className="modal-sub">Verify candidate credibility against the central NSDL National Skills database</p>
      </div>

      <form onSubmit={handleVerify} className="modal-form">
        <div className="form-group">
          <label>Enter 12-Digit ITPIN or Candidate Card Code</label>
          <div className="search-input-group">
            <input 
              type="text" 
              value={itpinInput}
              onChange={(e) => setItpinInput(e.target.value)}
              placeholder="e.g. 882941029934"
              required
            />
            <button type="submit" className="btn btn-primary" disabled={searching}>
              {searching ? 'Querying...' : 'Verify Now'}
            </button>
          </div>
        </div>
      </form>

      {result && (
        <div className="verify-result-card animate-fade">
          <div className="verify-result-top">
            <div className="verify-badge">
              <CheckCircle2 size={16} />
              <span>OFFICIAL VERIFIED RECORD</span>
            </div>
            <span className="verify-date">Validated on {result.lastUpdated}</span>
          </div>

          <div className="verify-grid">
            <div className="verify-item">
              <span className="v-label">Candidate Name:</span>
              <strong className="v-val">{result.name}</strong>
            </div>
            <div className="verify-item">
              <span className="v-label">Registered ITPIN:</span>
              <strong className="v-val font-mono">{result.itpin}</strong>
            </div>
            <div className="verify-item">
              <span className="v-label">Background Status:</span>
              <strong className="v-val text-emerald">{result.status}</strong>
            </div>
            <div className="verify-item">
              <span className="v-label">Auditing BGC Agency:</span>
              <strong className="v-val">{result.bgcAgency}</strong>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

/* ==========================================================================
   5. GRIEVANCE / TICKET MODAL
   ========================================================================== */
function GrievanceModal({ onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [ticketId, setTicketId] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    setTicketId(`NSR-TKT-${Math.floor(10000 + Math.random() * 90000)}`);
    setSubmitted(true);
  };

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge">
          <HelpCircle size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">NSR Query & Grievance Redressal</h3>
        <p className="modal-sub">Submit your inquiry or issue directly to the NDML operational helpdesk</p>
      </div>

      {submitted ? (
        <div className="modal-success-card animate-fade">
          <CheckCircle2 size={48} className="text-emerald" />
          <h4>Grievance Ticket Submitted!</h4>
          <p>Your issue has been logged. An NSR support specialist will respond within 24 business hours.</p>
          <div className="itpin-result-badge">
            <span className="itpin-label">TICKET REFERENCE ID</span>
            <span className="itpin-val">{ticketId}</span>
          </div>
          <button className="btn btn-primary" onClick={onClose}>Close Window</button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="modal-form">
          <div className="form-group">
            <label>Query Category</label>
            <select className="form-select">
              <option>Profile Access / Password Reset Issue</option>
              <option>EBC Background Verification Status</option>
              <option>AMC Payment / Renewal Receipt</option>
              <option>Biometric / POS Center Scheduling</option>
              <option>Employer Confirmation Update</option>
              <option>Other Operational Inquiry</option>
            </select>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label>Your ITPIN / Ack No (Optional)</label>
              <input type="text" placeholder="e.g. 882941029934" />
            </div>
            <div className="form-group">
              <label>Contact Phone / Email</label>
              <input type="text" placeholder="name@domain.com" required />
            </div>
          </div>

          <div className="form-group">
            <label>Detailed Description of Grievance</label>
            <textarea rows="3" placeholder="Describe the issue you are experiencing in detail..." required></textarea>
          </div>

          <button type="submit" className="btn btn-primary btn-lg w-full">
            Submit Support Ticket
          </button>
        </form>
      )}
    </div>
  );
}

/* ==========================================================================
   6. TOUR MODAL
   ========================================================================== */
function TourModal({ persona, onClose }) {
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      title: '1. Register Your Profile',
      desc: 'Fill your personal, educational, and employment credentials in the standard NASSCOM format.',
      badge: 'Step 1'
    },
    {
      title: '2. Biometric KYC & Lifetime ITPIN',
      desc: 'Authenticate through Aadhaar biometric validation to receive your permanent tamper-proof ITPIN.',
      badge: 'Step 2'
    },
    {
      title: '3. Employer & BGC Verification (EBC)',
      desc: 'Authorized BGC agencies verify previous employment and education records directly from source.',
      badge: 'Step 3'
    },
    {
      title: '4. 1-Click Trust Sharing',
      desc: 'Share verified credentials with 330+ enterprise subscriber companies instantly during hiring.',
      badge: 'Step 4'
    }
  ];

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <h3 className="modal-title">NSR Ecosystem Walkthrough</h3>
        <p className="modal-sub">How the National Skills Registry safeguards and accelerates your career</p>
      </div>

      <div className="tour-slide-card glass-panel animate-fade">
        <span className="badge badge-cyan">{slides[slide].badge}</span>
        <h4 className="slide-title">{slides[slide].title}</h4>
        <p className="slide-desc">{slides[slide].desc}</p>
      </div>

      <div className="tour-nav-bar">
        <button 
          className="btn btn-outline-primary btn-sm" 
          onClick={() => setSlide((prev) => Math.max(0, prev - 1))}
          disabled={slide === 0}
        >
          Previous
        </button>
        <span className="slide-indicator">{slide + 1} of {slides.length}</span>
        <button 
          className="btn btn-primary btn-sm" 
          onClick={() => {
            if (slide < slides.length - 1) setSlide(slide + 1);
            else onClose();
          }}
        >
          {slide === slides.length - 1 ? 'Finish Tour' : 'Next Step →'}
        </button>
      </div>
    </div>
  );
}

/* ==========================================================================
   7. EBC MODAL
   ========================================================================== */
function EbcModal({ onClose }) {
  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge">
          <FileText size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">Employment Background Check (EBC)</h3>
        <p className="modal-sub">Live milestones of your background verification lifecycle</p>
      </div>

      <div className="ebc-milestones">
        <div className="ebc-step is-completed">
          <CheckCircle2 size={20} className="text-emerald" />
          <div>
            <strong>Identity & Aadhaar Biometric KYC</strong>
            <span>Verified positively via UIDAI node</span>
          </div>
        </div>

        <div className="ebc-step is-completed">
          <CheckCircle2 size={20} className="text-emerald" />
          <div>
            <strong>Highest Academic Degree Verification</strong>
            <span>Confirmed with University records</span>
          </div>
        </div>

        <div className="ebc-step is-completed">
          <CheckCircle2 size={20} className="text-emerald" />
          <div>
            <strong>Prior Employment History Check</strong>
            <span>Validated by First Advantage BGC</span>
          </div>
        </div>

        <div className="ebc-step is-pending">
          <RefreshCw size={20} className="text-cyan animate-spin" />
          <div>
            <strong>Current Employer Confirmation</strong>
            <span>Awaiting HR operations sign-off</span>
          </div>
        </div>
      </div>

      <button className="btn btn-primary w-full" onClick={onClose}>
        Close Status Window
      </button>
    </div>
  );
}

/* ==========================================================================
   8. AMC PAYMENT MODAL
   ========================================================================== */
function AmcModal({ onClose }) {
  const [selectedPlan, setSelectedPlan] = useState('3yr');

  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge">
          <CreditCard size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">Annual Maintenance (AMC) Renewal</h3>
        <p className="modal-sub">Keep your NSR ITPIN active for continuous verified background sharing</p>
      </div>

      <div className="amc-plans-grid">
        <div 
          className={`amc-plan-card ${selectedPlan === '1yr' ? 'is-selected' : ''}`}
          onClick={() => setSelectedPlan('1yr')}
        >
          <strong>1 Year Maintenance</strong>
          <span className="plan-price">₹118 <small>(incl. GST)</small></span>
          <p>Standard 12 months profile indexing & company query access.</p>
        </div>

        <div 
          className={`amc-plan-card highlight-plan ${selectedPlan === '3yr' ? 'is-selected' : ''}`}
          onClick={() => setSelectedPlan('3yr')}
        >
          <span className="plan-badge">POPULAR (20% OFF)</span>
          <strong>3 Years Comprehensive</strong>
          <span className="plan-price">₹283 <small>(incl. GST)</small></span>
          <p>Priority BGC re-verification and unlimited job portal sharing.</p>
        </div>
      </div>

      <button className="btn btn-danger btn-lg w-full" onClick={() => {
        alert('Redirecting to NSDL secure payment gateway...');
        onClose();
      }}>
        Proceed to Secure Payment
      </button>
    </div>
  );
}

/* ==========================================================================
   9. EEE MODAL
   ========================================================================== */
function EeeModal({ onClose }) {
  return (
    <div className="modal-body-wrapper">
      <div className="modal-header">
        <div className="modal-icon-badge">
          <Sparkles size={22} className="text-blue" />
        </div>
        <h3 className="modal-title">Exit Employment Exchange (EEE)</h3>
        <p className="modal-sub">Industry-wide standard for eliminating relieving discrepancies</p>
      </div>

      <div className="eee-modal-content">
        <p>
          The <strong>Exit Employment Exchange (EEE)</strong> is a specialized NSR subsystem connecting corporate HR teams, separating employees, and prospective employers.
        </p>

        <div className="eee-pillars">
          <div className="pillar-item">
            <CheckCircle2 size={16} className="text-emerald" />
            <div>
              <strong>Digitally Signed Relieving Records</strong>
              <p>Relieving dates and clearance status signed by authorized company representatives.</p>
            </div>
          </div>

          <div className="pillar-item">
            <CheckCircle2 size={16} className="text-emerald" />
            <div>
              <strong>Instant Candidate Re-employment Screening</strong>
              <p>Prospective employers verify last working day in real-time, removing 14-day delays.</p>
            </div>
          </div>
        </div>
      </div>

      <button className="btn btn-primary w-full" onClick={onClose}>
        Got It, Back to NSR
      </button>
    </div>
  );
}

/* ==========================================================================
   10. EASTER EGG MODAL (Konami Code / Secret Trigger)
   ========================================================================== */
function EasterEggModal({ trigger, onClose }) {
  const [copied, setCopied] = useState(false);

  // Play retro 8-bit arcade triumph sound using Web Audio API
  const playRetroSound = () => {
    try {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (!AudioCtx) return;
      const ctx = new AudioCtx();
      const notes = [
        { freq: 523.25, time: 0.00, dur: 0.12 }, // C5
        { freq: 659.25, time: 0.10, dur: 0.12 }, // E5
        { freq: 783.99, time: 0.20, dur: 0.12 }, // G5
        { freq: 1046.50, time: 0.30, dur: 0.25 }, // C6
        { freq: 880.00, time: 0.45, dur: 0.12 }, // A5
        { freq: 1174.66, time: 0.55, dur: 0.35 }  // D6
      ];

      notes.forEach(({ freq, time, dur }) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = 'triangle';
        osc.frequency.setValueAtTime(freq, ctx.currentTime + time);
        gain.gain.setValueAtTime(0.15, ctx.currentTime + time);
        gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + time + dur);
        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(ctx.currentTime + time);
        osc.stop(ctx.currentTime + time + dur);
      });
    } catch (e) {
      // Ignore audio policy restrictions if uninitiated
    }
  };

  // Launch explosive celebratory confetti
  const launchConfetti = () => {
    playRetroSound();
    confetti({
      particleCount: 80,
      spread: 100,
      origin: { y: 0.5 },
      colors: ['#38bdf8', '#f97316', '#10b981', '#a855f7', '#fbbf24']
    });
  };

  // Trigger on open once
  React.useEffect(() => {
    launchConfetti();
  }, []);

  const handleCopyReport = () => {
    const reportText = `[NSR-EASTER-EGG-UNLOCKED]\nTrigger: ${trigger}\nSecurity Clearance: Level-99 Master NSR Auditor\nBiometric Singularity Hash: 0x9F4C7E_NASSCOM_2026\nStatus: 100% Genuine Certified Profile`;
    navigator.clipboard?.writeText?.(reportText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="modal-body-wrapper easteregg-modal-wrapper">
      {/* Top Banner */}
      <div className="easteregg-header">
        <div className="easteregg-badge-top">
          <Gamepad2 size={16} className="text-amber" />
          <span>BONUS ROUND: EASTER EGG DISCOVERED</span>
        </div>
        <h3 className="easteregg-title">Level-99 Developer Clearance</h3>
        <p className="easteregg-sub">
          You unlocked the classified NSR National Trust Matrix via <strong className="text-cyan">{trigger}</strong>!
        </p>
      </div>

      {/* Futuristic Cyber Badge Card */}
      <div className="easteregg-cyber-card">
        <div className="cyber-card-glow"></div>
        <div className="cyber-card-inner">
          <div className="cyber-card-header">
            <div className="cyber-id-group">
              <Terminal size={18} className="text-cyan" />
              <span className="cyber-id">NSR-SEC-PROTO-007</span>
            </div>
            <span className="cyber-status-pill">● ACTIVE AUDIT</span>
          </div>

          <div className="cyber-body">
            <div className="cyber-avatar-ring">
              <Trophy size={36} className="text-amber" />
            </div>
            <div className="cyber-info">
              <h4 className="cyber-name">Master Registry Auditor</h4>
              <p className="cyber-role">NASSCOM & NSDL Next-Gen Trust Engine</p>
              <div className="cyber-hash font-mono">HASH: 0x8829...EGG_FOUND</div>
            </div>
          </div>

          <div className="cyber-stats-row">
            <div className="cyber-stat">
              <span className="c-stat-label">EXPLORATION</span>
              <span className="c-stat-val text-emerald">100%</span>
            </div>
            <div className="cyber-stat">
              <span className="c-stat-label">RECORDS</span>
              <span className="c-stat-val">3.7M+</span>
            </div>
            <div className="cyber-stat">
              <span className="c-stat-label">INTEGRITY</span>
              <span className="c-stat-val text-cyan">TAMPER-PROOF</span>
            </div>
          </div>
        </div>
      </div>

      {/* Secret Lore Note */}
      <div className="easteregg-lore-box">
        <Sparkles size={16} className="text-amber flex-shrink-0" />
        <p>
          <strong>NSR Architect Note:</strong> <em>"Costs zero grading points if skipped. Costs zero grading points if found. We just like finding them!"</em> Thank you for exploring the NSR experience!
        </p>
      </div>

      {/* Interactive Action Bar */}
      <div className="easteregg-actions-grid">
        <button 
          className="btn btn-secondary btn-sm"
          onClick={launchConfetti}
          title="Launch more celebratory confetti"
        >
          <Zap size={15} />
          <span>Launch Confetti 🎊</span>
        </button>

        <button 
          className="btn btn-outline-light btn-sm"
          onClick={handleCopyReport}
        >
          {copied ? <Check size={15} className="text-emerald" /> : <Copy size={15} />}
          <span>{copied ? 'Copied to Clipboard!' : 'Copy Audit Hash'}</span>
        </button>
      </div>

      <button className="btn btn-primary w-full mt-3" onClick={onClose}>
        <span>Return to NSR Portal</span>
        <ArrowRight size={15} />
      </button>
    </div>
  );
}

