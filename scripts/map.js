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
        shepherds: "Пастухи були першими, хто почув Добру Новину. Вони розкажуть вам, що саме вони побачили на зоряному небі тієї дивовижної ночі, коли народилося диво. Дізнайтеся, чому Бог обрав саме їх!",
        registration: "Відвідайте реєстрацію перепису населення та дізнайтеся, чому Йосип і Марія поїхали до Віфлеєму. Що було унікального в цьому переписі?",
        carpenter: "Знайомтеся з майстром, який працює з деревом. Які секрети приховує його ремесло?",
        scribe: "Дізнайтеся, як писар записував історії тих часів. Чим вони відрізнялися від сучасного письма?",
        well: "Спробуйте свіжу воду з криниці. Дізнайтеся, чому вода була такою важливою для людей того часу!",
        bakery: "Відчуйте аромат свіжоспеченого хліба. Як виготовляли хліб у давні часи, і чому це було так важливо?",
        spices: "Пориньте у світ запахів і смаків. Що могли розповісти спеції про людей, які ними користувалися?",
        "wise-men": "Зустріньте мудреців, які прийшли здалеку. Що вони принесли та чому це було важливо?",
        stable: "Зайдіть у стайню.""Дізнайтеся, як виглядало місце, де народилося Дитя. Чому саме стайня стала колискою для Ісуса",
        "photo-zone": "Зробіть фото, яке збереже цю особливу мить у вашій пам’яті!"
    },
    en: {
        shepherds: "The shepherds were the first to hear the Good News. Find out what they saw in the sky that special night and why God chose them!",
        registration: "Visit the census registration and discover why Joseph and Mary traveled to Bethlehem. What was unique about this census?",
        carpenter: "Meet the craftsman who works with wood. What secrets does his craft hold?",
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
