# Task 2: Interactive Web Portfolio

A modern, fully responsive, and interactive personal portfolio website built with **Vanilla HTML, CSS, and JavaScript**. This project was developed as part of the Frontend Developer Internship program at Auspify Technologies.

## 🚀 Live Demo
[Live Demo](https://kusnadi34.github.io/Task-2_Interactive-Web-Portfolio/)

## ✨ Features

- **Multi-Page Layout:** Includes Home, About, Skills, Portfolios, and Contact pages.
- **Dark / Light Mode Toggle:** Seamless theme switching with the user's preference saved in Local Storage.
- **Typing Effect:** A dynamic typewriter animation on the homepage to showcase roles.
- **Scroll Reveal Animations:** Elements smoothly fade and slide in as the user scrolls down (using Intersection Observer).
- **Interactive Project Showcase:** Displays all projects from Task 1 to Task 6 with live demo and GitHub links.
- **Responsive Design:** A true Mobile-First approach ensuring the layout looks perfect on phones, tablets, and desktops.
- **Simulated Forms:** Contact and comment forms with loading states and success feedback.

## 🛠 Tech Stack

- **HTML5:** Semantic and accessible markup.
- **CSS3:** CSS Variables (for theming), Flexbox, CSS Grid, and Media Queries.
- **Vanilla JavaScript (ES6+):**
  - Modular app structure (`const App = {...}`).
  - DOM Manipulation & Event Handling.
  - `IntersectionObserver` for scroll animations.
  - `localStorage` for theme persistence.

## 📁 Folder Structure

```text
Task-2_Interactive-Web-Portfolio/
├── assets/               # Images and illustrations
├── index.html            # Home page
├── about.html            # About me page
├── skills.html           # Skills page
├── portfolios.html       # Projects showcase
├── contacts.html         # Contact & comments page
├── style.css             # Global styles and theming
└── script.js             # Application logic and interactivity


.

🧠 What I Learned
Structuring a multi-page website with a clean and reusable CSS architecture.

Implementing complex UI interactions (like typing effects and scroll reveals) using pure JavaScript without any external libraries.

Managing global states (like Dark Mode) across multiple pages using localStorage.
