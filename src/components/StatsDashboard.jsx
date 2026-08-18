import React, { useState, useEffect } from 'react';
import { 
  Users, Award, Building, ShieldCheck, 
  TrendingUp, Activity, CheckCircle, Database 
} from 'lucide-react';
import './StatsDashboard.css';

export default function StatsDashboard() {
  const [counts, setCounts] = useState({
    registrations: 3722697,
    itpins: 2586677,
    companies: 337,
    checkers: 25
  });

  // Dynamic subtle counter increment effect to make it feel alive
  useEffect(() => {
    const interval = setInterval(() => {
      setCounts(prev => ({
        ...prev,
        registrations: prev.registrations + Math.floor(Math.random() * 2)
      }));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const formatNumber = (num) => {
    return new Intl.NumberFormat('en-IN').format(num);
  };

  return (
    <section className="stats-section" id="stats">
      <div className="container">
        
        {/* Section Header */}
        <div className="stats-header-box">
          <div className="live-pulse-badge">
            <span className="live-dot"></span>
            <span>LIVE REGISTRY TELEMETRY</span>
          </div>
          <h2 className="stats-title">NSR by the Numbers</h2>
          <p className="stats-subtitle">
            Powering transparent background verification and trusted professional identity across India's knowledge ecosystem.
          </p>
        </div>

        {/* 4 Key Statistics Cards */}
        <div className="stats-grid">
          
          {/* Card 1: Web Registrations */}
          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-blue">
              <Users size={28} />
            </div>
            <div className="stat-details">
              <span className="stat-label">Total Web Registrations</span>
              <div className="stat-number-row">
                <span className="stat-counter">{formatNumber(counts.registrations)}</span>
                <span className="stat-growth-tag">+12.4% YoY</span>
              </div>
              <p className="stat-description">
                Verified candidate profiles registered on the National Skills Registry.
              </p>
            </div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill fill-blue" style={{ width: '85%' }}></div>
            </div>
          </div>

          {/* Card 2: ITPINs Generated */}
          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-cyan">
              <Award size={28} />
            </div>
            <div className="stat-details">
              <span className="stat-label">ITPINs Generated</span>
              <div className="stat-number-row">
                <span className="stat-counter">{formatNumber(counts.itpins)}</span>
                <span className="stat-verified-tag">
                  <CheckCircle size={12} />
                  <span>Biometric KYC</span>
                </span>
              </div>
              <p className="stat-description">
                Unique permanent identification numbers assigned with biometric verification.
              </p>
            </div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill fill-cyan" style={{ width: '70%' }}></div>
            </div>
          </div>

          {/* Card 3: Subscriber Companies */}
          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-purple">
              <Building size={28} />
            </div>
            <div className="stat-details">
              <span className="stat-label">Subscriber Companies</span>
              <div className="stat-number-row">
                <span className="stat-counter">{counts.companies}+</span>
                <span className="stat-growth-tag">Global IT Giants</span>
              </div>
              <p className="stat-description">
                Leading MNCs and enterprise tech firms utilizing NSR for automated talent verification.
              </p>
            </div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill fill-purple" style={{ width: '92%' }}></div>
            </div>
          </div>

          {/* Card 4: Background Checkers */}
          <div className="stat-card">
            <div className="stat-icon-wrapper stat-icon-emerald">
              <ShieldCheck size={28} />
            </div>
            <div className="stat-details">
              <span className="stat-label">Empanelled Background Checkers</span>
              <div className="stat-number-row">
                <span className="stat-counter">{counts.checkers}+</span>
                <span className="stat-verified-tag">
                  <ShieldCheck size={12} />
                  <span>NASSCOM Certified</span>
                </span>
              </div>
              <p className="stat-description">
                NASSCOM-audited background verification agencies operating on NSR standards.
              </p>
            </div>
            <div className="stat-progress-bar">
              <div className="stat-progress-fill fill-emerald" style={{ width: '100%' }}></div>
            </div>
          </div>

        </div>

        {/* Live sync banner */}
        <div className="data-sync-strip glass-panel">
          <div className="sync-left">
            <Database size={18} className="text-cyan" />
            <span>Registry Database synchronized in real-time with NSDL & UIDAI verification nodes.</span>
          </div>
          <div className="sync-right">
            <Activity size={16} className="text-emerald" />
            <span>System Uptime: 99.98%</span>
          </div>
        </div>

      </div>
    </section>
  );
}
