const languageData = {
    uk: {
        shepherds: "Тут ви зустрінете пастухів і почуєте їхню історію.",
        registration: "Зареєструйтесь та дізнайтеся більше про перепис населення.",
        carpenter: "Познайомтеся з теслярем та його ремеслом.",
        scribe: "Дізнайтеся про записи писаря та його роботу.",
        well: "Відвідайте криницю та дізнайтеся про її значення.",
        bakery: "Завітайте до пекарні та відчуйте аромат свіжої випічки.",
        spices: "Загляньте в магазин спецій та дізнайтеся про різні аромати.",
        "wise-men": "Зустріньте мудреців, які принесли подарунки.",
        stable: "Зайдіть у стайню та дізнайтеся про народження Ісуса.",
        "photo-zone": "Зробіть пам'ятне фото на згадку."
    },
    en: {
        shepherds: "Meet the shepherds and listen to their story.",
        registration: "Register and learn more about the census.",
        carpenter: "Meet the carpenter and learn about his craft.",
        scribe: "Learn about the scribe's records and his work.",
        well: "Visit the well and discover its importance.",
        bakery: "Stop by the bakery and smell the fresh bread.",
        spices: "Explore the spice market and its aromas.",
        "wise-men": "Meet the wise men who brought gifts.",
        stable: "Step into the stable and learn about Jesus' birth.",
        "photo-zone": "Take a memorable photo to remember your visit."
    }
};

let currentLanguage = "uk";

function switchLanguage(language) {
    currentLanguage = language;
    updateButtonText();
}

function updateButtonText() {
    document.querySelectorAll(".location-button").forEach((button) => {
        const id = button.getAttribute("onclick").match(/'(\w+)'/)[1];
        button.textContent = languageData[currentLanguage][id];
    });
}

function openModal(location) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-image");
    const text = document.getElementById("modal-text");

    img.src = `images/${location}.png`;
    text.textContent = languageData[currentLanguage][location];

    modal.classList.add("show");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

// Ініціалізуємо текст кнопок
updateButtonText();
