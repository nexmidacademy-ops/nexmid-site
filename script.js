// ============================================================
//            SCRIPT.JS — MENU MOBILE ET INTERACTIONS
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    //            1. MENU MOBILE — TOGGLE
    // ============================================================
    const menuToggle = document.getElementById('menuToggle');
    const navMenu = document.getElementById('navMenu');

    if (menuToggle && navMenu) {

        menuToggle.addEventListener('click', function() {
            navMenu.classList.toggle('active');

            if (navMenu.classList.contains('active')) {
                menuToggle.innerHTML = '<i class="fi fi-rr-cross"></i>';
            } else {
                menuToggle.innerHTML = '<i class="fi fi-rr-menu-burger"></i>';
            }
        });

        const navLinks = document.querySelectorAll('nav ul li a');
        navLinks.forEach(function(link) {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fi fi-rr-menu-burger"></i>';
            });
        });
    }

    // ============================================================
    //            2. FERMER LE MENU AU CLIC EXTÉRIEUR
    // ============================================================
    document.addEventListener('click', function(event) {
        const header = document.querySelector('header');
        if (header && navMenu && menuToggle) {
            const isClickInside = header.contains(event.target);
            if (!isClickInside && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.innerHTML = '<i class="fi fi-rr-menu-burger"></i>';
            }
        }
    });

    // ============================================================
    //            3. SCROLL FLUIDE VERS LES ANCRES
    // ============================================================
    document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // ============================================================
    //            4. FORMULAIRE — DÉSACTIVER LE BOUTON À L'ENVOI
    // ============================================================
    const contactForm = document.getElementById('contactForm');
    const successMsg = document.getElementById('formSuccess');

    if (contactForm) {
        contactForm.addEventListener('submit', function() {
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            if (submitBtn) {
                submitBtn.innerHTML = '<i class="fi fi-rr-spinner"></i> Envoi en cours...';
                submitBtn.disabled = true;
            }
        });
    }

    // ============================================================
    //            5. FORMULAIRE — AFFICHER SUCCÈS SI REDIRECTION
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
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    document.querySelectorAll('nav ul li a').forEach(function(link) {
        const linkPage = link.getAttribute('href');

        if (linkPage === currentPage) {
            link.classList.add('active');
        } else {
            if (linkPage && !linkPage.includes('#')) {
                link.classList.remove('active');
            }
        }
    });

    // ============================================================
    //            7. RACCOURCI CLAVIER — ÉCHAP POUR FERMER
    // ============================================================
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.innerHTML = '<i class="fi fi-rr-menu-burger"></i>';
            }
        }
    });

    // ============================================================
    //            8. LOG DE CHARGEMENT
    // ============================================================
    console.log('NEXMID GROUP — Script chargé avec succès');

});