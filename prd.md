# Pepeton's Grill & Catering — Website PRD

**Version:** 1.0
**Date:** June 2026
**Status:** Draft
**Owner:** Pepeton's Management

---

## 1. Project Overview

| Field | Detail |
|-------|--------|
| Project Name | Pepeton's Grill & Catering — Official Website |
| Business | Pepeton's Grill & Catering |
| Location | 109 Mother Ignacia Ave, Quezon City, Philippines |
| Category | Filipino & Seafood Restaurant |
| Version | 1.0 |
| Date | June 2026 |

---

## 2. Background & Business Context

Pepeton's Grill & Catering is a well-established Filipino and seafood restaurant in Quezon City, best known for its signature dish **Kapalmuks** (fried pork face), alongside crowd favorites like sisig, grilled tuna, and crispy pata. Beyond dine-in, the business offers food delivery, full catering services for private events, and banquet hall facilities.

The restaurant currently lacks a dedicated website, which limits online discoverability and makes it difficult for potential customers to explore menus, make inquiries, or book catering and banquet services. This PRD defines the requirements for a new marketing and information website.

### 2.1 Business Goals

- Increase online discoverability via search engines (Google, Google Maps)
- Provide customers a complete, always-up-to-date view of all menus
- Generate catering and banquet inquiries directly through the website
- Build brand awareness around the Kapalmuks signature dish
- Support delivery orders by linking to third-party delivery platforms

### 2.2 Target Users

- Local diners in Quezon City and Metro Manila looking for Filipino food
- Event organizers and families looking for catering or banquet services
- Corporate clients seeking bulk or party food orders
- Tourists and food enthusiasts searching for signature Filipino dishes

---

## 3. Scope

### 3.1 In Scope

- 8-page marketing website (static or CMS-driven)
- Full menu display for restaurant, catering, and party food
- Dedicated Kapalmuks feature page
- Banquet hall information and inquiry form
- Contact page with map, hours, and contact form
- Mobile-responsive design
- Basic SEO optimization (meta tags, structured data)

### 3.2 Out of Scope

- Online ordering / e-commerce checkout
- Real-time table reservation system
- Customer accounts or loyalty program
- POS integration
- Live chat support

---

## 4. Site Map & Navigation

| # | Page | Route |
|---|------|-------|
| 1 | Home | `/` |
| 2 | Our Story | `/our-story` |
| 3 | Restaurant Menu | `/menu/restaurant` |
| 4 | Catering Menu | `/menu/catering` |
| 5 | Party Food To Go Menu | `/menu/party-food` |
| 6 | Kapalmuks | `/kapalmuks` |
| 7 | Banquet | `/banquet` |
| 8 | Contact Us | `/contact` |

---

## 5. Page-by-Page Requirements

### 5.1 Home

**Route:** `/`

**Description:**
The landing page and first impression for all visitors. Should immediately communicate what Pepeton's is, where it is, and what makes it special — especially Kapalmuks.

**User Stories:**
- As a visitor, I want to instantly know what kind of restaurant this is and where it is located.
- As a visitor, I want to see the signature dish highlighted so I know what to order.
- As a visitor, I want quick links to explore menus and make contact.

**Acceptance Criteria:**
- Hero section with restaurant name, tagline, and high-quality food photo
- Visible CTA buttons: "View Menu" and "Book Catering"
- Short intro paragraph about the restaurant
- Highlight card for Kapalmuks signature dish
- Links to delivery platforms (GrabFood, Foodpanda)
- Address and operating hours visible above the fold or in a sticky bar
- Fully responsive on mobile

---

### 5.2 Our Story

**Route:** `/our-story`

**Description:**
Brand storytelling page. Communicates the history, values, and personality of Pepeton's to build trust and emotional connection with visitors.

**User Stories:**
- As a visitor, I want to know the history behind Pepeton's and why it exists.
- As a visitor, I want to feel a personal connection to the brand before I visit.

**Acceptance Criteria:**
- Written narrative of the restaurant's founding and history
- Photos of the restaurant, team, or founder (if available)
- Mention of the Kapalmuks origin story
- Highlight of the cozy atmosphere and community roots in Quezon City
- Mobile-responsive layout with readable typography

---

### 5.3 Restaurant Menu

**Route:** `/menu/restaurant`

**Description:**
Full dine-in menu display organized by category. Should be easy to browse on both desktop and mobile. Reflects the actual menu (Sinigang, Vegetables, Seafood, Desserts, etc.).

**User Stories:**
- As a diner, I want to browse the full menu before visiting so I know what to expect.
- As a mobile user, I want to easily scroll through menu categories without zooming.

**Acceptance Criteria:**
- Menu items grouped by category (Sinigang, Vegetables, Vegetarian's Delight, Pampaganang Pinoy, Rice, Noodles, Desserts)
- Each item shows name and price
- Optional: item description or photo for hero dishes
- Filter or jump-to by category
- Note about sharing/tray pricing where applicable
- Downloadable PDF version of menu (optional)

---

### 5.4 Catering Menu

**Route:** `/menu/catering`

**Description:**
Menu options available for catering events. May differ from dine-in menu. Should include package options, minimum order info, and a clear path to inquire.

**User Stories:**
- As an event organizer, I want to see what food options are available for catering.
- As a customer, I want to know minimum order or package sizes for catering.

**Acceptance Criteria:**
- Catering-specific menu items and packages displayed clearly
- Package tiers (if applicable) with inclusions listed
- Minimum headcount or order requirements noted
- Clear CTA: "Inquire About Catering" linking to contact form
- Contact number visible on the page

---

### 5.5 Party Food To Go Menu

**Route:** `/menu/party-food`

**Description:**
Bulk/party food orders available for pickup. Targets birthdays, reunions, and small gatherings that want Pepeton's food without full catering service.

**User Stories:**
- As a customer planning a small party, I want to see what bulk food options I can order for pickup.
- As a customer, I want to know how far in advance I need to order.

**Acceptance Criteria:**
- Party food items displayed with pricing (per tray or per serving)
- Note on advance order lead time (e.g., "Order at least 2 days in advance")
- Pickup instructions or process explained
- CTA to call or message for orders
- Clearly labeled as distinct from the catering menu

---

### 5.6 Kapalmuks

**Route:** `/kapalmuks`

**Description:**
Dedicated feature page for Pepeton's signature dish — Kapalmuks (fried pork face). This is both a marketing asset and the primary SEO target for anyone searching for the dish.

**User Stories:**
- As a food enthusiast, I want to learn what Kapalmuks is and why it is special.
- As a first-time visitor, I want to see photos and understand why this is the must-order dish.

**Acceptance Criteria:**
- Hero image of the Kapalmuks dish
- Detailed description: what it is, how it is prepared, what makes it unique
- Origin or story behind the dish
- Customer quotes or reviews (if available)
- CTA: "Visit Us" or "Order Now"
- SEO-optimized: page title and meta description target "Kapalmuks Quezon City" and "fried pork face Philippines"

---

### 5.7 Banquet

**Route:** `/banquet`

**Description:**
Information page for Pepeton's banquet hall and event hosting services. Targets customers planning private events, company parties, debuts, reunions, and similar gatherings.

**User Stories:**
- As an event organizer, I want to know if Pepeton's has a venue and what its capacity is.
- As a customer, I want to inquire about booking the banquet hall for a private event.

**Acceptance Criteria:**
- Banquet hall description: capacity, setup options, ambiance
- Photo gallery of the venue
- List of services included (food, setup, etc.)
- Pricing or packages, or "inquire for pricing" if not disclosed publicly
- Inquiry form or clear link to Contact Us
- Note on minimum guests or booking requirements

---

### 5.8 Contact Us

**Route:** `/contact`

**Description:**
Primary contact and location page. Should make it as easy as possible for customers to reach the restaurant, find it on a map, and submit inquiries.

**User Stories:**
- As a customer, I want to find the restaurant address and get directions easily.
- As a potential catering client, I want to send an inquiry without calling.
- As a mobile user, I want to tap a number to call directly.

**Acceptance Criteria:**
- Full address: 109 Mother Ignacia Ave, Quezon City
- Embedded Google Map
- Operating hours displayed clearly
- Clickable phone number (tel: link for mobile)
- Social media links (Facebook, Instagram)
- Contact form with fields: Name, Email, Phone, Message, Type of Inquiry (Dine-in / Catering / Banquet / Other)
- Form submission confirmation message

---

## 6. Design Requirements

### 6.1 Brand Colors

Derived from the existing physical menu aesthetic.

| Role | Hex | Usage |
|------|-----|-------|
| Background dark | `#1A0E08` | Page backgrounds, hero sections |
| Section red | `#C0392B` | Section headers, CTAs, accents |
| Warm brown | `#5C2A10` | Subheadings, dividers |
| Gold | `#F5C518` | Highlights, section labels |
| Cream | `#F0E6D3` | Body text on dark backgrounds |
| White | `#FFFFFF` | Prices, light backgrounds |

### 6.2 Typography

- **Headings:** Playfair Display or similar serif (restaurant feel)
- **Body:** Inter or Lato — clean and readable on all screen sizes
- Minimum body font size: 16px
- Line height: 1.6 for body text

### 6.3 Responsive Design

- Mobile-first — majority of Filipino users browse on mobile
- Breakpoints: 375px (mobile), 768px (tablet), 1280px (desktop)
- Navigation collapses to hamburger menu on mobile
- Menu tables reflow to single-column cards on small screens

### 6.4 Performance

- Images optimized and served in WebP format
- Target Lighthouse performance score: 85+
- First Contentful Paint under 2 seconds on 4G

---

## 7. Recommended Tech Stack

| Layer | Choice |
|-------|--------|
| Frontend | Next.js (App Router) + TypeScript + Tailwind CSS |
| CMS (optional) | Sanity.io or Notion API — for menu updates without code changes |
| Hosting | Vercel (free tier sufficient for marketing site) |
| Domain | pepetonsgrill.com or similar |
| Forms | React Hook Form + Resend for email delivery |
| Maps | Google Maps Embed API |
| Analytics | Google Analytics 4 + Google Search Console |
| SEO | Next.js metadata API + JSON-LD structured data |

---

## 8. SEO Requirements

- Each page has a unique meta title and meta description
- Structured data (JSON-LD): Restaurant schema on Home, Menu schema on menu pages
- Kapalmuks page targets: `kapalmuks`, `fried pork face Philippines`, `kapalmuks Quezon City`
- Home page targets: `Filipino restaurant Quezon City`, `seafood restaurant Mother Ignacia`
- `sitemap.xml` generated and submitted to Google Search Console
- `robots.txt` configured correctly
- Google Business Profile linked and consistent with website NAP (Name, Address, Phone)

---

## 9. Success Metrics

| Metric | Target (3 months post-launch) |
|--------|-------------------------------|
| Monthly website visitors | 500+ unique visitors/month |
| Google search impressions | Rank on page 1 for "Kapalmuks QC" |
| Catering inquiries via form | 10+ inquiries/month |
| Bounce rate | Below 60% |
| Mobile traffic share | 70%+ of total sessions |
| Page load time | Under 2 seconds on 4G |

---

## 10. Suggested Build Timeline

| Phase | Duration | Deliverables |
|-------|----------|--------------|
| 1 — Design | Week 1–2 | Wireframes, color palette, component library, brand approval |
| 2 — Development | Week 3–5 | All 8 pages built, responsive, CMS connected (if applicable) |
| 3 — Content | Week 5–6 | Menu data entry, photos, copy finalized, SEO metadata |
| 4 — QA & Launch | Week 7 | Cross-browser testing, performance audit, go live |
| 5 — Post-launch | Month 2–3 | SEO monitoring, form testing, analytics review, iteration |

---

## 11. Open Questions & Assumptions

### Open Questions

- Will menus be managed via a CMS or hardcoded? (Affects build approach significantly)
- Are there existing brand photos / food photography available, or does a shoot need to be arranged?
- Should the site support online ordering, or only link out to GrabFood/Foodpanda?
- Is there a Facebook or Instagram page to embed or link?
- What is the banquet hall capacity and what event types does it accommodate?
- Are catering and party food menus different from the dine-in menu, and are they finalized?

### Assumptions

- The website is primarily informational — no e-commerce in v1
- Menu data will be provided by the restaurant before development begins
- A domain will be registered by the restaurant or developer
- Google Maps embed will use the existing Google Business Profile listing
- Contact form emails will route to the restaurant's primary email address

---

*Pepeton's Grill & Catering — 109 Mother Ignacia Ave, Quezon City — Website PRD v1.0*