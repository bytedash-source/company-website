# BYTE DASH — Website Content System

**Status:** Draft v1 · 2026-07-26
**Companion to:** [`product-requirement.md`](./product-requirement.md)
**Scope:** Full English content for a 10-page site (multi-page IA, not the single-page scroll sketched in the PRD — see note below).

> **Note on structure vs. the PRD:** `product-requirement.md` (§2.1) sketches a single-page anchor-nav site. This content system is written for a proper multi-page IA (Home, Services, Process, Work index, two case studies, About, Contact, Insights, Privacy), because that's what was requested here. Reconcile before build — either adopt the multi-page structure below, or fold this copy back into single-page sections later. Flagged as gap #1 at the end of this document.

---

## 1. Sitemap table

| Page | URL slug | Purpose | Main CTA |
|---|---|---|---|
| Home | `/` | Establish positioning; route visitors to services, work, or contact | Start a project |
| Services | `/services` | Explain all five services with value and outcomes | Talk about your project |
| Process | `/process` | Explain the five-stage working process | Start a project |
| Work (index) | `/work` | Show selected work; link to case studies | View project |
| IEA (case study) | `/work/iea` | Detail on the IEA project | Start your own project |
| TERMFAI (case study) | `/work/termfai` | Detail on the TERMFAI project | Start your own project |
| About | `/about` | Company background, principles, vision, mission | Get in touch |
| Contact | `/contact` | Project enquiry | Send enquiry |
| Insights (index) | `/insights` | Future content hub, placeholder only | — (optional future CTA) |
| Privacy policy | `/privacy` | Legal placeholder structure | — |

---

## 2. Navigation system

### Main navigation
```
Services · Process · Work · About · Contact
```
Insights and Privacy policy are intentionally left out of primary nav — Insights has no content yet, and Privacy policy is a utility page. Both live in the footer.

### Header
- Wordmark label: **BYTE DASH**
- Nav labels: Services / Process / Work / About / Contact
- Primary CTA (header button): **Start a project**

### Footer navigation
```
Company        Explore          Contact
About          Services         work@bytedash.net
Work           Process
Insights       —

Privacy policy
© [year] BYTE DASH. All rights reserved.
```
(Adjust grouping to whatever column structure the design uses — labels above are the content, not a layout mandate.)

### CTA labels — resolved for this content system
The PRD leaves header/hero CTA wording as an open question (§7, item 11). This content system standardises on:
- **Primary CTA (site-wide):** "Start a project"
- **Secondary CTA (site-wide default):** "See our work"

Individual sections use a more specific variant where it reads better (e.g. "Talk about a mobile project" on the Services page) — these are all functionally the primary CTA, just retargeted in wording to the section. Confirm this standardisation with BYTE DASH before build; see gap list.

---

## 3. SEO metadata table

| Page | SEO title | Meta description | Slug |
|---|---|---|---|
| Home | BYTE DASH — Digital product studio in Bangkok | BYTE DASH designs and builds mobile apps, web applications, and UX/UI for businesses that need digital products that work well in practice. | `/` |
| Services | Services — Mobile, web, UX/UI, and consulting \| BYTE DASH | Mobile and web application development, UX/UI design, prototyping, and technology consulting from BYTE DASH, a Bangkok-based product studio. | `/services` |
| Process | Process — How we build digital products \| BYTE DASH | How BYTE DASH moves projects from discovery through design, development, testing, and launch — a process adapted to each project's scope. | `/process` |
| Work index | Work — Products designed and built by BYTE DASH | A selection of mobile and web applications designed and developed by BYTE DASH, including IEA and TERMFAI. | `/work` |
| IEA | IEA — Asset management web application \| BYTE DASH | IEA is a responsive web application built for Asset Activator Co., Ltd. to support asset management. | `/work/iea` |
| TERMFAI | TERMFAI — EV platform mobile app \| BYTE DASH | TERMFAI is a cross-platform mobile application for Synergy Technology Co., Ltd., combining an EV platform with a shopping experience. Available 2025. | `/work/termfai` |
| About | About BYTE DASH — Digital product studio, Bangkok | BYTE DASH is a digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design. | `/about` |
| Contact | Contact BYTE DASH — Start a project | Get in touch with BYTE DASH to talk about a mobile app, web application, or UX/UI design project. Based in Bangkok and Nonthaburi, Thailand. | `/contact` |
| Insights | Insights — BYTE DASH | Thinking on product design, UX/UI, and web and mobile development from BYTE DASH. Coming soon. | `/insights` |
| Privacy policy | Privacy policy — BYTE DASH | Privacy policy for BYTE DASH. This page is a placeholder pending legal review and approval. | `/privacy` |

### Open Graph — Home, Work, About

**Home**
- OG title: "BYTE DASH — Digital products, designed and built."
- OG description: "A Bangkok-based studio building mobile apps, web applications, and UX/UI for businesses that need software to work well in the real world."

**Work**
- OG title: "Work by BYTE DASH"
- OG description: "A selection of mobile and web applications designed and developed by BYTE DASH."

**About**
- OG title: "About BYTE DASH"
- OG description: "A digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design."

(OG image for all three: `[Add OG image — 1200×630, product UI or abstract system visual, no stock photography]`.)

---

## 4. Full copy by page and section

### 4.1 Home

#### Header
- Wordmark: **BYTE DASH**
- Nav: Services / Process / Work / About / Contact
- Primary CTA: **Start a project**

#### Hero — three alternative versions

**Version A**
- Eyebrow: Digital product studio — Bangkok
- Headline: Products that work the way people expect them to.
- Supporting paragraph: BYTE DASH designs and builds mobile and web products for businesses that need software to function well in the real world, not just in a demo. We work across strategy, design, and engineering, from first sketch to shipped product.
- Primary CTA: Start a project
- Secondary CTA: See our work

**Version B**
- Eyebrow: Mobile, web, and product design
- Headline: Software should feel obvious. We build it that way.
- Supporting paragraph: We're a Bangkok-based studio that designs and develops digital products for founders, teams, and organisations who need something reliable, well considered, and ready to grow with the business.
- Primary CTA: Talk to us about your project
- Secondary CTA: Explore our work

**Version C**
- Eyebrow: BYTE DASH — Bangkok
- Headline: We turn complex problems into products people can actually use.
- Supporting paragraph: From mobile apps to web platforms, BYTE DASH combines engineering and UX/UI design to help businesses build digital products that are fast, dependable, and easy to use — and easy to grow.
- Primary CTA: Start a project
- Secondary CTA: See our process

#### Brand manifesto
- Eyebrow: How we think about technology
- Headline: Technology is only useful when someone can actually use it.
- Paragraph 1: A well-built product is not the same as a good product. Code can run correctly and still confuse the person using it. At BYTE DASH, we treat engineering and design as one discipline, not two separate handoffs, because a product only works if it works for the person on the other side of the screen.
- Paragraph 2: We build for clarity first — clear interfaces, clear decisions, and clear reasoning behind every feature. The technology should do its work quietly, in the background, so the person using it barely has to think about it at all.

#### Core principles

**Performance**
Products should be fast, reliable, and built to handle growth — not just at launch, but as usage increases and requirements change.

**User-centred design**
Every interface should be intuitive and considered, shaped by how people actually behave rather than how a diagram assumes they will.

**Quality**
Every stage, from the first concept to the final release, should meet a high, consistent standard — not just the parts that are visible.

#### Services preview
- Eyebrow: What we do
- Headline: Five disciplines, one team.
- Intro: BYTE DASH covers the full path from idea to working product: mobile and web development, UX/UI design, prototyping, and the strategic thinking that ties it together.
- Mobile application development: Apps built for iOS and Android that people use every day, not just download once.
- Web application development: Web products that load fast, work reliably, and scale as your business does.
- UX/UI design: Interfaces shaped around how people actually think and behave, not just how a sitemap looks.
- Prototyping and wireframing: Test ideas and structure before committing engineering time to them.
- Technology consulting: Practical guidance on what to build, how to build it, and what can wait.
- CTA: See all services

#### Process preview
- Eyebrow: How we work
- Headline: A process built to reduce guesswork.
- Intro: Every project moves through the same five stages, adapted to its own scope and complexity.
- Discover: Understand the problem before proposing a solution.
- Define and design: Turn requirements into a clear, testable design.
- Build: Develop the product with regular, visible progress.
- Test: Check the product works the way it's meant to, under real conditions.
- Launch and improve: Release, monitor, and keep refining after launch.
- CTA: See our process

#### Selected work preview
- Eyebrow: Selected work
- Headline: Products we've helped build.
- Intro: A look at recent projects, from asset management platforms to consumer mobile apps.
- IEA card: Asset Activator Co., Ltd. — A responsive web application built for asset management. → View project
- TERMFAI card: Synergy Technology Co., Ltd. — A cross-platform mobile app for an EV platform and shopping experience. Available 2025. → View project
- CTA: See all work

#### About preview
- Headline: A small studio, a direct way of working.
- Paragraph: BYTE DASH is based in Bangkok and works with businesses that want a product partner rather than just a development vendor — involved from early strategy through to what happens after launch.
- CTA: About BYTE DASH

#### Final CTA
- Headline: Have an idea worth building properly?
- Supporting copy: Tell us what you're working on. We'll get back to you to talk through scope, approach, and whether we're the right team for it.
- Button: Start a project
- Contact microcopy: work@bytedash.net · Based in Bangkok, Thailand

---

### 4.2 Services

#### Introduction
- Eyebrow: Services
- Headline: Everything needed to take a product from idea to release.
- Intro: BYTE DASH works across mobile development, web development, UX/UI design, prototyping, and technology consulting. Projects can start at any point in that list, from an early idea that needs shaping, to an existing product that needs to be rebuilt or extended.

#### Mobile application development
- Headline: Apps built to be used, not just installed.
- Value proposition: We design and build mobile applications for iOS and Android that are fast to use and straightforward to maintain.
- Detailed explanation: Mobile development at BYTE DASH covers the full lifecycle, from technical architecture and platform decisions through to release and post-launch support. We build for the realities of mobile use: unreliable networks, small screens, interruptions, and users who expect an app to respond immediately.
- What we can help with: Native and cross-platform app development for iOS and Android · App architecture and technical planning · Integrating with existing backend systems and APIs · Performance and stability improvements to existing apps · App store preparation and release support · Ongoing maintenance and iteration after launch
- What you can expect: Clear technical decisions explained in plain terms · Regular builds you can test on a real device · A codebase that's documented and handed over cleanly
- CTA: Talk about a mobile project

#### Web application development
- Headline: Web products that hold up under real use.
- Value proposition: We build web applications that are fast to load, dependable in production, and structured to grow alongside the business.
- Detailed explanation: From customer-facing platforms to internal tools, we build web applications using sound architecture, with attention to performance, accessibility, and how the product will need to change over time.
- What we can help with: Web application design and development, front end and back end · Rebuilding or modernising existing web platforms · Integrations with third-party services and internal systems · Performance, accessibility, and responsive design · Admin tools and internal dashboards · Ongoing support and iteration after launch
- What you can expect: A working product to review at each stage of development, not just at the end · Decisions made with future scaling in mind · Code and documentation you can hand to another team if needed
- CTA: Talk about a web project

#### UX/UI design
- Headline: Design that removes friction, not just adds polish.
- Value proposition: We design interfaces around how people actually use software, reducing the number of decisions a user has to make to get something done.
- Detailed explanation: UX/UI design at BYTE DASH starts with understanding the task a user is trying to complete, then structures the interface, flow, and visual language around that task — whether we're designing a new product from scratch or improving an existing one.
- What we can help with: User flow and information architecture · Interface design for mobile and web products · Design systems for consistent, scalable interfaces · Usability review of existing products · Visual design and interaction detail · Design handoff for development teams
- What you can expect: Design decisions explained in terms of user behaviour, not just aesthetics · Interfaces that stay consistent across screens and states · Design files structured for efficient handoff to development
- CTA: Talk about a design project

#### Prototyping and wireframing
- Headline: Test the idea before you build it.
- Value proposition: We create wireframes and interactive prototypes that let you validate a product direction before committing engineering time and budget to it.
- Detailed explanation: Prototyping is often where the most expensive mistakes get avoided. We build wireframes and clickable prototypes at a level of detail appropriate to the decision being made, from rough flows for early feedback to higher-fidelity prototypes for stakeholder or investor review.
- What we can help with: Low-fidelity wireframes for early-stage concepts · Interactive, clickable prototypes for testing and feedback · Structuring flows for complex or multi-step products · Prototypes for stakeholder, investor, or user testing
- What you can expect: A tangible way to review a product direction before development begins · Clear reasoning behind structural and flow decisions · Prototypes that can be tested with real users or stakeholders
- CTA: Talk about a prototype

#### Technology consulting
- Headline: Clarity before commitment.
- Value proposition: We help businesses decide what to build, how to approach it, and what can reasonably wait, before any development begins.
- Detailed explanation: Not every project starts with a clear brief. Technology consulting at BYTE DASH covers early-stage strategy: reviewing an idea or an existing product, identifying risks and priorities, and setting a realistic direction for design and development.
- What we can help with: Reviewing a product idea or existing platform · Technology and platform recommendations · Scoping and prioritisation for new projects · Advice on approach for teams building in-house
- What you can expect: Honest input, including where we think a plan needs to change · A clearer sense of scope, priority, and risk before committing budget · Recommendations grounded in what's realistic to build and maintain
- CTA: Talk to us about your plans

#### Closing enquiry CTA
- Headline: Not sure which service you need?
- Supporting copy: Most projects touch more than one of these areas. Tell us what you're trying to build and we'll help figure out where to start.
- Button: Start a project

---

### 4.3 Process

- Eyebrow: Process
- Headline: How a project moves from idea to release.
- Intro: Every project at BYTE DASH follows the same five stages. The depth of each stage depends on the size and maturity of the project — a new product idea moves through all five in full, while an existing platform might begin partway through.

**01 · Discover**
- Headline: Understand the problem before proposing a solution.
- Description: We start by understanding the business, the users, and the problem the product needs to solve, including any existing systems, constraints, or prior attempts.
- Typical activities: Stakeholder discussions · Review of any existing product or systems · Defining goals and success criteria · Identifying constraints and risks
- Deliverables: Project brief · Scope outline · Key risks and open questions
- What the client can expect: Direct questions about the business problem, not just a feature list; a shared understanding of what's being built and why, before design starts.

**02 · Define and design**
- Headline: Turn requirements into a structure people can use.
- Description: We translate the brief into user flows, information architecture, and interface design, moving from wireframes to detailed UI as the direction is confirmed.
- Typical activities: User flow mapping · Wireframing · UI design · Design system setup · Stakeholder review
- Deliverables: Wireframes · UI designs · Design system components · A clickable prototype, where useful
- What the client can expect: Visible design progress at regular intervals, with structured feedback points rather than one large reveal.

**03 · Build**
- Headline: Develop the product with visible, regular progress.
- Description: Engineering begins once the design direction is confirmed. We build in stages, with working versions available for review throughout rather than only at the end.
- Typical activities: Technical architecture · Front-end and back-end development · Integrations · Internal QA
- Deliverables: Working builds at regular intervals · Technical documentation as it develops
- What the client can expect: Regular access to builds, and clear communication about progress and any changes to scope or timeline.

**04 · Test**
- Headline: Confirm the product works the way it's meant to.
- Description: Before launch, we test the product against real conditions — different devices, network states, and user behaviour — alongside functional and usability testing.
- Typical activities: Functional testing · Cross-device and cross-browser checks · Usability review · Bug fixing
- Deliverables: Test results · Resolved issue log · Release-ready build
- What the client can expect: A product that's been checked under realistic conditions, not just tested in isolation.

**05 · Launch and improve**
- Headline: Release the product, then keep it working well.
- Description: We support the release itself, then monitor early usage and address anything that needs attention. Many projects continue into ongoing iteration after this stage.
- Typical activities: Release and deployment support · Monitoring post-launch performance · Prioritising follow-up improvements
- Deliverables: Live product · Launch summary · Recommendations for next steps
- What the client can expect: Support through the release itself, and a clear view of what to prioritise afterwards.

**Adaptability note:** This process is a framework, not a fixed script. Projects that start with an existing product, a partial design, or a fixed deadline are scoped to fit — some stages may run in parallel, and the time spent in each is set by the project's own scope, not a fixed template.

---

### 4.4 Work index

- Eyebrow: Work
- Headline: Products we've designed and built.
- Intro: A selection of projects across web and mobile, each developed end-to-end or in close partnership with an existing team. This page reflects a selection of our work, not the full list of projects we've completed — more is added as it's ready to share publicly.

**Filter / category labels** (built for future projects, not just the current two): All work · Web applications · Mobile applications · UX/UI design · Asset management · EV & mobility

**IEA — card copy**
- Client: Asset Activator Co., Ltd.
- Category: Responsive web application
- Focus: Asset management
- Line: A responsive web platform built to help manage assets more clearly.
- CTA: View project

**TERMFAI — card copy**
- Client: Synergy Technology Co., Ltd.
- Category: Cross-platform mobile application
- Focus: EV platform and shopping
- Status: Available 2025
- Line: A cross-platform mobile app for an EV platform, combining vehicle features with a shopping experience.
- CTA: View project

**Empty-state / future-project wording**
> More work is on its way. [Add next project here once approved for publishing.]

**CTA to Contact**
Have a project in mind? Start a conversation. → Start a project

---

### 4.5 IEA — case study

- Project header: IEA
- Client: Asset Activator Co., Ltd.
- Category: Responsive web application
- Focus: Asset management

**Overview**
IEA is a responsive web application built for Asset Activator Co., Ltd. to support asset management. [Add a one- to two-sentence summary of what the platform does for its users, once approved for publishing.]

**The opportunity**
[Add a high-level description of the business challenge IEA was built to solve.]

**BYTE DASH's role**
[Add details of BYTE DASH's specific role and responsibilities on this project — for example, full-stack development, UX/UI design, or a defined phase of work.]

**Approach**
[Add a summary of the approach taken on this project, once approved by the client for publishing.]

**Responsive web application**
As a responsive web application, IEA is designed to work across desktop and mobile browsers within a single platform. [Add detail on the primary user group and core workflows, once confirmed for publishing.]

**Visuals**
- [Add product screenshot — dashboard view]
- [Add product screenshot — key workflow]
- [Add product screenshot — mobile/responsive view]

**Outcomes**
[Add approved project outcome or client quote here.]

**Next project**
Next: TERMFAI → View project
Start your own project → Start a project

---

### 4.6 TERMFAI — case study

- Project header: TERMFAI
- Client: Synergy Technology Co., Ltd.
- Category: Cross-platform mobile application
- Status: Available 2025

**Overview**
TERMFAI is a cross-platform mobile application developed for Synergy Technology Co., Ltd., combining an EV (electric vehicle) platform with a shopping experience. TERMFAI is available in 2025.

**The opportunity**
[Add a high-level description of the business challenge TERMFAI was built to solve.]

**BYTE DASH's role**
[Add details of BYTE DASH's specific role and responsibilities on this project — for example, full-stack development, UX/UI design, or a defined phase of work.]

**Cross-platform mobile experience**
TERMFAI is built as a cross-platform mobile application, designed to run on iOS and Android. [Add detail on the specific platform approach and core app structure, once confirmed for publishing.]

**EV platform and shopping context**
TERMFAI brings together two areas within a single app: an EV platform and a shopping experience. [Add further detail on how these two areas connect for the user, once approved for publishing.]

**Visuals**
- [Add product screenshot — home/EV platform view]
- [Add product screenshot — shopping experience]
- [Add product screenshot — key workflow]

**Outcomes**
[Add approved project outcome or client quote here.]

**Next project**
Next: IEA → View project
Start your own project → Start a project

---

### 4.7 About

**Hero**
- Eyebrow: About
- Headline: A studio built around how products actually get used.
- Supporting: BYTE DASH is a digital product studio based in Bangkok and Nonthaburi, working across mobile, web, and UX/UI design.

**Who we are**
BYTE DASH designs and develops digital products for businesses that need software to work well in practice, not just look good in a proposal. We work across mobile application development, web application development, UX/UI design, prototyping, and technology consulting, usually moving between more than one of these within a single project.

**What we believe**

*Performance* — A product is only as good as its worst moment: the slow screen, the failed request, the update that breaks something else. We build with that in mind from the start, not as a fix afterwards.

*User-centred design* — Interfaces should be shaped by how people actually behave, not by how a project plan assumes they will. Good design removes decisions a user shouldn't have to make.

*Quality* — Quality isn't a final check before launch. It's a standard applied at every stage, from the first wireframe to the code that ships.

**Vision**
We want BYTE DASH to be recognised, beyond Thailand, for the quality and reliability of the digital products we build, and for genuinely understanding how modern technology becomes something people find useful, not just impressive.

**Mission**
Our mission is to help businesses strengthen their digital presence through application solutions that work well enough to build real engagement, loyalty, and long-term value, not just a launch.

**How we work**
Projects at BYTE DASH move through five stages: discover, define and design, build, test, and launch and improve, adapted to the scope of the work. We stay involved past launch, because most of what determines whether a product succeeds happens after release, not before it. See our process →

**Team and culture** *(optional section — no team size or named individuals implied)*
BYTE DASH is a hands-on studio: the people who scope a project are involved in building it. [Add team or studio imagery here.]

**CTA**
Get in touch → Talk to BYTE DASH about your project.

---

### 4.8 Contact

- Hero headline: Let's talk about what you're building.
- Intro: Tell us about your project — what you're trying to build, where you are in the process, and what kind of support you need. We'll reply to let you know next steps.

**Email contact block**
- Label: Email
- Value: work@bytedash.net
- Note: For project enquiries and general questions.

**Address block**
- BYTE DASH
- 14/1492 Moo 13, Bang-bua-thong Sub-district
- Bang-bua-thong District, Nonthaburi 11110, Thailand

**Project enquiry form**
- Field: Name
- Field: Company
- Field: Work email
- Field: Project type *(suggested options: Mobile application · Web application · UX/UI design · Prototyping · Technology consulting · Not sure yet — confirm before build)*
- Field: Estimated budget *(optional)*
- Field: Project details

**Form helper text**
Estimated budget is optional — it just helps us understand scope faster. The more detail you can share about what you're building, the better we can prepare for a first conversation.

**Submit button**
Send enquiry

**Success state**
Thanks — your message has been sent. [Add response-time commitment here, e.g. "We'll get back to you within X business days."]

**Error state**
Something went wrong sending your message. Please try again, or email us directly at work@bytedash.net.

**Privacy microcopy**
We'll only use the information you share here to respond to your enquiry. See our [Privacy policy].

**Final reassurance**
No project is too early to talk about — if you're still shaping the idea, we're happy to help think it through.

---

### 4.9 Insights index (future placeholder)

- Eyebrow: Insights
- Headline: Thinking on product, design, and technology.
- Intro: This is where BYTE DASH will share our thinking on product design, UX/UI, web and mobile development, and the practical decisions behind building digital products. It's still taking shape.

**Empty state**
There's nothing published here yet. [Add first article once ready.]

**Optional future CTA**
Want to know when we start publishing? [Add newsletter signup or contact link here, once available.]

**Suggested future content categories**
Product strategy · UX/UI design · Mobile development · Web development · Working with BYTE DASH

---

### 4.10 Privacy policy (placeholder structure only)

- Page title: Privacy policy
- Introduction: This page is a placeholder structure for BYTE DASH's privacy policy. The content below must be reviewed, completed, and formally approved by BYTE DASH — ideally with legal input — before publishing. Nothing on this page should be treated as a final or legally binding policy until that review is complete.

**Recommended section headings only:**
- Information collected
- How information is used
- Cookies and analytics
- Data retention
- Third-party services
- Your rights
- Contact

---

## 5. Content gaps and questions for BYTE DASH

1. **Site structure mismatch.** This content system assumes a multi-page IA (10 separate pages/routes). `product-requirement.md` currently specifies a single-page scroll site with anchor nav. Confirm which structure to build — or whether to launch single-page now and split into full pages later (the PRD already flags `/work/[slug]` as a likely future split).
2. **Approved project details for IEA and TERMFAI.** No brief, problem statement, or approach detail exists beyond client name, product name, type, and focus area. Every "opportunity," "role," and "approach" block above is a placeholder pending real input.
3. **Screenshots and product visuals.** Neither case study has any imagery. All visual blocks are placeholders — this is the single biggest blocker to publishing the Work section credibly.
4. **Client permission to display names and logos.** Confirm Asset Activator Co., Ltd. and Synergy Technology Co., Ltd. have signed off on being named publicly, and whether their logos can be used.
5. **Measurable outcomes.** No metrics, results, or performance figures were supplied for either project. All "Outcomes" blocks are placeholders — do not fill these with invented numbers.
6. **Testimonials.** None supplied. No quote blocks have been written; add only once a client has approved specific wording.
7. **Team information.** No team size, named individuals, roles, or headcount were supplied. Copy above deliberately avoids implying any of this — confirm if an "our team" section is wanted at all, and if so, what can be shown.
8. **Social links.** Not confirmed whether BYTE DASH has active social accounts (LinkedIn, Facebook, IG). None are referenced in this content system; add to footer/contact once confirmed.
9. **Legal policy approval.** The Privacy policy page is structural only. Actual policy language needs legal review before publishing — do not treat the section headings as sufficient.
10. **Primary/secondary CTA wording.** This content system standardises on "Start a project" / "See our work" (see §2) to resolve PRD open question #11 — confirm this is acceptable, or specify a different pairing.
11. **Contact form specifics.** "Project type" dropdown options are suggested, not confirmed. The success-state response-time commitment (e.g. "within 2 business days") is left as a placeholder — needs a real, honest number from BYTE DASH.
12. **PEA Loan project.** PRD (§7, item 4) notes an unfinished project not mentioned in this brief. Confirm whether it should eventually appear in Work — not included here since it wasn't part of the content brief.
13. **Insights page timing.** Confirm whether Insights should be in primary navigation now (as a visible "coming soon" signal) or omitted entirely until there's content to show. Currently placed in footer only.
14. **Bilingual scope.** This content system is English-only per the brief. PRD (§7, item 3) still has an open question about Thai-language support — confirm before this copy is treated as final for all locales.
