const textData = {
    uk: {
        'shepherds': { name: "Пастухи", description: "Пастухи були першими, хто почув Добру Новину. Вони розкажуть вам, що саме вони побачили на зоряному небі тієї дивовижної ночі, коли народилося диво. Дізнайтеся, чому Бог обрав саме їх!" },
        'registration': { name: "Реєстрація", description: "Відвідайте реєстрацію перепису населення та дізнайтеся, чому Йосип і Марія поїхали до Віфлеєму. Що було унікального в цьому переписі?" },
        'carpenter': { name: "Цех тесляра", description: "Знайомтеся з майстром, який працює з деревом. Які секрети приховує його ремесло?" },
        'scribe': { name: "Намет писаря", description: "Дізнайтеся, як писар записував історії тих часів. Чим вони відрізнялися від сучасного письма?" },
        'well': { name: "Вифлеємська криниця", description: "Спробуйте свіжу воду з криниці. Дізнайтеся, чому вода була такою важливою для людей того часу!" },
        'bakery': { name: "Пекарня", description: "Побачте, як випікають хліб.Відчуйте аромат свіжоспеченого хліба. Як виготовляли хліб у давні часи, і чому це було так важливо?" },
        'spices': { name: "Магазин спецій", description: "Пориньте у світ запахів і смаків. Що могли розповісти спеції про людей, які ними користувалися?" },
        'wise-men': { name: "Мудреці", description: "Зустріньте мудреців, які прийшли здалеку. Що вони принесли та чому це було важливо?" },
        'stable': { name: "Стайня", description: "Дізнайтеся, як виглядало місце, де народилося Дитя. Чому саме стайня стала колискою для Ісуса" },
        'photo-zone': { name: "Фотозона", description: "Зробіть фото, яке збереже цю особливу мить у вашій пам’яті!" }
    },
    en: {
        'shepherds': { name: "Shepherds", description: "The shepherds were the first to hear the Good News. Find out what they saw in the sky that special night and why God chose them!" },
        'registration': { name: "Registration", description: "Visit the census registration and discover why Joseph and Mary traveled to Bethlehem. What was unique about this census?" },
        'carpenter': { name: "Carpenter's Workshop", description: "Meet the craftsman who works with wood. What secrets does his craft hold?" },
        'scribe': { name: "Scribe's Tent", description: "Discover the meaning of the name Jesus.Learn how the scribe recorded stories of the time. How was it different from modern writing?" },
        'well': { name: "Bethlehem Well", description: "Taste the fresh water from the well. Why was water so important for the people of that time?" },
        'bakery': { name: "Bakery", description: "Smell the aroma of freshly baked bread. How was bread made in ancient times, and why was it so essential?" },
        'spices': { name: "Spice Market", description: "Dive into the world of scents and flavors. What could spices reveal about the people who used them?" },
        'wise-men': { name: "Wise Men", description: "Meet the wise men who traveled from afar. What gifts did they bring, and why were they significant?" },
        'stable': { name: "Stable", description: "Discover what the place looked like where the Child was born. Why did a stable become the cradle of the miracle?" },
        'photo-zone': { name: "Photo Zone", description: "Take a picture that will capture this special moment forever!" }
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
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка сторінки
    const title = document.getElementById('camp-title'); // Замінено ID на "camp-title"
    title.textContent = currentLanguage === 'uk' 
        ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
        : 'Interactive Map "Night in Bethlehem"';

    // Оновлення тексту кнопки у модальному вікні ("Пройдено"/"Зняти галочку")
    const modal = document.getElementById('modal');
    const completeButton = document.getElementById('complete-button');

    if (modal.classList.contains('show')) {
        const station = modal.dataset.station;
        const description = textData[currentLanguage][station]?.description || "Description unavailable";
        document.getElementById("modal-text").textContent = description;

        // Оновлення тексту кнопки "Пройдено"/"Зняти галочку"
        completeButton.textContent = stationStatus[station]
            ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
            : (currentLanguage === 'uk' ? "Пройдено" : "Completed");
    }
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
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка сторінки
    const title = document.getElementById('camp-title'); // Заголовок сторінки
    title.textContent = currentLanguage === 'uk' 
        ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
        : 'Interactive Map "Night in Bethlehem"';

    // Якщо модальне вікно відкрите, оновити текст кнопки "Пройдено"
    const modal = document.getElementById('modal');
    const completeButton = document.getElementById('complete-button');

    if (modal.classList.contains('show')) {
        const station = modal.dataset.station;
        const description = textData[currentLanguage][station]?.description || "Description unavailable";
        document.getElementById("modal-text").textContent = description;

        completeButton.textContent = stationStatus[station]
            ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
            : (currentLanguage === 'uk' ? "Пройдено" : "Completed");
    }
}
function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const description = textData[currentLanguage][station]?.description || "Опис недоступний";

    // Додаємо зображення та опис у модальне вікно
    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = description;

    // Встановлюємо поточну станцію для кнопки "Пройдено"
    document.getElementById("modal").dataset.station = station;

    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    // Відображення модального вікна
    document.getElementById("modal").classList.add("show");
}
function toggleCompletion() {
    const station = document.getElementById("modal").dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Змінюємо статус станції
    stationStatus[station] = !stationStatus[station];

    // Оновлення тексту кнопки в модальному вікні
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    // Оновлення вигляду кнопки станції
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }
}

// Перемикання статусу станції
let stationStatus = {};
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка сторінки
    const title = document.getElementById('camp-title');
    title.textContent = currentLanguage === 'uk' 
        ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
        : 'Interactive Map "Night in Bethlehem"';

    // Якщо модальне вікно відкрите, оновити текст кнопки "Пройдено"/"Completed"
    const modal = document.getElementById('modal');
    if (modal.classList.contains('show')) {
        const station = modal.dataset.station;
        const completeButton = document.getElementById("complete-button");
        completeButton.textContent = stationStatus[station]
            ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
            : (currentLanguage === 'uk' ? "Пройдено" : "Completed");
    }
}
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка сторінки
    const titleContainer = document.getElementById('page-title-container');
    const imageElement = titleContainer.querySelector('img');

    if (imageElement) {
        // Якщо є картинка, не змінювати її
        imageElement.alt = currentLanguage === 'uk' 
            ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
            : 'Interactive Map "Night in Bethlehem"';
    } else {
        // Якщо картинки немає, змінюємо текст
        const title = document.getElementById('page-title');
        title.textContent = currentLanguage === 'uk' 
            ? 'Інтерактивна Карта "Ніч у Вифлеємі"' 
            : 'Interactive Map "Night in Bethlehem"';
    }
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        const stationText = textData[currentLanguage][station]?.name || "Unknown";
        button.querySelector('.station-label').textContent = stationText;
    });

    // Оновлення заголовка сторінки
    const title = document.getElementById('camp-title'); // Перевірте, що ID вашого заголовка 'camp-title'
    if (currentLanguage === 'uk') {
        title.textContent = 'Інтерактивна Карта "Ніч у Вифлеємі"';
    } else if (currentLanguage === 'en') {
        title.textContent = 'Interactive Map "Night in Bethlehem"';
    }
}

    // Оновлення тексту кнопки в модальному вікні
    const modal = document.getElementById('modal');
    const completeButton = document.getElementById('complete-button');
    if (modal.classList.contains('show')) {
        const station = modal.dataset.station;
        const description = textData[currentLanguage][station]?.description || "Description unavailable";
        document.getElementById("modal-text").textContent = description;

        completeButton.textContent = stationStatus[station]
            ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
            : (currentLanguage === 'uk' ? "Пройдено" : "Completed");
    }
}

function toggleCompletion() {
    const station = document.getElementById("modal").dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Змінюємо статус станції
    stationStatus[station] = !stationStatus[station];

    // Оновлення тексту кнопки в модальному вікні
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    // Оновлення вигляду кнопки станції
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }
}

