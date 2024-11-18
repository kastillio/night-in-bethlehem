let currentLanguage = "uk"; // Встановлюємо українську мову за замовчуванням

const textData = {
    uk: {
        title: 'Інтерактивна Карта "Ніч у Вифлеємі"',
        shepherds: "Зустріньте пастухів і дізнайтеся про їхню історію.",
        bakery: "Відвідайте пекарню і відчуйте аромат хліба.",
        "wise-men": "Зустріньте мудреців, які принесли подарунки."
    },
    en: {
        title: 'Interactive Map "Night in Bethlehem"',
        shepherds: "Meet the shepherds and hear their story.",
        bakery: "Visit the bakery and smell the bread.",
        "wise-men": "Meet the wise men who brought gifts."
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

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const text = textData[currentLanguage][station] || "Опис відсутній.";

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
updateText();
