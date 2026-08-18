# Technical Decisions & Architectural Rationale (`DECISIONS.md`)

---

### 1. Ingestion Strategy: Modular In-Memory Domain Models vs. Rejected Alternatives

* **Strategy Chosen:** Structured, normalized domain models (Profiles, EBC Verifications, Circulars, Grievance workflows, and Search indices) decoupled into typed data structures and managed via reactive React state dispatchers.
* **Alternative Rejected:** Ad-hoc hardcoded JSX copy OR a fragile client-side mock REST server (e.g., `json-server` / mock Axios interceptors).
* **Rationale:**
  * **Zero-Latency & High Reliability:** Eliminates synthetic network latency, CORS hurdles, and async race conditions during evaluation, ensuring instant search filtering (Command+K) and snappy modal transitions.
  * **Clean Schema Decoupling:** Components consume clean DTO contracts (e.g., candidate verification status, EBC empanelment hashes). Swapping these for live NASSCOM/NSDL microservices requires zero UI refactoring.
  * **Deterministic Presentation:** Guarantees consistent state across interactive tours, multi-step wizards, and credential verification checks.

---

### 2. Time-Limit Trade-off vs. 1-Week Roadmap

* **Trade-off Under Time Constraint:** Implemented client-side simulated authentication and validation workflows (session-scoped ITPIN generator, multi-step wizard, interactive 3D credential flip card, and OTP challenge) instead of a live backend with persistent database storage and cryptographic signing.
* **With a Real Production Week:**
  1. **DigiLocker & Aadhaar e-KYC Integration:** Direct OAuth2 / OIDC handshake with India Stack APIs for real-time biometric and educational degree verification.
  2. **Role-Based Full-Stack Portals:** Dedicated micro-frontends with authenticated role-based views for **Candidates** (credential management), **Subscribers** (bulk employee verification), **EBC Agencies** (investigation queues), and **NASSCOM Admins**.
  3. **Verifiable Digital Signatures (PKI):** CCA-approved X.509 digital certificate signing and tamper-evident SHA-256 credential hashing with QR validation endpoints.
  4. **Automated Testing & WCAG 2.1 AAA:** Full Playwright E2E coverage and automated Axe-core accessibility regression pipelines.

---

### 3. AI Tool Utilization & Personal Verification

* **Where AI Tools Were Used:**
  * Rapid initial scaffolding of component architecture and design token foundations.
  * Drafting domain-specific copy adhering to official NASSCOM / NSR institutional governance standards.
  * Generating structured enterprise datasets (subscriber companies, background checking agencies, and regulatory circulars).
* **What Was Personally Verified and Refined:**
  * **Visual Polish & Design System:** Tailored colors (deep GovTech navy, vibrant cyber accents, subtle glassmorphism), fluid typography hierarchy (`Plus Jakarta Sans` + `Outfit`), and micro-animations.
  * **Responsive Viewports & Spacing:** Re-engineered Navbar drawer, Hero dual-persona cards, and modal dialogs to ensure seamless responsiveness from 320px mobile to 4K ultra-wide screens.
  * **Interaction & Accessibility:** Restructured modal focus traps, keyboard navigation (Escape to close, Cmd+K search shortcut), and WCAG AA color contrast compliance.
  * **Performance & Cleanliness:** Replaced heavy animation runtimes with GPU-accelerated CSS transforms and lightweight Canvas Confetti triggers.

---
*Bonus Round Easter Egg:* Type the classic **Konami Code** (`↑ ↑ ↓ ↓ ← → ← → B A`) or click the **GovTech Seal** in the Hero 5 times to unlock the classified developer matrix!
