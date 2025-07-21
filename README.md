# PDF Reduce Tool – Compress PDF Online Free

This repository contains the source code for a single-page, mobile-first website called "PDF Reduce Tool – Compress PDF Online Free". The project is designed to provide a clean user interface for a PDF compression tool. It's built with HTML, CSS, and JavaScript, and is optimized for easy deployment on platforms like Blogger or any static web host.

## ✨ Key Features

*   **Clean & Modern UI:** A minimalist, professional design with a focus on user experience.
*   **Mobile-First & Responsive:** The layout is fully responsive and looks great on all devices, from mobile phones to desktops.
*   **SEO Optimized:** Includes essential `meta` tags for search engine optimization and Open Graph tags for better social media sharing.
*   **Ad Monetization Ready:** Pre-defined ad slots for Google AdSense or AdOk are included in the header, sidebar, and between content sections.
*   **User-Friendly Workflow:**
    *   Simple upload button (with file size check).
    *   Visual progress bar to simulate compression.
    *   Clear "Compression Completed" message.
    *   Easy-to-use download button.
*   **Blogger Ready:** All code (HTML, CSS, JavaScript) is contained within a single file, making it extremely easy to copy and paste into a Blogger theme's HTML editor.
*   **No Backend Required:** The current version uses JavaScript to simulate the compression process, allowing the frontend to be deployed without any server-side logic.

## 🚀 How to Use / Installation

This project is designed for simplicity. All you need is the `index.html` file.

### Deploying on Blogger

1.  **Copy the Code:** Open the `index.html` file from this project and copy its entire content.
2.  **Go to your Blogger Dashboard.**
3.  Navigate to the **Theme** section in the left-hand menu.
4.  Click the dropdown arrow next to the "Customize" button and select **Edit HTML**.
5.  **Replace the existing code** by selecting all of it (Ctrl+A or Cmd+A) and pasting the code you copied from `index.html`.
6.  Click the **Save** icon in the top right corner.
7.  Your new one-page website is now live!

### Deploying on a Static Host

1.  Simply upload the `index.html` file to any static web hosting provider (like Netlify, Vercel, or GitHub Pages).
2.  Rename the file as needed (usually `index.html` is served by default).

## 🔧 Customization

You can easily customize several parts of the website directly in the HTML file:

*   **Text Content:** Change the main heading, subheading, and informational text by editing the content within the HTML tags (e.g., `<h1>`, `<p>`).
*   **Testimonials:** Edit the placeholder testimonials inside the `<section class="testimonials">` block.
*   **Ad Slots:** Replace the placeholder `<div>` elements for ads with your actual ad code from Google AdSense, AdOk, or another ad network. The placeholder ad slots are clearly marked with comments.
*   **Footer Links:** Update the `href` attribute in the footer's navigation links (`<a href="...">`) to point to your own Privacy Policy, Contact, and Terms pages.
*   **Social Sharing Image:** Update the `og:image` meta tag in the `<head>` section to point to an image that you want to show when the website link is shared on social media.

## ❗️ Important Note: Frontend Simulation Only

This project provides the complete **frontend user interface** for a PDF compression tool. The file upload, progress bar, and download flow are simulated using JavaScript to demonstrate the user experience.

**It does not contain any backend logic to perform actual PDF compression.** To create a fully functional tool, you would need to integrate this frontend with a backend service (e.g., built with Python, Node.js, or PHP) that handles the file processing and compression.

## 🛠️ Technical Stack

*   **HTML5:** For the page structure and content.
*   **CSS3:** For styling, layout, and responsiveness (included as an internal stylesheet for easy portability).
*   **Vanilla JavaScript:** For simulating the file upload and compression process.

## 📄 License

This project is open-source and available under the [MIT License](LICENSE).