<div align="center">

# 🇮🇳 Bharat Yatra Travel Choice

### Premium Travel Experiences Across India

A modern, production-ready travel agency website built for **Bharat Yatra Travel Choice**, a Lucknow-based travel company offering curated tours, honeymoon packages, family vacations, and spiritual journeys across India.

[![Live Website](https://img.shields.io/badge/Live%20Website-Visit%20Site-087EA4?style=for-the-badge\&logo=vercel\&logoColor=white)](https://bharat-yatra-website-k5go.vercel.app/)
[![GitHub](https://img.shields.io/badge/Source%20Code-GitHub-181717?style=for-the-badge\&logo=github\&logoColor=white)](https://github.com/swastikjha008-jpg/bharat-yatra-travel-choice)

<br />

![Next.js](https://img.shields.io/badge/Next.js_16-000000?style=flat-square\&logo=next.js\&logoColor=white)
![React](https://img.shields.io/badge/React_19-61DAFB?style=flat-square\&logo=react\&logoColor=black)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat-square\&logo=typescript\&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS_v4-06B6D4?style=flat-square\&logo=tailwindcss\&logoColor=white)
![Motion](https://img.shields.io/badge/Motion-E85219?style=flat-square\&logo=framer\&logoColor=white)
![GSAP](https://img.shields.io/badge/GSAP-88CE02?style=flat-square\&logo=greensock\&logoColor=black)
![WebGL](https://img.shields.io/badge/WebGL-F5B800?style=flat-square\&logo=webgl\&logoColor=black)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square\&logo=vercel\&logoColor=white)

<br />

![Responsive](https://img.shields.io/badge/Responsive-360px%E2%86%921440px-087EA4?style=flat-square)
![Static Generation](https://img.shields.io/badge/Rendering-Static%20Generation-F5B800?style=flat-square)
![Portfolio Project](https://img.shields.io/badge/Project-Client%20Portfolio-E85219?style=flat-square)

</div>

---

## ✈️ About The Project

**Bharat Yatra Travel Choice** is a premium travel agency website designed and developed for a Lucknow-based travel company.

The website focuses on presenting Indian travel destinations through an editorial, high-end visual experience rather than using a traditional travel-template layout.

It includes dedicated package pages, immersive destination imagery, animated navigation, responsive layouts, and a custom WebGL water-ripple hero effect.

### Featured Destinations

* 🛕 **Ayodhya**
* 🕉️ **Varanasi**
* 🏔️ **Manali**
* ❄️ **Shimla**
* 🌄 **Char Dham**
* 🇮🇳 **Pan-India Tours**

---

## ✨ Features

### 🌊 Interactive WebGL Hero

A custom fragment-shader implementation creates a dynamic water-ripple distortion effect over the homepage hero image.

### 🖼️ Editorial Destination Gallery

A responsive accordion-style gallery allows users to explore destinations with hover and interaction-based expansion.

### 🎟️ Travel Package Pages

Dedicated package pages provide:

* Trip overview
* Itineraries
* Duration
* Pricing
* Inclusions
* Exclusions
* Destination highlights

### 🧭 Animated Navigation

The navbar includes a sliding **limelight-style active indicator** with responsive behavior across desktop and mobile layouts.

### 📱 Responsive Design

The interface is designed and tested across viewport sizes ranging from approximately **360px to 1440px+**, with attention to mobile layout and horizontal-overflow issues.

### ⚡ Static Generation

Routes are statically generated at build time where applicable, allowing fast page delivery and efficient deployment through Vercel.

### 🎨 Brand-Driven Visual System

The visual language is based directly on the company's existing logo and brand identity instead of relying on a generic UI palette.

---

## 🛠️ Tech Stack

### Frontend

| Technology          | Purpose                                             |
| ------------------- | --------------------------------------------------- |
| **Next.js 16**      | React framework, routing & application architecture |
| **React 19**        | UI component architecture                           |
| **TypeScript**      | Type-safe development                               |
| **Tailwind CSS v4** | Utility-first styling                               |
| **Motion**          | Scroll and component animations                     |
| **GSAP**            | Advanced gallery animations                         |
| **WebGL**           | Custom interactive hero graphics                    |
| **Lucide**          | Interface icons                                     |

### Design & Typography

| Technology        | Purpose                      |
| ----------------- | ---------------------------- |
| **Fraunces**      | Editorial display typography |
| **Inter**         | Primary body typography      |
| **IBM Plex Mono** | Technical/data labels        |
| **Fontsource**    | Self-hosted font delivery    |

### Deployment

| Platform               | Purpose                         |
| ---------------------- | ------------------------------- |
| **Vercel**             | Production hosting & deployment |
| **Next.js App Router** | Routing and page structure      |
| **Turbopack**          | Development/build tooling       |

---

## 🎨 Design System

The design system was created around the existing **Bharat Yatra Travel Choice** branding.

### Color Palette

| Color             | Hex       | Usage                          |
| ----------------- | --------- | ------------------------------ |
| 🌊 **Ocean Blue** | `#087EA4` | Primary accent, links, buttons |
| 🤍 **Cream**      | `#F8F4EA` | Main page background           |
| 🟡 **Gold**       | `#F5B800` | Highlights and active states   |
| 🟠 **Orange**     | `#E85219` | CTAs and social accents        |
| 🔵 **Navy**       | `#0E2A3C` | Footer and dark sections       |

### Typography

**Fraunces**
Used for large editorial headings and prominent destination titles.

**Inter**
Used for body copy, navigation, buttons, and supporting UI text.

**IBM Plex Mono**
Used for compact metadata such as package durations, prices, labels, and technical information.

---

## 📂 Project Structure

```text
bharat-yatra-travel-choice/
│
├── app/
│   ├── routes/
│   └── pages/
│
├── components/
│   ├── Navbar
│   ├── Footer
│   ├── TicketCard
│   ├── TestimonialCard
│   ├── AccordionGallery
│   ├── WaterRippleImage
│   └── Reveal
│
├── lib/
│   ├── site constants
│   ├── package data
│   └── testimonial data
│
├── public/
│   └── images/
│       ├── logo
│       └── destination photography
│
├── .github/
│
├── package.json
├── tsconfig.json
├── next.config.ts
└── README.md
```

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/swastikjha008-jpg/bharat-yatra-travel-choice.git
cd bharat-yatra-travel-choice
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

### 4. Create a production build

```bash
npm run build
```

### 5. Start the production server

```bash
npm run start
```

### Environment Variables

No environment variables are currently required.

---

## 🧩 Architecture

The project follows a component-driven architecture built around the Next.js App Router.

### Core layers

```text
UI Layer
   ↓
Reusable Components
   ↓
Page / Route Composition
   ↓
Static Content & Data
   ↓
Next.js Build / Deployment
```

The architecture keeps destination content, package data, testimonials, and reusable UI components separated so the website can be extended without rebuilding the entire interface.

---

## 📸 Content Notes

This project is publicly available as a **client portfolio project**. Some content is intentionally represented as placeholder or sample data.

### Destination Photography

Destination photography currently uses appropriately licensed **Unsplash imagery** as temporary visual content until the company's own trip photography is available.

### Package Pricing

Package pricing is sourced from third-party listings and should not be treated as confirmed quotations from the business.

Throughout the website, pricing is presented with a **"starting from"** disclaimer.

### Testimonials

Testimonials currently contain clearly identified sample content.

The implementation uses:

```ts
isSample: true
```

in:

```text
lib/testimonials.ts
```

Real customer reviews can replace these entries without changing the UI architecture.

### Branding

The **Bharat Yatra Travel Choice** name, logo, and brand identity belong to the respective business and should not be reused without permission.

---

## 🌐 Live Website

**Production:**
https://bharat-yatra-website-k5go.vercel.app/

**Repository:**
https://github.com/swastikjha008-jpg/bharat-yatra-travel-choice

---

## 📄 License

The source code is shared for **reference and portfolio purposes**.

The following assets are **not licensed for reuse**:

* Bharat Yatra Travel Choice logo
* Brand name
* Brand identity
* Client-specific imagery
* Client-specific content

Please do not redistribute or reuse these assets without permission.

---

<div align="center">

### 🇮🇳 Built for Bharat Yatra Travel Choice

**Travel. Explore. Experience India.**

</div>
