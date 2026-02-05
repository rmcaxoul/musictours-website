const defaultLang = "en";

async function loadLanguage(lang) {
    try {
        const response = await fetch(`lang/${lang}.json`);
        if (!response.ok) {
            throw new Error(`Could not load language file: ${lang}`);
        }

        const translations = await response.json();

        document.querySelectorAll("[data-i18n]").forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[key]) {
                element.innerHTML = translations[key];
                ;
            } else {
                console.warn(`Missing translation for key: ${key}`);
                element.textContent = "";
            }
        });

        document.documentElement.lang = lang;
        localStorage.setItem("lang", lang);
    } catch (error) {
        console.error("i18n error:", error);
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("lang") || defaultLang;
    loadLanguage(savedLang);
});
