---
name: CivicSetu OS
colors:
  surface: '#FFFFFF'
  surface-dim: '#d3daef'
  surface-bright: '#f9f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f1f3ff'
  surface-container: '#e9edff'
  surface-container-high: '#e1e8fd'
  surface-container-highest: '#dce2f7'
  on-surface: '#141b2b'
  on-surface-variant: '#43474e'
  inverse-surface: '#293040'
  inverse-on-surface: '#edf0ff'
  outline: '#73777f'
  outline-variant: '#c3c6cf'
  surface-tint: '#436084'
  primary: '#002444'
  on-primary: '#ffffff'
  primary-container: '#1a3a5c'
  on-primary-container: '#87a4cc'
  inverse-primary: '#abc9f2'
  secondary: '#904d00'
  on-secondary: '#ffffff'
  secondary-container: '#fe932c'
  on-secondary-container: '#663500'
  tertiary: '#331f00'
  on-tertiary: '#ffffff'
  tertiary-container: '#4f3300'
  on-tertiary-container: '#c49b5f'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d2e4ff'
  primary-fixed-dim: '#abc9f2'
  on-primary-fixed: '#001c37'
  on-primary-fixed-variant: '#2a486b'
  secondary-fixed: '#ffdcc3'
  secondary-fixed-dim: '#ffb77d'
  on-secondary-fixed: '#2f1500'
  on-secondary-fixed-variant: '#6e3900'
  tertiary-fixed: '#ffddb1'
  tertiary-fixed-dim: '#ecbf80'
  on-tertiary-fixed: '#291800'
  on-tertiary-fixed-variant: '#5f410c'
  background: '#F4F6F8'
  on-background: '#141b2b'
  surface-variant: '#dce2f7'
  text-muted: '#6B7280'
  border: '#E5E7EB'
  success: '#16A34A'
  warning: '#F59E0B'
  danger: '#DC2626'
typography:
  headline-lg:
    fontFamily: IBM Plex Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: 40px
  headline-md:
    fontFamily: IBM Plex Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: IBM Plex Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: IBM Plex Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: IBM Plex Sans
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
  label-sm:
    fontFamily: IBM Plex Sans
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  data-lg:
    fontFamily: IBM Plex Mono
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
  data-md:
    fontFamily: IBM Plex Mono
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
  data-sm:
    fontFamily: IBM Plex Mono
    fontSize: 11px
    fontWeight: '400'
    lineHeight: 16px
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  rail-height: 32px
  gutter: 16px
  margin-mobile: 16px
  margin-desktop: 32px
  stack-sm: 8px
  stack-md: 16px
  stack-lg: 24px
---

## Brand & Style

The design system is engineered for high-stakes government operations, prioritizing institutional authority, technical precision, and absolute clarity. The aesthetic follows an **Instrument Panel** philosophy: every element serves a functional purpose, and visual hierarchy is determined by data priority rather than decorative flair.

The style is **Modern Corporate** with a heavy influence from industrial software. It is characterized by flat surfaces, rigid geometry, and a disciplined "no-fluff" approach. There are no gradients, no blurs, and no decorative shadows. The interface should feel like a reliable tool—stable, predictable, and mission-critical. The emotional response is one of serious trust and professional efficiency.

Instructions:
- Use only the specified box-shadow for the single level of elevation.
- Maintain a strict "Functional Minimalism" where whitespace is used to separate high-density data modules.
- Ensure all visual communication is factual and imperative.

## Colors

The palette is anchored by **Deep Navy**, representing institutional stability, and a high-contrast **Saffron Amber** accent reserved for singular points of high-priority focus. 

The color application follows a strict functional logic:
- **Primary (Navy):** Used for global navigation, primary actions, and structural headers.
- **Accent (Amber):** Used for exactly one critical call-to-action or status indicator per screen to prevent visual fatigue.
- **Semantic Colors:** Reserved strictly for status reporting (Success, Warning, Danger). Do not use these for general branding.
- **Neutral Palette:** Uses a cool-toned gray scale to maintain a clean, "software-as-infrastructure" feel.

Color Mode: This design system is exclusively light-mode centered to ensure maximum legibility for long-duration operational use.

## Typography

This system employs a strict dual-family typographic strategy to separate UI controls from raw data.

1.  **IBM Plex Sans:** Utilized for all interface elements, including navigation, button labels, form headers, and descriptive body copy. 
2.  **IBM Plex Mono:** Utilized exclusively for technical data—numbers, ID strings, timestamps, coordinates, and currency. This ensures that quantitative values remain legible and aligned in dense tables or dashboard views.

**Constraints:**
- Weights are limited to 400 (Regular), 500 (Medium), 600 (Semi-Bold), and 700 (Bold). 
- Avoid 300 (Light) or 800 (Extra Bold) to maintain a consistent visual weight that matches the "instrument panel" aesthetic.
- The **Status Rail** text must always be `data-sm` in all-caps.

## Layout & Spacing

The layout philosophy is built on a **Fixed Grid** system to ensure predictability in high-stress environments. 

- **Grid:** 12-column system for desktop with 16px gutters and 32px outer margins.
- **Status Rail:** A mandatory 32px height horizontal bar at either the top or bottom of specific modules, providing technical metadata.
- **Sidebar:** A fixed-width (240px) Navy navigation rail on the left-hand side.
- **Responsiveness:** On mobile, columns collapse into a single vertical stack. Margins reduce to 16px. Maps and KPI cards must maintain their aspect ratios to ensure data remains readable.
- **Rhythm:** Use an 8px base unit for all internal component spacing to maintain a mathematical, structured feel.

## Elevation & Depth

Depth is achieved primarily through **Tonal Layering** rather than shadows. The interface is intentionally flat to emphasize its nature as a digital tool.

- **The Surface Rule:** Backgrounds use `#F4F6F8`. All active containers (cards, inputs, panels) use a pure white `#FFFFFF` surface.
- **Borders:** Every card and input field must have a 1px solid border using `#E5E7EB`.
- **The Elevation Exception:** There is exactly one shadow rule used to provide a subtle "lift" for cards against the background: `box-shadow: 0 1px 2px rgba(17,24,39,0.06)`. No other shadows, blurs, or glows are permitted.

## Shapes

The shape language is conservative and geometric. 

- **Cards:** Maximum 8px radius to provide a slight softenss to large containers without losing the institutional feel.
- **Buttons & Inputs:** Maximum 6px radius. This slightly tighter radius distinguishes interactive elements from structural containers.
- **Badges:** May use the "pill" style (full roundedness) for status indicators to make them instantly recognizable against the rigid grid.

## Components

**Buttons**
- **Primary:** Deep Navy (#1A3A5C) background, white text. Bold, authoritative.
- **Accent:** Saffron Amber (#D97706) background, white text. Limited to one per view.
- **Secondary:** Outlined with 1px border (#E5E7EB), text in Navy.

**Cards**
- **KPI-Card:** Features a large 32px IBM Plex Mono number for metrics. Muted label text at the top. 1px border and single elevation shadow.
- **Role-Card:** A stacked layout for user/entity management. Uses a bold Sans header and Mono for unique ID numbers.

**Navigation & Feedback**
- **Status-Rail:** 32px height, white background. Uses `data-sm` (11px Mono), uppercase, muted gray text. Separated by a 1px top border.
- **Nav-Sidebar:** Navy background. Active states use a solid Saffron Amber vertical bar (4px wide) on the left edge of the menu item.
- **Role-Badge:** Small, semi-rounded badges using semantic colors for status (e.g., Active = Green, Pending = Warning, Revoked = Danger).

**Inputs & Maps**
- **Input Fields:** White surface, 1px border, 6px radius. Focus state uses a 2px Navy border.
- **Map-Container:** High-contrast, clean styling (Leaflet/Mapbox). UI controls on the map must follow the system's square geometry and Navy/White color scheme.

**Writing Guidelines**
All component text must be factual and imperative. Examples: "Submit Report" instead of "Click here to submit your report!" Avoid all exclamation marks. Use title case for buttons and sentence case for body descriptions.