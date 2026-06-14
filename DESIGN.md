---
name: Pepeton's Grill & Catering Design System
description: A rich, heritage-inspired dark visual language for authentic Filipino cuisine.
colors:
  background-dark: "#0C0A09"
  maroon-bg: "#1C1816"
  brown-mid: "#5A514B"
  header-gold: "#F48E4F"
  header-gold-dark-bg: "#F48E4F"
  body-cream: "#E6E2DA"
  price-white: "#FFFFFF"
  section-red: "#44B0C0"
  warm-orange: "#FF9E60"
  heart-accent: "#D67080"
  divider-brown: "#3E3834"
typography:
  display:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-0.01em"
  headline:
    fontFamily: "Manrope, sans-serif"
    fontSize: "clamp(1.8rem, 4vw, 3rem)"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 600
    lineHeight: 1.3
  body:
    fontFamily: "Manrope, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Manrope, sans-serif"
    fontSize: "0.85rem"
    fontWeight: 700
    letterSpacing: "0.1em"
rounded:
  sm: "2px"
  md: "4px"
  lg: "8px"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "48px"
  xxl: "64px"
components:
  button-primary:
    backgroundColor: "{colors.section-red}"
    textColor: "{colors.price-white}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
  button-primary-hover:
    backgroundColor: "{colors.warm-orange}"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.header-gold}"
    rounded: "{rounded.sm}"
    padding: "12px 28px"
---

# Design System: Pepeton's Grill & Catering

## 1. Overview

**Creative North Star: "The Ancestral Hearth"**

Pepeton's website uses a premium, deeply atmospheric dark theme that transports visitors straight into the sensory experience of a traditional Filipino grillhouse. The design rejects the cold, sterile, white-backed templates of modern web design in favor of visual warmth, smoky textures, and heritage typography. It serves as an digital invitation to experience Filipino hospitality and our signature Kapalmuks dish.

Key Characteristics:
- **Committed Dark Palette:** Built entirely on deep charcoal-browns and rich maroons, mirroring the charred wood, roasted meats, and embers of the grill.
- **Bold Serif Presence:** High-contrast headings that carry the weight and pride of a heritage family brand.
- **Visual Food-First Layouts:** Full-bleed photography of roasted meats, glowing coals, and banquet gatherings set against dark, textured backdrops.
- **Warm Accents:** Deliberate highlights of gold, warm orange, and rich crimson to guide attention, action, and flavor cues.

## 2. Colors

The color palette is derived directly from the physical restaurant's menus, food colors (crispy skin, slow-cooked marinades), and hearth embers.

### Primary
- **Grill Ember Black** (`#0C0A09` / `oklch(10.22% 0.007 72.33)`): The canvas. Used as the main page background to establish a premium, deep black/charcoal atmospheric aesthetic.
- **Oxblood Maroon** (`#1C1816` / `oklch(16.14% 0.011 50.84)`): The secondary canvas. Used for section containers, header navigation backgrounds, and cards.
- **Hearth Brown** (`#5A514B` / `oklch(40.23% 0.021 59.33)`): The midtone border and container backdrop. Ensures >= 3.0:1 contrast for user interface control borders.

### Accents
- **Muted Logo Orange** (`#F48E4F` / `oklch(73.55% 0.155 58.67)`): The signature highlight. Reserved for headings, category titles, active links, and brand icons.
- **Muted Logo Fish Teal-Blue** (`#44B0C0` / `oklch(71.22% 0.118 206.33)`): Accent brand color for primary CTA buttons and text elements. Passes >= 4.5:1 text contrast on dark backgrounds.
- **Fiesta Pink-Red** (`#D67080` / `oklch(62.33% 0.142 12.35)`): Muted brand pink accent.

### Neutrals
- **Body Cream** (`#E6E2DA` / `oklch(91.37% 0.012 84.58)`): The primary ink. Used for body paragraphs, sub-labels, and metadata to ensure a warm, highly-readable contrast on dark backgrounds.
- **Crisp White** (`#FFFFFF` / `oklch(100% 0 0)`): High-contrast ink. Used exclusively for headings, prices, buttons, and high-importance details.
- **Mortar Brown** (`#3E3834` / `oklch(27.45% 0.012 55.43)`): Divider color. Used for borders, grid separators, and horizontal lines.

**The Golden Ember Rule.** Red and Gold combined must cover less than 15% of any page surface. They are signaling devices for flavor, brand, and actions; overusing them dilutes their premium impact.

## 3. Typography

**Display Font:** Manrope (Google Fonts geometric sans-serif)
**Body Font:** Manrope (Google Fonts sans-serif fallback)

### Hierarchy
- **Display** (Semi-bold 600, `clamp(2.5rem, 6vw, 5rem)`, 1.15 line-height): Used for home hero titles and large page introductions. Always set with tight tracking (`-0.01em`) and balanced text wrapping for a modern and professional style.
- **Headline** (Semi-bold 600, `clamp(1.8rem, 4vw, 3rem)`, 1.2 line-height): Used for section headings (e.g., "Our Story", "Restaurant Menu").
- **Title** (Semi-bold 600, `1.5rem`, 1.3 line-height): Used for card headings, menu item names, and form labels.
- **Body** (Regular 400, `1rem` [16px], 1.6 line-height): Used for all descriptive text, story copy, and instructions. Maintained at a strict maximum width of `70ch` for readability.
- **Label** (Bold 700, `0.85rem` [13.6px], `0.1em` letter-spacing, Uppercase): Used for eyebrows, category tabs, menu metadata, and badge text.

**The No-Caps Prose Rule.** Never write paragraph sentences or subheadings in all-caps. Capitalization is reserved exclusively for labels, prices, or short navigation tags of four words or less.

## 4. Elevation

The design system sits in a physical room; it is flat and layered rather than floating. It rejects modern drop-shadows and glassmorphism, featuring a completely shadowless flat aesthetic. Depth is achieved via clean color layering (containers sitting on the premium off-white paper canvas) and single structural borders.

### Elevation & Flatness
This system features no shadows. All shadows (including text glow and container shadows) are completely removed to maintain a flat, editorial layout. Every container uses a single clean border to define its bounds.

## 5. Components

### Buttons
- **Shape:** Softly square, minimal radius (`2px`).
- **Primary:** Solid Chili Red background, Crisp White text. Padding `12px 28px`.
- **Primary Hover:** Smooth transition (`0.2s cubic-bezier(0.4, 0, 0.2, 1)`) to Sunburst Orange background.
- **Secondary:** Transparent background, thin gold border, Kinpaku Gold text. Padding `12px 28px`.
- **Secondary Hover:** Solid gold background, Grill Ember Black text.

### Cards / Containers
- **Corner Style:** Low-radius sharp corners (`4px`).
- **Background:** Oxblood Maroon (`#FFFFFF`).
- **Border:** `1px` solid Hearth Brown (`#E6E2DA`).
- **Internal Padding:** Generous spacing (`24px` on mobile, `32px` on desktop).

### Inputs / Fields
- **Style:** Grill Ember Black background, `1px` Hearth Brown border, Body Cream text.
- **Focus State:** Border shifts to Kinpaku Gold.

### Navigation
- **Desktop:** Sticky header with black background (`#1E1B1A`). Kinpaku Gold branding text/logo, off-white links.
- **Mobile Menu:** Full-screen overlay in Oxblood Maroon with large Prata menu links.

## 6. Do's and Don'ts

### Do:
- **Do** use high-quality, saturated photographs of Filipino food with dark/smoky lighting to match the Ember canvas.
- **Do** check contrast on text: Body Cream text on Maroon Background has a contrast ratio of >7:1, which exceeds accessibility standards.
- **Do** structure menus as reflowing lists that collapse to single-column cards on screens under 768px.
- **Do** feature the official logo `cropped-logo.png` prominently in the navigation header and footer.

### Don't:
- **Don't** use Playfair Display or Inter fonts.
- **Don't** use standard white, gray, or cool slate backgrounds; this site is committed to a rich, warm dark-mode palette.
- **Don't** use side-stripe borders as card accents. Use full borders (`1px solid #E6E2DA`) or nothing.
- **Don't** use gradient text or decorative glassmorphism.
- **Don't** use nested cards.
