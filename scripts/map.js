let currentLanguage = "uk";

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

const descriptions = {
    uk: {
        shepherds: "Зустріньте пастухів і дізнайтеся про їхню історію.",
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
    document.getElementById("title").textContent = textData[currentLanguage].title;
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'(\w+)'/)[1];
        button.textContent = textData[currentLanguage][id];
    });
}
function updateText() {
    document.getElementById("title").textContent = textData[currentLanguage].title;
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'(\w+)'/)[1];
        button.textContent = textData[currentLanguage][id] || id;
    });
}

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const description = descriptions[currentLanguage][station] || "Опис відсутній.";

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = description;
    document.getElementById("modal").classList.add("show");
}

function closeModal(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal || event.target.id === "close-modal") {
        modal.classList.remove("show");
    }
}

// Ініціалізація тексту при завантаженні сторінки
document.addEventListener("DOMContentLoaded", updateText);
