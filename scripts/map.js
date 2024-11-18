let currentLanguage = "uk"; // Мова за замовчуванням - українська

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

function switchLanguage(lang) {
    currentLanguage = lang;
    updateText();
}

function updateText() {
    // Оновлюємо заголовок
    document.getElementById("title").textContent = languageData[currentLanguage].title;

    // Оновлюємо текст кнопок
    document.querySelectorAll(".location-button").forEach(button => {
        const station = button.getAttribute("data-station");
        button.textContent = languageData[currentLanguage][station];
    });
}

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const text = descriptions[currentLanguage][station] || "Опис відсутній.";

    // Оновлюємо зображення і текст модального вікна
    document.getElementB
