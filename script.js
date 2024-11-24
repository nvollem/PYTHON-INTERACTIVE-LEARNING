document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Form validation before submission
    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const consent = document.querySelector('input[name="consent"]').checked;

            if (!name || !email || !phone || !consent) {
                e.preventDefault();
                alert('Please fill in all required fields and provide consent.');
            }
        });
    }

    // Responsive menu toggle
    const menuToggle = document.createElement('div');
    menuToggle.classList.add('menu-toggle');
    menuToggle.innerHTML = '<span></span><span></span><span></span>';
    const siteHeaderContainer = document.querySelector('.site-header .container');
    if (siteHeaderContainer) {
        siteHeaderContainer.appendChild(menuToggle);
    }

    const nav = document.querySelector('nav');
    if (menuToggle && nav) {
        menuToggle.addEventListener('click', function() {
            nav.classList.toggle('open');
            menuToggle.classList.toggle('open');
        });
    }

    // Close navigation on link click (mobile view)
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (nav && nav.classList.contains('open')) {
                nav.classList.remove('open');
                menuToggle.classList.remove('open');
            }
        });
    });

    // Responsive adjustments for contact form and offerings cards
function adjustLayout() {
    const contactSection = document.querySelector('.contact');
    const offeringsCards = document.querySelectorAll('.offerings .card');

    if (contactSection) {
        if (window.innerWidth < 768) {
            contactSection.style.flexDirection = 'column';
        } else {
            contactSection.style.flexDirection = 'row';
        }
    }

    if (offeringsCards.length > 0) {
        offeringsCards.forEach(card => {
            if (window.innerWidth < 768) {
                card.style.width = '100%';
            } else {
                card.style.width = 'calc(33% - 20px)';
            }
        });
    }
}


    window.addEventListener('resize', adjustLayout);
    adjustLayout();

    // Adjust hero section background height for responsiveness
    function adjustHeroHeight() {
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
            if (window.innerWidth < 768) {
                heroSection.style.minHeight = '60vh';
            } else {
                heroSection.style.minHeight = '80vh';
            }
        }
    }

    window.addEventListener('resize', adjustHeroHeight);
    adjustHeroHeight();

    // Add outlined style for contact button in navigation
    const contactButton = document.querySelector('nav ul li a.btn');
    if (contactButton) {
        contactButton.style.border = '2px solid #000';
        contactButton.style.padding = '10px 20px';
        contactButton.style.textTransform = 'uppercase';
        contactButton.style.fontWeight = '600';
    }
});


document.addEventListener('DOMContentLoaded', function () {
    // Footer Link Hover Effect with JavaScript
    const footerLinks = document.querySelectorAll('.site-footer nav ul li a');

    footerLinks.forEach(link => {
        link.addEventListener('mouseenter', function () {
            // Set link color to a dynamic color when hovered
            link.style.color = '#a6f1a6';
        });

        link.addEventListener('mouseleave', function () {
            // Reset link color after hover
            link.style.color = '#ffffff';
        });
    });

    // Responsive Footer Styling Adjustments
    function adjustFooterLayout() {
        const footer = document.querySelector('.site-footer');
        const footerLinks = document.querySelectorAll('.site-footer nav ul li');

        if (window.innerWidth < 768) {
            footer.style.padding = '30px 10px'; // Increase padding for small screens
            footerLinks.forEach(link => {
                link.style.display = 'block';    // Stack links vertically on mobile
                link.style.marginBottom = '10px'; // Add some spacing between links
            });
        } else {
            footer.style.padding = '20px 0';     // Standard padding for larger screens
            footerLinks.forEach(link => {
                link.style.display = 'inline-block'; // Align links horizontally
                link.style.marginBottom = '0';    // Remove spacing between links for large screens
            });
        }
    }

    // Call the function on window resize and initial load
    window.addEventListener('resize', adjustFooterLayout);
    adjustFooterLayout();
});


document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.site-header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a[href*="index.html"]');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const url = new URL(link.href);
            const targetId = url.hash.substring(1);
            if (targetId) {
                window.location.href = link.href; // Load the index.html and scroll to the section
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('nav ul li a');

    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const isSamePageLink = this.getAttribute('href').startsWith('#');
            if (isSamePageLink) {
                e.preventDefault();
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
});






