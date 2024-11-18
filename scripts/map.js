let currentLanguage = "uk";

const textData = {
    uk: {
        campTitle: 'Інтерактивна Карта "Ніч у Вифлеємі"',
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
        campTitle: 'Interactive Map "Night in Bethlehem"',
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
        shepherds: "Зустріньте пастухів, які першими дізналися про чудо.",
        registration: "Дізнайтеся про перепис римлян.",
        carpenter: "Відвідайте майстерню тесляра.",
        scribe: "Відвідайте намет писаря.",
        well: "Скуштуйте воду з криниці.",
        bakery: "Відчуйте аромат хліба.",
        spices: "Загляньте в магазин спецій.",
        "wise-men": "Зустріньте мудреців.",
        stable: "Зайдіть у стайню.",
        "photo-zone": "Зробіть фото на пам'ять."
    },
    en: {
        shepherds: "Meet the shepherds who witnessed the miracle.",
        registration: "Learn about the Roman census.",
        carpenter: "Visit the carpenter's workshop.",
        scribe: "See the scribe's tent.",
        well: "Taste the water from the well.",
        bakery: "Smell the fresh bread.",
        spices: "Explore the spice market.",
        "wise-men": "Meet the wise men.",
        stable: "Step into the stable.",
        "photo-zone": "Take a memorable photo."
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    updateText();
}

function updateText() {
    document.getElementById("camp-title").textContent = textData[currentLanguage].campTitle;
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'([\w-]+)'/)[1];
        button.textContent = textData[currentLanguage][id];
    });
}

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const text = descriptions[currentLanguage][station];

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("modal").classList.add("show");
}
// Додаємо обробник події для кнопки хрестика
document.getElementById("close-modal").addEventListener("click", () => {
    document.getElementById("modal").classList.remove("show");
});

function closeModal(event) {
    if (event.target.id === "modal" || event.target.id === "close-modal") {
        document.getElementById("modal").classList.remove("show");
    }
}
function closeModal(event) {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("close-modal");

    // Перевіряємо, чи натиснуто хрестик або клацнуто поза модальним вікном
    if (event.target === modal || event.target === closeButton) {
        modal.classList.remove("show");
    }
}


document.addEventListener("DOMContentLoaded", updateText);
