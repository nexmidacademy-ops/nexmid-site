// ============================================================
//              PRODUCTS.JS — BASE DE DONNÉES PRODUITS
// ============================================================

const NEXMID_PRODUCTS = {

        1: {
        name: 'HP 255 G7',
        price: '129 000 FCFA',
        etat: 'Reconditionné',
        stock: true,
        category: 'ordinateur',
        souscategorie: 'pc-portable',
        budget: 129000,
        marque: 'hp',
        images: [
            'images/produits/hp-255-g7-1.jpeg',
            'images/produits/hp-255-g7-2.jpeg',
            'images/produits/hp-255-g7-3.jpeg',
            'images/produits/hp-255-g7-4.jpeg'
        ],
        specs: [
            { label: 'Processeur', value: 'AMD Athlon Silver 3050U (2.30 GHz) — équivalent Intel Core i5-8250U' },
            { label: 'RAM', value: '4 Go DDR4 3200 MHz' },
            { label: 'Stockage', value: '256 Go SSD NVMe + 500 Go HDD' },
            { label: 'Écran', value: '15.6 pouces HD (1366 x 768) — 60 Hz' },
            { label: 'Graphique', value: 'AMD Radeon Graphics — 512 Mo dédiée' },
            { label: 'Système', value: 'Windows 10 Pro 64 bits' },
            { label: 'Autonomie', value: 'Jusqu\'à 4 heures' },
            { label: 'Clavier', value: 'Avec pavé numérique' },
            { label: 'Couleur', value: 'Gris Nuit' },
            { label: 'État', value: '10/10 — Garanti' }
        ],
        description: "Le HP 255 G7 est un ordinateur portable fiable et performant, idéal pour les étudiants, le travail et la bureautique. Équipé d'un processeur AMD Athlon Silver 3050U et d'un double stockage (256 Go SSD NVMe + 500 Go HDD), il offre rapidité et espace de rangement. Son écran 15.6\" HD avec pavé numérique garantit un confort d'utilisation au quotidien. Produit en excellent état (10/10), garanti et prêt à l'emploi.",
        whatsappMessage: "Bonjour Ulrich, je suis intéressé par le HP 255 G7 à 129 000 FCFA"
    }

};

if (typeof window !== 'undefined') {
    window.NEXMID_PRODUCTS = NEXMID_PRODUCTS;
}