let currentLanguage = "uk"; // Встановлюємо українську мову за замовчуванням

const textData = {
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

function switchLanguage(lang) {
    currentLanguage = lang;
    updateText();
}

function updateText() {
    document.getElementById("title").textContent = textData[currentLanguage].title;
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'([\w-]+)'/)[1];
        button.textContent = textData[currentLanguage][id] || id;
    });
}

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const text = textData[currentLanguage][station] || "Description not available.";

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("modal").classList.add("show");
}

function closeModal(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal || event.target.id === "close-modal") {
        modal.classList.remove("show");
    }
}

// Ініціалізуємо текст при завантаженні сторінки
document.addEventListener("DOMContentLoaded", updateText);
