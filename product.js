// ============================================================
//        PRODUCT.JS — PAGE PRODUIT DYNAMIQUE (1 à 10 photos)
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    function getProductId() {
        const urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id') || '1';
    }

    const productId = getProductId();
    const products = window.NEXMID_PRODUCTS || {};
    const product = products[productId];

    if (product) {

        // ---- Nom (breadcrumb + titre) ----
        const productName = document.getElementById('productName');
        if (productName) productName.textContent = product.name;

        const productFullName = document.getElementById('productFullName');
        if (productFullName) productFullName.textContent = product.name;

        // ---- Image principale ----
        const mainImage = document.getElementById('mainImage');
        if (mainImage && product.images && product.images[0]) {
            mainImage.src = product.images[0];
            mainImage.alt = product.name;
        }

        // ---- Miniatures (générées dynamiquement, 1 à 10) ----
        const thumbnailsContainer = document.getElementById('productThumbnails');
        if (thumbnailsContainer && product.images && product.images.length > 0) {
            thumbnailsContainer.innerHTML = '';

            product.images.forEach(function(imgSrc, index) {
                const thumb = document.createElement('img');
                thumb.src = imgSrc;
                thumb.alt = product.name + ' - Vue ' + (index + 1);
                if (index === 0) thumb.classList.add('active');

                thumb.addEventListener('click', function() {
                    if (mainImage) {
                        mainImage.src = this.src;
                        mainImage.alt = this.alt;
                    }
                    thumbnailsContainer.querySelectorAll('img').forEach(t => t.classList.remove('active'));
                    this.classList.add('active');
                });

                thumbnailsContainer.appendChild(thumb);
            });
        }

        // ---- Badge état ----
        const productEtat = document.getElementById('productEtat');
        if (productEtat) {
            productEtat.textContent = product.etat;
            if (product.etat === 'Neuf') {
                productEtat.className = 'badge neuf';
            } else if (product.etat === 'Occasion') {
                productEtat.className = 'badge occasion';
            } else {
                productEtat.className = 'badge reconditionne';
            }
        }

        // ---- Prix ----
        const productPrice = document.getElementById('productPrice');
        if (productPrice) productPrice.textContent = product.price;

        // ---- Specs ----
        const productSpecs = document.getElementById('productSpecs');
        if (productSpecs && product.specs) {
            productSpecs.innerHTML = product.specs.map(spec =>
                `<li><strong>${spec.label} :</strong> ${spec.value}</li>`
            ).join('');
        }

        // ---- Description (sauts de ligne pris en compte) ----
        const productDescription = document.getElementById('productDescription');
        if (productDescription) {
            productDescription.innerHTML = product.description.replace(/\n/g, '<br>');
        }

        // ---- Bouton WhatsApp ----
        const whatsappButton = document.getElementById('whatsappButton');
        if (whatsappButton) {
            const message = encodeURIComponent(product.whatsappMessage);
            whatsappButton.href = `https://wa.me/2290153216276?text=${message}`;
        }

        // ---- Boutons de partage (WhatsApp + Facebook) ----
        const shareWhatsapp = document.getElementById('shareWhatsapp');
        const shareFacebook = document.getElementById('shareFacebook');
        const pageUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(product.name + ' — ' + product.price + ' | NEXMID SHOP');

        if (shareWhatsapp) {
            shareWhatsapp.href = `https://wa.me/?text=${shareText}%20${pageUrl}`;
        }

        if (shareFacebook) {
            shareFacebook.href = `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`;
        }

        // ---- Titre de l'onglet ----
        document.title = product.name + ' — NEXMID SHOP';

        // ---- Produits similaires (même catégorie, sauf lui-même) ----
        const similarGrid = document.getElementById('similarGrid');
        if (similarGrid) {
            similarGrid.innerHTML = '';

            let count = 0;
            Object.keys(products).forEach(function(key) {
                if (key === productId) return;
                const p = products[key];
                if (p.category === product.category && count < 3) {
                    const card = document.createElement('div');
                    card.className = 'product-card similar-card';
                    card.innerHTML = `
                        <div class="product-image">
                            <img src="${p.images[0]}" alt="${p.name}">
                        </div>
                        <div class="product-info">
                            <h3>${p.name}</h3>
                            <p class="product-price">${p.price}</p>
                            <a href="product.html?id=${key}" class="btn btn-secondary btn-sm">Voir le produit</a>
                        </div>
                    `;
                    similarGrid.appendChild(card);
                    count++;
                }
            });

            if (count === 0) {
                similarGrid.innerHTML = '<p style="color: var(--text-light);">Aucun produit similaire pour le moment.</p>';
            }
        }

    } else {
        console.warn('Produit non trouvé :', productId);
        const productFullName = document.getElementById('productFullName');
        if (productFullName) productFullName.textContent = 'Produit introuvable';
    }

    console.log('NEXMID SHOP — Produit chargé :', productId, product ? product.name : '(non trouvé)');

});