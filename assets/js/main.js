document.addEventListener('DOMContentLoaded', function() {
    // Mobile Navigation Toggle
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (navToggle) {
    navToggle.addEventListener('click', function() {
    navLinks.classList.toggle('active');
    navToggle.classList.toggle('active');
    });
    
    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navToggle.classList.remove('active');
    });
    });
    }
    
    // Sticky Navigation on Scroll
    const nav = document.querySelector('.nav-wrapper');
    let lastScroll = 0;
    
    window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
    nav.classList.add('scrolled');
    } else {
    nav.classList.remove('scrolled');
    }
    
    lastScroll = currentScroll;
    });
    
    // Smooth Scroll Animation for Hero Stats
    function animateValue(element, start, end, duration, isDecimal = false) {
    const range = end - start;
    const startTime = performance.now();
    
    function updateValue(currentTime) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / duration, 1);
    
    const easeOutQuart = 1 - Math.pow(1 - progress, 4);
    const current = start + (range * easeOutQuart);
    
    if (isDecimal) {
    element.textContent = current.toFixed(2);
    } else {
    element.textContent = Math.floor(current).toLocaleString();
    }
    
    if (progress < 1) {
                     requestAnimationFrame(updateValue);
                     }
                     }
    
                     requestAnimationFrame(updateValue);
                     }
    
                     // Trigger counter animation when hero is in view
                     const heroObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        const counters = document.querySelectorAll('.hero-stat-value[data-count]');
        counters.forEach(counter => {
        const target = parseFloat(counter.getAttribute('data-count'));
        const isDecimal = target % 1 !== 0;
        animateValue(counter, 0, target, 2000, isDecimal);
        });
        heroObserver.unobserve(entry.target);
        }
        });
        }, { threshold: 0.5 });
    
        const heroSection = document.querySelector('.hero');
        if (heroSection) {
        heroObserver.observe(heroSection);
        }
    
        // Scroll Reveal Animations
        const revealElements = document.querySelectorAll('.reveal, .reveal-fade, .reveal-scale');
    
        const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
        if (entry.isIntersecting) {
        entry.target.classList.add('active');
    
        // Trigger child animations with delay
        const children = entry.target.querySelectorAll('.reveal-fade, .reveal-scale');
        children.forEach((child, index) => {
        setTimeout(() => {
        child.classList.add('active');
        }, index * 100);
        });
        }
        });
        }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
        });
    
        revealElements.forEach(element => {
        revealObserver.observe(element);
        });
    
        // Tabs Functionality
        const tabLinks = document.querySelectorAll('.tab-link');
        const tabContents = document.querySelectorAll('.tab-content');
    
        tabLinks.forEach(link => {
        link.addEventListener('click', () => {
        const targetTab = link.dataset.tab;
    
        // Update active states
        tabLinks.forEach(l => l.classList.remove('active'));
        tabContents.forEach(c => c.classList.remove('active'));
    
        link.classList.add('active');
        const targetContent = document.getElementById(targetTab);
        if (targetContent) {
        targetContent.classList.add('active');
        }
        });
        });
    
        // Initialize Demographics Grid
        const demographicsData = [
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/people.svg', topic: 'Total Population', value: '296,640' },
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/income.svg', topic: 'Median Household Income', value: '$93,985' },
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/education.svg', topic: "Bachelor's Degree or Higher", value: '37.2%' },
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/employment.svg', topic: 'Employment Rate', value: '90.9%' },
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/housing.svg', topic: 'Total Housing Units', value: '123,333' },
        { icon: 'https://www.randymajors.org/wp-content/uploads/icons/family.svg', topic: 'Total Households', value: '117,172' }
        ];
    
        const demographicsGrid = document.querySelector('.demographics-grid');
        if (demographicsGrid) {
        demographicsGrid.innerHTML = demographicsData.map((item, index) => `
        <div class="demographics-card reveal-scale" style="animation-delay: ${index * 0.1}s">
            <img src="${item.icon}" alt="${item.topic}" class="demographics-icon">
            <div class="demographics-bar"></div>
            <div class="demographics-content">
                <div class="demographics-topic">${item.topic}</div>
                <div class="demographics-value">${item.value}</div>
            </div>
        </div>
        `).join('');
        }
    
        // Initialize Rent Roll Table
        const rentRollData = [
            { suite: 'A', tenant: 'Lacey Liquor & Beverage', sf: '2,980', baseRent: '$5,072', annualRent: '$60,864', rentPerSf: '$20.43', leaseFrom: '05/22', leaseTo: '04/27', leaseType: 'NNN', options: 'None' },
            { suite: 'C', tenant: 'Kasita Krees', sf: '2,972', baseRent: '$4,458', annualRent: '$53,496', rentPerSf: '$18.00', leaseFrom: '01/25', leaseTo: '12/29', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
            { suite: 'D', tenant: 'Sharp Design Hair Studio', sf: '1,311', baseRent: '$1,647', annualRent: '$19,764', rentPerSf: '$15.08', leaseFrom: '09/24', leaseTo: '08/27', leaseType: 'NNN', options: 'Two (2) Three (3) Year' },
            { suite: 'E', tenant: 'Canna Cabana S&S', sf: '1,164', baseRent: '$1,543', annualRent: '$18,523', rentPerSf: '$15.91', leaseFrom: '07/23', leaseTo: '06/28', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
            { suite: 'F', tenant: 'Pizza Hut', sf: '1,311', baseRent: '$1,991', annualRent: '$23,892', rentPerSf: '$18.23', leaseFrom: '01/23', leaseTo: '12/28', leaseType: 'NNN', options: 'One (1) Five (5) Year' },
            { suite: 'G', tenant: 'Star Nails & Spa', sf: '1,586', baseRent: '$2,473', annualRent: '$29,676', rentPerSf: '$18.71', leaseFrom: '07/25', leaseTo: '06/30', leaseType: 'NNN', options: 'One (1) Five (5) Year' }
        ];
    
        const tableContainer = document.querySelector('.table-container');
        if (tableContainer) {
        let tableHTML = `
        <table class="rent-table">
            <thead>
                <tr>
                    <th>Tenant</th>
                    <th>SF</th>
                    <th>Start</th>
                    <th>Expiration</th>
                    <th>Type</th>
                    <th>Annual Rent</th>
                </tr>
            </thead>
            <tbody>
                `;
    
                rentRollData.forEach((row, index) => {
                const hasOptions = row.options !== null;
                tableHTML += `
                <tr class="tenant-row ${hasOptions ? 'has-options' : ''}" ${hasOptions ? `data-toggle-id="options-${index}"` : ''}>
                    <td class="tenant-name">${row.tenant}</td>
                    <td>${row.sf}</td>
                    <td>${row.start}</td>
                    <td>${row.end}</td>
                    <td>${row.type}</td>
                    <td>${row.rent}</td>
                </tr>
                `;
    
                if (hasOptions) {
                tableHTML += `
                <tr class="options-row" id="options-${index}">
                    <td colspan="6">
                        <div class="options-content">
                            <strong>Options:</strong> ${row.options}
                        </div>
                    </td>
                </tr>
                `;
                }
                });
    
                tableHTML += '</tbody></table>';
        tableContainer.innerHTML = tableHTML;
    
        // Add click handlers for expandable rows
        const toggleRows = tableContainer.querySelectorAll('.tenant-row.has-options');
        toggleRows.forEach(row => {
        row.addEventListener('click', function() {
        const optionsRow = tableContainer.querySelector(`#${this.dataset.toggleId}`);
        if (optionsRow) {
        this.classList.toggle('active');
        optionsRow.classList.toggle('active');
        }
        });
        });
        }
    
        // Initialize Gallery
        const galleryImages = [
        'https://cleanslatekickz.github.io/geojson/Images/Lacey%20Retail%20Center.png',
        'https://cleanslatekickz.github.io/silver-octo-Lacey/Images/Corner3HD.jpeg',
        'https://cleanslatekickz.github.io/silver-octo-Lacey/Images/SideHD.jpeg',
        'https://cleanslatekickz.github.io/silver-octo-Lacey/Images/FrontHD.jpeg',
        'https://lh3.googleusercontent.com/gps-cs-s/AC9h4nrutU0gHpwVS-k6M-WTPA363msH-fqwuBvSNLfpeA0cQpthky93kDGTNHMsnoteaRHT6yQOdrPPWKKDKMH_WeIM6i1OcMujuR-faErC7uPF15SY54hIpI5HgLR7wp_5rkAUrDV2=s457-k-no',
        'https://cleanslatekickz.github.io/silver-octo-Lacey/Images/street.jpeg'
        ];
    
        const galleryGrid = document.querySelector('.gallery-grid');
        if (galleryGrid) {
        galleryGrid.innerHTML = galleryImages.map((img, index) => `
        <div class="gallery-item reveal-scale" style="background-image: url('${img}'); animation-delay: ${index * 0.1}s"></div>
        `).join('');
        }
    
        // Modal Functionality
        const modal = document.getElementById('om-modal');
        const openBtn = document.getElementById('open-om-modal');
        const closeBtn = document.getElementById('close-om-modal');
        const modalBody = modal ? modal.querySelector('.modal-body iframe') : null;
    
        if (openBtn && modal) {
        openBtn.addEventListener('click', () => {
        modal.classList.add('visible');
    
        // Set PDF viewer URL with improved settings
        if (modalBody && !modalBody.src) {
        const pdfUrl = 'https://mmreis-my.sharepoint.com/:b:/g/personal/sam_gfroerer_marcusmillichap_com/ESTuek_XCbFItXSiJaY8nkkBc1nIR0OvrGeNX83ZiucZJA?e=4xesFX&download=1';
        const viewerUrl = `https://cdn.jsdelivr.net/npm/pdfjs-dist@3.11.174/web/viewer.html?file=${encodeURIComponent(pdfUrl)}#zoom=page-width`;
        modalBody.src = viewerUrl;
        }
        });
        }
    
        if (closeBtn && modal) {
        closeBtn.addEventListener('click', () => {
        modal.classList.remove('visible');
        });
        }
    
        if (modal) {
        modal.addEventListener('click', (e) => {
        if (e.target === modal) {
        modal.classList.remove('visible');
        }
        });
    
        // Close modal with Escape key
        document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && modal.classList.contains('visible')) {
        modal.classList.remove('visible');
        }
        });
        }
    
        // Contact Form Handler
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
    
        // Get form data
        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData);
    
        // Here you would normally send the data to a server
        console.log('Form submitted:', data);
    
        // Show success message
        alert('Thank you for your interest! Our team will contact you shortly.');
        contactForm.reset();
        });
        }
    
        // Parallax Effect for Hero
        const heroElement = document.querySelector('.hero-bg');
        if (heroElement) {
        window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallaxSpeed = 0.5;
        heroElement.style.transform = `translateY(${scrolled * parallaxSpeed}px) scale(1.1)`;
        });
        }
    
        // Smooth scroll to sections
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
        const targetId = this.getAttribute('href');
        if (targetId && targetId !== '#') {
        e.preventDefault();
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
        const offset = 80; // Account for sticky nav
        const targetPosition = targetElement.offsetTop - offset;
        window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
        });
        }
        }
        });
        });
    
        // Add loading animation for iframes
        const iframes = document.querySelectorAll('iframe');
        iframes.forEach(iframe => {
        iframe.addEventListener('load', function() {
        this.style.opacity = '1';
        });
        iframe.style.opacity = '0';
        iframe.style.transition = 'opacity 0.5s ease';
        });
        });