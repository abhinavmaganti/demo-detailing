# 🚗 Demo Detailing— Premium Mobile Car Detailing Website

Built with **Next.js 14** + **Tailwind CSS**, ready for Vercel deployment.

---

## 📁 File Structure

```
deluxe-details/
├── app/
│   ├── globals.css          # Custom CSS, animations, Bebas Neue + DM Sans fonts
│   ├── layout.js            # Root layout + metadata (SEO)
│   └── page.js              # Main page (assembles all sections)
├── components/
│   ├── Navbar.jsx           # Sticky nav, mobile hamburger menu
│   ├── Hero.jsx             # Full-screen hero with parallax + CTA
│   ├── Services.jsx         # Pricing cards + add-ons
│   ├── Gallery.jsx          # Interactive before/after sliders
│   ├── WhyUs.jsx            # Feature grid + stats
│   ├── Contact.jsx          # Booking form + contact info
│   └── Footer.jsx           # Full footer with links
├── public/                  # Static assets (add favicon here)
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── package.json
```

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
cd deluxe-details
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

---

## ☁️ Deploy to Vercel (Free)

### Option A — Vercel CLI (fastest)

```bash
npm install -g vercel
vercel
```

Follow the prompts. Done — your site is live in ~2 minutes.

### Option B — GitHub + Vercel Dashboard

1. Push this project to a GitHub repository
2. Go to [vercel.com](https://vercel.com) → "Add New Project"
3. Import your GitHub repo
4. Leave all settings as default — Vercel auto-detects Next.js
5. Click **Deploy**

No environment variables are needed.

---

## ✏️ Customization Guide

### Update contact info
Edit `components/Contact.jsx` and `components/Footer.jsx`:
- Phone: `(732) 677-0331` → your number
- Email: `kaseygatchalian@gmail.com` → your email
- Instagram: `@deluxe._details`
- Facebook: `@deluxe.details`

### Update pricing
Edit the `services` array in `components/Services.jsx`.

### Update gallery images
In `components/Gallery.jsx`, replace the Unsplash URLs in `galleryItems` with your own before/after photos. For best results use images sized 800×600px. Upload them to `/public/` and reference as `/your-image.jpg`.

### Update SEO metadata
Edit `app/layout.js` → the `metadata` object at the top.

### Add a favicon
Place a `favicon.ico` or `icon.png` in the `/public/` folder and add to `app/layout.js`:
```js
icons: { icon: '/favicon.ico' }
```

### Colors
All design tokens live in `tailwind.config.js` under `theme.extend.colors`. The primary gradient is `accent-blue (#3B82F6)` → `accent-cyan (#06B6D4)`.

---

## 🎨 Design Features

- **Fonts**: Bebas Neue (display) + DM Sans (body) — loaded from Google Fonts
- **Theme**: Deep obsidian/navy blacks with electric blue-cyan gradients
- **Animations**: CSS IntersectionObserver reveals, parallax hero, before/after sliders
- **Mobile**: Fully responsive with hamburger menu, touch-enabled sliders
- **Performance**: Next.js Image optimization, font preconnect, passive scroll listeners

---

## 📬 How Booking Works

The form uses a `mailto:` link — when submitted, it opens the user's default email client pre-filled with their info. This requires no backend or third-party service.

**To upgrade to a real form**, consider:
- [Resend](https://resend.com) — free tier, easy API
- [Formspree](https://formspree.io) — drop-in form handler
- [EmailJS](https://emailjs.com) — client-side email sending

---

## 📦 Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.2.3 | Framework |
| react | ^18 | UI library |
| tailwindcss | ^3.3 | Styling |
| autoprefixer | ^10 | CSS prefixes |

No other dependencies needed.
