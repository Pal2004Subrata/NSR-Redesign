import React, { useState, useEffect } from 'react';
import { 
  Compass, ShieldCheck, Database, Award, Users, 
  Workflow, CheckCircle2, TrendingUp, Cpu, Lock, 
  UserCheck, Building2, FileCheck, ExternalLink, 
  ChevronRight, ArrowRight, Sparkles, Download, Mail, 
  Calendar, Layers, FileText, Check, AlertCircle,
  Globe, Activity
} from 'lucide-react';
import './KnowNsr.css';

const MILESTONE_YEARS = {
  2021: [
    "NSR crossed 2 million registrations.",
    "2,54,124 new registrations completed. Highest ever new registrations in NSR in any single year.",
    "33 new enterprise companies joined as NSR subscriber members."
  ],
  2020: [
    "Crossed 1.8 Million active ITPINs with nationwide cloud biometric verification nodes.",
    "45 new enterprise subscribers empanelled across IT & FinTech sectors."
  ],
  2019: [
    "Launched Exit Employment Exchange (EEE) interface across subscriber HRMS networks.",
    "Introduced automated webhook data sync for enterprise Workday and SAP instances."
  ],
  2018: [
    "Automated Aadhaar QR e-KYC integration introduced for candidate instant digital onboarding.",
    "Surpassed 300 subscriber companies on the registry."
  ],
  2017: [
    "ISO 27001:2013 UKAS recertification achieved with zero non-conformances.",
    "Extended NSR coverage to Banking, Financial Services & Insurance (BFSI) enterprises."
  ],
  2016: [
    "Crossed 1.5 Million ITPIN milestone with pan-India Point of Service (POS) network."
  ],
  2015: [
    "Standardized Background Verification (EBC) Turnaround Time SLA framework introduced."
  ],
  2010: [
    "Reached 1 Million registered IT & BPO knowledge professionals."
  ],
  2006: [
    "Genesis of NSR - National Skills Registry officially inaugurated by NASSCOM & NDML."
  ]
};

const STEERING_MEMBERS = [
  { name: 'Srikanth Srinivasan', role: 'Chairman', org: 'nasscom', color: '#e11d48' },
  { name: 'Kumar Visvanathan', role: 'Member', org: 'LTIMindtree Limited', color: '#0284c7' },
  { name: 'Baswaraj K', role: 'Member', org: 'Infosys Limited', color: '#2563eb' },
  { name: 'Syed Nizamuddin', role: 'Member', org: 'IBM India Private Limited', color: '#1d4ed8' },
  { name: 'Anju Mehra', role: 'Member', org: 'Fidelity Investments', color: '#059669' },
  { name: 'Sateshkumar K', role: 'Member', org: 'Tata Consultancy Services', color: '#0284c7' },
  { name: 'Vikram Samanth', role: 'Member', org: 'Infosys BPM Limited', color: '#2563eb' },
  { name: 'Mohua Barman', role: 'Member', org: 'Goldman Sachs', color: '#d97706' },
  { name: 'Anirban Mandal', role: 'Member', org: 'nasscom', color: '#e11d48' },
  { name: 'Vijay Gupta', role: 'Member', org: 'NSDL Database Management Limited', color: '#0284c7' },
  { name: 'Ms. Shruti Sampanna', role: 'Member', org: 'NSDL Database Management Limited', color: '#0284c7' },
  { name: 'Mr. Abhishek Vyas', role: 'Member', org: 'NSDL Database Management Limited', color: '#0284c7' }
];

export default function KnowNsr({ initialTab = 'context', onNavigateHome, onOpenRegister, onOpenTour, onOpenGrievance }) {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [selectedMilestoneYear, setSelectedMilestoneYear] = useState(2021);

  useEffect(() => {
    if (initialTab) setActiveTab(initialTab);
  }, [initialTab]);

  const navItems = [
    { id: 'context', label: 'NSR Context', icon: Compass },
    { id: 'attributes', label: 'NSR Attributes', icon: ShieldCheck },
    { id: 'users', label: 'Users & Service Providers', icon: Users },
    { id: 'processes', label: 'NSR Process Flows', icon: Workflow },
    { id: 'benefits', label: 'NSR Benefits', icon: Award },
    { id: 'milestones', label: 'NSR Milestones', icon: TrendingUp },
    { id: 'system-features', label: 'NSR System Features', icon: Cpu },
    { id: 'security-features', label: 'NSR Security Features', icon: Lock },
    { id: 'steering-committee', label: 'NSR Steering Committee', icon: UserCheck },
    { id: 'empanelled-checkers', label: 'Empanelment of Background Checkers', icon: FileCheck }
  ];

  return (
    <div className="know-page-wrapper">
      
      {/* Hero Header */}
      <section className="know-hero-section">
        <div className="container">
          <div className="know-breadcrumbs">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Know NSR</span>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-active-tag">{navItems.find(i => i.id === activeTab)?.label}</span>
          </div>

          <div className="know-hero-content">
            <span className="badge badge-cyan">Comprehensive Knowledge Base</span>
            <h1 className="know-hero-title">Know National Skills Registry (NSR)</h1>
            <p className="know-hero-subtitle">
              Explore the foundational architecture, processes, security protocols, governance committees, and empanelment standards that power India's central IT credentials network.
            </p>
          </div>
        </div>
      </section>

      {/* Main Tabbed Layout */}
      <section className="know-body-section">
        <div className="container know-layout-grid">
          
          {/* Left Navigation Sidebar */}
          <aside className="know-sidebar">
            <div className="know-sidebar-panel glass-panel">
              <span className="know-sidebar-title">KNOW NSR SECTIONS</span>
              
              <div className="know-nav-menu">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.id}
                      className={`know-nav-btn ${activeTab === item.id ? 'is-active' : ''}`}
                      onClick={() => {
                        setActiveTab(item.id);
                        window.scrollTo({ top: 320, behavior: 'smooth' });
                      }}
                    >
                      <Icon size={16} className="know-btn-icon" />
                      <span>{item.label}</span>
                      <ChevronRight size={14} className="know-btn-arrow" />
                    </button>
                  );
                })}
              </div>

              <div className="know-sidebar-cta">
                <strong>Ready to get started?</strong>
                <p>Register your verified professional profile on NSR.</p>
                <button className="btn btn-primary btn-sm w-full" onClick={onOpenRegister}>
                  <span>Register Profile</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </aside>

          {/* Right Dynamic Tab Content */}
          <main className="know-content-area">
            
            {/* ===================================================================
                TAB 1: NSR CONTEXT
                =================================================================== */}
            {activeTab === 'context' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-blue-subtle"><Compass size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Industry Genesis</span>
                    <h2 className="pane-title">NSR Context & Industry Background</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    The Indian IT and ITeS / BPO industry has witnessed phenomenal global growth, becoming the premier destination for offshore technology services and business process management. With this exponential scale came the vital imperative of ensuring **uncompromised information security, client trust, and workforce credibility**.
                  </p>

                  <div className="callout-box callout-blue">
                    <div className="callout-top">
                      <Sparkles size={18} className="text-blue" />
                      <strong>The Imperative for National Skill Certification</strong>
                    </div>
                    <p>
                      Global clients placing multi-million dollar critical infrastructure contracts in India require absolute assurance regarding the integrity and background authenticity of professionals working on their projects. Traditional background checking was repetitive, time-consuming, costly, and vulnerable to resume discrepancies.
                    </p>
                  </div>

                  <p>
                    To resolve this industry-wide challenge, <strong>NASSCOM</strong> (the apex trade body of the IT-BPM industry in India) in partnership with <strong>NSDL Database Management Limited (NDML)</strong> conceptualized the **National Skills Registry (NSR)**.
                  </p>

                  <div className="know-cards-grid">
                    <div className="know-grid-card">
                      <ShieldCheck size={22} className="text-blue" />
                      <strong>Eliminating Credential Fraud</strong>
                      <p>Creates a single, permanent, tamper-proof digital fact sheet for every knowledge worker.</p>
                    </div>

                    <div className="know-grid-card">
                      <TrendingUp size={22} className="text-cyan" />
                      <strong>Accelerating Hiring Velocity</strong>
                      <p>Reduces pre-employment background verification turn-around times by over 80%.</p>
                    </div>

                    <div className="know-grid-card">
                      <Award size={22} className="text-emerald" />
                      <strong>Global Benchmarking</strong>
                      <p>Showcases Indian IT as an industry adhering to the highest global standards of identity governance.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 2: NSR ATTRIBUTES
                =================================================================== */}
            {activeTab === 'attributes' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-cyan-subtle"><ShieldCheck size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Platform Characteristics</span>
                    <h2 className="pane-title">Core NSR Attributes</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    NSR is engineered as a robust, centralized web repository possessing specific structural attributes that guarantee authenticity, transparency, and data integrity.
                  </p>

                  <div className="attributes-list">
                    <div className="attr-item">
                      <div className="attr-number">01</div>
                      <div>
                        <strong>Centralized & Standardized Web Repository</strong>
                        <p>Hosts standardized career fact sheets encompassing personal, academic, and employment records for professionals across India.</p>
                      </div>
                    </div>

                    <div className="attr-item">
                      <div className="attr-number">02</div>
                      <div>
                        <strong>Biometric Uniqueness & Lifetime ITPIN</strong>
                        <p>Every registered professional is assigned a permanent 12-digit IT Professional Identification Number (ITPIN) anchored by biometric/Aadhaar validation to guarantee absolute singularity.</p>
                      </div>
                    </div>

                    <div className="attr-item">
                      <div className="attr-number">03</div>
                      <div>
                        <strong>Independent Third-Party Verification (EBC)</strong>
                        <p>Records are audited and verified at the source by NASSCOM-empanelled Background Checking Entities (EBCs), ensuring uncompromised veracity.</p>
                      </div>
                    </div>

                    <div className="attr-item">
                      <div className="attr-number">04</div>
                      <div>
                        <strong>Candidate-Controlled Consent Architecture</strong>
                        <p>The registered professional maintains sole ownership of their profile. Information is shared with prospective employers only upon explicit authorization by the professional.</p>
                      </div>
                    </div>

                    <div className="attr-item">
                      <div className="attr-number">05</div>
                      <div>
                        <strong>Lifelong Portability Across Careers</strong>
                        <p>Your ITPIN stays constant as you transition between companies, academic milestones, and global client assignments.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 3: USERS & SERVICE PROVIDERS
                =================================================================== */}
            {activeTab === 'users' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-rose-subtle"><Users size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Ecosystem Stakeholders</span>
                    <h2 className="pane-title">Users & Service Providers</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    The NSR ecosystem unites five key stakeholder groups working cooperatively under unified governance standards:
                  </p>

                  <div className="stakeholder-cards-grid">
                    <div className="stakeholder-card">
                      <UserCheck size={24} className="text-blue" />
                      <strong>1. Knowledge Professionals</strong>
                      <p>IT & BPO employees, job seekers, and consultants who register, maintain their profile fact sheet, and authorize background verification.</p>
                    </div>

                    <div className="stakeholder-card">
                      <Building2 size={24} className="text-rose" />
                      <strong>2. Subscriber Companies</strong>
                      <p>330+ top IT & corporate employers who access verified credentials, confirm active employees, and record transition details via EEE.</p>
                    </div>

                    <div className="stakeholder-card">
                      <FileCheck size={24} className="text-emerald" />
                      <strong>3. Empanelled Background Checkers (EBCs)</strong>
                      <p>Audited background verification agencies that independently validate degrees, past tenures, and KYC records directly with primary issuers.</p>
                    </div>

                    <div className="stakeholder-card">
                      <Cpu size={24} className="text-cyan" />
                      <strong>4. Point of Service (POS) Centers</strong>
                      <p>Authorized pan-India physical biometric capture and identity authentication kiosks operating under NSDL standards.</p>
                    </div>

                    <div className="stakeholder-card">
                      <Award size={24} className="text-amber" />
                      <strong>5. NASSCOM & NDML Administration</strong>
                      <p>Apex regulatory body and technology operator responsible for data security, steering governance, and system uptime.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 4: NSR PROCESS FLOWS
                =================================================================== */}
            {activeTab === 'processes' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-blue-subtle"><Workflow size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">End-to-End Workflow</span>
                    <h2 className="pane-title">NSR Process Flows</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    The lifecycle of a verified professional on the National Skills Registry follows an intuitive, highly structured 5-stage workflow:
                  </p>

                  <div className="workflow-steps-vertical">
                    <div className="wf-step-item">
                      <div className="wf-step-num">1</div>
                      <div className="wf-step-content">
                        <strong>Step 1: Web Registration & Profile Creation</strong>
                        <p>Candidate enters personal details, educational qualifications, technical skill sets, and employment history on the NSR portal.</p>
                      </div>
                    </div>

                    <div className="wf-step-item">
                      <div className="wf-step-num">2</div>
                      <div className="wf-step-content">
                        <strong>Step 2: Biometric Aadhaar KYC Validation</strong>
                        <p>Identity uniqueness is anchored via Aadhaar digital KYC or visiting an authorized POS biometric registration node.</p>
                      </div>
                    </div>

                    <div className="wf-step-item">
                      <div className="wf-step-num">3</div>
                      <div className="wf-step-content">
                        <strong>Step 3: Permanent ITPIN Generation</strong>
                        <p>A unique 12-digit permanent ITPIN card is generated, providing the professional with an official digital credential token.</p>
                      </div>
                    </div>

                    <div className="wf-step-item">
                      <div className="wf-step-num">4</div>
                      <div className="wf-step-content">
                        <strong>Step 4: Independent Source Verification (EBC)</strong>
                        <p>Authorized BGC agencies conduct primary-source checks on degrees and past employments, recording positive confirmation on the ITPIN.</p>
                      </div>
                    </div>

                    <div className="wf-step-item">
                      <div className="wf-step-num">5</div>
                      <div className="wf-step-content">
                        <strong>Step 5: Employer Authorization & 1-Click Verification</strong>
                        <p>Candidate grants authorization to prospective employers, allowing instant access to verified credentials without repetitive re-checking.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 5: NSR BENEFITS
                =================================================================== */}
            {activeTab === 'benefits' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-emerald-subtle"><Award size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Value Proposition</span>
                    <h2 className="pane-title">NSR Benefits for All Stakeholders</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <div className="benefits-dual-column">
                    
                    {/* For Professionals */}
                    <div className="benefit-col-card glass-panel">
                      <div className="benefit-col-header">
                        <UserCheck size={20} className="text-blue" />
                        <h3>Benefits for Professionals</h3>
                      </div>
                      <ul className="benefit-checklist">
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Permanent, verified digital career identity recognized globally.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Eliminates repeated background checks across job switches.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Fast-tracks hiring and onboarding with 330+ top IT enterprises.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Complete consent control over who views your career record.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Seamless visa and overseas client assignment credentials.</span></li>
                      </ul>
                    </div>

                    {/* For Companies */}
                    <div className="benefit-col-card glass-panel">
                      <div className="benefit-col-header">
                        <Building2 size={20} className="text-rose" />
                        <h3>Benefits for Companies</h3>
                      </div>
                      <ul className="benefit-checklist">
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Reduces background checking costs by up to 60%.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Instant access to pre-verified candidate profiles.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Zero tolerance for fake degrees, forged relieving letters, or dual employment.</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Standardized exit records through Exit Employment Exchange (EEE).</span></li>
                        <li><CheckCircle2 size={16} className="text-emerald" /><span>Direct integration with corporate HRMS / Workday / SAP systems.</span></li>
                      </ul>
                    </div>

                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 6: NSR MILESTONES (EXACT SCREENSHOT CONTENT)
                =================================================================== */}
            {activeTab === 'milestones' && (
              <div className="tab-pane animate-fade" id="milestones">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-cyan-subtle"><TrendingUp size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Historical Growth & Trajectory</span>
                    <h2 className="pane-title">National Skills Registry / NSR Milestones</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    NSR Progress in terms of Website registrations and ITPIN generation is reflected in diagram below:
                  </p>

                  {/* Growth Bar Chart Visualization */}
                  <div className="milestones-chart-box glass-panel">
                    <div className="chart-header">
                      <strong>NSR Registrations Progress (2006–07 to 2021–22)</strong>
                      <div className="chart-legend">
                        <span className="legend-item"><span className="legend-dot dot-green"></span> ITPIN (Lakh)</span>
                        <span className="legend-item"><span className="legend-dot dot-blue"></span> Ack Nos (Lakh)</span>
                      </div>
                    </div>

                    <div className="chart-bars-container">
                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '12%' }} title="2006-07: 0.57L"></div>
                          <div className="bar bar-ack" style={{ height: '18%' }} title="2006-07: 1.02L"></div>
                        </div>
                        <span className="bar-year">06-07</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '20%' }} title="2008-09: 2.46L"></div>
                          <div className="bar bar-ack" style={{ height: '32%' }} title="2008-09: 4.12L"></div>
                        </div>
                        <span className="bar-year">08-09</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '36%' }} title="2010-11: 5.68L"></div>
                          <div className="bar bar-ack" style={{ height: '48%' }} title="2010-11: 8.63L"></div>
                        </div>
                        <span className="bar-year">10-11</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '52%' }} title="2013-14: 9.84L"></div>
                          <div className="bar bar-ack" style={{ height: '62%' }} title="2013-14: 14.91L"></div>
                        </div>
                        <span className="bar-year">13-14</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '68%' }} title="2016-17: 14.92L"></div>
                          <div className="bar bar-ack" style={{ height: '78%' }} title="2016-17: 22.12L"></div>
                        </div>
                        <span className="bar-year">16-17</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '82%' }} title="2019-20: 18.83L"></div>
                          <div className="bar bar-ack" style={{ height: '89%' }} title="2019-20: 27.82L"></div>
                        </div>
                        <span className="bar-year">19-20</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '90%' }} title="2020-21: 20.49L"></div>
                          <div className="bar bar-ack" style={{ height: '94%' }} title="2020-21: 28.86L"></div>
                        </div>
                        <span className="bar-year">20-21</span>
                      </div>

                      <div className="chart-bar-group">
                        <div className="bar-pair">
                          <div className="bar bar-itpin" style={{ height: '95%' }} title="2021-22: 22.06L"></div>
                          <div className="bar bar-ack" style={{ height: '100%' }} title="2021-22: 32.08L"></div>
                        </div>
                        <span className="bar-year">21-22</span>
                      </div>
                    </div>
                  </div>

                  <p className="milestone-sub-note">
                    Some of the important success points achieved by NSR are mentioned below for reference:
                  </p>

                  {/* Year Selector Tabs */}
                  <div className="milestone-years-strip">
                    {Object.keys(MILESTONE_YEARS).reverse().map((year) => (
                      <button
                        key={year}
                        className={`year-tab-btn ${selectedMilestoneYear === parseInt(year) ? 'is-active' : ''}`}
                        onClick={() => setSelectedMilestoneYear(parseInt(year))}
                      >
                        {year}
                      </button>
                    ))}
                  </div>

                  {/* Year Details Box */}
                  <div className="milestone-details-card glass-panel">
                    <h4 className="milestone-year-title">Year {selectedMilestoneYear} Highlights</h4>
                    <ul className="milestone-points-list">
                      {MILESTONE_YEARS[selectedMilestoneYear]?.map((pt, idx) => (
                        <li key={idx}>
                          <ChevronRight size={16} className="text-blue" />
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 7: NSR SYSTEM FEATURES (EXACT SCREENSHOT CONTENT)
                =================================================================== */}
            {activeTab === 'system-features' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-blue-subtle"><Cpu size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Technical Capabilities</span>
                    <h2 className="pane-title">National Skills Registry / NSR System Features</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    NSR system is built keeping in view the spread of Professionals and need for the user companies to access it from multiple locations. The users, whether professionals or companies, are proficient in computer operations with self-learning capability, security conscious and may need to access the system anytime from anywhere. Therefore, NSR is designed to be a web-based system with the following features:
                  </p>
                  
                  <div className="access-highlight-strip">
                    <Globe size={18} className="text-blue" />
                    <strong>Users can access NSR anytime, from anywhere, wherever Internet connection is available.</strong>
                  </div>

                  <h3 className="system-section-heading">System Features for Registered Professionals</h3>

                  <div className="system-features-list">
                    
                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Convenience of Completing Registration in Multiple Sessions</strong>
                        <p>
                          After submission of few personal details, NSR issues an <strong>Acknowledgement No.</strong> to the professional. If all required details for registration completion are not available or it is intended to complete the registration at a later time, the professional can complete his / her website registration within seven days of issuance of this number. This ensures convenience in registration.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Tool Tips and Guidance</strong>
                        <p>
                          Tool Tips and guidance is available for various sections and fields during NSR usage. While doing the registration if the professional has made any error or skipped any mandatory data field and if he / she presses "enter" key or "Submit" button the details of error are informed and highlighted to ensure ease of operation for registration.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Uniqueness of a Professional</strong>
                        <p>
                          Uniqueness of a Professional is determined on textual as well as his / her biometric details.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Alerts / Emails</strong>
                        <p>
                          Alerts / Emails are provided on generation of Acknowledgement number, completion of registration, completion of verification etc.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Profile Updations</strong>
                        <p>
                          The profile can be updated for changes in data such as address change, job change, additional qualification etc.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Audit Trail</strong>
                        <p>
                          Audit Trail is maintained in the database for all relevant actions / performed events such as log-in, log-out, data updations.
                        </p>
                      </div>
                    </div>

                    <div className="sys-feat-card">
                      <div className="sys-feat-icon"><CheckCircle2 size={18} className="text-blue" /></div>
                      <div>
                        <strong>Convenient & Secure Access for Professionals</strong>
                        <p>
                          Registered professionals can access their NSR profile on NSR website by using ITPIN issued by NSR and Log-in ID and Log-in password created by the professional. NSR provides for a quick and convenient log-in process whereby if a person has forgotten all his / her log-in details can also reset the details online and access the profile quickly.
                        </p>
                      </div>
                    </div>

                  </div>

                  <h3 className="system-section-heading">Other System Features</h3>
                  <div className="other-features-grid">
                    <div className="other-feat-box">
                      <Layers size={20} className="text-cyan" />
                      <strong>Online & Bulk Mode</strong>
                      <p>Site is designed for online as well as for bulk mode operation.</p>
                    </div>

                    <div className="other-feat-box">
                      <Activity size={20} className="text-emerald" />
                      <strong>High Availability Redundancy</strong>
                      <p>Redundancies are built at all levels ensuring high availability of NSR setup.</p>
                    </div>

                    <div className="other-feat-box">
                      <Lock size={20} className="text-amber" />
                      <strong>SSL & Digital Signatures (DSC)</strong>
                      <p>Use of security measures like Secure Socket Layer (SSL) certificate, Digital Signature Certificate (DSC) from Controller of Certifying Authorities (CCA) approved Certifying Authorities (CAs) etc.</p>
                    </div>

                    <div className="other-feat-box">
                      <ShieldCheck size={20} className="text-rose" />
                      <strong>Maker / Checker Protocol</strong>
                      <p>Maker / Checker concept implemented for enhanced accuracy of the data to be entered by Empanelled Background Checker (EBC) for updating background verification results.</p>
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 8: NSR SECURITY FEATURES
                =================================================================== */}
            {activeTab === 'security-features' && (
              <div className="tab-pane animate-fade">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-rose-subtle"><Lock size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Enterprise Data Protection</span>
                    <h2 className="pane-title">NSR Security & Privacy Architecture</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    National Skills Registry operates under bank-grade security protocols certified under international ISO/IEC 27001 standards, ensuring complete protection of sensitive personal and career data.
                  </p>

                  <div className="security-pillars-grid">
                    <div className="sec-pillar-card">
                      <ShieldCheck size={24} className="text-emerald" />
                      <strong>ISO 27001:2013 UKAS Accredited</strong>
                      <p>Certified Information Security Management System with regular third-party audits and zero-compromise vulnerability management.</p>
                    </div>

                    <div className="sec-pillar-card">
                      <Lock size={24} className="text-blue" />
                      <strong>256-Bit Cryptographic Encryption</strong>
                      <p>All data in transit and at rest is secured using SHA-256 and TLS 1.3 encryption standards approved by CCA.</p>
                    </div>

                    <div className="sec-pillar-card">
                      <Users size={24} className="text-cyan" />
                      <strong>Role-Based Access Controls (RBAC)</strong>
                      <p>Strict segregation of duties ensuring only authorized company representatives and audited BGCs can view approved record fields.</p>
                    </div>

                    <div className="sec-pillar-card">
                      <Database size={24} className="text-rose" />
                      <strong>Tamper-Proof Audit Logging</strong>
                      <p>Every profile creation, update, query, login, and consent grant is permanently stamped in immutable audit logs.</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 9: NSR STEERING COMMITTEE (EXACT SCREENSHOT CONTENT)
                =================================================================== */}
            {activeTab === 'steering-committee' && (
              <div className="tab-pane animate-fade" id="steering-committee">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-blue-subtle"><UserCheck size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Industry Governance</span>
                    <h2 className="pane-title">NSR Steering Committee</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    The NSR Steering Committee (SC) guides the functioning of NSR system with a view to assist it to grow rapidly and meet dynamic industry expectations, enhance acceptance among stakeholders and provide oversight for ongoing operations. The Committee members have deep industry and domain experience in HR, Background processes and tech platform governance. SC members generally comprise the following functional representatives:
                  </p>

                  <ul className="steering-rep-list">
                    <li><ChevronRight size={16} className="text-blue" /><span>Representative nominees from NSR member companies & Industry</span></li>
                    <li><ChevronRight size={16} className="text-blue" /><span>Representative nominees from NASSCOM</span></li>
                    <li><ChevronRight size={16} className="text-blue" /><span>Representative nominees from NSDL Database Management Limited (NDML)</span></li>
                    <li><ChevronRight size={16} className="text-blue" /><span>Member Secretary (NASSCOM or NDML official)</span></li>
                  </ul>

                  <h3 className="committee-subheading">Current Steering Committee Members</h3>

                  <div className="members-grid">
                    {STEERING_MEMBERS.map((member, index) => (
                      <div key={index} className="member-profile-card">
                        <div className="member-avatar-initials" style={{ backgroundColor: `${member.color}15`, color: member.color }}>
                          {member.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
                        </div>
                        <div className="member-meta">
                          <h4 className="member-name">{member.name}</h4>
                          <span className={`member-role ${member.role === 'Chairman' ? 'role-chairman' : ''}`}>{member.role}</span>
                          <span className="member-org">{member.org}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            )}

            {/* ===================================================================
                TAB 10: EMPANELMENT OF BACKGROUND CHECKERS (EXACT SCREENSHOT CONTENT)
                =================================================================== */}
            {activeTab === 'empanelled-checkers' && (
              <div className="tab-pane animate-fade" id="empanelled-checkers">
                <div className="pane-header">
                  <div className="pane-icon-badge bg-emerald-subtle"><FileCheck size={24} /></div>
                  <div>
                    <span className="pane-eyebrow">Third-Party Verification Standards</span>
                    <h2 className="pane-title">National Skills Registry / Empanelled Background Checkers (EBCs)</h2>
                  </div>
                </div>

                <div className="pane-body">
                  <p>
                    <strong>Empanelled Background Checkers (EBCs)</strong> are third party independent service provider entities that are empanelled by NASSCOM and NDML to render services of checking veracity of the information registered by the Knowledge Professionals on NSR. Empanelment involves a detailed evaluation of the applicants by NASSCOM and NDML. Empanelment is done by a Committee comprising representatives of NASSCOM, NDML and the Industry. NSR in consultation with Industry has formalized standard background verification and reporting process. The EBCs are expected to adhere to the procedures as per NSR.
                  </p>

                  {/* Eligibility Criteria */}
                  <div className="ebc-section-card glass-panel">
                    <h3 className="ebc-block-title">
                      <ShieldCheck size={20} className="text-emerald" />
                      <span>Eligibility Criteria for EBC Empanelment</span>
                    </h3>
                    <p className="ebc-intro-p">
                      Any background verification agency which is desirous of being empanelled with NSR is required to fulfill the following criteria:
                    </p>

                    <ul className="ebc-criteria-list">
                      <li>
                        <CheckCircle2 size={16} className="text-emerald" />
                        <span>Applicant should be a corporate entity and should not be engaged in a business that has conflict of interest with NSR.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="text-emerald" />
                        <div>
                          <strong>Track record of minimum three years:</strong>
                          <ul className="sub-criteria-list">
                            <li>• Minimum 10,000 candidates background verified in each of the previous three financial years.</li>
                            <li>• Minimum turnover of Rs. 1.2 crores from background verification activity in each of the previous three financial years.</li>
                            <li>• Profit as per Profit & Loss account in atleast two of the previous three financial years.</li>
                          </ul>
                        </div>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="text-emerald" />
                        <span>ISO 27001 certification.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="text-emerald" />
                        <span>Robust systems and Process both in terms of Operations, Technology and Security.</span>
                      </li>
                      <li>
                        <CheckCircle2 size={16} className="text-emerald" />
                        <span>Positive Recommendations from NASSCOM/NSR members who have been clients of the applicant.</span>
                      </li>
                      <li>
                        <AlertCircle size={16} className="text-rose" />
                        <span>In case the empanelment of a background checker is deferred / rejected by the Selection Committee, the candidature of such background checker will not be considered for next cycle of empanelment.</span>
                      </li>
                    </ul>

                    <div className="ebc-disclaimer-note">
                      EBC applicants are required to fulfill all the above criterias for being considered for empanelment. Any applications which do not fulfill all/any of the specified criteria will not be considered for empanelment. Further, fulfillment of the above criteria does not entitle any EBC applicant for being directly empanelled at NSR. The eligible applications will be evaluated by the committee and decision of the committee will be final. Any attempt to influence the Committee in any form will lead to debarring the applicant even if it fits the laid down criteria.
                    </div>
                  </div>

                  {/* Procedure for Empanelment */}
                  <div className="ebc-section-card glass-panel">
                    <h3 className="ebc-block-title">
                      <Workflow size={20} className="text-blue" />
                      <span>Procedure for Empanelment</span>
                    </h3>

                    <div className="procedure-sub-block">
                      <h4 className="proc-subtitle">1. Application Phase</h4>
                      <p>
                        NSR follows biannual empanelment procedure. Eligible entities are required to apply for empanelment during the <strong>first cycle starting from 1st March to 31st March</strong> or the <strong>second cycle starting 1st August to 30th September</strong> in a year. Any applications received beyond this period are not considered for empanelment. The applicant is required to submit duly filled in Questionnaire along with the supporting documents as specified in the Questionnaire.
                      </p>

                      <div className="due-diligence-download-strip">
                        <Download size={18} className="text-blue" />
                        <div>
                          <strong>Download Due Diligence Questionnaire</strong>
                          <span>Official application questionnaire for background checking agencies</span>
                        </div>
                        <button className="btn btn-outline-primary btn-sm" onClick={() => alert('Downloading NSR EBC Due Diligence Questionnaire PDF...')}>
                          Download Form
                        </button>
                      </div>

                      <div className="submission-email-card">
                        <Mail size={16} className="text-cyan" />
                        <div>
                          <p>
                            Send scanned copy of completed Due Diligence Questionnaire on letterhead along with supportings to: <br />
                            <strong>snehalp@ndml.in</strong> and <strong>shwetaj@ndml.in</strong>. Ensure that the maximum size of each email is 10 MB. If any email exceeds 10 MB then send multiple emails.
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="procedure-sub-block">
                      <h4 className="proc-subtitle">2. Selection & Evaluation Phase</h4>
                      <p>
                        Subsequent to the submission of application, due diligence visit is conducted at the office of the shortlisted applicants. The shortlisted applicants are invited to make presentation before the Committee. The committee reviews the application and decides whether to approve the application. The decision of the Committee shall be communicated only to the selected applicants.
                      </p>
                      <p className="text-muted-italic">
                        In the event of any submission by the background checking entity being found to be false post the empanelment process, the Committee reserves the right to revoke such empanelment and debar the background checker from further empanelment rounds.
                      </p>
                    </div>
                  </div>

                </div>
              </div>
            )}

          </main>

        </div>
      </section>

    </div>
  );
}
