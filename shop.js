// ============================================================
//              SHOP.JS — FILTRES DE LA BOUTIQUE
// ============================================================

document.addEventListener('DOMContentLoaded', function() {

    // ============================================================
    //            1. RÉCUPÉRATION DES ÉLÉMENTS
    // ============================================================
    const productGrid = document.getElementById('productGrid');
    const noResults = document.getElementById('noResults');

    const filterCategory = document.getElementById('filterCategory');
    const filterSousCategorie = document.getElementById('filterSousCategorie');
    const filterBudget = document.getElementById('filterBudget');
    const filterEtat = document.getElementById('filterEtat');
    const filterMarque = document.getElementById('filterMarque');
    const resetBtn = document.getElementById('resetFilters');

    // ============================================================
    //            2. INITIALISATION
    // ============================================================
    if (productGrid) {

        filterProducts();

        if (filterCategory) filterCategory.addEventListener('change', filterProducts);
        if (filterSousCategorie) filterSousCategorie.addEventListener('change', filterProducts);
        if (filterBudget) filterBudget.addEventListener('change', filterProducts);
        if (filterEtat) filterEtat.addEventListener('change', filterProducts);
        if (filterMarque) filterMarque.addEventListener('change', filterProducts);

        if (resetBtn) resetBtn.addEventListener('click', resetFilters);
    }

    // ============================================================
    //            3. FONCTION DE FILTRAGE
    // ============================================================
    function filterProducts() {
        const category = filterCategory ? filterCategory.value : 'all';
        const sousCategorie = filterSousCategorie ? filterSousCategorie.value : 'all';
        const budget = filterBudget ? filterBudget.value : 'all';
        const etat = filterEtat ? filterEtat.value : 'all';
        const marque = filterMarque ? filterMarque.value : 'all';

        const products = document.querySelectorAll('.product-card');
        let visibleCount = 0;

        products.forEach(function(product) {
            let show = true;

            // Filtre Catégorie
            if (category !== 'all' && product.dataset.category !== category) {
                show = false;
            }

            // Filtre Sous-catégorie
            if (sousCategorie !== 'all' && show && product.dataset.souscategorie !== sousCategorie) {
                show = false;
            }

            // Filtre Budget
            if (budget !== 'all' && show) {
                const price = parseInt(product.dataset.budget);
                if (price > parseInt(budget)) {
                    show = false;
                }
            }

            // Filtre État
            if (etat !== 'all' && show && product.dataset.etat !== etat) {
                show = false;
            }

            // Filtre Marque
            if (marque !== 'all' && show && product.dataset.marque !== marque) {
                show = false;
            }

            // Afficher ou cacher
            product.style.display = show ? 'block' : 'none';
            if (show) visibleCount++;
        });

        // Message "Aucun résultat"
        if (noResults) {
            noResults.style.display = (visibleCount === 0) ? 'block' : 'none';
        }
    }

    // ============================================================
    //            4. FONCTION DE RÉINITIALISATION
    // ============================================================
    function resetFilters() {
        if (filterCategory) filterCategory.value = 'all';
        if (filterSousCategorie) filterSousCategorie.value = 'all';
        if (filterBudget) filterBudget.value = 'all';
        if (filterEtat) filterEtat.value = 'all';
        if (filterMarque) filterMarque.value = 'all';

        filterProducts();
    }

    // ============================================================
    //            5. LOG DE CHARGEMENT
    // ============================================================
    console.log('NEXMID SHOP — Filtres chargés avec succès');

});