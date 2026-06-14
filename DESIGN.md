---
name: Pepeton's Grill & Catering Design System
description: A rich, heritage-inspired dark visual language for authentic Filipino cuisine.
colors:
  background-dark: "#FDFBF7"
  maroon-bg: "#FFFFFF"
  brown-mid: "#E6E2DA"
  header-gold: "#B58E4F"
  body-cream: "#3D332D"
  price-white: "#1A110D"
  section-red: "#9E2F2F"
  warm-orange: "#A55325"
  heart-accent: "#B52233"
  divider-brown: "#C4B0A0"
typography:
  display:
    fontFamily: "Prata, Georgia, serif"
    fontSize: "clamp(2.5rem, 6vw, 5rem)"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Prata, Georgia, serif"
    fontSize: "clamp(1.8rem, 4vw, 3rem)"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "-0.01em"
  title:
    fontFamily: "Prata, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
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
- **Grill Ember Black** (`#FDFBF7` / `oklch(98.85% 0.006 84.56)`): The canvas. Used as the main page background to establish a light, clean, paper-like atmosphere.
- **Oxblood Maroon** (`#FFFFFF` / `oklch(100.00% 0.000 0.00)`): The secondary canvas. Used for section containers, header navigation backgrounds, and cards.
- **Hearth Brown** (`#E6E2DA` / `oklch(91.37% 0.012 84.58)`): The midtone border and container backdrop. Emphasizes visual groupings.

### Accents
- **Kinpaku Gold** (`#B58E4F` / `oklch(67.02% 0.094 78.05)`): The signature highlight. Reserved for key display headings, category titles, active links, and brand icons.
- **Chili Red** (`#9E2F2F` / `oklch(47.41% 0.147 24.70)`): The conversion action color. Used for primary CTAs ("Book Catering", "Inquire Now") and section titles.
- **Sunburst Orange** (`#A55325` / `oklch(53.46% 0.123 47.15)`): Used for secondary hover states, highlight badges, and subtle borders.
- **Fiesta Pink-Red** (`#B52233` / `oklch(50.45% 0.181 21.33)`): A high-energy accent color reserved strictly for hearts, favorites, and rare celebratory highlights.

### Neutrals
- **Body Cream** (`#3D332D` / `oklch(32.99% 0.018 52.84)`): The primary ink. Used for body paragraphs, sub-labels, and metadata to ensure a warm, highly-readable contrast on light backgrounds.
- **Crisp White** (`#FFFFFF` / `oklch(100% 0 0)`): High-contrast ink. Used exclusively for prices, buttons, and high-importance details.
- **Mortar Brown** (`#8B4513` / `oklch(41.34% 0.134 45)`): Divider color. Used for borders, grid separators, and horizontal lines.

**The Golden Ember Rule.** Red and Gold combined must cover less than 15% of any page surface. They are signaling devices for flavor, brand, and actions; overusing them dilutes their premium impact.

## 3. Typography

**Display Font:** Prata (Google Fonts serif fallback)
**Body Font:** Manrope (Google Fonts sans-serif fallback)

### Hierarchy
- **Display** (Regular 400, `clamp(2.5rem, 6vw, 5rem)`, 1.1 line-height): Used for home hero titles and large page introductions. Always set with negative tracking (`-0.02em`) and balanced text wrapping.
- **Headline** (Regular 400, `clamp(1.8rem, 4vw, 3rem)`, 1.2 line-height): Used for section headings (e.g., "Our Story", "Restaurant Menu").
- **Title** (Regular 400, `1.5rem`, 1.3 line-height): Used for card headings, menu item names, and form labels.
- **Body** (Regular 400, `1rem` [16px], 1.6 line-height): Used for all descriptive text, story copy, and instructions. Maintained at a strict maximum width of `70ch` for readability.
- **Label** (Bold 700, `0.85rem` [13.6px], `0.1em` letter-spacing, Uppercase): Used for eyebrows, category tabs, menu metadata, and badge text.

**The No-Caps Prose Rule.** Never write paragraph sentences or subheadings in all-caps. Capitalization is reserved exclusively for labels, prices, or short navigation tags of four words or less.

## 4. Elevation

The design system sits in a physical room; it is flat and layered rather than floating. It rejects modern drop-shadows and glassmorphism, featuring a completely shadowless flat aesthetic. Depth is achieved via color layering (Oxblood Maroon containers sitting on Grill Ember Black backgrounds) and structural wood-grain borders.

### Elevation & Flatness
This system features no shadows. All shadows (including text glow and container shadows) are completely removed to maintain a flat, editorial layout.

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
