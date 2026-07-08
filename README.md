# Murugeshwari K — Portfolio Website

A premium, multi-page portfolio website for **Murugeshwari K**, Software Developer & AI Engineer.
Built with **pure HTML5, CSS3, and Vanilla JavaScript** — no frameworks.

## ✨ Features

- 9 fully responsive pages: Home, About, Education, Experience, Skills, Projects, Achievements, Certifications, Contact
- Warm ivory & blush colour palette with gold accents (locked per design brief)
- Playfair Display (headings) + Poppins (body) via Google Fonts
- Lucide Icons via CDN
- Typewriter effect rotating "Software Developer" ⇄ "AI Engineer"
- Glassmorphism navbar, floating profile photo, ripple buttons, scroll-reveal animations
- Certificate gallery with click-to-expand modal
- Front-end validated contact form with inline success/error feedback
- Sticky, accessible navbar with active-page highlighting and a mobile menu

## 📁 Folder Structure

```
Portfolio/
├── index.html          Home
├── about.html
├── education.html
├── experience.html
├── skills.html
├── projects.html
├── achievements.html
├── certifications.html
├── contact.html
│
├── css/
│   ├── style.css        Global tokens, navbar, footer, buttons, cards
│   ├── home.css
│   ├── about.css
│   ├── education.css
│   ├── experience.css
│   ├── skills.css
│   ├── projects.css
│   ├── achievements.css
│   ├── certifications.css
│   ├── contact.css
│   └── responsive.css   Tablet / mobile breakpoints
│
├── js/
│   ├── main.js          Reveal-on-scroll, ripple, back-to-top, active nav
│   ├── navbar.js        Mobile menu toggle
│   ├── typewriter.js    Hero role rotation
│   ├── animation.js     Certificate modal + stagger reveal
│   ├── theme.js         Footer year, image fallback
│   └── contact.js       Contact form validation
│
├── assets/
│   ├── images/          profile.jpg, skilligy.png, leaseai.png, emotica.png, ecommerce.png
│   ├── certificates/    cert1.jpg, cert2.jpg, cert3.jpg
│   ├── icons/           (reserved for custom icons)
│   └── resume.pdf
│
└── README.md
```

## 🖼️ Replacing placeholder images

The `assets/images/` and `assets/certificates/` folders currently contain
generated placeholder graphics that match the site's colour palette, so the
site looks complete out of the box. Swap in your real photos/screenshots at
any time — just keep the same filenames, or update the `src` attributes in
the HTML if you rename them.

## 🚀 Running the site

No build step required. Open `index.html` directly in a browser, or serve the
folder with any static server, e.g.:

```bash
npx serve .
# or
python3 -m http.server 8000
```

## 🔧 Making the contact form functional

`js/contact.js` currently simulates a submission (no backend). To make it
send real emails, connect the `<form>` to a service like
[Formspree](https://formspree.io) or [EmailJS](https://www.emailjs.com/) and
replace the `setTimeout` block with an actual `fetch()` call.

## 🎨 Design tokens

| Token            | Hex       |
|-------------------|-----------|
| Background         | `#F8F4EF` |
| Soft Blush         | `#F5DDD6` |
| Peach               | `#E8C2AF` |
| Cards               | `#F3E6DE` |
| Primary Text        | `#3E302B` |
| Secondary Text      | `#6A4E42` |
| Accent Gold         | `#C8A07A` |
| White               | `#FFFFFF` |

---
Built for Murugeshwari K · © 2026
