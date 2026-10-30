
# Waste Less, and Live More

**Live site:** https://YOUR-USERNAME.github.io/YOUR-REPO/

## About

Waste Less, and Live More is a website that promotes recycling, proper waste segregation, and upcycling to help create a cleaner environment. It introduces eco-friendly products and waste management services while encouraging communities to practice sustainable living.

## Design System

### Palette (60-30-10)

| Role | Share | Color | Used for |
|---|---|---|---|
| Dominant | 60% | `#F7F5E9` | Main page background and light areas |
| Secondary | 30% | `#15370D` | Navigation, dark sections, and main text |
| Accent | 10% | `#E5CD82` | Buttons, highlights, and progress bar |

**Supporting color:** `#728E6D` — used for section backgrounds and green accents.

### Visual Style

**Style chosen:** Minimalism

**Why I chose it:** I chose minimalism because the website uses a clean layout, simple content, nature-inspired colors, and easy-to-read sections to promote environmental awareness.

### Contrast Check

**Body text color vs. background color:** `#15370D` on `#F7F5E9`

**Contrast ratio:** Approximately `12.3:1`

**Requirement:** At least `4.5:1` for normal text.

**Tool used:** WebAIM Contrast Checker  
https://webaim.org/resources/contrastchecker/

*Note: The ratio above is for the specified dark-green text on the cream background. Check other text and background combinations, including dark mode, before submitting.*

## Features

- [x] Mobile-first responsive layout
- [x] Dark mode toggle
- [x] Page-load intro animation using a GSAP timeline
- [x] Replay Intro button
- [x] Scroll reveals for sections below the hero using ScrollTrigger
- [x] Scroll progress bar linked to page scrolling
- [x] Reduced-motion support using `gsap.matchMedia()`
- [x] Reusable Tailwind CSS component classes using `@apply`
- [x] About Us section
- [x] Products section
- [x] Services section
- [x] Contact form with required fields
- [x] Responsive product and service cards

## Built With

- HTML5
- Tailwind CSS v4
- JavaScript
- GSAP 3.13
- GSAP ScrollTrigger 3.13

## Project Structure

```text
waste-less-website/
├── index.html
├── script.js
└── README.md
```

## Installation and Usage

1. Download or clone the project repository.
2. Open the project folder in Visual Studio Code.
3. Make sure `index.html` and `script.js` are in the same folder.
4. Open `index.html` in your browser or use the Live Server extension.
5. Test the navigation, dark mode toggle, Replay Intro button, scroll animations, and contact form.

An internet connection is required to load Tailwind CSS and GSAP from their CDNs.

## Contact Form

The contact form asks for the user's name, email address, and message. It currently displays a confirmation message but does not send or store the submitted information.

## Deployment

This website can be published using GitHub Pages.

1. Create a new public GitHub repository.
2. Upload `index.html`, `script.js`, and `README.md`.
3. Open the repository's **Settings**.
4. Select **Pages**.
5. Under the build and deployment settings, choose **Deploy from a branch**.
6. Select the `main` branch and the `/ (root)` folder.
7. Save and wait for GitHub Pages to publish the website.
8. Copy your published website URL into the **Live site** link at the top of this README.

## Author

Created for the Tailwind CSS, Dark Mode, Design Principles, GSAP, and ScrollTrigger midterm practical examination.

## License

This project was created for educational purposes.