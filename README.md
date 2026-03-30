# JNB Private — Website 

Corporate website for **JNB Private**, an independent firm operating as a family office, specialising in ultra-prime advisory and integrated asset management.

## Tech Stack 

- **Next.js 16** (App Router, SSG)
- **React 19** + TypeScript
- **Tailwind CSS v4**
- **next-intl** for i18n (English + Italian)

## Getting Started 

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) — redirects to `/en` by default.

## Project Structure

```
src/
  app/
    [locale]/         # Locale-based routing (en, it)
      layout.tsx      # SEO metadata, Header, Footer
      page.tsx        # Landing page (all sections)
    globals.css       # Tailwind theme + brand design system
  components/
    ui/               # Reusable design system (SectionWrapper, TitleBlock, CTAButton...)
    Header.tsx        # Fixed navigation + language switcher
    Hero.tsx          # Full-screen hero
    About.tsx         # Company overview
    CoreFocus.tsx     # Real Estate Advisory (core)
    ServiceSection.tsx # RE Brokerage, Aviation, Yacht, Asset Management
    InvestmentPhilosophy.tsx
    Values.tsx
    Philosophy.tsx
    Leadership.tsx
    GlobalPresence.tsx
    CTASection.tsx
    Footer.tsx
  i18n/               # next-intl routing + request config
messages/
  en.json             # English translations
  it.json             # Italian translations
public/images/        # Brand assets (SVG logos, sub-brand marks)
```

## Brand

- **Fonts**: Playfair Display (titles), DM Sans (body)
- **Colors**: Forest `#19281A`, Cream `#F5EDDF`
- **Sub-brands**: Living `#A05A53`, Air `#929B97`, Sea `#123A5B`, Investments `#D1BA6F`, Services `#497C70`

## Deployment

```bash
npm run build
npm start
```

Compatible with Vercel, Netlify, or any Node.js hosting.
