const textData = {
    uk: {
        'shepherds': { name: "Пастухи", description: "Дізнайтеся, що побачили пастухи тієї ночі." },
        'registration': { name: "Реєстрація", description: "Дізнайтеся, чому Йосип і Марія прийшли до Вифлеєму." },
        'carpenter': { name: "Цех тесляра", description: "Познайомтеся з тесляром і його роботою." },
        'scribe': { name: "Намет писаря", description: "Дізнайтеся значення імені Ісус." },
        'well': { name: "Вифлеємська криниця", description: "Дізнайтеся про важливість води." },
        'bakery': { name: "Пекарня", description: "Побачте, як випікають хліб." },
        'spice-market': { name: "Магазин спецій", description: "Відкрийте аромат спецій." },
        'wise-men': { name: "Мудреці", description: "Дізнайтеся, що принесли мудреці." },
        'stable': { name: "Стайня", description: "Дізнайтеся історію про Йосипа і Марію." },
        'photo-zone': { name: "Фотозона", description: "Зробіть пам'ятне фото." }
    },
    en: {
        'shepherds': { name: "Shepherds", description: "Find out what the shepherds saw that night." },
        'registration': { name: "Registration", description: "Learn why Joseph and Mary came to Bethlehem." },
        'carpenter': { name: "Carpenter's Workshop", description: "Meet the carpenter and his work." },
        'scribe': { name: "Scribe's Tent", description: "Discover the meaning of the name Jesus." },
        'well': { name: "Bethlehem Well", description: "Learn the importance of water." },
        'bakery': { name: "Bakery", description: "See how bread is baked." },
        'spice-market': { name: "Spice Market", description: "Explore the aroma of spices." },
        'wise-men': { name: "Wise Men", description: "Find out what gifts the wise men brought." },
        'stable': { name: "Stable", description: "Learn the story of Joseph and Mary." },
        'photo-zone': { name: "Photo Zone", description: "Take a memorable photo." }
    }
};


// Поточна мова
let currentLanguage = 'uk'; // За замовчуванням українська

// Функція для зміни мови
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка
    const title = document.getElementById('page-title');
    title.textContent = currentLanguage === 'uk' 
        ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
        : 'Interactive Map "Night in Bethlehem"';
}

// Відкриття модального вікна
function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const description = textData[currentLanguage][station]?.description || "Опис недоступний";

    // Додаємо зображення та опис у модальне вікно
    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = description;

    // Встановлюємо поточну станцію для кнопки "Пройдено"
    document.getElementById("modal").dataset.station = station;

    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station] ? "Зняти галочку" : "Пройдено";

    // Відображення модального вікна
    document.getElementById("modal").classList.add("show");
}

// Закриття модального вікна
function closeModal() {
    document.getElementById("modal").classList.remove("show");
}

// Перемикання статусу станції
let stationStatus = {};
function toggleCompletion() {
    const station = document.getElementById("modal").dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Змінюємо статус станції
    stationStatus[station] = !stationStatus[station];

    // Оновлення тексту кнопки в модальному вікні
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station] ? "Зняти галочку" : "Пройдено";

    // Оновлення вигляду кнопки станції
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }
}
