
// PixelWeb Studio — Interactive Features

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener('click', function(event) {
        const target = document.querySelector(
            this.getAttribute('href')
        );

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Reveal sections when they enter the screen
const sections = document.querySelectorAll(
    '.services, .work, .contact'
);

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.15
});

sections.forEach(section => {
    observer.observe(section);
});

// Update footer year automatically
const footer = document.querySelector('footer p');

if (footer) {
    footer.textContent =
        `© ${new Date().getFullYear()} PixelWeb Studio. Built with purpose.`;
}

// PIXELWEB STUDIO ENQUIRY FORM

const enquiryForm = document.getElementById("enquiryForm");

if (enquiryForm) {
  enquiryForm.addEventListener("submit", function (event) {
    event.preventDefault();

    if (!enquiryForm.reportValidity()) {
      return;
    }

    const status = document.getElementById("formStatus");

    status.textContent =
      "Your form looks good! Database connection is not set up yet.";

    enquiryForm.reset();
  });
}

