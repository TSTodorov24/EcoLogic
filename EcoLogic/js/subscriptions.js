const translations = {
    bg: {
        "logo": "EcoLogic",

        "nav-home": "Начало",
        "nav-subs": "Абонаменти",
        "nav-map": "Карта",
        "nav-about": "За нас",
        "nav-login": "Вход",

        "subs-title": "Ценоразпис за зареждане",

        "price-title": "Тарифи",
        "price-energy": "Цена за енергия",
        "price-day": "Дневна: 0.40 €/kWh",
        "price-night": "Нощна: 0.30 €/kWh",

        "extra-info-title": "Допълнителна информация",
        "extra-1": "Цените са в евро (€).",
        "extra-2": "Тарифите важат за AC зарядни станции.",
        "extra-3": "Нощна тарифа важи от 22:00 до 06:00.",

        "discount-title": "Отстъпки по количество",
        "visits": "Посещения",
        "discount": "Отстъпка",
        "discount-info": "Отстъпките се начисляват автоматично.",

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

        "subs-title": "Charging Pricing",

        "price-title": "Tariffs",
        "price-energy": "Energy price",
        "price-day": "Day: 0.40 €/kWh",
        "price-night": "Night: 0.30 €/kWh",

        "extra-info-title": "Additional Information",
        "extra-1": "Prices are in euro (€).",
        "extra-2": "Tariffs apply to AC charging stations.",
        "extra-3": "Night tariff is active from 22:00 to 06:00.",

        "discount-title": "Bulk Discounts",
        "visits": "Visits",
        "discount": "Discount",
        "discount-info": "Discounts are applied automatically.",

        "footer-title": "EcoLogic",
        "footer-desc": "A sustainable network of eco-friendly, solar-powered stations.",
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

        "subs-title": "Цены на зарядку",

        "price-title": "Тарифы",
        "price-energy": "Цена за энергию",
        "price-day": "Дневной: 0.40 €/kWh",
        "price-night": "Ночной: 0.30 €/kWh",

        "extra-info-title": "Дополнительная информация",
        "extra-1": "Цены указаны в евро (€).",
        "extra-2": "Тарифы действуют для AC станций.",
        "extra-3": "Ночной тариф действует с 22:00 до 06:00.",

        "discount-title": "Скидки по количеству",
        "visits": "Посещения",
        "discount": "Скидка",
        "discount-info": "Скидки применяются автоматически.",

        "footer-title": "EcoLogic",
        "footer-desc": "Устойчивая сеть солнечных зарядных станций.",
        "footer-nav": "Навигация",
        "footer-social": "Социальные сети",
        "footer-legal": "Юридическая информация",
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

        "subs-title": "Ladepreise",

        "price-title": "Tarife",
        "price-energy": "Energiepreis",
        "price-day": "Tag: 0.40 €/kWh",
        "price-night": "Nacht: 0.30 €/kWh",

        "extra-info-title": "Zusätzliche Informationen",
        "extra-1": "Preise in Euro (€).",
        "extra-2": "Gilt für AC-Ladestationen.",
        "extra-3": "Nachttarif: 22:00–06:00.",

        "discount-title": "Mengenrabatte",
        "visits": "Besuche",
        "discount": "Rabatt",
        "discount-info": "Rabatte werden automatisch berechnet.",

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
    localStorage.setItem("ecologic-lang", lang);
    updateTexts();
}

function updateTexts() {
    const lang = localStorage.getItem("ecologic-lang") || "bg";
    const dict = translations[lang];

    document.querySelectorAll("[data-key]").forEach(el => {
        const key = el.getAttribute("data-key");
        if (dict[key]) el.textContent = dict[key];
    });
}

function toggleTheme() {
    let theme = localStorage.getItem("ecologic-theme") || "dark";
    theme = theme === "dark" ? "light" : "dark";
    localStorage.setItem("ecologic-theme", theme);
    applyTheme();
}

function applyTheme() {
    const theme = localStorage.getItem("ecologic-theme") || "dark";

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
    updateTexts();
    applyTheme();
});
