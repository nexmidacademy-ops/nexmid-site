// ============================================================
//            SCRIPT.JS — MENU MOBILE ET INTERACTIONS
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    //            1. MENU MOBILE — TOGGLE
    // ============================================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.querySelector('nav ul');

    if (menuToggle && navMenu) {
        // Ouvrir / Fermer le menu au clic sur le bouton
        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            // Changer l'icône du bouton (optionnel)
            if (navMenu.classList.contains('active')) {
                menuToggle.textContent = '✕';
            } else {
                menuToggle.textContent = '☰';
            }
        });

        // Fermer le menu automatiquement lors du clic sur un lien
        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            });
        });
    }

    // ============================================================
    //            2. FERMER LE MENU AU CLIC EXTÉRIEUR
    // ============================================================
    document.addEventListener('click', function(event) {
        const header = document.querySelector('header');
        if (header && navMenu) {
            const isClickInside = header.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.textContent = '☰';
            }
        }
    });

    // ============================================================
    //            3. ANIMATION — SCROLL VERS LES ANCRES
    // ============================================================
    // Pour les liens avec # (ex: services.html#technologies)
    // Cette fonction permet un scroll fluide si on est sur la même page
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            // Ignorer les liens vers d'autres pages (ex: services.html#...)
            if (targetId === '#') return;
            if (targetId.startsWith('#')) {
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // ============================================================
    //            4. FORMULAIRE — GESTION SIMPLE
    // ============================================================
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            // Formspree gère l'envoi, on laisse faire
            // On peut ajouter un indicateur de chargement
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.textContent = '⏳ Envoi en cours...';
                submitBtn.disabled = true;
            }
        });
    }

    // ============================================================
    //            5. FORMULAIRE — AFFICHER SUCCÈS SI redirection
    // ============================================================
    if (window.location.search.includes('success')) {
        if (contactForm) {
            contactForm.style.display = 'none';
        }
        if (successMsg) {
            successMsg.style.display = 'block';
        }
    }

    // ============================================================
    //            6. ACTIVER LE LIEN ACTIF SUR LA PAGE
    // ============================================================
    // Cette partie est facultative car les classes 'active' sont
    // déjà définies dans le HTML, mais on peut la garder
    // pour un éventuel usage dynamique
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav ul li a').forEach(function(link) {
        const linkPage = link.getAttribute('href');
        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            // On retire la classe active pour les autres pages
            // Sauf si le lien est vers une page avec des ancres
            if (linkPage && !linkPage.includes('#')) {
                link.classList.remove('active');
            }
        }
    });

    // ============================================================
    //            7. RACCOURCI CLAVIER — Échap pour fermer le menu
    // ============================================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.textContent = '☰';
            }
        }
    });

    console.log('✅ NEXMID GROUP — Script chargé avec succès');
});