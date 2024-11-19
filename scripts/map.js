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
        stable: "Дізнайтеся, як виглядало місце, де народилося Дитя. Чому саме стайня стала колискою для Ісуса",
        "photo-zone": "Зробіть фото, яке збереже цю особливу мить у вашій пам’яті!"
    },
    en: {
        shepherds: "The shepherds were the first to hear the Good News. Find out what they saw in the sky that special night and why God chose them!",
        registration: "Visit the census registration and discover why Joseph and Mary traveled to Bethlehem. What was unique about this census?",
        carpenter: "Meet the craftsman who works with wood. What secrets does his craft hold?",
        scribe: "Learn how the scribe recorded stories of the time. How was it different from modern writing?",
        well: "Taste the fresh water from the well. Why was water so important for the people of that time?",
        bakery: "Smell the aroma of freshly baked bread. How was bread made in ancient times, and why was it so essential?",
        spices:"Dive into the world of scents and flavors. What could spices reveal about the people who used them?",
        "wise-men": "Meet the wise men who traveled from afar. What gifts did they bring, and why were they significant?",
        stable:"Discover what the place looked like where the Child was born. Why did a stable become the cradle of the miracle?",
        "photo-zone": "Take a picture that will capture this special moment forever!"
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
let stationStatus = {};

// Відкриття модального вікна
function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const description = textData[currentLanguage][station]?.description || "Опис недоступний";

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = description;
    document.getElementById("modal").dataset.station = station;

    // Оновлюємо кнопку "Пройдено"
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station] ? "Зняти галочку" : "Пройдено";
    completeButton.dataset.completed = stationStatus[station] ? "true" : "false";

    document.getElementById("modal").classList.add("show");
}

// Закриття модального вікна
function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

// Перемикання станції
function toggleCompletion() {
    const station = document.getElementById("modal").dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Перемикаємо статус
    stationStatus[station] = !stationStatus[station];

    // Оновлюємо текст кнопки в модальному вікні
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station] ? "Зняти галочку" : "Пройдено";

    // Змінюємо стиль кнопки на карті
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }
}

