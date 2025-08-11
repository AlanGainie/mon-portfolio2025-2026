document.addEventListener('DOMContentLoaded', () => {
    const themeSelector = document.getElementById('themeSelector');
    const mainLogo = document.getElementById('main-logo');
    const favicon = document.getElementById('favicon');
    const footer = document.getElementById('site-footer') || document.querySelector('footer');
    const header = document.getElementById('site-header') || document.querySelector('header');

    const logoPaths = {
        'bleu-rose': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo bleu sur fond rose.png',
        'bleu-vert': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo bleu sur fond vert.png',
        'jaune-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo jaune sur fond bleu.png',
        'rose-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo rose sur fond bleu.png',
        'vert-bleu': 'assets/img/Chartre graphique - Dossier PNG/Logos/Logo vert sur fond bleu.png'
    };

    const faviconPaths = {
        'bleu-rose': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône bleu.png',
        'bleu-vert': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône vert.png',
        'jaune-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône jaune.png',
        'rose-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône rose.png',
        'vert-bleu': 'assets/img/Chartre graphique - Dossier PNG/Icônes/Icône vert.png'
    };

    function applyTheme(theme) {
        if (!theme) return;

        // Logo
        if (mainLogo && logoPaths[theme]) {
        mainLogo.src = logoPaths[theme];
        }

        // Favicon
        if (favicon && faviconPaths[theme]) {
        favicon.href = faviconPaths[theme];
        }

        // Footer
        if (footer) {
        footer.className = 'text-center py-4 border-top'; // reset de base
        footer.classList.add(`footer-${theme}`);
        }

        // Header
        if (header) {
        header.className = 'text-white p-3 mb-4'; // reset de base
        header.classList.add(`header-${theme}`);
        }

        // Sauvegarde
        localStorage.setItem('selectedTheme', theme);
    }

    function loadTheme() {
        const savedTheme = localStorage.getItem('selectedTheme');
        if (savedTheme) {
        applyTheme(savedTheme);
        }
    }

    if (themeSelector) {
        const circles = themeSelector.querySelectorAll('circle[value]');

        circles.forEach(circle => {
            circle.style.cursor = 'pointer';

            circle.addEventListener('click', () => {
            const selectedTheme = circle.getAttribute('value');
            applyTheme(selectedTheme);

            // Retirer la classe de tous les cercles
            circles.forEach(c => c.classList.remove('selected-theme'));

            // Ajouter la classe à tous les cercles avec la même value
            circles.forEach(c => {
                if (c.getAttribute('value') === selectedTheme) {
                c.classList.add('selected-theme');
                }
            });
            });
        });
    }

    loadTheme();
});
