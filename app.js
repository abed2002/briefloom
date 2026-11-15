    const STORAGE_KEY = 'briefloom_workspace_v2';

    // Currency symbol helper
    const CURRENCY_SYMBOLS = {
      USD: '$',
      EUR: '€',
      GBP: '£',
      CAD: 'CA$'
    };

    // Three Complete Professional Templates (Brand Identity, Website Design & Dev, Business Consulting)
    const TEMPLATES = [
      {
        id: 'tpl-brand',
        name: 'Brand Identity Project',
        badge: 'ILLUSTRATIVE TEMPLATE PRICING',
        category: 'Brand Identity',
        defaultClient: 'Vespera Botanicals Ltd.',
        defaultProjectName: 'Vespera — Comprehensive Brand Identity & Packaging System',
        timeline: '6 Weeks',
        kickoffWindow: 'Within 14 days of proposal acceptance',
        currency: 'USD',
        budgetTarget: 18500,
        pricingPreference: 'Hybrid Fixed + Hourly',
        contingencyPct: 5,
        discountPct: 0,
        taxPct: 0,
        description: 'Develop a cohesive strategic positioning platform, visual identity system, typographic hierarchy, and tactile packaging guidelines to establish a distinctive market presence.',
        objectives: [
          'Articulate a defensible brand strategy, audience positioning matrix, and verbal tone of voice.',
          'Design a versatile primary logomark, secondary emblems, and bespoke color and typographic system.',
          'Deliver a comprehensive Brand Guidelines manual and print-ready packaging dielines for the core product line.'
        ],
        deliverables: [
          { id: 'd-b1', phase: 'Phase 01: Strategy', title: 'Brand Discovery Workshop & Positioning Architecture', description: 'Stakeholder interviews, competitive audit, brand pillars, and verbal identity framework.', mode: 'fixed', fixedPrice: 3800, hours: 25, rate: 150, optional: false, included: true },
          { id: 'd-b2', phase: 'Phase 02: Visual Identity', title: 'Core Logo System, Typography & Color Palette', description: 'Primary wordmark, monogram, responsive lockups, custom color tokens, and typographic scale.', mode: 'fixed', fixedPrice: 5600, hours: 38, rate: 150, optional: false, included: true },
          { id: 'd-b3', phase: 'Phase 03: Systems', title: 'Comprehensive Brand Guidelines Book (40+ Pages)', description: 'Grid proportions, clear-space rules, photography art direction, and digital/print usage standards.', mode: 'fixed', fixedPrice: 3400, hours: 22, rate: 150, optional: false, included: true },
          { id: 'd-b4', phase: 'Phase 04: Rollout', title: 'Packaging Dielines & Social Launch Kit', description: 'Print-ready packaging layouts for 4 hero SKUs plus editable social & presentation templates.', mode: 'hourly', fixedPrice: 3600, hours: 24, rate: 150, optional: false, included: true },
          { id: 'd-b5', phase: 'Optional Add-on', title: 'Motion Identity & Animated Logo Bumper', description: 'Bespoke 4-second vector motion signature exported in Lottie and ProRes formats.', mode: 'fixed', fixedPrice: 1800, hours: 12, rate: 150, optional: true, included: false }
        ],
        milestones: [
          { id: 'm-b1', name: 'Milestone 01: Project Kickoff & Discovery Sign-off', week: 'Week 1', description: 'Commencement of discovery phase and delivery of strategic positioning brief.', pct: 35 },
          { id: 'm-b2', name: 'Milestone 02: Visual Identity Concept Presentation', week: 'Week 4', description: 'Approval of core visual identity architecture, typography, and color system.', pct: 40 },
          { id: 'm-b3', name: 'Milestone 03: Final Brand Book & Master Asset Handover', week: 'Week 6', description: 'Delivery of production vector files, guidelines PDF, and rollout templates.', pct: 25 }
        ],
        notes: 'Illustrative template pricing shown. Includes two rounds of consolidated client revisions per phase. Commercial font licenses and physical print press proofs are billed at cost upon client approval.'
      },
      {
        id: 'tpl-web',
        name: 'Website Design & Development',
        badge: 'ILLUSTRATIVE TEMPLATE PRICING',
        category: 'Website Design & Development',
        defaultClient: 'Kinetix Ridge Systems',
        defaultProjectName: 'Kinetix Ridge — Marketing Flagship & Interactive Documentation Hub',
        timeline: '8 Weeks',
        kickoffWindow: 'Immediate / Sprint 01',
        currency: 'USD',
        budgetTarget: 26000,
        pricingPreference: 'Hybrid Fixed + Hourly',
        contingencyPct: 5,
        discountPct: 0,
        taxPct: 0,
        description: 'Architect, design, and engineer a high-performance, WCAG 2.2 AA accessible marketing website and modular component library optimized for Core Web Vitals and conversion clarity.',
        objectives: [
          'Restructure site information architecture and conversion journeys to clarify product value within 10 seconds.',
          'Create a responsive, token-driven UI component system across mobile, tablet, and desktop viewports.',
          'Achieve 95+ Lighthouse Performance & Accessibility scores with semantic SEO markup and zero layout shift.'
        ],
        deliverables: [
          { id: 'd-w1', phase: 'Phase 01: UX & Architecture', title: 'Information Architecture, Sitemap & Interactive Wireframes', description: 'User journey mapping, content hierarchy, and interactive low-fidelity wireframes for 10 core templates.', mode: 'fixed', fixedPrice: 4500, hours: 30, rate: 150, optional: false, included: true },
          { id: 'd-w2', phase: 'Phase 02: UI Design System', title: 'High-Fidelity Visual Design & Component Token Library', description: 'Art-directed desktop & mobile screens, interactive states, custom SVG schematics, and design system tokens.', mode: 'fixed', fixedPrice: 7200, hours: 45, rate: 160, optional: false, included: true },
          { id: 'd-w3', phase: 'Phase 03: Engineering', title: 'Responsive Frontend Engineering & CMS Integration', description: 'Production TypeScript/React implementation, fluid CSS grid layouts, and structured content modeling.', mode: 'hourly', fixedPrice: 9600, hours: 60, rate: 160, optional: false, included: true },
          { id: 'd-w4', phase: 'Phase 04: QA & Launch', title: 'Performance Optimization, WCAG 2.2 AA Audit & Deployment', description: 'Cross-browser verification, Core Web Vitals tuning, metadata configuration, and zero-downtime launch.', mode: 'fixed', fixedPrice: 2800, hours: 18, rate: 155, optional: false, included: true },
          { id: 'd-w5', phase: 'Optional Add-on', title: 'Interactive ROI Calculator Widget', description: 'Custom interactive client-side pricing & ROI estimator embedded on the product page.', mode: 'fixed', fixedPrice: 2400, hours: 15, rate: 160, optional: true, included: false }
        ],
        milestones: [
          { id: 'm-w1', name: 'Milestone 01: Engagement Kickoff & UX Wireframe Approval', week: 'Week 2', description: 'Completion of discovery, sitemap, and interactive wireframe sign-off.', pct: 30 },
          { id: 'm-w2', name: 'Milestone 02: Design System & High-Fidelity UI Sign-off', week: 'Week 5', description: 'Approval of complete visual design system and responsive page layouts.', pct: 35 },
          { id: 'm-w3', name: 'Milestone 03: Staging Build, QA Audit & Production Launch', week: 'Week 8', description: 'Final QA sign-off, production deployment, and team documentation handover.', pct: 35 }
        ],
        notes: 'Illustrative template pricing shown. Codebase is delivered with full repository ownership and documentation. Third-party SaaS subscriptions or paid API tiers remain the client’s direct responsibility.'
      },
      {
        id: 'tpl-consulting',
        name: 'Business Consulting Engagement',
        badge: 'ILLUSTRATIVE TEMPLATE PRICING',
        category: 'Business Consulting',
        defaultClient: 'Meridian Logistics Group',
        defaultProjectName: 'Meridian — Q3 Operational Diagnostic & Growth Transformation Roadmap',
        timeline: '5 Weeks',
        kickoffWindow: 'First Monday of Next Month',
        currency: 'USD',
        budgetTarget: 22000,
        pricingPreference: 'Fixed Phase Fees',
        contingencyPct: 0,
        discountPct: 0,
        taxPct: 0,
        description: 'Conduct an independent operational and commercial diagnostic across revenue workflows, identify margin expansion levers, and deliver an actionable 12-month execution roadmap.',
        objectives: [
          'Audit current client acquisition, onboarding, and delivery workflows to eliminate bottlenecks.',
          'Build a transparent unit-economics and capacity model comparing baseline vs. target operating scenarios.',
          'Align executive leadership around a prioritized 90-day implementation playbook and KPI scorecard.'
        ],
        deliverables: [
          { id: 'd-c1', phase: 'Phase 01: Diagnostic', title: 'Stakeholder Interviews & Operational Workflow Audit', description: 'Structured interviews with 8 department leads plus historical process and margin analysis.', mode: 'fixed', fixedPrice: 5500, hours: 30, rate: 185, optional: false, included: true },
          { id: 'd-c2', phase: 'Phase 02: Modeling', title: 'Unit Economics & Capacity Scenario Model', description: 'Quantitative financial & resource utilization model with baseline, conservative, and accelerated cases.', mode: 'fixed', fixedPrice: 6800, hours: 36, rate: 190, optional: false, included: true },
          { id: 'd-c3', phase: 'Phase 03: Strategy', title: '12-Month Strategic Roadmap & Executive Readout Deck', description: 'Comprehensive board-ready recommendations report, risk register, and KPI governance architecture.', mode: 'fixed', fixedPrice: 5200, hours: 28, rate: 185, optional: false, included: true },
          { id: 'd-c4', phase: 'Phase 04: Enablement', title: 'Executive Alignment Workshop & 30-Day Advisory Retainer', description: 'Half-day leadership workshop plus four weekly implementation check-ins during rollout.', mode: 'hourly', fixedPrice: 3700, hours: 20, rate: 185, optional: false, included: true }
        ],
        milestones: [
          { id: 'm-c1', name: 'Milestone 01: Diagnostic Mobilization & Data Intake', week: 'Week 1', description: 'Project initiation, stakeholder interview scheduling, and baseline data review.', pct: 40 },
          { id: 'm-c2', name: 'Milestone 02: Financial Model & Strategic Findings Readout', week: 'Week 3', description: 'Delivery of operational diagnostic and unit-economics scenario model.', pct: 35 },
          { id: 'm-c3', name: 'Milestone 03: Final Roadmap & Leadership Workshop', week: 'Week 5', description: 'Executive workshop facilitation and final playbook handover.', pct: 25 }
        ],
        notes: 'Illustrative template pricing shown. All client operational data is treated as strictly confidential. Any required travel outside the metro region is pre-approved and billed at direct cost.'
      }
    ];

    // Interactive Hero Scenarios
    const HERO_SCENARIOS = [
      {
        title: 'Atelier Lumière — Rebrand & Packaging',
        category: 'Brand Identity System',
        timeline: '6 Weeks',
        items: [
          { name: 'Brand Strategy & Positioning Workshop', price: 3800, active: true },
          { name: 'Visual Identity, Wordmark & Grid System', price: 5400, active: true },
          { name: 'Packaging Dielines & Print Guidelines', price: 4300, active: true },
          { name: 'Optional: Motion Logo Signature Kit', price: 1800, active: false }
        ],
        templateId: 'tpl-brand'
      },
      {
        title: 'Kinetix Ridge — Web Flagship & Design System',
        category: 'Website Design & Dev',
        timeline: '8 Weeks',
        items: [
          { name: 'UX Architecture & Interactive Wireframes', price: 4500, active: true },
          { name: 'High-Fidelity UI & Component Token System', price: 7200, active: true },
          { name: 'Frontend Engineering & WCAG 2.2 AA QA', price: 9600, active: true },
          { name: 'Optional: Interactive ROI Estimator Widget', price: 2400, active: false }
        ],
        templateId: 'tpl-web'
      },
      {
        title: 'Meridian Group — Operational Strategy Diagnostic',
        category: 'Business Consulting',
        timeline: '5 Weeks',
        items: [
          { name: 'Stakeholder Interviews & Workflow Audit', price: 5500, active: true },
          { name: 'Unit Economics & Capacity Scenario Model', price: 6800, active: true },
          { name: 'Executive Roadmap & Alignment Workshop', price: 6400, active: true },
          { name: 'Optional: 30-Day Post-Readout Advisory', price: 3200, active: false }
        ],
        templateId: 'tpl-consulting'
      }
    ];

    // Application State
    let state = {
      currentView: 'home',
      dashboardLayout: 'grid',
      dashboardStatusFilter: 'ALL',
      builderStep: 1,
      studioSubMode: 'edit',
      activeProjectId: null,
      heroScenarioIndex: 0,
      projects: []
    };

    let pendingConfirmCallback = null;

    // Create the default clearly-labeled Sample Project
    function createSampleProject() {
      return {
        id: 'proj-sample-nordic',
        refCode: 'BL-2026-SAMPLE',
        isSample: true,
        name: 'Nordic Botanical — Brand Architecture & E-Commerce Flagship',
        client: 'Nordic Botanical ApS (Sample Project)',
        preparedBy: 'Briefloom Principal Studio',
        category: 'Website Design & Development',
        status: 'Proposal Ready',
        timeline: '8 Weeks',
        kickoffWindow: 'Sprint 01 — Next Monday',
        validUntil: '2026-12-15',
        currency: 'USD',
        budgetTarget: 24000,
        pricingPreference: 'Hybrid Fixed + Hourly',
        contingencyPct: 5,
        discountPct: 0,
        taxPct: 0,
        updatedAt: '2026-11-16T01:00:00Z',
        description: 'SAMPLE DEMONSTRATION PROJECT: Transform Nordic Botanical’s digital flagship with a refined editorial design system, transparent ingredient storytelling, and a streamlined checkout architecture.',
        objectives: [
          'Unify brand storytelling and product discovery within an accessible, Swiss-inspired editorial layout.',
          'Increase mobile product-page clarity and reduce checkout friction across international currencies.',
          'Deliver a documented component library so the internal team can launch seasonal campaigns independently.'
        ],
        deliverables: [
          { id: 'sd-1', phase: 'Phase 01: Discovery', title: 'UX Audit, Information Architecture & Wireframes', description: 'Analytics review, customer journey mapping, and interactive wireframes for 8 core views.', mode: 'fixed', fixedPrice: 4200, hours: 28, rate: 150, optional: false, included: true },
          { id: 'sd-2', phase: 'Phase 02: Design', title: 'Editorial Design System & Responsive UI Screens', description: 'Typography scale, color tokens, product card components, and interactive Figma prototypes.', mode: 'fixed', fixedPrice: 6800, hours: 42, rate: 160, optional: false, included: true },
          { id: 'sd-3', phase: 'Phase 03: Engineering', title: 'Frontend Implementation & Storefront Integration', description: 'Clean semantic HTML/CSS/TypeScript engineering, animations, and headless storefront templates.', mode: 'hourly', fixedPrice: 8000, hours: 50, rate: 160, optional: false, included: true },
          { id: 'sd-4', phase: 'Phase 04: QA & Handover', title: 'Accessibility Audit (WCAG 2.2 AA) & Launch Support', description: 'Keyboard navigation testing, Core Web Vitals optimization, and team training documentation.', mode: 'fixed', fixedPrice: 2400, hours: 16, rate: 150, optional: false, included: true },
          { id: 'sd-5', phase: 'Optional Add-on', title: 'Bespoke Regimen Finder Quiz Module', description: 'Interactive 4-step product recommendation flow with dynamic bundle pricing.', mode: 'fixed', fixedPrice: 2600, hours: 16, rate: 165, optional: true, included: false }
        ],
        milestones: [
          { id: 'sm-1', name: 'Milestone 01: Discovery & Architecture Sign-off', week: 'Week 2', description: 'Delivery of UX audit and approved interactive wireframes.', pct: 30 },
          { id: 'sm-2', name: 'Milestone 02: Design System & UI Prototype Approval', week: 'Week 5', description: 'Complete design token library and high-fidelity UI sign-off.', pct: 40 },
          { id: 'sm-3', name: 'Milestone 03: Production Launch & Team Handover', week: 'Week 8', description: 'Final QA verification, deployment, and documentation delivery.', pct: 30 }
        ],
        notes: 'This clearly labeled sample project demonstrates Briefloom’s real-time pricing engine, milestone math, and print-ready PDF proposal layout. Feel free to edit, duplicate, or delete it.'
      };
    }

    // Safe LocalStorage Load & Save
    function loadWorkspaceState() {
      try {
        const raw = window.localStorage.getItem(STORAGE_KEY);
        if (raw) {
          const parsed = JSON.parse(raw);
          if (parsed && Array.isArray(parsed.projects) && parsed.projects.length > 0) {
            state.projects = parsed.projects;
            state.activeProjectId = parsed.activeProjectId || state.projects[0].id;
            return;
          }
        }
      } catch (err) {
        const pill = document.getElementById('storage-status-pill');
        if (pill) pill.textContent = 'In-Memory Session Mode';
      }
      const sample = createSampleProject();
      state.projects = [sample];
      state.activeProjectId = sample.id;
      saveWorkspaceState();
    }

    function saveWorkspaceState() {
      try {
        const payload = {
          version: '2.4',
          activeProjectId: state.activeProjectId,
          projects: state.projects
        };
        window.localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
      } catch (err) {
        // Fallback silently if sandboxed storage quota or security blocks write
      }
      updateGlobalBadges();
    }

    // Core Real-Time Financial Calculation Function
    function calculateProjectFinancials(project) {
      if (!project) {
        return {
          fixedSubtotal: 0,
          hourlySubtotal: 0,
          addonsSubtotal: 0,
          netSubtotal: 0,
          contingencyAmount: 0,
          discountAmount: 0,
          taxableBase: 0,
          taxAmount: 0,
          grandTotal: 0,
          totalHours: 0,
          includedCount: 0
        };
      }
      let fixedSubtotal = 0;
      let hourlySubtotal = 0;
      let addonsSubtotal = 0;
      let totalHours = 0;
      let includedCount = 0;

      const deliverables = Array.isArray(project.deliverables) ? project.deliverables : [];
      deliverables.forEach((item) => {
        const lineAmount = item.mode === 'hourly'
          ? Math.max(0, Number(item.hours || 0)) * Math.max(0, Number(item.rate || 0))
          : Math.max(0, Number(item.fixedPrice || 0));

        const itemHours = item.mode === 'hourly' ? Math.max(0, Number(item.hours || 0)) : Math.max(0, Number(item.hours || 0));

        if (item.optional) {
          if (item.included) {
            addonsSubtotal += lineAmount;
            totalHours += itemHours;
            includedCount += 1;
          }
        } else {
          includedCount += 1;
          totalHours += itemHours;
          if (item.mode === 'hourly') {
            hourlySubtotal += lineAmount;
          } else {
            fixedSubtotal += lineAmount;
          }
        }
      });

      const netSubtotal = fixedSubtotal + hourlySubtotal + addonsSubtotal;
      const contingencyPct = Math.max(0, Number(project.contingencyPct || 0));
      const discountPct = Math.max(0, Number(project.discountPct || 0));
      const taxPct = Math.max(0, Number(project.taxPct || 0));

      const contingencyAmount = Math.round(netSubtotal * (contingencyPct / 100));
      const discountAmount = Math.round(netSubtotal * (discountPct / 100));
      const taxableBase = Math.max(0, netSubtotal + contingencyAmount - discountAmount);
      const taxAmount = Math.round(taxableBase * (taxPct / 100));
      const grandTotal = taxableBase + taxAmount;

      return {
        fixedSubtotal,
        hourlySubtotal,
        addonsSubtotal,
        netSubtotal,
        contingencyAmount,
        discountAmount,
        taxableBase,
        taxAmount,
        grandTotal,
        totalHours,
        includedCount
      };
    }

    function formatMoney(amount, currencyCode = 'USD') {
      const sym = CURRENCY_SYMBOLS[currencyCode] || '$';
      const num = Math.round(Number(amount || 0));
      return sym + num.toLocaleString('en-US');
    }

    function escapeHTML(str) {
      return String(str ?? '')
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#39;');
    }

    function getActiveProject() {
      let proj = state.projects.find((p) => p.id === state.activeProjectId);
      if (!proj && state.projects.length > 0) {
        proj = state.projects[0];
        state.activeProjectId = proj.id;
      }
      return proj || null;
    }

    // Toast Notification Helper
    function showToast(message, type = 'forest') {
      const container = document.getElementById('toast-container');
      if (!container) return;
      const toast = document.createElement('div');
      const bgClass = type === 'burnt' ? 'bg-terracotta text-white' : 'bg-forest text-ivory';
      toast.className = `${bgClass} px-4 py-3 rounded-xl shadow-xl border border-white/15 text-xs font-medium flex items-center justify-between gap-3 pointer-events-auto transition-all duration-200`;
      toast.innerHTML = `
        <span>${escapeHTML(message)}</span>
        <span class="font-mono text-[10px] opacity-80">OK</span>
      `;
      container.appendChild(toast);
      setTimeout(() => {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 3200);
    }

    // Confirm Modal Helpers
    function openConfirmModal(title, message, onConfirm) {
      document.getElementById('confirm-modal-title').textContent = title;
      document.getElementById('confirm-modal-message').textContent = message;
      pendingConfirmCallback = onConfirm;
      const modal = document.getElementById('confirm-modal');
      modal.classList.remove('hidden');
      modal.classList.add('flex');
    }

    function closeConfirmModal() {
      const modal = document.getElementById('confirm-modal');
      modal.classList.add('hidden');
      modal.classList.remove('flex');
      pendingConfirmCallback = null;
    }

    function executeConfirmedAction() {
      const cb = pendingConfirmCallback;
      closeConfirmModal();
      if (typeof cb === 'function') cb();
    }

    // Navigation & View Switching
    function navigateTo(viewName) {
      state.currentView = viewName;
      const views = ['home', 'dashboard', 'builder', 'studio', 'templates', 'how', 'docs'];
      views.forEach((v) => {
        const el = document.getElementById(`view-${v}`);
        if (el) {
          if (v === viewName) {
            el.classList.remove('hidden');
          } else {
            el.classList.add('hidden');
          }
        }
        const navBtn = document.getElementById(`nav-${v}`);
        if (navBtn) {
          if (v === viewName) {
            navBtn.className = 'nav-tab px-3 py-1.5 rounded-md text-sm font-semibold bg-forest text-ivory transition-colors flex items-center gap-1.5';
          } else {
            navBtn.className = 'nav-tab px-3 py-1.5 rounded-md text-sm font-medium text-ink hover:bg-ivoryDark transition-colors flex items-center gap-1.5';
          }
        }
      });

      if (viewName === 'home') {
        renderHeroPreview();
        renderHomeTemplates();
      } else if (viewName === 'dashboard') {
        renderDashboard();
      } else if (viewName === 'builder') {
        populateBuilderFromActiveProject();
      } else if (viewName === 'studio') {
        renderStudioView();
      } else if (viewName === 'templates') {
        renderTemplatesLibrary();
      }

      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    function toggleMobileMenu(forceState) {
      const menu = document.getElementById('mobile-menu');
      if (!menu) return;
      if (typeof forceState === 'boolean') {
        menu.classList.toggle('hidden', !forceState);
      } else {
        menu.classList.toggle('hidden');
      }
    }

    function updateGlobalBadges() {
      const count = state.projects.length;
      const navCount = document.getElementById('nav-project-count');
      if (navCount) navCount.textContent = String(count);
      const mobCount = document.getElementById('mobile-project-count');
      if (mobCount) mobCount.textContent = String(count);
      const heroBadge = document.getElementById('hero-workspace-badge');
      if (heroBadge) heroBadge.textContent = `${count} Saved`;
    }

    // =========================================================================
    // HOMEPAGE INTERACTIVE PREVIEW & TEMPLATE CARDS
    // =========================================================================
    function setHeroScenario(idx) {
      state.heroScenarioIndex = idx;
      [0, 1, 2].forEach((i) => {
        const btn = document.getElementById(`hero-scen-${i}`);
        if (btn) {
          btn.className = i === idx
            ? 'hero-scen-btn py-1.5 px-2 rounded text-xs font-semibold transition-all bg-forest text-ivory'
            : 'hero-scen-btn py-1.5 px-2 rounded text-xs font-medium transition-all text-ink hover:bg-ivory';
        }
      });
      renderHeroPreview();
    }

    function toggleHeroDeliverable(itemIdx) {
      const scen = HERO_SCENARIOS[state.heroScenarioIndex];
      if (!scen || !scen.items[itemIdx]) return;
      scen.items[itemIdx].active = !scen.items[itemIdx].active;
      renderHeroPreview();
    }

    function renderHeroPreview() {
      const scen = HERO_SCENARIOS[state.heroScenarioIndex];
      if (!scen) return;
      document.getElementById('hero-preview-category').textContent = scen.category;
      document.getElementById('hero-preview-timeline').textContent = `Timeline: ${scen.timeline}`;
      document.getElementById('hero-preview-title').textContent = scen.title;

      const listEl = document.getElementById('hero-preview-deliverables');
      listEl.innerHTML = scen.items.map((item, idx) => `
        <button type="button" onclick="toggleHeroDeliverable(${idx})" class="w-full p-2.5 rounded-lg border text-left flex items-center justify-between text-xs transition-all ${item.active ? 'bg-white border-forest/30 text-ink shadow-2xs' : 'bg-ivoryDark/50 border-transparent text-inkMuted opacity-70'}">
          <div class="flex items-center gap-2 pr-2">
            <span class="w-4 h-4 rounded flex items-center justify-center text-[10px] font-bold ${item.active ? 'bg-forest text-ivory' : 'border border-ink/30 text-transparent'}">✓</span>
            <span class="font-medium">${escapeHTML(item.name)}</span>
          </div>
          <span class="font-mono font-semibold shrink-0">${formatMoney(item.price, 'USD')}</span>
        </button>
      `).join('');

      updateHeroPreviewMath();
    }

    function updateHeroPreviewMath() {
      const scen = HERO_SCENARIOS[state.heroScenarioIndex];
      if (!scen) return;
      const slider = document.getElementById('hero-buffer-slider');
      const bufferPct = slider ? Number(slider.value || 0) : 10;
      const label = document.getElementById('hero-buffer-label');
      if (label) label.textContent = `${bufferPct}%`;

      const base = scen.items.reduce((acc, item) => acc + (item.active ? item.price : 0), 0);
      const total = Math.round(base * (1 + bufferPct / 100));
      const totalEl = document.getElementById('hero-preview-total');
      if (totalEl) totalEl.textContent = formatMoney(total, 'USD');
    }

    function openHeroScenarioInStudio() {
      const scen = HERO_SCENARIOS[state.heroScenarioIndex];
      if (scen && scen.templateId) {
        applyTemplateById(scen.templateId);
      }
    }

    function renderHomeTemplates() {
      const grid = document.getElementById('home-templates-grid');
      if (!grid) return;
      grid.innerHTML = TEMPLATES.map((tpl, idx) => {
        const totals = calculateProjectFinancials(tpl);
        return `
          <div class="loom-card rounded-2xl p-6 flex flex-col justify-between">
            <div class="space-y-4">
              <div class="flex items-center justify-between">
                <span class="font-mono text-[10px] uppercase tracking-widest px-2.5 py-1 rounded bg-forestSoft text-forest font-semibold">0${idx + 1} / ${escapeHTML(tpl.category)}</span>
                <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-terracottaSoft text-terracotta font-medium">${escapeHTML(tpl.badge)}</span>
              </div>
              <h3 class="font-editorial text-3xl text-ink">${escapeHTML(tpl.name)}</h3>
              <p class="text-xs sm:text-sm text-inkMuted leading-relaxed">${escapeHTML(tpl.description)}</p>
              <div class="pt-2 space-y-1.5 border-t hairline-border">
                <span class="font-mono text-[10px] uppercase tracking-wider text-inkMuted block">Included Deliverables (${tpl.deliverables.length}):</span>
                ${tpl.deliverables.slice(0, 3).map((d) => `
                  <div class="flex items-center justify-between text-xs">
                    <span class="text-ink truncate pr-2">• ${escapeHTML(d.title)}</span>
                    <span class="font-mono text-inkMuted shrink-0">${formatMoney(d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice, tpl.currency)}</span>
                  </div>
                `).join('')}
              </div>
            </div>
            <div class="pt-5 mt-5 border-t hairline-border flex items-center justify-between">
              <div>
                <span class="font-mono text-[10px] uppercase text-inkMuted block">Illustrative Scope</span>
                <span class="font-editorial text-2xl text-forest">${formatMoney(totals.grandTotal, tpl.currency)}</span>
              </div>
              <button type="button" onclick="applyTemplateById('${tpl.id}')" class="btn-primary px-4 py-2 rounded-lg text-xs font-semibold">
                Use Template →
              </button>
            </div>
          </div>
        `;
      }).join('');
    }

    // =========================================================================
    // DASHBOARD RENDERING, SEARCH, FILTER & CRUD OPERATIONS
    // =========================================================================
    function setDashboardLayout(mode) {
      state.dashboardLayout = mode;
      const gridBtn = document.getElementById('view-mode-grid');
      const tableBtn = document.getElementById('view-mode-table');
      if (gridBtn && tableBtn) {
        gridBtn.className = mode === 'grid'
          ? 'px-3 py-1 rounded text-xs font-mono font-medium bg-forest text-ivory'
          : 'px-3 py-1 rounded text-xs font-mono font-medium text-ink';
        tableBtn.className = mode === 'table'
          ? 'px-3 py-1 rounded text-xs font-mono font-medium bg-forest text-ivory'
          : 'px-3 py-1 rounded text-xs font-mono font-medium text-ink';
      }
      renderDashboard();
    }

    function setDashboardStatusFilter(statusValue) {
      state.dashboardStatusFilter = statusValue;
      const mapIds = {
        'ALL': 'status-pill-ALL',
        'Draft Brief': 'status-pill-Draft',
        'Scoping': 'status-pill-Scoping',
        'Proposal Ready': 'status-pill-Ready',
        'Under Review': 'status-pill-Review',
        'Approved': 'status-pill-Approved'
      };
      Object.entries(mapIds).forEach(([key, elemId]) => {
        const el = document.getElementById(elemId);
        if (el) {
          el.className = key === statusValue
            ? 'status-filter-pill px-3 py-1 rounded-full text-xs font-semibold bg-forest text-ivory'
            : 'status-filter-pill px-3 py-1 rounded-full text-xs font-medium bg-ivoryDark text-ink hover:bg-sageLight';
        }
      });
      renderDashboard();
    }

    function renderDashboard() {
      updateGlobalBadges();

      // Compute KPI totals across all saved projects
      let totalValue = 0;
      let readyCount = 0;
      let totalDeliverables = 0;
      let hasSample = false;

      state.projects.forEach((p) => {
        const fin = calculateProjectFinancials(p);
        totalValue += fin.grandTotal;
        totalDeliverables += (p.deliverables ? p.deliverables.length : 0);
        if (p.status === 'Proposal Ready' || p.status === 'Approved') readyCount += 1;
        if (p.isSample) hasSample = true;
      });

      const count = state.projects.length;
      const avgValue = count > 0 ? Math.round(totalValue / count) : 0;

      document.getElementById('kpi-total-projects').textContent = String(count);
      document.getElementById('kpi-sample-indicator').textContent = hasSample ? 'Includes 1 labeled sample' : '100% user projects';
      document.getElementById('kpi-pipeline-value').textContent = formatMoney(totalValue, 'USD');
      document.getElementById('kpi-ready-count').textContent = String(readyCount);
      document.getElementById('kpi-deliverables-count').textContent = `${totalDeliverables} total deliverables`;
      document.getElementById('kpi-avg-value').textContent = formatMoney(avgValue, 'USD');

      // Filter & Sort Projects
      const query = (document.getElementById('dashboard-search')?.value || '').trim().toLowerCase();
      const catFilter = document.getElementById('dashboard-category-filter')?.value || 'ALL';
      const sortMode = document.getElementById('dashboard-sort')?.value || 'updated';

      let filtered = state.projects.filter((p) => {
        if (state.dashboardStatusFilter !== 'ALL' && p.status !== state.dashboardStatusFilter) return false;
        if (catFilter !== 'ALL' && p.category !== catFilter) return false;
        if (query) {
          const hay = `${p.name} ${p.client} ${p.refCode} ${p.description} ${p.category} ${(p.deliverables || []).map(d => d.title).join(' ')}`.toLowerCase();
          if (!hay.includes(query)) return false;
        }
        return true;
      });

      filtered.sort((a, b) => {
        if (sortMode === 'value-desc') {
          return calculateProjectFinancials(b).grandTotal - calculateProjectFinancials(a).grandTotal;
        }
        if (sortMode === 'value-asc') {
          return calculateProjectFinancials(a).grandTotal - calculateProjectFinancials(b).grandTotal;
        }
        if (sortMode === 'name-asc') {
          return (a.name || '').localeCompare(b.name || '');
        }
        if (sortMode === 'client-asc') {
          return (a.client || '').localeCompare(b.client || '');
        }
        return String(b.updatedAt || '').localeCompare(String(a.updatedAt || ''));
      });

      const container = document.getElementById('dashboard-projects-container');
      if (!container) return;

      if (filtered.length === 0) {
        container.innerHTML = `
          <div class="loom-card rounded-2xl p-12 text-center space-y-4">
            <div class="w-12 h-12 rounded-xl bg-forestSoft text-forest mx-auto flex items-center justify-center font-mono font-bold text-lg">∅</div>
            <h3 class="font-editorial text-3xl text-ink">No matching projects found</h3>
            <p class="text-xs sm:text-sm text-inkMuted max-w-md mx-auto">
              Create a new project brief from scratch, apply one of our three professional templates, or reset your search filters.
            </p>
            <div class="flex flex-wrap justify-center gap-3 pt-2">
              <button type="button" onclick="startFreshBrief()" class="btn-primary px-4 py-2 rounded-lg text-xs font-semibold">+ Create New Project</button>
              <button type="button" onclick="navigateTo('templates')" class="btn-secondary px-4 py-2 rounded-lg text-xs font-semibold">Browse Templates</button>
              <button type="button" onclick="restoreSampleProject()" class="btn-secondary px-4 py-2 rounded-lg text-xs font-semibold">Restore Sample Project</button>
            </div>
          </div>
        `;
        return;
      }

      if (state.dashboardLayout === 'table') {
        container.innerHTML = `
          <div class="loom-card rounded-2xl overflow-hidden">
            <div class="overflow-x-auto">
              <table class="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr class="border-b hairline-border bg-ivoryDark/70 font-mono text-[11px] uppercase tracking-wider text-inkMuted">
                    <th class="py-3.5 px-4">Project &amp; Ref</th>
                    <th class="py-3.5 px-4">Client</th>
                    <th class="py-3.5 px-4">Category</th>
                    <th class="py-3.5 px-4">Status</th>
                    <th class="py-3.5 px-4 text-right">Estimate</th>
                    <th class="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody class="divide-y hairline-border">
                  ${filtered.map((p) => {
                    const fin = calculateProjectFinancials(p);
                    return `
                      <tr class="hover:bg-ivoryDark/40 transition-colors">
                        <td class="py-3.5 px-4">
                          <div class="flex items-center gap-2">
                            <span class="font-semibold text-ink">${escapeHTML(p.name)}</span>
                            ${p.isSample ? '<span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-terracottaSoft text-terracotta font-semibold">SAMPLE</span>' : ''}
                          </div>
                          <span class="font-mono text-[11px] text-inkMuted">${escapeHTML(p.refCode)} • ${escapeHTML(p.timeline)}</span>
                        </td>
                        <td class="py-3.5 px-4 text-inkMuted">${escapeHTML(p.client)}</td>
                        <td class="py-3.5 px-4"><span class="font-mono text-xs px-2 py-0.5 rounded bg-forestSoft text-forest">${escapeHTML(p.category)}</span></td>
                        <td class="py-3.5 px-4">
                          <select onchange="updateProjectStatus('${p.id}', this.value)" class="loom-input px-2 py-1 rounded text-xs font-medium">
                            ${['Draft Brief', 'Scoping', 'Proposal Ready', 'Under Review', 'Approved'].map((st) => `<option value="${st}" ${p.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                          </select>
                        </td>
                        <td class="py-3.5 px-4 text-right font-mono font-semibold text-forest">${formatMoney(fin.grandTotal, p.currency)}</td>
                        <td class="py-3.5 px-4 text-right">
                          <div class="inline-flex items-center gap-1.5">
                            <button type="button" onclick="openProjectInBuilder('${p.id}')" class="btn-secondary px-2.5 py-1 rounded text-xs">Brief</button>
                            <button type="button" onclick="openProjectInStudio('${p.id}')" class="btn-primary px-2.5 py-1 rounded text-xs">Studio</button>
                            <button type="button" onclick="duplicateProject('${p.id}')" class="btn-secondary px-2 py-1 rounded text-xs" title="Duplicate">Copy</button>
                            <button type="button" onclick="deleteProject('${p.id}')" class="btn-secondary px-2 py-1 rounded text-xs text-terracotta" title="Delete">✕</button>
                          </div>
                        </td>
                      </tr>
                    `;
                  }).join('')}
                </tbody>
              </table>
            </div>
          </div>
        `;
      } else {
        container.innerHTML = `
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
            ${filtered.map((p) => {
              const fin = calculateProjectFinancials(p);
              return `
                <div class="loom-card rounded-2xl p-6 flex flex-col justify-between space-y-5">
                  <div class="space-y-3">
                    <div class="flex flex-wrap items-center justify-between gap-2">
                      <div class="flex items-center gap-2">
                        <span class="font-mono text-[11px] px-2 py-0.5 rounded bg-forestSoft text-forest font-semibold">${escapeHTML(p.category)}</span>
                        <span class="font-mono text-[11px] text-inkMuted">${escapeHTML(p.refCode)}</span>
                        ${p.isSample ? '<span class="font-mono text-[10px] px-2 py-0.5 rounded bg-terracottaSoft text-terracotta font-bold">SAMPLE DEMO</span>' : ''}
                      </div>
                      <select onchange="updateProjectStatus('${p.id}', this.value)" aria-label="Project Status" class="loom-input px-2.5 py-1 rounded-full text-xs font-semibold">
                        ${['Draft Brief', 'Scoping', 'Proposal Ready', 'Under Review', 'Approved'].map((st) => `<option value="${st}" ${p.status === st ? 'selected' : ''}>${st}</option>`).join('')}
                      </select>
                    </div>

                    <div>
                      <h2 class="font-editorial text-2xl sm:text-3xl text-ink leading-snug">${escapeHTML(p.name)}</h2>
                      <p class="text-xs font-medium text-inkMuted mt-0.5">Client: <strong class="text-ink">${escapeHTML(p.client)}</strong> • Timeline: ${escapeHTML(p.timeline)}</p>
                    </div>

                    <p class="text-xs sm:text-sm text-inkMuted line-clamp-2 leading-relaxed">${escapeHTML(p.description)}</p>

                    <!-- Deliverables & Milestones Pill Summary -->
                    <div class="grid grid-cols-3 gap-2 pt-2">
                      <div class="p-2.5 rounded-lg bg-ivoryDark/70">
                        <span class="font-mono text-[10px] uppercase text-inkMuted block">Deliverables</span>
                        <span class="font-mono text-sm font-bold text-ink">${(p.deliverables || []).length} items</span>
                      </div>
                      <div class="p-2.5 rounded-lg bg-ivoryDark/70">
                        <span class="font-mono text-[10px] uppercase text-inkMuted block">Milestones</span>
                        <span class="font-mono text-sm font-bold text-ink">${(p.milestones || []).length} phases</span>
                      </div>
                      <div class="p-2.5 rounded-lg bg-forestSoft">
                        <span class="font-mono text-[10px] uppercase text-forest block">Total Estimate</span>
                        <span class="font-mono text-sm font-bold text-forest">${formatMoney(fin.grandTotal, p.currency)}</span>
                      </div>
                    </div>
                  </div>

                  <div class="pt-4 border-t hairline-border flex flex-wrap items-center justify-between gap-2">
                    <div class="flex items-center gap-2">
                      <button type="button" onclick="openProjectInStudio('${p.id}')" class="btn-primary px-3.5 py-2 rounded-lg text-xs font-semibold">
                        Open Proposal Studio →
                      </button>
                      <button type="button" onclick="openProjectInBuilder('${p.id}')" class="btn-secondary px-3 py-2 rounded-lg text-xs font-medium">
                        Edit Brief
                      </button>
                    </div>
                    <div class="flex items-center gap-1.5">
                      <button type="button" onclick="openProjectPreviewDirect('${p.id}')" class="btn-secondary px-2.5 py-2 rounded-lg text-xs font-mono" title="Preview PDF">PDF</button>
                      <button type="button" onclick="duplicateProject('${p.id}')" class="btn-secondary px-2.5 py-2 rounded-lg text-xs" title="Duplicate Project">Duplicate</button>
                      <button type="button" onclick="deleteProject('${p.id}')" class="btn-secondary px-2.5 py-2 rounded-lg text-xs text-terracotta hover:bg-terracottaSoft" title="Delete Project">Delete</button>
                    </div>
                  </div>
                </div>
              `;
            }).join('')}
          </div>
        `;
      }
    }

    function updateProjectStatus(projectId, newStatus) {
      const proj = state.projects.find((p) => p.id === projectId);
      if (!proj) return;
      proj.status = newStatus;
      proj.updatedAt = new Date().toISOString();
      saveWorkspaceState();
      renderDashboard();
      showToast(`Status updated to "${newStatus}"`);
    }

    function openProjectInBuilder(projectId) {
      state.activeProjectId = projectId;
      state.builderStep = 1;
      saveWorkspaceState();
      navigateTo('builder');
    }

    function openProjectInStudio(projectId) {
      state.activeProjectId = projectId;
      state.studioSubMode = 'edit';
      saveWorkspaceState();
      navigateTo('studio');
    }

    function openProjectPreviewDirect(projectId) {
      state.activeProjectId = projectId;
      state.studioSubMode = 'preview';
      saveWorkspaceState();
      navigateTo('studio');
    }

    function openStudioInPreviewMode() {
      state.studioSubMode = 'preview';
      navigateTo('studio');
    }

    function duplicateProject(projectId) {
      const orig = state.projects.find((p) => p.id === projectId);
      if (!orig) return;
      const clone = JSON.parse(JSON.stringify(orig));
      clone.id = 'proj-' + Date.now();
      clone.isSample = false;
      clone.name = `${orig.name} (Copy)`;
      clone.refCode = `BL-2026-${String(state.projects.length + 1).padStart(2, '0')}`;
      clone.updatedAt = new Date().toISOString();
      state.projects.unshift(clone);
      state.activeProjectId = clone.id;
      saveWorkspaceState();
      renderDashboard();
      showToast(`Duplicated "${orig.name}"`);
    }

    function deleteProject(projectId) {
      const target = state.projects.find((p) => p.id === projectId);
      if (!target) return;
      openConfirmModal(
        'Delete Project from Workspace?',
        `Are you sure you want to permanently remove "${target.name}" (${target.client}) from local storage?`,
        () => {
          state.projects = state.projects.filter((p) => p.id !== projectId);
          if (state.activeProjectId === projectId) {
            state.activeProjectId = state.projects[0]?.id || null;
          }
          saveWorkspaceState();
          renderDashboard();
          showToast('Project deleted from workspace', 'burnt');
        }
      );
    }

    function restoreSampleProject() {
      const existing = state.projects.find((p) => p.id === 'proj-sample-nordic');
      if (existing) {
        state.activeProjectId = existing.id;
        showToast('Sample project is already in your workspace');
      } else {
        const sample = createSampleProject();
        state.projects.unshift(sample);
        state.activeProjectId = sample.id;
        saveWorkspaceState();
        showToast('Restored labeled sample project');
      }
      renderDashboard();
    }

    function startFreshBrief() {
      const nextNum = String(state.projects.length + 1).padStart(2, '0');
      const newProj = {
        id: 'proj-' + Date.now(),
        refCode: `BL-2026-${nextNum}`,
        isSample: false,
        name: 'Untitled Client Engagement',
        client: 'New Client Organization',
        preparedBy: 'Principal Studio',
        category: 'Website Design & Development',
        status: 'Draft Brief',
        timeline: '6 Weeks',
        kickoffWindow: 'Upon Proposal Acceptance',
        validUntil: '2026-12-31',
        currency: 'USD',
        budgetTarget: 15000,
        pricingPreference: 'Hybrid Fixed + Hourly',
        contingencyPct: 5,
        discountPct: 0,
        taxPct: 0,
        updatedAt: new Date().toISOString(),
        description: 'Define the core client challenge, strategic goals, and transformation scope for this engagement.',
        objectives: [
          'Clarify product positioning and user conversion pathways.',
          'Deliver a cohesive, documented system on schedule and within budget.'
        ],
        deliverables: [
          {
            id: 'del-' + Date.now() + '-1',
            phase: 'Phase 01: Discovery',
            title: 'Discovery Workshop & Project Architecture Brief',
            description: 'Stakeholder alignment, technical & creative scoping, and milestone execution plan.',
            mode: 'fixed',
            fixedPrice: 3200,
            hours: 20,
            rate: 160,
            optional: false,
            included: true
          },
          {
            id: 'del-' + Date.now() + '-2',
            phase: 'Phase 02: Core Execution',
            title: 'Primary Design & Implementation Sprint',
            description: 'Core design and production engineering of agreed project deliverables.',
            mode: 'hourly',
            fixedPrice: 6400,
            hours: 40,
            rate: 160,
            optional: false,
            included: true
          }
        ],
        milestones: [
          { id: 'ms-' + Date.now() + '-1', name: 'Milestone 01: Project Kickoff & Discovery Sign-off', week: 'Week 1', description: 'Initial mobilization and project brief sign-off.', pct: 50 },
          { id: 'ms-' + Date.now() + '-2', name: 'Milestone 02: Final Delivery & Handover', week: 'Week 6', description: 'Final review, quality assurance, and master asset handover.', pct: 50 }
        ],
        notes: 'Includes two rounds of consolidated revisions per deliverable phase. Proposal valid for 30 days.'
      };

      state.projects.unshift(newProj);
      state.activeProjectId = newProj.id;
      state.builderStep = 1;
      saveWorkspaceState();
      navigateTo('builder');
      showToast('Created new project brief');
    }

    // =========================================================================
    // INTERACTIVE PROJECT BRIEF BUILDER LOGIC
    // =========================================================================
    function setBuilderStep(stepNum) {
      // Real-time validation check when advancing from Step 1
      const proj = getActiveProject();
      if (proj && stepNum > 1) {
        const nameErr = document.getElementById('brief-name-error');
        const clientErr = document.getElementById('brief-client-error');
        let valid = true;
        if (!proj.name || !proj.name.trim()) {
          if (nameErr) nameErr.classList.remove('hidden');
          valid = false;
        } else if (nameErr) {
          nameErr.classList.add('hidden');
        }
        if (!proj.client || !proj.client.trim()) {
          if (clientErr) clientErr.classList.remove('hidden');
          valid = false;
        } else if (clientErr) {
          clientErr.classList.add('hidden');
        }
        if (!valid) {
          showToast('Please enter both Project Name and Client Name', 'burnt');
          return;
        }
      }

      state.builderStep = stepNum;
      [1, 2, 3, 4].forEach((n) => {
        const panel = document.getElementById(`builder-step-${n}`);
        if (panel) panel.classList.toggle('hidden', n !== stepNum);
        const tab = document.getElementById(`step-tab-${n}`);
        if (tab) {
          tab.className = n === stepNum
            ? 'p-3.5 rounded-xl border-2 border-forest bg-forestSoft/60 text-left transition-all shadow-2xs'
            : 'p-3.5 rounded-xl border hairline-border bg-ivoryCard hover:bg-ivoryDark text-left transition-all';
        }
      });
      updateBuilderSidebar();
    }

    function populateBuilderFromActiveProject() {
      const proj = getActiveProject();
      if (!proj) return;

      document.getElementById('builder-project-ref').textContent = `REF: ${proj.refCode}`;
      document.getElementById('brief-name').value = proj.name || '';
      document.getElementById('brief-client').value = proj.client || '';
      document.getElementById('brief-category').value = proj.category || 'Website Design & Development';
      document.getElementById('brief-status').value = proj.status || 'Draft Brief';
      document.getElementById('brief-prepared-by').value = proj.preparedBy || '';
      document.getElementById('brief-valid-until').value = proj.validUntil || '2026-12-31';
      document.getElementById('brief-description').value = proj.description || '';
      document.getElementById('brief-desc-counter').textContent = `${(proj.description || '').length} chars`;
      document.getElementById('brief-timeline').value = proj.timeline || '';
      document.getElementById('brief-start-date').value = proj.kickoffWindow || '';
      document.getElementById('brief-currency').value = proj.currency || 'USD';
      document.getElementById('brief-budget-ceiling').value = proj.budgetTarget || 0;
      document.getElementById('brief-pricing-pref').value = proj.pricingPreference || 'Hybrid Fixed + Hourly';
      document.getElementById('brief-contingency').value = proj.contingencyPct ?? 5;
      document.getElementById('brief-discount').value = proj.discountPct ?? 0;
      document.getElementById('brief-tax').value = proj.taxPct ?? 0;
      document.getElementById('brief-notes').value = proj.notes || '';

      renderBuilderObjectives();
      renderBuilderDeliverables();
      setBuilderStep(state.builderStep || 1);
    }

    function syncBuilderField(field, value) {
      const proj = getActiveProject();
      if (!proj) return;
      proj[field] = value;
      proj.updatedAt = new Date().toISOString();
      if (field === 'description') {
        const counter = document.getElementById('brief-desc-counter');
        if (counter) counter.textContent = `${String(value || '').length} chars`;
      }
      saveWorkspaceState();
      updateBuilderSidebar();
      if (state.currentView === 'studio') {
        renderStudioFinancialSidebar();
        if (state.studioSubMode === 'preview') renderProposalPreviewSheet();
      }
    }

    function appendDescriptionPrompt(snippet) {
      const proj = getActiveProject();
      if (!proj) return;
      proj.description = (proj.description ? proj.description.trim() + ' ' : '') + snippet;
      document.getElementById('brief-description').value = proj.description;
      syncBuilderField('description', proj.description);
    }

    function renderBuilderObjectives() {
      const proj = getActiveProject();
      const container = document.getElementById('builder-objectives-list');
      if (!proj || !container) return;

      if (!Array.isArray(proj.objectives) || proj.objectives.length === 0) {
        container.innerHTML = `<div class="p-4 rounded-xl bg-ivoryDark/50 text-xs text-inkMuted text-center">No objectives added yet. Add at least 2 primary objectives above.</div>`;
        return;
      }

      container.innerHTML = proj.objectives.map((obj, idx) => `
        <div class="flex items-center justify-between gap-3 p-3 rounded-xl bg-white border hairline-border">
          <div class="flex items-center gap-3 flex-1">
            <span class="font-mono text-xs font-bold px-2 py-0.5 rounded bg-forestSoft text-forest">0${idx + 1}</span>
            <input type="text" value="${escapeHTML(obj)}" oninput="updateBuilderObjective(${idx}, this.value)" class="w-full text-xs sm:text-sm text-ink bg-transparent focus:outline-none" aria-label="Objective ${idx + 1}" />
          </div>
          <button type="button" onclick="removeBuilderObjective(${idx})" class="text-xs font-mono text-terracotta hover:underline px-2 py-1">Remove</button>
        </div>
      `).join('');
    }

    function addBuilderObjective() {
      const input = document.getElementById('new-objective-input');
      if (!input || !input.value.trim()) return;
      quickAddObjective(input.value.trim());
      input.value = '';
    }

    function quickAddObjective(text) {
      const proj = getActiveProject();
      if (!proj) return;
      if (!Array.isArray(proj.objectives)) proj.objectives = [];
      proj.objectives.push(text);
      proj.updatedAt = new Date().toISOString();
      saveWorkspaceState();
      renderBuilderObjectives();
      updateBuilderSidebar();
    }

    function updateBuilderObjective(idx, val) {
      const proj = getActiveProject();
      if (!proj || !proj.objectives) return;
      proj.objectives[idx] = val;
      saveWorkspaceState();
    }

    function removeBuilderObjective(idx) {
      const proj = getActiveProject();
      if (!proj || !proj.objectives) return;
      proj.objectives.splice(idx, 1);
      saveWorkspaceState();
      renderBuilderObjectives();
      updateBuilderSidebar();
    }

    function toggleBuilderDelivMode() {
      const mode = document.getElementById('builder-deliv-mode')?.value;
      const priceInput = document.getElementById('builder-deliv-price');
      if (priceInput) {
        priceInput.placeholder = mode === 'hourly' ? 'Hours (e.g. 25)' : 'Fee ($)';
        priceInput.value = mode === 'hourly' ? '25' : '3500';
      }
    }

    function addDeliverableFromBuilder() {
      const proj = getActiveProject();
      if (!proj) return;
      const titleEl = document.getElementById('builder-deliv-title');
      const modeEl = document.getElementById('builder-deliv-mode');
      const priceEl = document.getElementById('builder-deliv-price');
      const descEl = document.getElementById('builder-deliv-desc');

      const title = (titleEl?.value || '').trim();
      if (!title) {
        showToast('Please enter a deliverable title', 'burnt');
        return;
      }
      const mode = modeEl?.value || 'fixed';
      const numVal = Math.max(0, Number(priceEl?.value || 0));

      proj.deliverables.push({
        id: 'del-' + Date.now(),
        phase: `Phase 0${proj.deliverables.length + 1}`,
        title,
        description: (descEl?.value || '').trim() || 'Scoped project deliverable with milestone review.',
        mode,
        fixedPrice: mode === 'fixed' ? numVal : numVal * 150,
        hours: mode === 'hourly' ? numVal : 20,
        rate: 150,
        optional: false,
        included: true
      });

      if (titleEl) titleEl.value = '';
      if (descEl) descEl.value = '';
      saveWorkspaceState();
      renderBuilderDeliverables();
      updateBuilderSidebar();
      showToast('Deliverable added to project brief');
    }

    function renderBuilderDeliverables() {
      const proj = getActiveProject();
      const container = document.getElementById('builder-deliverables-list');
      if (!proj || !container) return;

      if (!proj.deliverables || proj.deliverables.length === 0) {
        container.innerHTML = `<div class="p-4 rounded-xl bg-ivoryDark/50 text-xs text-inkMuted text-center">No deliverables added yet. Use the form above to add deliverables.</div>`;
        return;
      }

      container.innerHTML = proj.deliverables.map((d, idx) => {
        const amount = d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice;
        return `
          <div class="p-3.5 rounded-xl bg-white border hairline-border flex items-center justify-between gap-3">
            <div>
              <div class="flex items-center gap-2">
                <span class="font-mono text-[10px] px-2 py-0.5 rounded bg-forestSoft text-forest font-semibold">${escapeHTML(d.phase)}</span>
                <span class="font-semibold text-xs sm:text-sm text-ink">${escapeHTML(d.title)}</span>
              </div>
              <p class="text-xs text-inkMuted mt-0.5">${escapeHTML(d.description)}</p>
            </div>
            <div class="flex items-center gap-3 shrink-0">
              <span class="font-mono text-xs sm:text-sm font-bold text-forest">${formatMoney(amount, proj.currency)}</span>
              <button type="button" onclick="removeDeliverableByIndex(${idx})" class="text-xs font-mono text-terracotta hover:underline">Remove</button>
            </div>
          </div>
        `;
      }).join('');
    }

    function removeDeliverableByIndex(idx) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables) return;
      proj.deliverables.splice(idx, 1);
      saveWorkspaceState();
      renderBuilderDeliverables();
      updateBuilderSidebar();
    }

    function updateBuilderSidebar() {
      const proj = getActiveProject();
      if (!proj) return;
      const fin = calculateProjectFinancials(proj);

      // Compute completeness score
      let checks = 0;
      if (proj.name && proj.name.trim()) checks += 20;
      if (proj.client && proj.client.trim()) checks += 20;
      if (proj.description && proj.description.trim().length > 20) checks += 20;
      if (Array.isArray(proj.objectives) && proj.objectives.length > 0) checks += 20;
      if (Array.isArray(proj.deliverables) && proj.deliverables.length > 0) checks += 20;

      document.getElementById('builder-completeness-pct').textContent = `${checks}%`;
      document.getElementById('builder-completeness-bar').style.width = `${checks}%`;

      document.getElementById('sidebar-proj-name').textContent = proj.name || '—';
      document.getElementById('sidebar-proj-client').textContent = proj.client || '—';
      document.getElementById('sidebar-proj-category').textContent = proj.category || '—';
      document.getElementById('sidebar-proj-objectives').textContent = String((proj.objectives || []).length);
      document.getElementById('sidebar-proj-deliverables').textContent = String((proj.deliverables || []).length);
      document.getElementById('sidebar-proj-timeline').textContent = proj.timeline || '—';
      document.getElementById('sidebar-total-estimate').textContent = formatMoney(fin.grandTotal, proj.currency);

      const badge = document.getElementById('sidebar-budget-badge');
      const note = document.getElementById('sidebar-budget-note');
      const target = Number(proj.budgetTarget || 0);
      if (target > 0) {
        const diff = target - fin.grandTotal;
        if (diff >= 0) {
          badge.textContent = 'Within Budget';
          badge.className = 'font-mono text-[10px] px-2 py-0.5 rounded bg-ivory/20 text-ivory';
          note.textContent = `${formatMoney(diff, proj.currency)} under client target (${formatMoney(target, proj.currency)}).`;
        } else {
          badge.textContent = 'Over Target';
          badge.className = 'font-mono text-[10px] px-2 py-0.5 rounded bg-terracotta text-white';
          note.textContent = `${formatMoney(Math.abs(diff), proj.currency)} above client target (${formatMoney(target, proj.currency)}).`;
        }
      } else {
        badge.textContent = 'Active Calc';
        note.textContent = 'Includes active deliverables, contingency & tax.';
      }
    }

    function saveBriefDraftToast() {
      saveWorkspaceState();
      showToast('Project brief saved to local browser storage');
    }

    function saveBriefAndGoToStudio() {
      saveWorkspaceState();
      state.studioSubMode = 'edit';
      navigateTo('studio');
      showToast('Brief synced to Proposal & Pricing Studio');
    }

    // =========================================================================
    // PROPOSAL & PRICING STUDIO LOGIC
    // =========================================================================
    function selectActiveProject(projectId) {
      state.activeProjectId = projectId;
      saveWorkspaceState();
      renderStudioView();
    }

    function setStudioSubMode(mode) {
      state.studioSubMode = mode;
      const editPane = document.getElementById('studio-editor-pane');
      const prevPane = document.getElementById('studio-preview-pane');
      const editBtn = document.getElementById('studio-tab-edit');
      const prevBtn = document.getElementById('studio-tab-preview');

      if (mode === 'preview') {
        editPane.classList.add('hidden');
        prevPane.classList.remove('hidden');
        editBtn.className = 'px-3.5 py-1.5 rounded-md text-xs font-semibold text-ink hover:bg-ivory transition-colors';
        prevBtn.className = 'px-3.5 py-1.5 rounded-md text-xs font-semibold bg-forest text-ivory transition-colors';
        renderProposalPreviewSheet();
      } else {
        editPane.classList.remove('hidden');
        prevPane.classList.add('hidden');
        editBtn.className = 'px-3.5 py-1.5 rounded-md text-xs font-semibold bg-forest text-ivory transition-colors';
        prevBtn.className = 'px-3.5 py-1.5 rounded-md text-xs font-semibold text-ink hover:bg-ivory transition-colors';
      }
    }

    function renderStudioView() {
      const proj = getActiveProject();
      if (!proj) return;

      // Populate Project Selector Dropdown
      const selector = document.getElementById('studio-project-selector');
      if (selector) {
        selector.innerHTML = state.projects.map((p) => `
          <option value="${p.id}" ${p.id === proj.id ? 'selected' : ''}>
            ${escapeHTML(p.name)} (${escapeHTML(p.client)})
          </option>
        `).join('');
      }

      const statusSel = document.getElementById('studio-status-selector');
      if (statusSel) statusSel.value = proj.status || 'Draft Brief';

      // Populate Narrative Quick Inputs
      document.getElementById('studio-edit-name').value = proj.name || '';
      document.getElementById('studio-edit-client').value = proj.client || '';
      document.getElementById('studio-edit-desc').value = proj.description || '';
      document.getElementById('studio-edit-notes').value = proj.notes || '';

      renderStudioDeliverablesList();
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
      renderProposalPreviewSheet();
      setStudioSubMode(state.studioSubMode || 'edit');
    }

    function renderStudioDeliverablesList() {
      const proj = getActiveProject();
      const container = document.getElementById('studio-deliverables-container');
      if (!proj || !container) return;

      if (!Array.isArray(proj.deliverables) || proj.deliverables.length === 0) {
        container.innerHTML = `<div class="p-6 rounded-xl bg-ivoryDark/50 text-center text-xs text-inkMuted">No deliverables in scope. Click "+ Add Deliverable Line Item" above.</div>`;
        return;
      }

      container.innerHTML = proj.deliverables.map((d, idx) => {
        const lineTotal = d.mode === 'hourly'
          ? Math.round(Number(d.hours || 0) * Number(d.rate || 0))
          : Math.round(Number(d.fixedPrice || 0));
        const isMuted = d.optional && !d.included;

        return `
          <div class="p-4 rounded-xl border transition-all ${isMuted ? 'bg-ivoryDark/40 border-ink/10 opacity-75' : 'bg-white hairline-border shadow-2xs'} space-y-3">
            <!-- Top Row: Phase Tag, Title, Reorder & Delete -->
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2 flex-1 min-w-[240px]">
                <input type="text" value="${escapeHTML(d.phase)}" oninput="updateDeliverableField(${idx}, 'phase', this.value)" class="loom-input px-2 py-1 rounded font-mono text-[11px] w-36 text-forest font-semibold" aria-label="Deliverable Phase" />
                <input type="text" value="${escapeHTML(d.title)}" oninput="updateDeliverableField(${idx}, 'title', this.value)" class="loom-input px-3 py-1 rounded text-xs sm:text-sm font-semibold flex-1" aria-label="Deliverable Title" />
              </div>

              <div class="flex items-center gap-1">
                <button type="button" onclick="moveDeliverable(${idx}, -1)" ${idx === 0 ? 'disabled' : ''} class="px-2 py-1 rounded border hairline-border text-xs hover:bg-ivoryDark disabled:opacity-30" title="Move Up">↑</button>
                <button type="button" onclick="moveDeliverable(${idx}, 1)" ${idx === proj.deliverables.length - 1 ? 'disabled' : ''} class="px-2 py-1 rounded border hairline-border text-xs hover:bg-ivoryDark disabled:opacity-30" title="Move Down">↓</button>
                <button type="button" onclick="deleteStudioDeliverable(${idx})" class="px-2 py-1 rounded border hairline-border text-xs text-terracotta hover:bg-terracottaSoft" title="Remove Deliverable">✕</button>
              </div>
            </div>

            <!-- Description Input -->
            <div>
              <input type="text" value="${escapeHTML(d.description)}" oninput="updateDeliverableField(${idx}, 'description', this.value)" placeholder="Deliverable specification & acceptance criteria..." class="loom-input w-full px-3 py-1.5 rounded text-xs text-inkMuted" aria-label="Deliverable Description" />
            </div>

            <!-- Pricing Controls Row -->
            <div class="pt-2 border-t hairline-border flex flex-wrap items-center justify-between gap-3 text-xs">
              <div class="flex flex-wrap items-center gap-2">
                <!-- Mode Selector -->
                <select onchange="updateDeliverableMode(${idx}, this.value)" class="loom-input px-2.5 py-1 rounded font-mono text-xs" aria-label="Pricing Mode">
                  <option value="fixed" ${d.mode === 'fixed' ? 'selected' : ''}>Fixed Fee</option>
                  <option value="hourly" ${d.mode === 'hourly' ? 'selected' : ''}>Hourly (Hrs × Rate)</option>
                </select>

                ${d.mode === 'hourly' ? `
                  <div class="flex items-center gap-1.5 font-mono">
                    <input type="number" min="0" step="1" value="${Number(d.hours || 0)}" oninput="updateDeliverableField(${idx}, 'hours', Number(this.value || 0))" class="loom-input w-16 px-2 py-1 rounded text-right" aria-label="Estimated Hours" />
                    <span class="text-inkMuted">hrs ×</span>
                    <input type="number" min="0" step="5" value="${Number(d.rate || 0)}" oninput="updateDeliverableField(${idx}, 'rate', Number(this.value || 0))" class="loom-input w-20 px-2 py-1 rounded text-right" aria-label="Hourly Rate" />
                    <span class="text-inkMuted">/hr</span>
                  </div>
                ` : `
                  <div class="flex items-center gap-1.5 font-mono">
                    <span class="text-inkMuted">Fixed Price:</span>
                    <input type="number" min="0" step="50" value="${Number(d.fixedPrice || 0)}" oninput="updateDeliverableField(${idx}, 'fixedPrice', Number(this.value || 0))" class="loom-input w-28 px-2 py-1 rounded text-right" aria-label="Fixed Price" />
                  </div>
                `}

                <!-- Optional Add-on Toggle -->
                <label class="inline-flex items-center gap-1.5 ml-2 cursor-pointer select-none">
                  <input type="checkbox" ${d.optional ? 'checked' : ''} onchange="toggleDeliverableOptionalFlag(${idx}, this.checked)" class="accent-forest" />
                  <span class="text-inkMuted">Optional Add-on</span>
                </label>

                ${d.optional ? `
                  <label class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-forestSoft text-forest font-semibold cursor-pointer select-none">
                    <input type="checkbox" ${d.included ? 'checked' : ''} onchange="updateDeliverableField(${idx}, 'included', this.checked)" class="accent-forest" />
                    <span>Include in Total</span>
                  </label>
                ` : ''}
              </div>

              <div class="font-mono text-sm font-bold ${isMuted ? 'line-through text-inkMuted' : 'text-forest'}">
                <span id="deliv-line-total-${idx}">${formatMoney(lineTotal, proj.currency)}</span>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function updateDeliverableField(idx, field, value) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables[idx]) return;
      proj.deliverables[idx][field] = value;
      proj.updatedAt = new Date().toISOString();
      saveWorkspaceState();

      // Update inline line total without losing input focus
      const d = proj.deliverables[idx];
      const lineTotal = d.mode === 'hourly'
        ? Math.round(Number(d.hours || 0) * Number(d.rate || 0))
        : Math.round(Number(d.fixedPrice || 0));
      const lineEl = document.getElementById(`deliv-line-total-${idx}`);
      if (lineEl) lineEl.textContent = formatMoney(lineTotal, proj.currency);

      if (field === 'included') {
        renderStudioDeliverablesList();
      }
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
    }

    function updateDeliverableMode(idx, newMode) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables[idx]) return;
      proj.deliverables[idx].mode = newMode;
      saveWorkspaceState();
      renderStudioDeliverablesList();
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
    }

    function toggleDeliverableOptionalFlag(idx, isOptional) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables[idx]) return;
      proj.deliverables[idx].optional = isOptional;
      proj.deliverables[idx].included = !isOptional;
      saveWorkspaceState();
      renderStudioDeliverablesList();
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
    }

    function addStudioDeliverable() {
      const proj = getActiveProject();
      if (!proj) return;
      if (!Array.isArray(proj.deliverables)) proj.deliverables = [];
      proj.deliverables.push({
        id: 'del-' + Date.now(),
        phase: `Phase 0${proj.deliverables.length + 1}`,
        title: 'New Scoped Deliverable',
        description: 'Specify the deliverable output, format, and review rounds.',
        mode: 'fixed',
        fixedPrice: 3000,
        hours: 20,
        rate: 150,
        optional: false,
        included: true
      });
      saveWorkspaceState();
      renderStudioDeliverablesList();
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
      showToast('Added deliverable line item');
    }

    function moveDeliverable(idx, direction) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables) return;
      const targetIdx = idx + direction;
      if (targetIdx < 0 || targetIdx >= proj.deliverables.length) return;
      const temp = proj.deliverables[idx];
      proj.deliverables[idx] = proj.deliverables[targetIdx];
      proj.deliverables[targetIdx] = temp;
      saveWorkspaceState();
      renderStudioDeliverablesList();
    }

    function deleteStudioDeliverable(idx) {
      const proj = getActiveProject();
      if (!proj || !proj.deliverables) return;
      proj.deliverables.splice(idx, 1);
      saveWorkspaceState();
      renderStudioDeliverablesList();
      renderStudioMilestonesList();
      renderStudioFinancialSidebar();
    }

    // Milestones Engine
    function renderStudioMilestonesList() {
      const proj = getActiveProject();
      const container = document.getElementById('studio-milestones-container');
      if (!proj || !container) return;

      const fin = calculateProjectFinancials(proj);
      const milestones = Array.isArray(proj.milestones) ? proj.milestones : [];
      const sumPct = milestones.reduce((acc, m) => acc + Number(m.pct || 0), 0);

      // Update allocation status banner
      const banner = document.getElementById('milestone-allocation-banner');
      const bannerText = document.getElementById('milestone-allocation-text');
      const bannerPct = document.getElementById('milestone-allocation-pct');

      if (banner && bannerText && bannerPct) {
        bannerPct.textContent = `${sumPct}%`;
        if (Math.round(sumPct) === 100) {
          banner.className = 'p-3 rounded-lg bg-forestSoft border border-forest/20 flex items-center justify-between text-xs';
          bannerText.className = 'font-medium text-forest';
          bannerText.textContent = '✓ Milestone payment schedule is balanced at 100% of total investment.';
        } else {
          banner.className = 'p-3 rounded-lg bg-terracottaSoft border border-terracotta/30 flex items-center justify-between text-xs';
          bannerText.className = 'font-medium text-terracotta';
          bannerText.textContent = `Allocation currently sums to ${sumPct}%. Click "Auto-Balance 100%" to normalize.`;
        }
      }

      if (milestones.length === 0) {
        container.innerHTML = `<div class="p-6 rounded-xl bg-ivoryDark/50 text-center text-xs text-inkMuted">No milestones defined. Click "+ Add Milestone" to structure payment tranches.</div>`;
        return;
      }

      container.innerHTML = milestones.map((m, idx) => {
        const trancheAmount = Math.round(fin.grandTotal * (Number(m.pct || 0) / 100));
        return `
          <div class="p-4 rounded-xl bg-white border hairline-border space-y-2.5">
            <div class="flex flex-wrap items-center justify-between gap-2">
              <div class="flex items-center gap-2 flex-1 min-w-[220px]">
                <input type="text" value="${escapeHTML(m.week)}" oninput="updateMilestoneField(${idx}, 'week', this.value)" class="loom-input w-24 px-2 py-1 rounded font-mono text-xs text-terracotta font-semibold" aria-label="Target Week" />
                <input type="text" value="${escapeHTML(m.name)}" oninput="updateMilestoneField(${idx}, 'name', this.value)" class="loom-input flex-1 px-3 py-1 rounded text-xs sm:text-sm font-semibold" aria-label="Milestone Name" />
              </div>
              <div class="flex items-center gap-2">
                <div class="flex items-center gap-1 font-mono text-xs">
                  <input type="number" min="0" max="100" step="5" value="${Number(m.pct || 0)}" oninput="updateMilestoneField(${idx}, 'pct', Number(this.value || 0))" class="loom-input w-16 px-2 py-1 rounded text-right font-bold" aria-label="Milestone Percentage" />
                  <span>% =</span>
                  <span id="milestone-amt-${idx}" class="font-bold text-forest px-1.5">${formatMoney(trancheAmount, proj.currency)}</span>
                </div>
                <button type="button" onclick="deleteStudioMilestone(${idx})" class="px-2 py-1 rounded border hairline-border text-xs text-terracotta hover:bg-terracottaSoft" title="Remove Milestone">✕</button>
              </div>
            </div>
            <input type="text" value="${escapeHTML(m.description)}" oninput="updateMilestoneField(${idx}, 'description', this.value)" class="loom-input w-full px-3 py-1.5 rounded text-xs text-inkMuted" placeholder="Milestone deliverable gate & invoice trigger..." aria-label="Milestone Description" />
          </div>
        `;
      }).join('');
    }

    function updateMilestoneField(idx, field, value) {
      const proj = getActiveProject();
      if (!proj || !proj.milestones[idx]) return;
      proj.milestones[idx][field] = value;
      proj.updatedAt = new Date().toISOString();
      saveWorkspaceState();

      if (field === 'pct') {
        const fin = calculateProjectFinancials(proj);
        const amt = Math.round(fin.grandTotal * (Number(value || 0) / 100));
        const amtEl = document.getElementById(`milestone-amt-${idx}`);
        if (amtEl) amtEl.textContent = formatMoney(amt, proj.currency);

        const sumPct = proj.milestones.reduce((acc, m) => acc + Number(m.pct || 0), 0);
        const bannerPct = document.getElementById('milestone-allocation-pct');
        if (bannerPct) bannerPct.textContent = `${sumPct}%`;
      }
    }

    function addStudioMilestone() {
      const proj = getActiveProject();
      if (!proj) return;
      if (!Array.isArray(proj.milestones)) proj.milestones = [];
      proj.milestones.push({
        id: 'ms-' + Date.now(),
        name: `Milestone 0${proj.milestones.length + 1}: Delivery Gate`,
        week: `Week ${proj.milestones.length * 2 + 2}`,
        description: 'Deliverable review and phase sign-off.',
        pct: 25
      });
      saveWorkspaceState();
      renderStudioMilestonesList();
    }

    function deleteStudioMilestone(idx) {
      const proj = getActiveProject();
      if (!proj || !proj.milestones) return;
      proj.milestones.splice(idx, 1);
      saveWorkspaceState();
      renderStudioMilestonesList();
    }

    function autoBalanceMilestones() {
      const proj = getActiveProject();
      if (!proj || !Array.isArray(proj.milestones) || proj.milestones.length === 0) return;
      const count = proj.milestones.length;
      const basePct = Math.floor(100 / count);
      let remainder = 100 - basePct * count;
      proj.milestones.forEach((m, i) => {
        m.pct = basePct + (i === 0 ? remainder : 0);
      });
      saveWorkspaceState();
      renderStudioMilestonesList();
      showToast('Milestones balanced to 100%');
    }

    function renderStudioFinancialSidebar() {
      const proj = getActiveProject();
      if (!proj) return;
      const fin = calculateProjectFinancials(proj);

      document.getElementById('studio-currency-badge').textContent = proj.currency || 'USD';
      document.getElementById('studio-grand-total').textContent = formatMoney(fin.grandTotal, proj.currency);
      document.getElementById('studio-hours-summary').textContent = `${fin.includedCount} active deliverables • ${fin.totalHours} est. hours`;

      document.getElementById('studio-fixed-subtotal').textContent = formatMoney(fin.fixedSubtotal, proj.currency);
      document.getElementById('studio-hourly-subtotal').textContent = formatMoney(fin.hourlySubtotal, proj.currency);
      document.getElementById('studio-addons-subtotal').textContent = formatMoney(fin.addonsSubtotal, proj.currency);
      document.getElementById('studio-net-subtotal').textContent = formatMoney(fin.netSubtotal, proj.currency);

      document.getElementById('studio-contingency-input').value = proj.contingencyPct ?? 0;
      document.getElementById('studio-contingency-amount').textContent = `+${formatMoney(fin.contingencyAmount, proj.currency)}`;

      document.getElementById('studio-discount-input').value = proj.discountPct ?? 0;
      document.getElementById('studio-discount-amount').textContent = `-${formatMoney(fin.discountAmount, proj.currency)}`;

      document.getElementById('studio-tax-input').value = proj.taxPct ?? 0;
      document.getElementById('studio-tax-amount').textContent = `+${formatMoney(fin.taxAmount, proj.currency)}`;

      const compBox = document.getElementById('studio-budget-comparison');
      const target = Number(proj.budgetTarget || 0);
      if (compBox) {
        if (target > 0) {
          const delta = target - fin.grandTotal;
          compBox.innerHTML = delta >= 0
            ? `<div class="flex justify-between items-center"><span class="text-inkMuted">Client Target (${formatMoney(target, proj.currency)})</span><span class="font-mono font-bold text-forest">${formatMoney(delta, proj.currency)} Under</span></div>`
            : `<div class="flex justify-between items-center"><span class="text-inkMuted">Client Target (${formatMoney(target, proj.currency)})</span><span class="font-mono font-bold text-terracotta">${formatMoney(Math.abs(delta), proj.currency)} Over</span></div>`;
        } else {
          compBox.innerHTML = `<span class="text-inkMuted">Set a Client Target Budget in Brief Builder to track variance.</span>`;
        }
      }
    }

    // =========================================================================
    // CLIENT PROPOSAL DOCUMENT PREVIEW & PRINT PDF ENGINE
    // =========================================================================
    function renderProposalPreviewSheet() {
      const proj = getActiveProject();
      const sheet = document.getElementById('proposal-document-sheet');
      if (!proj || !sheet) return;

      const fin = calculateProjectFinancials(proj);
      const activeDeliverables = (proj.deliverables || []).filter((d) => !d.optional || d.included);
      const optionalUnselected = (proj.deliverables || []).filter((d) => d.optional && !d.included);

      sheet.innerHTML = `
        <!-- Proposal Editorial Masthead -->
        <div class="border-b-2 border-ink pb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div class="space-y-2">
            <div class="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-forest font-semibold">
              <span>COMMERCIAL PROJECT PROPOSAL</span>
              <span>•</span>
              <span>${escapeHTML(proj.refCode)}</span>
            </div>
            <h1 class="font-editorial text-4xl sm:text-5xl text-ink leading-tight">${escapeHTML(proj.name)}</h1>
            <p class="font-mono text-xs text-inkMuted uppercase tracking-wider">Discipline: ${escapeHTML(proj.category)} • Estimated Duration: ${escapeHTML(proj.timeline)}</p>
          </div>
          <div class="sm:text-right font-mono text-xs space-y-1 shrink-0 bg-ivory p-4 rounded-xl border hairline-border">
            <div><span class="text-inkMuted">PREPARED FOR:</span> <strong class="text-ink">${escapeHTML(proj.client)}</strong></div>
            <div><span class="text-inkMuted">PREPARED BY:</span> <strong class="text-ink">${escapeHTML(proj.preparedBy || 'Principal Studio')}</strong></div>
            <div><span class="text-inkMuted">VALID UNTIL:</span> <span class="text-ink">${escapeHTML(proj.validUntil || '30 Days')}</span></div>
          </div>
        </div>

        <!-- 01 / Executive Context & Objectives -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 page-break-avoid">
          <div class="md:col-span-5 space-y-2">
            <span class="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">01 / Executive Summary</span>
            <h2 class="font-editorial text-3xl text-ink">Project Context &amp; Ambition</h2>
            <p class="text-xs sm:text-sm text-inkMuted leading-relaxed">${escapeHTML(proj.description)}</p>
          </div>
          <div class="md:col-span-7 space-y-3">
            <span class="font-mono text-xs uppercase tracking-widest text-forest font-semibold">02 / Target Outcomes</span>
            <h2 class="font-editorial text-3xl text-ink">Primary Objectives</h2>
            <div class="space-y-2">
              ${(proj.objectives || []).map((obj, i) => `
                <div class="p-3 rounded-lg bg-ivory border hairline-border flex items-start gap-3 text-xs sm:text-sm">
                  <span class="font-mono font-bold text-forest">0${i + 1}</span>
                  <span class="text-ink">${escapeHTML(obj)}</span>
                </div>
              `).join('')}
            </div>
          </div>
        </div>

        <!-- 03 / Detailed Scope of Work & Deliverables Table -->
        <div class="space-y-4 page-break-avoid">
          <div class="border-b hairline-border pb-2 flex items-baseline justify-between">
            <div>
              <span class="font-mono text-xs uppercase tracking-widest text-forest font-semibold">03 / Scope of Work</span>
              <h2 class="font-editorial text-3xl text-ink">Itemized Deliverables &amp; Investment</h2>
            </div>
            <span class="font-mono text-xs text-inkMuted">Currency: ${escapeHTML(proj.currency)}</span>
          </div>

          <div class="overflow-x-auto">
            <table class="w-full text-left border-collapse text-xs sm:text-sm">
              <thead>
                <tr class="border-b-2 border-ink font-mono text-[11px] uppercase tracking-wider text-inkMuted">
                  <th class="py-3 pr-4">Phase &amp; Deliverable</th>
                  <th class="py-3 px-4">Basis</th>
                  <th class="py-3 pl-4 text-right">Investment</th>
                </tr>
              </thead>
              <tbody class="divide-y hairline-border">
                ${activeDeliverables.map((d) => {
                  const amt = d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice;
                  const basis = d.mode === 'hourly' ? `${d.hours} hrs × ${formatMoney(d.rate, proj.currency)}/hr` : 'Fixed Phase Fee';
                  return `
                    <tr>
                      <td class="py-3.5 pr-4">
                        <div class="flex items-center gap-2">
                          <span class="font-mono text-[10px] uppercase px-2 py-0.5 rounded bg-forestSoft text-forest font-semibold">${escapeHTML(d.phase)}</span>
                          <span class="font-semibold text-ink">${escapeHTML(d.title)}</span>
                          ${d.optional ? '<span class="font-mono text-[10px] px-1.5 py-0.5 rounded bg-terracottaSoft text-terracotta">Selected Add-on</span>' : ''}
                        </div>
                        <p class="text-xs text-inkMuted mt-1">${escapeHTML(d.description)}</p>
                      </td>
                      <td class="py-3.5 px-4 font-mono text-xs text-inkMuted whitespace-nowrap">${escapeHTML(basis)}</td>
                      <td class="py-3.5 pl-4 text-right font-mono font-semibold text-ink whitespace-nowrap">${formatMoney(amt, proj.currency)}</td>
                    </tr>
                  `;
                }).join('')}
              </tbody>
            </table>
          </div>

          ${optionalUnselected.length > 0 ? `
            <div class="p-4 rounded-xl bg-ivory border hairline-border space-y-2">
              <span class="font-mono text-[10px] uppercase tracking-widest text-inkMuted block">Available Optional Add-ons (Not Included in Grand Total Above)</span>
              ${optionalUnselected.map((d) => {
                const amt = d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice;
                return `
                  <div class="flex items-center justify-between text-xs text-inkMuted">
                    <span>• ${escapeHTML(d.title)} — ${escapeHTML(d.description)}</span>
                    <span class="font-mono">+${formatMoney(amt, proj.currency)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          ` : ''}
        </div>

        <!-- 04 / Milestones & Commercial Investment Summary -->
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 page-break-avoid">
          <div class="md:col-span-7 space-y-3">
            <span class="font-mono text-xs uppercase tracking-widest text-terracotta font-semibold">04 / Delivery &amp; Payment Schedule</span>
            <h2 class="font-editorial text-3xl text-ink">Milestones &amp; Tranches</h2>
            <div class="space-y-2.5">
              ${(proj.milestones || []).map((m) => {
                const tranche = Math.round(fin.grandTotal * (Number(m.pct || 0) / 100));
                return `
                  <div class="p-3.5 rounded-xl bg-ivory border hairline-border flex items-center justify-between gap-4">
                    <div>
                      <div class="flex items-center gap-2">
                        <span class="font-mono text-[11px] font-bold text-terracotta">${escapeHTML(m.week)}</span>
                        <span class="font-semibold text-xs sm:text-sm text-ink">${escapeHTML(m.name)}</span>
                      </div>
                      <p class="text-xs text-inkMuted mt-0.5">${escapeHTML(m.description)}</p>
                    </div>
                    <div class="text-right font-mono shrink-0">
                      <span class="text-xs text-inkMuted block">${Number(m.pct || 0)}%</span>
                      <span class="text-sm font-bold text-forest">${formatMoney(tranche, proj.currency)}</span>
                    </div>
                  </div>
                `;
              }).join('')}
            </div>
          </div>

          <div class="md:col-span-5 space-y-3">
            <span class="font-mono text-xs uppercase tracking-widest text-forest font-semibold">05 / Financial Summary</span>
            <h2 class="font-editorial text-3xl text-ink">Total Investment</h2>
            <div class="p-5 rounded-2xl bg-forest text-ivory space-y-3">
              <div class="flex justify-between text-xs">
                <span class="text-ivory/80">Net Scope Subtotal</span>
                <span class="font-mono">${formatMoney(fin.netSubtotal, proj.currency)}</span>
              </div>
              ${fin.contingencyAmount > 0 ? `
                <div class="flex justify-between text-xs">
                  <span class="text-ivory/80">Contingency Buffer (${proj.contingencyPct}%)</span>
                  <span class="font-mono">+${formatMoney(fin.contingencyAmount, proj.currency)}</span>
                </div>
              ` : ''}
              ${fin.discountAmount > 0 ? `
                <div class="flex justify-between text-xs">
                  <span class="text-sage">Partner Discount (${proj.discountPct}%)</span>
                  <span class="font-mono text-sage">-${formatMoney(fin.discountAmount, proj.currency)}</span>
                </div>
              ` : ''}
              ${fin.taxAmount > 0 ? `
                <div class="flex justify-between text-xs">
                  <span class="text-ivory/80">Tax / VAT (${proj.taxPct}%)</span>
                  <span class="font-mono">+${formatMoney(fin.taxAmount, proj.currency)}</span>
                </div>
              ` : ''}
              <div class="pt-3 border-t border-ivory/20 flex items-baseline justify-between">
                <span class="font-mono text-xs uppercase tracking-wider text-sage">Total Investment</span>
                <span class="font-editorial text-4xl text-ivory">${formatMoney(fin.grandTotal, proj.currency)}</span>
              </div>
              <p class="font-mono text-[11px] text-ivory/70">Estimated Kickoff: ${escapeHTML(proj.kickoffWindow || 'Upon Sign-off')}</p>
            </div>
          </div>
        </div>

        <!-- 06 / Terms & Acceptance Signature Block -->
        <div class="pt-6 border-t-2 border-ink space-y-6 page-break-avoid">
          <div>
            <span class="font-mono text-xs uppercase tracking-widest text-inkMuted block mb-1">06 / Commercial Terms &amp; Assumptions</span>
            <p class="text-xs text-inkMuted leading-relaxed">${escapeHTML(proj.notes)}</p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-4">
            <div class="border-t hairline-border pt-3">
              <span class="font-mono text-[10px] uppercase tracking-widest text-inkMuted block">CLIENT AUTHORIZATION (${escapeHTML(proj.client)})</span>
              <div class="h-10"></div>
              <p class="font-mono text-xs text-ink">Authorized Signature &amp; Date: ________________________</p>
            </div>
            <div class="border-t hairline-border pt-3">
              <span class="font-mono text-[10px] uppercase tracking-widest text-inkMuted block">STUDIO AUTHORIZATION (${escapeHTML(proj.preparedBy || 'Principal Studio')})</span>
              <div class="h-10"></div>
              <p class="font-mono text-xs text-ink">Authorized Signature &amp; Date: ________________________</p>
            </div>
          </div>
        </div>
      `;
    }

    function triggerProposalPrint() {
      state.studioSubMode = 'preview';
      navigateTo('studio');
      setStudioSubMode('preview');
      setTimeout(() => {
        window.print();
      }, 150);
    }

    function downloadStandaloneProposalHTML() {
      const proj = getActiveProject();
      if (!proj) return;
      renderProposalPreviewSheet();
      const sheetHTML = document.getElementById('proposal-document-sheet')?.innerHTML || '';
      const standalone = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<title>Proposal — ${escapeHTML(proj.name)}</title>
<script src="https://cdn.tailwindcss.com/3.4.17"><\/script>
<link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap" rel="stylesheet" />
<style>
  body { background: #F7F5EF; color: #171A18; font-family: 'Inter', sans-serif; padding: 32px 16px; }
  .font-editorial { font-family: 'Instrument Serif', Georgia, serif; }
  .font-mono { font-family: 'JetBrains Mono', monospace; }
  .bg-ivory { background-color: #F7F5EF; }
  .bg-forest { background-color: #183D35; }
  .bg-forestSoft { background-color: #E6EFEA; }
  .bg-terracottaSoft { background-color: #F9EBE4; }
  .text-forest { color: #183D35; }
  .text-terracotta { color: #D97952; }
  .text-ivory { color: #F7F5EF; }
  .text-ink { color: #171A18; }
  .text-inkMuted { color: #4A504C; }
  .text-sage { color: #A7B7A5; }
  .hairline-border { border-color: rgba(23,26,24,0.14); }
</style>
</head>
<body>
  <div class="max-w-4xl mx-auto bg-white border border-black/15 rounded-2xl p-10 space-y-10 shadow-sm">
    ${sheetHTML}
  </div>
</body>
</html>`;

      const blob = new Blob([standalone], { type: 'text/html;charset=utf-8' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      const slug = (proj.name || 'proposal').toLowerCase().replace(/[^a-z0-9]+/g, '-');
      a.download = `${slug}-proposal.html`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Downloaded standalone proposal HTML file');
    }

    function copyProposalSummary() {
      const proj = getActiveProject();
      if (!proj) return;
      const fin = calculateProjectFinancials(proj);
      const lines = [
        `PROPOSAL: ${proj.name} (${proj.refCode})`,
        `CLIENT: ${proj.client}`,
        `CATEGORY: ${proj.category} | TIMELINE: ${proj.timeline}`,
        ``,
        `EXECUTIVE SUMMARY:`,
        proj.description,
        ``,
        `DELIVERABLES:`,
        ...(proj.deliverables || []).filter(d => !d.optional || d.included).map(d => {
          const amt = d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice;
          return `- [${d.phase}] ${d.title}: ${formatMoney(amt, proj.currency)}`;
        }),
        ``,
        `TOTAL INVESTMENT: ${formatMoney(fin.grandTotal, proj.currency)}`
      ].join('\n');

      copyTextToClipboard(lines, 'Proposal summary copied to clipboard');
    }

    // =========================================================================
    // PROFESSIONAL TEMPLATES LIBRARY
    // =========================================================================
    function renderTemplatesLibrary() {
      const container = document.getElementById('templates-library-container');
      if (!container) return;

      container.innerHTML = TEMPLATES.map((tpl, idx) => {
        const fin = calculateProjectFinancials(tpl);
        return `
          <div class="loom-card rounded-2xl p-6 sm:p-8 space-y-6">
            <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-4 border-b hairline-border pb-5">
              <div class="space-y-1.5">
                <div class="flex flex-wrap items-center gap-2">
                  <span class="font-mono text-xs font-bold px-2.5 py-1 rounded bg-forest text-ivory">TEMPLATE 0${idx + 1}</span>
                  <span class="font-mono text-xs px-2.5 py-1 rounded bg-forestSoft text-forest font-semibold">${escapeHTML(tpl.category)}</span>
                  <span class="font-mono text-[11px] px-2.5 py-0.5 rounded bg-terracottaSoft text-terracotta font-semibold">${escapeHTML(tpl.badge)}</span>
                </div>
                <h2 class="font-editorial text-3xl sm:text-4xl text-ink">${escapeHTML(tpl.name)}</h2>
                <p class="text-xs sm:text-sm text-inkMuted max-w-3xl">${escapeHTML(tpl.description)}</p>
              </div>
              <div class="flex flex-col sm:flex-row lg:flex-col items-start sm:items-center lg:items-end justify-between gap-2 shrink-0">
                <div class="lg:text-right">
                  <span class="font-mono text-[10px] uppercase tracking-widest text-inkMuted block">Illustrative Template Total</span>
                  <span class="font-editorial text-4xl text-forest">${formatMoney(fin.grandTotal, tpl.currency)}</span>
                </div>
                <button type="button" onclick="applyTemplateById('${tpl.id}')" class="btn-primary px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold">
                  Create Project From Template →
                </button>
              </div>
            </div>

            <div class="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <!-- Template Deliverables Breakdown (7 cols) -->
              <div class="lg:col-span-7 space-y-2.5">
                <span class="font-mono text-[11px] uppercase tracking-widest text-forest font-semibold block">Included Editable Deliverables (${tpl.deliverables.length})</span>
                <div class="space-y-2">
                  ${tpl.deliverables.map((d) => {
                    const amt = d.mode === 'hourly' ? d.hours * d.rate : d.fixedPrice;
                    return `
                      <div class="p-3 rounded-xl bg-white border hairline-border flex items-start justify-between gap-3 text-xs">
                        <div>
                          <span class="font-mono text-[10px] text-forest font-semibold">${escapeHTML(d.phase)}</span>
                          <h3 class="font-semibold text-ink">${escapeHTML(d.title)} ${d.optional ? '<span class="text-terracotta font-mono text-[10px]">(Optional Add-on)</span>' : ''}</h3>
                          <p class="text-inkMuted mt-0.5">${escapeHTML(d.description)}</p>
                        </div>
                        <span class="font-mono font-bold text-ink shrink-0">${formatMoney(amt, tpl.currency)}</span>
                      </div>
                    `;
                  }).join('')}
                </div>
              </div>

              <!-- Template Milestones & Objectives (5 cols) -->
              <div class="lg:col-span-5 space-y-4">
                <div>
                  <span class="font-mono text-[11px] uppercase tracking-widest text-terracotta font-semibold block mb-2">Sample Milestone Schedule</span>
                  <div class="space-y-2">
                    ${tpl.milestones.map((m) => `
                      <div class="p-3 rounded-xl bg-ivoryDark/60 border hairline-border flex items-center justify-between text-xs">
                        <div>
                          <span class="font-mono font-bold text-terracotta">${escapeHTML(m.week)}</span>
                          <p class="font-semibold text-ink">${escapeHTML(m.name)}</p>
                        </div>
                        <span class="font-mono font-bold text-forest">${m.pct}%</span>
                      </div>
                    `).join('')}
                  </div>
                </div>

                <div>
                  <span class="font-mono text-[11px] uppercase tracking-widest text-inkMuted block mb-1.5">Pre-Populated Objectives</span>
                  <ul class="space-y-1 text-xs text-inkMuted">
                    ${tpl.objectives.map((o) => `<li>• ${escapeHTML(o)}</li>`).join('')}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        `;
      }).join('');
    }

    function applyTemplateById(templateId) {
      const tpl = TEMPLATES.find((t) => t.id === templateId);
      if (!tpl) return;

      const nextNum = String(state.projects.length + 1).padStart(2, '0');
      const newProj = {
        id: 'proj-' + Date.now(),
        refCode: `BL-2026-${nextNum}`,
        isSample: false,
        name: tpl.defaultProjectName,
        client: tpl.defaultClient,
        preparedBy: 'Principal Studio',
        category: tpl.category,
        status: 'Scoping',
        timeline: tpl.timeline,
        kickoffWindow: tpl.kickoffWindow,
        validUntil: '2026-12-31',
        currency: tpl.currency,
        budgetTarget: tpl.budgetTarget,
        pricingPreference: tpl.pricingPreference,
        contingencyPct: tpl.contingencyPct,
        discountPct: tpl.discountPct,
        taxPct: tpl.taxPct,
        updatedAt: new Date().toISOString(),
        description: tpl.description,
        objectives: JSON.parse(JSON.stringify(tpl.objectives)),
        deliverables: JSON.parse(JSON.stringify(tpl.deliverables)),
        milestones: JSON.parse(JSON.stringify(tpl.milestones)),
        notes: tpl.notes
      };

      state.projects.unshift(newProj);
      state.activeProjectId = newProj.id;
      state.studioSubMode = 'edit';
      saveWorkspaceState();
      navigateTo('studio');
      showToast(`Created project from "${tpl.name}" template`);
    }

    // =========================================================================
    // DATA EXPORT / IMPORT & WORKSPACE RESET
    // =========================================================================
    function openDataModal() {
      const modal = document.getElementById('data-modal');
      const textarea = document.getElementById('data-json-textarea');
      if (textarea) {
        textarea.value = JSON.stringify({ version: '2.4', exportedAt: new Date().toISOString(), projects: state.projects }, null, 2);
      }
      if (modal) {
        modal.classList.remove('hidden');
        modal.classList.add('flex');
      }
    }

    function closeDataModal() {
      const modal = document.getElementById('data-modal');
      if (modal) {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
      }
    }

    function downloadWorkspaceJSONFile() {
      const payload = JSON.stringify({ version: '2.4', exportedAt: new Date().toISOString(), projects: state.projects }, null, 2);
      const blob = new Blob([payload], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'briefloom-workspace-backup.json';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      URL.revokeObjectURL(url);
      showToast('Downloaded workspace .json backup');
    }

    function copyWorkspaceJSON() {
      const textarea = document.getElementById('data-json-textarea');
      if (!textarea) return;
      copyTextToClipboard(textarea.value, 'Workspace JSON copied to clipboard');
    }

    function importWorkspaceJSONFromTextarea() {
      const textarea = document.getElementById('data-json-textarea');
      if (!textarea || !textarea.value.trim()) {
        showToast('Paste valid Briefloom JSON first', 'burnt');
        return;
      }
      try {
        const parsed = JSON.parse(textarea.value);
        const importedProjects = Array.isArray(parsed) ? parsed : (Array.isArray(parsed.projects) ? parsed.projects : null);
        if (!importedProjects || importedProjects.length === 0) {
          showToast('JSON does not contain a valid projects array', 'burnt');
          return;
        }
        state.projects = importedProjects;
        state.activeProjectId = state.projects[0].id;
        saveWorkspaceState();
        closeDataModal();
        navigateTo('dashboard');
        showToast(`Imported ${importedProjects.length} project(s) into workspace`);
      } catch (err) {
        showToast('Invalid JSON syntax — please check and try again', 'burnt');
      }
    }

    function handleJSONFileUpload(event) {
      const file = event.target?.files?.[0];
      if (!file) return;
      const reader = new FileReader();
      reader.onload = (e) => {
        const textarea = document.getElementById('data-json-textarea');
        if (textarea && typeof e.target?.result === 'string') {
          textarea.value = e.target.result;
          showToast('Loaded JSON file — click "Import & Merge JSON" to apply');
        }
      };
      reader.readAsText(file);
    }

    function confirmResetWorkspace() {
      openConfirmModal(
        'Reset Local Workspace Storage?',
        'This will replace all currently saved projects in browser storage with the default Nordic Botanical sample project.',
        () => {
          const sample = createSampleProject();
          state.projects = [sample];
          state.activeProjectId = sample.id;
          saveWorkspaceState();
          navigateTo('dashboard');
          showToast('Workspace reset to default sample project');
        }
      );
    }

    function copyTextToClipboard(text, successMsg) {
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(() => {
          showToast(successMsg);
        }).catch(() => {
          fallbackCopyText(text, successMsg);
        });
      } else {
        fallbackCopyText(text, successMsg);
      }
    }

    function fallbackCopyText(text, successMsg) {
      const ta = document.createElement('textarea');
      ta.value = text;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      document.body.appendChild(ta);
      ta.select();
      try {
        document.execCommand('copy');
        showToast(successMsg);
      } catch (err) {
        showToast('Copy action completed');
      }
      document.body.removeChild(ta);
    }

    // Keyboard Shortcuts Listener
    window.addEventListener('keydown', (e) => {
      if (e.altKey && !e.ctrlKey && !e.metaKey) {
        const key = e.key.toLowerCase();
        if (key === 'w') {
          e.preventDefault();
          navigateTo('dashboard');
        } else if (key === 'n') {
          e.preventDefault();
          startFreshBrief();
        } else if (key === 's') {
          e.preventDefault();
          navigateTo('studio');
        } else if (key === 't') {
          e.preventDefault();
          navigateTo('templates');
        }
      } else if (e.key === 'Escape') {
        closeDataModal();
        closeConfirmModal();
      }
    });

    // Initialize Application on Load
    window.addEventListener('DOMContentLoaded', () => {
      loadWorkspaceState();
      updateGlobalBadges();
      renderHeroPreview();
      renderHomeTemplates();
      renderDashboard();
    });
