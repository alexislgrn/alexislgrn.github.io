document.addEventListener('DOMContentLoaded', function() {
    
    // Sélectionne tous les boutons d'onglets
    const tabLinks = document.querySelectorAll('.tab-link');
    
    // Sélectionne tous les contenus d'onglets
    const tabContents = document.querySelectorAll('.tab-content');

    // Ajoute un écouteur d'événement "clic" sur chaque bouton
    tabLinks.forEach(function(link) {
        link.addEventListener('click', function() {
            
            // Récupère la cible du data-tab (ex: "projets" ou "pro")
            const tabId = link.getAttribute('data-tab');

            // 1. Enlève la classe 'active' de TOUS les boutons
            tabLinks.forEach(function(btn) {
                btn.classList.remove('active');
            });

            // 2. Enlève la classe 'active' de TOUS les contenus
            tabContents.forEach(function(content) {
                content.classList.remove('active');
            });

            // 3. Ajoute la classe 'active' SEULEMENT au bouton cliqué
            link.classList.add('active');

            // 4. Ajoute la classe 'active' SEULEMENT au contenu correspondant
            document.getElementById(tabId).classList.add('active');
        });
    });
});