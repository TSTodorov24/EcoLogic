const aboutTranslations = {
    bg: {
        "logo": "EcoLogic",

        "nav-home": "Начало",
        "nav-subs": "Абонаменти",
        "nav-map": "Карта",
        "nav-about": "За нас",
        "nav-login": "Вход",

        "about-title": "За нас",
        "about-text": "EcoLogic е визия за бъдеще с чиста енергия и устойчив транспорт.",

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
        "nav-about": "About us",
        "nav-login": "Login",

        "about-title": "About Us",
        "about-text": "EcoLogic is a vision for a future powered by clean energy and sustainable transport.",

        "footer-title": "EcoLogic",
        "footer-desc": "A sustainable network of solar-powered charging stations.",
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

        "about-title": "О нас",
        "about-text": "EcoLogic — это видение будущего с чистой энергией и устойчивым транспортом.",

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

        "about-title": "Über uns",
        "about-text": "EcoLogic ist eine Vision für eine Zukunft mit sauberer Energie und nachhaltigem Verkehr.",

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

function setLanguage(lang) {
    localStorage.setItem("ecologic-lang-about", lang);
    updateAboutTexts();
}

function updateAboutTexts() {
    const lang = localStorage.getItem("ecologic-lang-about") || "bg";
    const dict = aboutTranslations[lang];

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (dict[key]) el.textContent = dict[key];
    });
}

function toggleTheme() {
    let theme = localStorage.getItem("ecologic-theme-about") || "dark";
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("ecologic-theme-about", theme);
    applyAboutTheme();
}

function applyAboutTheme() {
    const theme = localStorage.getItem("ecologic-theme-about") || "dark";

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

document.addEventListener("DOMContentLoaded", () => {
    updateAboutTexts();
    applyAboutTheme();
});
