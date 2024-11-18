const languageData = {
    uk: {
        title: 'Інтерактивна Карта "Ніч у Вифлеємі"',
        shepherds: "Пастухи",
        registration: "Реєстрація",
        carpenter: "Цех тесляра",
        scribe: "Намет писаря",
        well: "Вифлеємська криниця",
        bakery: "Пекарня",
        spices: "Магазин спецій",
        "wise-men": "Мудреці",
        stable: "Стайня",
        "photo-zone": "Фотозона"
    },
    en: {
        title: 'Interactive Map "Night in Bethlehem"',
        shepherds: "Shepherds",
        registration: "Registration",
        carpenter: "Carpenter",
        scribe: "Scribe",
        well: "Bethlehem Well",
        bakery: "Bakery",
        spices: "Spice Market",
        "wise-men": "Wise Men",
        stable: "Stable",
        "photo-zone": "Photo Zone"
    }
};

function switchLanguage(language) {
    currentLanguage = language;
    updateText();
}

function updateText() {
    // Змінюємо заголовок
    document.getElementById("title").textContent = languageData[currentLanguage].title;

    // Оновлюємо текст кнопок
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'([\w-]+)'/)[1];
        button.textContent = languageData[currentLanguage][id] || id;
    });
}

updateText();
