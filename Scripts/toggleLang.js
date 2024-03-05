function toggleLanguage() {
    const languageToggle = document.getElementById('language-toggle');
    const currentLanguage = languageToggle.checked ? 'fr' : 'en';

    // Toggle visibility based on the selected language
    updateContentBasedOnLanguage(currentLanguage);
}

function updateContentBasedOnLanguage(language) {
    // Update lang attribute on the HTML tag
    document.documentElement.lang = language;

    const langTextElements = document.querySelectorAll('[lang]');
    
    langTextElements.forEach((element) => {
        const langAttribute = element.getAttribute('lang');
        element.style.display = langAttribute === language ? 'block' : 'none';
    });
}
