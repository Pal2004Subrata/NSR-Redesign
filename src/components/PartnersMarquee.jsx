import React from 'react';
import { Building2, ShieldCheck, CheckCircle2 } from 'lucide-react';
import './PartnersMarquee.css';

const PARTNERS = [
  { name: 'Bosch', domain: 'Engineering & IoT', status: 'Subscriber Since 2012', color: '#ea580c' },
  { name: 'Capgemini', domain: 'Consulting & Tech', status: 'Subscriber Since 2011', color: '#0284c7' },
  { name: 'AXA Business Services', domain: 'Insurance & FinTech', status: 'Subscriber Since 2014', color: '#e11d48' },
  { name: 'Aviva Life Insurance', domain: 'Financial Services', status: 'Subscriber Since 2013', color: '#eab308' },
  { name: 'Bajaj Allianz', domain: 'Insurance Services', status: 'Subscriber Since 2015', color: '#2563eb' },
  { name: 'Avalara', domain: 'Cloud & Tax Automation', status: 'Subscriber Since 2018', color: '#f97316' },
  { name: 'BBSSL', domain: 'Software Solutions', status: 'Subscriber Since 2016', color: '#059669' },
  { name: 'Axience', domain: 'Business Intelligence', status: 'Subscriber Since 2017', color: '#7c3aed' },
  { name: 'Infosys', domain: 'Next-Gen Digital', status: 'Subscriber Since 2008', color: '#0ea5e9' },
  { name: 'Tata Consultancy Services', domain: 'IT & Enterprise AI', status: 'Subscriber Since 2008', color: '#3b82f6' },
  { name: 'Wipro Technologies', domain: 'Transformation & Cloud', status: 'Subscriber Since 2009', color: '#10b981' }
];

export default function PartnersMarquee() {
  return (
    <section className="partners-section" id="partners">
      <div className="container">
        
        <div className="partners-header">
          <span className="badge badge-cyan">Trusted Enterprise Network</span>
          <h3 className="partners-title">Empowering 330+ Global Leaders</h3>
          <p className="partners-sub">
            India's most prominent technology, engineering, and consulting enterprises rely on NSR for reliable candidate background verification.
          </p>
        </div>

      </div>

      {/* Infinite Marquee Container */}
      <div className="marquee-wrapper">
        <div className="marquee-track">
          {/* Double list for seamless infinite loop */}
          {[...PARTNERS, ...PARTNERS].map((partner, index) => (
            <div key={index} className="partner-card">
              <div className="partner-logo-mark" style={{ backgroundColor: `${partner.color}15`, color: partner.color }}>
                <Building2 size={20} />
              </div>
              <div className="partner-info">
                <div className="partner-name-row">
                  <span className="partner-name">{partner.name}</span>
                  <CheckCircle2 size={13} className="text-emerald" />
                </div>
                <span className="partner-domain">{partner.domain}</span>
                <span className="partner-status">{partner.status}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
