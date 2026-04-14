# PULSE — SaaS Analytics Platform Website

## Brand Identity
- **Name**: PULSE
- **Tagline**: "Data intelligence, simplified."
- **Product**: AI-powered analytics platform for businesses — real-time dashboards, predictive insights, team collaboration
- **Style**: Modern, tech-forward, professional yet approachable. Dark hero section transitioning to light sections. Gradient accents (indigo → violet). Clean glass/card UI patterns.

## Color Palette
Custom palette — NOT Nexus defaults. Deep indigo/violet tech theme:

### Light Mode
- Background: #f8f9fc (very light blue-gray)
- Surface: #ffffff
- Surface-2: #f1f3f9
- Surface-offset: #e8ebf4
- Border: #dde1ed
- Text: #0f1729 (very dark navy)
- Text-muted: #64748b
- Text-faint: #94a3b8
- Primary: #4f46e5 (indigo-600)
- Primary-hover: #4338ca (indigo-700)
- Accent: #7c3aed (violet-600) — used for gradients with primary
- Success: #10b981
- Warning: #f59e0b
- Error: #ef4444

### Dark Mode
- Background: #0b0f1a (very dark navy)
- Surface: #111827
- Surface-2: #1e293b
- Surface-offset: #1a2332
- Border: #334155
- Text: #f1f5f9
- Text-muted: #94a3b8
- Text-faint: #64748b
- Primary: #818cf8 (indigo-400)
- Primary-hover: #a78bfa (violet-400)

## Typography
- Display/headings: 'Space Grotesk' from Google Fonts — geometric, modern, tech
- Body: 'Inter' from Google Fonts — excellent readability
- Load both via Google Fonts CDN

## Pages (SPA with hash-based routing)
Single index.html with 4 pages: Home (#home), Features (#features), Pricing (#pricing), About (#about)

### Page 1: Home (#home)
**Hero Section** (dark background with gradient):
- Headline: "Transform Raw Data Into Actionable Intelligence"
- Subheadline: "PULSE brings AI-powered analytics to your fingertips. Real-time dashboards, predictive insights, and seamless team collaboration — all in one platform."
- Two CTAs: "Start Free Trial" (solid gradient button), "Watch Demo" (ghost/outline button)
- Hero image: ./assets/hero-dashboard.png (the laptop dashboard mockup)
- Below hero: Social proof bar — "Trusted by 2,500+ companies worldwide" with company logos (use SVG placeholder logos for: Stripe, Shopify, Notion, Vercel, Linear)

**Features Overview** (3 cards with icons):
1. Real-Time Analytics — "Monitor your metrics as they happen. Live dashboards update in milliseconds."
2. AI-Powered Insights — "Let machine learning surface the patterns you'd miss. Automated anomaly detection."
3. Team Collaboration — "Share dashboards, set alerts, and align your team around the same data."

**Stats Section** (animated counters):
- 2.5B+ Events processed daily
- 99.99% Uptime SLA
- 150+ Integrations
- <50ms Query response time

**Testimonials** (2-3 testimonial cards):
1. "PULSE replaced three different tools for us. The AI insights alone saved our team 20 hours per week." — Sarah Chen, VP Analytics at TechFlow
2. "The real-time dashboards are incredibly fast. We can finally make data-driven decisions in the moment." — Marcus Rivera, CEO at GrowthStack
3. "Best analytics platform we've ever used. The onboarding was seamless and the support is world-class." — Priya Sharma, Head of Data at CloudNine

**CTA Section**:
- "Ready to See Your Data Differently?"
- "Start your 14-day free trial. No credit card required."
- CTA button: "Get Started Free"

### Page 2: Features (#features)
**Hero**: "Everything You Need to Master Your Data"

**Feature blocks** (alternating left/right layout with images):
1. **Real-Time Analytics Dashboard** — Image: feature-analytics.png
   - Live data streaming with sub-50ms latency
   - Customizable widgets and layouts
   - Multi-source data aggregation
   - Export to PDF, CSV, or scheduled emails

2. **AI-Powered Insights** — Image: feature-ai.png
   - Automated anomaly detection
   - Predictive trend analysis
   - Natural language queries — ask your data questions
   - Smart alerts before issues become problems

3. **Team Collaboration** — Image: feature-collab.png
   - Shared dashboards with role-based access
   - Real-time comments and annotations
   - Scheduled report distribution
   - Slack, Teams, and email integrations

**Integrations grid** (show logos/icons for common integrations):
Show a grid of 12+ integration icons (use simple CSS/SVG icons for): Slack, Salesforce, HubSpot, Google Analytics, AWS, Snowflake, PostgreSQL, MySQL, Stripe, Shopify, Jira, GitHub

### Page 3: Pricing (#pricing)
**Hero**: "Simple, Transparent Pricing"
**Subhead**: "Start free. Scale as you grow."

**3 pricing tiers** (cards):
1. **Starter** — Free
   - Up to 3 dashboards
   - 10K events/month
   - 1 team member
   - 7-day data retention
   - Community support
   - CTA: "Start Free"

2. **Pro** — $49/month (billed annually) — POPULAR badge
   - Unlimited dashboards
   - 1M events/month
   - 10 team members
   - 90-day data retention
   - AI insights included
   - Priority support
   - CTA: "Start Free Trial"

3. **Enterprise** — Custom
   - Everything in Pro
   - Unlimited events
   - Unlimited team members
   - Unlimited data retention
   - Custom integrations
   - Dedicated account manager
   - SLA guarantee
   - CTA: "Contact Sales"

**FAQ section** (accordion):
- What counts as an event?
- Can I change plans later?
- Is there a free trial for Pro?
- What payment methods do you accept?
- Do you offer discounts for nonprofits?

### Page 4: About (#about)
**Hero**: "Built by Data People, for Data People"
**Image**: team.png

**Story section**:
"Founded in 2022, PULSE was born from a simple frustration: why is it so hard to get actionable insights from your own data? Our founders — former data engineers at leading tech companies — set out to build the analytics platform they always wished existed."

**Values** (3 cards):
1. Customer Obsession — "Every feature starts with a customer problem."
2. Data Privacy First — "Your data is yours. Period. SOC 2 Type II certified."
3. Built to Scale — "From startup to enterprise, PULSE grows with you."

**Key metrics**:
- Founded 2022
- 85+ team members
- $32M raised (Series B)
- HQ: San Francisco, with offices in London and Tel Aviv

**CTA**: "Join Our Team" button + "We're hiring across engineering, design, and sales."

## Technical Requirements
- SPA with hash-based routing (same as MAISON NOIR)
- base.css from the design system
- style.css for all custom styles
- app.js for SPA router, dark mode toggle, animations, accordion logic, counter animations
- Dark/light mode toggle in header
- Scroll reveal animations
- Mobile-responsive (hamburger menu on mobile)
- All external links use target="_blank"
- Perplexity Computer attribution in head and footer
- Footer with: "Designed by Shir Alhanati" credit + "Created with Perplexity Computer" link
- NO localStorage/sessionStorage

## Images Available
- ./assets/hero-dashboard.png — Laptop with analytics dashboard
- ./assets/feature-analytics.png — Abstract 3D data visualization
- ./assets/feature-ai.png — AI brain neural network
- ./assets/feature-collab.png — Connected team collaboration spheres
- ./assets/team.png — Team in modern office

## Design Notes
- Hero section should have a dark gradient background (navy to indigo) with the dashboard image floating/elevated with a subtle shadow
- Feature sections use alternating layouts (image left/text right, then text left/image right)
- Pricing cards should have a subtle highlight on the "Pro" plan (gradient border or background)
- Use gradient text for key headings (indigo → violet)
- Glass-effect cards (backdrop-filter: blur) on the dark hero section
- Smooth scroll-reveal animations
- Counter animation for the stats section (numbers count up when in view)
- The overall feel should be COMPLETELY DIFFERENT from MAISON NOIR — this is a tech product, not a fashion store
