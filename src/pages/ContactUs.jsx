import React, { useState } from 'react';
import { 
  Phone, Mail, MapPin, Building2, ShieldCheck, 
  HelpCircle, ExternalLink, Clock, Send, CheckCircle2, 
  AlertCircle, FileText, ChevronRight, Sparkles, Compass, Users
} from 'lucide-react';
import './ContactUs.css';

export default function ContactUs({ onNavigateHome, onNavigate, onOpenRegister, onOpenTour, onOpenGrievance }) {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    itpin: '',
    category: 'General Query',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div className="contact-page-wrapper">
      
      {/* Hero Header */}
      <section className="contact-hero-section">
        <div className="container">
          <div className="contact-breadcrumbs">
            <button onClick={onNavigateHome} className="breadcrumb-link">Home</button>
            <span className="breadcrumb-sep">/</span>
            <span className="breadcrumb-current">Contact Us</span>
          </div>

          <div className="contact-hero-content">
            <span className="badge badge-cyan">National Operational Support Desk</span>
            <h1 className="contact-hero-title">Contact National Skills Registry (NSR)</h1>
            <p className="contact-hero-subtitle">
              Have questions about your ITPIN, background verification status, or corporate subscriber empanelment? Our dedicated NDML & NASSCOM support teams are here to assist you.
            </p>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <section className="contact-body-section">
        <div className="container contact-layout-grid">
          
          {/* Left Main Content */}
          <main className="contact-main-column">
            
            {/* Quick Contact Highlight Strip */}
            <div className="quick-email-card glass-panel">
              <div className="quick-email-icon">
                <Mail size={24} className="text-blue" />
              </div>
              <div className="quick-email-text">
                <span className="quick-tag">NSR Official Team Desk</span>
                <p>
                  For any queries / clarifications / information relating to NSR write to NSR team at:
                </p>
                <a href="mailto:nsr@ndml.in" className="highlight-email-link">nsr@ndml.in</a>
              </div>
            </div>

            {/* Registered Office & Helpdesk Card (Exact Screenshot Content) */}
            <div className="office-card glass-panel">
              <div className="office-card-header">
                <div className="office-icon-badge bg-blue-subtle">
                  <Building2 size={24} />
                </div>
                <div>
                  <span className="office-eyebrow">Operating Authority</span>
                  <h2 className="office-title">Registered Office Address</h2>
                  <span className="office-warning-badge">
                    <AlertCircle size={13} />
                    <span>Please do not visit this address for NSR registration</span>
                  </span>
                </div>
              </div>

              <div className="office-details-table">
                
                {/* Row 1: Address */}
                <div className="office-table-row">
                  <div className="row-label">
                    <MapPin size={16} className="text-blue" />
                    <strong>Registered Address:</strong>
                  </div>
                  <div className="row-val">
                    <strong className="entity-name">NSDL Database Management Limited (NDML)</strong>
                    <p className="address-text">
                      4th Floor, Tower 3, One International Center, <br />
                      Senapati Bapat Marg, Prabhadevi, Mumbai 400 013
                    </p>
                    <div className="phone-line">
                      <span>Board Phone:</span>
                      <a href="tel:02249142701">022 - 4914 2701</a>
                    </div>
                    <div className="cin-badge">
                      <span>CIN No :</span>
                      <strong>U72400MH2004PLC147094</strong>
                    </div>
                  </div>
                </div>

                {/* Row 2: Helpdesk Numbers */}
                <div className="office-table-row">
                  <div className="row-label">
                    <Phone size={16} className="text-emerald" />
                    <strong>NSR Helpdesk No:</strong>
                  </div>
                  <div className="row-val">
                    <div className="helpdesk-numbers-grid">
                      <a href="tel:02249142575" className="phone-pill">022 - 4914 2575</a>
                      <a href="tel:02249142576" className="phone-pill">022 - 4914 2576</a>
                      <a href="tel:8422993909" className="phone-pill">8422993909</a>
                      <a href="tel:8422993941" className="phone-pill">8422993941</a>
                    </div>
                    <span className="timing-note">Operating Hours: Monday – Friday (9:30 AM to 6:00 PM IST)</span>
                  </div>
                </div>

                {/* Row 3: Contact NSR Email */}
                <div className="office-table-row">
                  <div className="row-label">
                    <Mail size={16} className="text-cyan" />
                    <strong>Contact NSR at:</strong>
                  </div>
                  <div className="row-val">
                    <a href="mailto:nsr@ndml.in" className="email-action-link">nsr@ndml.in</a>
                  </div>
                </div>

              </div>
            </div>

            {/* Background Verification Teams Section (Exact Screenshot Content) */}
            <div className="bgc-contact-card glass-panel">
              <div className="bgc-header">
                <ShieldCheck size={22} className="text-emerald" />
                <h3>Background Verification Teams</h3>
              </div>
              <p className="bgc-text">
                Need to follow up on your ongoing candidate employment check or academic verification?
              </p>
              <div className="bgc-action-row">
                <button 
                  className="btn btn-outline-primary"
                  onClick={() => onNavigate('know-nsr', 'empanelled-checkers')}
                >
                  <span>Click here to contact Empanelled Background Checkers (EBCs)</span>
                  <ExternalLink size={14} />
                </button>
              </div>
            </div>

            {/* Interactive Query Submission Form */}
            <div className="contact-form-card glass-panel">
              <div className="form-card-header">
                <Send size={20} className="text-blue" />
                <h3>Send Direct Inquiry to NSR Team</h3>
              </div>

              {formSubmitted ? (
                <div className="form-success-box animate-fade">
                  <CheckCircle2 size={44} className="text-emerald" />
                  <h4>Message Dispatched to NSR Helpdesk!</h4>
                  <p>Our operations team has received your query and will reply via email within 24 business hours.</p>
                  <button className="btn btn-primary btn-sm" onClick={() => setFormSubmitted(false)}>Send Another Message</button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="contact-form-inner">
                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Your Full Name</label>
                      <input 
                        type="text" 
                        placeholder="e.g. Aarav Sharma" 
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required 
                      />
                    </div>
                    <div className="form-field">
                      <label>Email Address</label>
                      <input 
                        type="email" 
                        placeholder="name@domain.com" 
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required 
                      />
                    </div>
                  </div>

                  <div className="form-grid-2">
                    <div className="form-field">
                      <label>Mobile Number</label>
                      <input 
                        type="tel" 
                        placeholder="+91 98765 43210" 
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div className="form-field">
                      <label>ITPIN / Acknowledgement No. (If registered)</label>
                      <input 
                        type="text" 
                        placeholder="e.g. 882941029934" 
                        value={formData.itpin}
                        onChange={(e) => setFormData({ ...formData, itpin: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="form-field">
                    <label>Query Subject Category</label>
                    <select 
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    >
                      <option>Candidate Profile Access / Login Issue</option>
                      <option>EBC Background Verification Status</option>
                      <option>AMC Annual Maintenance Payment</option>
                      <option>Corporate Subscriber Empanelment</option>
                      <option>Root Certificate Installation Help</option>
                      <option>General Operational Inquiry</option>
                    </select>
                  </div>

                  <div className="form-field">
                    <label>Message / Description</label>
                    <textarea 
                      rows="4" 
                      placeholder="Please provide specifics regarding your inquiry..." 
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full">
                    <span>Submit Query to NSR Team</span>
                    <Send size={16} />
                  </button>
                </form>
              )}
            </div>

          </main>

          {/* Right Sticky Resource Sidebar */}
          <aside className="contact-sidebar">
            <div className="contact-sidebar-panel glass-panel">
              <span className="sidebar-heading">QUICK ACCESS LINKS</span>
              
              <div className="sidebar-links-list">
                <button className="sidebar-link-btn" onClick={() => onOpenTour('professionals')}>
                  <Compass size={16} className="text-cyan" />
                  <div>
                    <strong>NSR Interactive Tour</strong>
                    <span>Candidate & Company Demo</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={() => onNavigate('home', 'faqs')}>
                  <HelpCircle size={16} className="text-blue" />
                  <div>
                    <strong>Frequently Asked Questions</strong>
                    <span>Individual & Corporate FAQs</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={onOpenRegister}>
                  <Users size={16} className="text-emerald" />
                  <div>
                    <strong>Join NSR Network</strong>
                    <span>New Profile Registration</span>
                  </div>
                </button>

                <button className="sidebar-link-btn" onClick={onOpenGrievance}>
                  <FileText size={16} className="text-amber" />
                  <div>
                    <strong>Grievance Ticket System</strong>
                    <span>Instant 24-hr tracking ID</span>
                  </div>
                </button>
              </div>

              <div className="sidebar-security-note">
                <ShieldCheck size={20} className="text-emerald" />
                <div>
                  <strong>Official NDML Facility</strong>
                  <p>All communication is handled in accordance with ISO 27001 data privacy standards.</p>
                </div>
              </div>
            </div>
          </aside>

        </div>
      </section>

    </div>
  );
}
