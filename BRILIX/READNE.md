Brilix Dental Clinic Website
Project Overview
The Brilix Dental Clinic Website is a responsive, user-friendly web application designed to promote the services, team, and expertise of a fictional dental clinic in Lagos, Nigeria. The site aims to attract potential patients, provide educational content through a blog, and facilitate appointment bookings via a contact form. It features a modern design with a cohesive color scheme, interactive elements like a pricing filter, and a scrollable blog section, all built using HTML, CSS, JavaScript, and Bootstrap 5.
Features

Responsive Navigation: A sticky navbar with links to Home, About, Services, Pricing, Blog, and Contact sections, collapsing into a hamburger menu on mobile devices.
Hero Section: A full-screen banner with a dental-themed background image and a "Book an Appointment" call-to-action (CTA).
About Section: Introduces the clinic’s patient-centered approach with a "Book a Visit" CTA.
Testimonials: Displays 10 patient reviews in a three-column grid to build trust.
Blog Section: Showcases 10 blog post previews in a horizontal scrollable carousel, with detailed posts below for in-depth dental advice.
Pricing: Lists 4 pricing plans on the homepage and 15 on a dedicated pricing.html page, with a search bar to filter plans dynamically.
Services: Highlights 4 core services on the homepage and 15 on a dedicated service.html page.
Team: Introduces 18 team members with their roles and specialties.
Contact Form: A form with validation messages for booking inquiries, showing a success alert on submission.
Footer: Includes contact details, social media links, and quick navigation links.
Favicon: (Planned) Uses a tooth emoji 🦷 as the favicon to reinforce branding.

Technologies Used

HTML5: Structures the content across three pages (index.html, pricing.html, service.html).
CSS3: Styles the site with custom variables (e.g., --TealGreen, --LightCoral) and media queries for responsiveness.
JavaScript: Adds interactivity, including form validation and a pricing filter.
Bootstrap 5: Provides a responsive grid system, navbar, cards, buttons, and form styling.
Google Fonts: Uses the Shrikhand font for branding and Segoe UI for body text.

Project Structure
brilix-dental-clinic/
│
├── img/
│ ├── dent-L.jpg # Hero section background (large screens)
│ ├── dent-S.jpg # Hero section background (small screens)
│ ├── back2.jpg # Pricing card header background
│ ├── blog1.jpg # Blog post images (1–10)
│ └── tooth.ico # Favicon (planned)
├── index.html # Homepage with all sections
├── pricing.html # Detailed pricing page
├── service.html # Detailed services page
├── style.css # Custom styles and Bootstrap overrides
├── script.js # JavaScript for form validation and pricing filter
└── README.md # Project documentation

Setup Instructions

Clone or Download the Repository:
Clone using git clone <repository-url> or download the project files.

Place Files in a Web Server:
Use a local server (e.g., VS Code’s Live Server extension, XAMPP, or Node.js http-server) or host on a platform like Netlify or GitHub Pages.

Ensure Image Assets:
Place all images (dent-L.jpg, dent-S.jpg, back2.jpg, blog1.jpg–blog10.jpg, tooth.ico) in the img folder.
Verify paths in style.css and HTML files match your directory structure.

Open in Browser:
Open index.html in a web browser via the server to view the homepage.
Navigate to pricing.html or service.html for dedicated pages.

Dependencies:
No external libraries are required beyond an internet connection for Google Fonts (Shrikhand).
Bootstrap 5 classes are used without the full library (assumes custom implementation or CDN, not included in provided files).

Usage

Navigation: Use the sticky navbar to jump to sections or pages (pricing.html, service.html).
Blog Section: Scroll horizontally through blog previews and click “Read More” to view detailed posts (requires anchor links implementation, see Future Improvements).
Pricing Filter: On pricing.html, type in the search bar to filter pricing plans dynamically (e.g., “whitening” to show Teeth Whitening plans).
Contact Form: Fill out the form on index.html with validation feedback; a success alert appears on valid submission.
Responsive Design: Test on various devices (desktop, tablet, mobile) to ensure layout adapts correctly.

Future Improvements

Favicon Implementation: Add <link rel="icon" type="image/x-icon" href="img/tooth.ico"> to the <head> of all HTML files to display the tooth emoji 🦷 as the favicon.
Blog “Read More” Links: Implement anchor links (e.g., href="#blog-brighten-smile") or JavaScript to scroll to detailed blog posts.
Pricing Search Enhancements: Add debouncing to the search bar and a “No Results” message for empty searches.
Accessibility: Include aria-labels for buttons and descriptive alt attributes for images.
Backend Integration: Connect the contact form to a server or API (e.g., Formspree) for real submissions.
SEO: Add meta tags (e.g., <meta name="description">) and a sitemap for better search engine visibility.

Challenges and Solutions

Challenge: Implementing horizontal scrolling for the blog section.
Solution: Used scroll-snap-type: x mandatory and scroll-behavior: smooth in .blog-scroll for a carousel-like experience.

Challenge: Ensuring form validation provides clear feedback.
Solution: Added form-text validation messages and JavaScript checkValidity() in script.js.

Challenge: Placeholder “Read More” links (href="#") don’t navigate to detailed posts.
Solution: Plan to add unique IDs to detailed posts and update links for smooth scrolling.

Defense Notes

Purpose: The website promotes Brilix Dental Clinic, builds trust with testimonials and blogs, and encourages bookings via CTAs.
Why Bootstrap?: Provides a responsive, professional layout with minimal setup, customized with a branded color scheme.
Key Features: Highlight the pricing filter, blog carousel, and form validation as interactive, user-focused elements.
Branding: The tooth emoji 🦷, --TealGreen, and --LightCoral create a cohesive, friendly aesthetic.
Responsiveness: Bootstrap’s grid and media queries in style.css ensure compatibility across devices.

License
© 2025 Brilix Dental Clinic. Designed for educational purposes.
