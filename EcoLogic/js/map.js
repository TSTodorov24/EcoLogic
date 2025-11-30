// Езикови преводи само за MAP страницата
const mapTranslations = {
    bg: {
        "logo": "EcoLogic",

        "nav-home": "Начало",
        "nav-subs": "Абонаменти",
        "nav-map": "Карта",
        "nav-about": "За нас",
        "nav-login": "Вход",

        "map-title": "EcoLogic – Карта",
        "map-header": "Интерактивна карта на зарядните станции",

        "footer-title": "EcoLogic",
        "footer-desc": "Устойчива мрежа от екологични зарядни станции, захранвани от соларна енергия.",
        "footer-nav": "Навигация",
        "footer-social": "Социални мрежи",
        "footer-legal": "Правна информация",
        "footer-privacy": "Политика за поверителност",
        "footer-terms": "Условия за ползване",
        "footer-cookies": "Бисквитки",
        "footer-copy": "© 2025 EcoLogic — Всички права запазени."
    },

    en: {
        "logo": "EcoLogic",

        "nav-home": "Home",
        "nav-subs": "Subscriptions",
        "nav-map": "Map",
        "nav-about": "About Us",
        "nav-login": "Login",

        "map-title": "EcoLogic – Map",
        "map-header": "Interactive map of charging stations",

        "footer-title": "EcoLogic",
        "footer-desc": "A sustainable network of eco-friendly solar stations.",
        "footer-nav": "Navigation",
        "footer-social": "Social networks",
        "footer-legal": "Legal information",
        "footer-privacy": "Privacy policy",
        "footer-terms": "Terms of use",
        "footer-cookies": "Cookies",
        "footer-copy": "© 2025 EcoLogic — All rights reserved."
    },

    ru: {
        "logo": "EcoLogic",

        "nav-home": "Главная",
        "nav-subs": "Подписки",
        "nav-map": "Карта",
        "nav-about": "О нас",
        "nav-login": "Вход",

        "map-title": "EcoLogic – Карта",
        "map-header": "Интерактивная карта зарядных станций",

        "footer-title": "EcoLogic",
        "footer-desc": "Устойчивая сеть солнечных зарядных станций.",
        "footer-nav": "Навигация",
        "footer-social": "Социальные сети",
        "footer-legal": "Правовая информация",
        "footer-privacy": "Политика конфиденциальности",
        "footer-terms": "Условия использования",
        "footer-cookies": "Cookies",
        "footer-copy": "© 2025 EcoLogic — Все права защищены."
    },

    de: {
        "logo": "EcoLogic",

        "nav-home": "Startseite",
        "nav-subs": "Abonnements",
        "nav-map": "Karte",
        "nav-about": "Über uns",
        "nav-login": "Login",

        "map-title": "EcoLogic – Karte",
        "map-header": "Interaktive Karte der Ladestationen",

        "footer-title": "EcoLogic",
        "footer-desc": "Ein nachhaltiges Netzwerk solarbetriebener Ladestationen.",
        "footer-nav": "Navigation",
        "footer-social": "Soziale Netzwerke",
        "footer-legal": "Rechtliches",
        "footer-privacy": "Datenschutz",
        "footer-terms": "Nutzungsbedingungen",
        "footer-cookies": "Cookies",
        "footer-copy": "© 2025 EcoLogic — Alle Rechte vorbehalten."
    }
};


// Смяна на езика
function setLanguage(lang) {
    localStorage.setItem("ecologic-lang-map", lang);
    updateMapTexts();
}

// Обновяване на текста в HTML
function updateMapTexts() {
    const lang = localStorage.getItem("ecologic-lang-map") || "bg";
    const dict = mapTranslations[lang];

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (dict[key]) el.textContent = dict[key];
    });
}


// Тъмна/светла тема
function toggleTheme() {
    let theme = localStorage.getItem("ecologic-theme-map") || "dark";
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("ecologic-theme-map", theme);
    applyMapTheme();
}

function applyMapTheme() {
    const theme = localStorage.getItem("ecologic-theme-map") || "dark";

    if (theme === "light") {
        document.documentElement.style.setProperty("--bg", "#ffffff");
        document.documentElement.style.setProperty("--text", "#000000");
        document.documentElement.style.setProperty("--accent", "#3d3c35");
    } else {
        document.documentElement.style.setProperty("--bg", "#000000");
        document.documentElement.style.setProperty("--text", "#ffffff");
        document.documentElement.style.setProperty("--accent", "#3d3c35");
    }
}


// Зареждаме всичко
document.addEventListener("DOMContentLoaded", () => {
    updateMapTexts();
    applyMapTheme();
});
