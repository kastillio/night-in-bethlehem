const languageData = {
    uk: {
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

const descriptions = {
    uk: {
        shepherds: "Зустріньте пастухів і дізнайтеся про їх історію.",
        registration: "Дізнайтеся про перепис римлян і зареєструйтеся.",
        carpenter: "Дізнайтеся про ремесло тесляра та його інструменти.",
        scribe: "Відвідайте намет писаря і дізнайтеся про його записи.",
        well: "Відвідайте відому криницю Вифлеєма та дізнайтеся про її значення.",
        bakery: "Завітайте до пекарні та відчуйте аромат свіжого хліба.",
        spices: "Загляньте в магазин спецій та відчуйте різні аромати.",
        "wise-men": "Зустріньте мудреців, які принесли подарунки.",
        stable: "Зайдіть у стайню і дізнайтеся про народження Ісуса.",
        "photo-zone": "Зробіть пам'ятне фото у фотозоні."
    },
    en: {
        shepherds: "Meet the shepherds and learn about their story.",
        registration: "Learn about the Roman census and register.",
        carpenter: "Discover the carpenter's craft and tools.",
        scribe: "Visit the scribe's tent and learn about his records.",
        well: "Visit the famous Bethlehem well and learn its importance.",
        bakery: "Stop by the bakery and smell the fresh bread.",
        spices: "Explore the spice market and its aromas.",
        "wise-men": "Meet the wise men who brought gifts.",
        stable: "Step into the stable and learn about Jesus' birth.",
        "photo-zone": "Take a memorable photo in the photo zone."
    }
};

let currentLanguage = "en";

function switchLanguage(language) {
    currentLanguage = language;
    updateButtonText();
}

function updateButtonText() {
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'(\w+)'/)[1];
        button.textContent = languageData[currentLanguage][id];
    });
}

function openModal(station) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-image");
    const text = document.getElementById("modal-text");

    img.src = `images/${station}.png`;
    text.textContent = descriptions[currentLanguage][station];

    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

// Ініціалізуємо текст кнопок
updateButtonText();
