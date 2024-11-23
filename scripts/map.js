// Дані для різних мов
const textData = {
    uk: {
        'shepherds': { name: "Пастухи", description: "Пастухи були першими, хто почув Добру Новину. Дізнайтеся, чому Бог обрав саме їх!" },
        'registration': { name: "Реєстрація", description: "Дізнайтеся, чому Йосип і Марія поїхали до Вифлеєму." },
        'carpenter': { name: "Цех тесляра", description: "Які секрети приховує ремесло теслі?" },
        'scribe': { name: "Намет писаря", description: "Дізнайтеся, як писар записував історії тих часів." },
        'well': { name: "Вифлеємська криниця", description: "Чому вода була такою важливою для людей того часу?" },
        'bakery': { name: "Пекарня", description: "Як виготовляли хліб у давні часи?" },
        'spices': { name: "Магазин спецій", description: "Що могли розповісти спеції про людей?" },
        'wise-men': { name: "Мудреці", description: "Що мудреці принесли до Вифлеєму і чому це було важливо?" },
        'spinning-wheel': { name: "Прядильне колесо", description: "Дізнайтеся, як створювали одяг у стародавні часи, та виберіть костюм для фотозони!" },
        'photo-zone': { name: "Фотозона", description: "Зробіть фото, яке збереже цю мить!" }
    },
    en: {
        'shepherds': { name: "Shepherds", description: "Find out why God chose the shepherds to hear the Good News first!" },
        'registration': { name: "Registration", description: "Discover why Joseph and Mary traveled to Bethlehem." },
        'carpenter': { name: "Carpenter's Workshop", description: "What secrets does the carpenter's craft hold?" },
        'scribe': { name: "Scribe's Tent", description: "How did scribes record stories in ancient times?" },
        'well': { name: "Bethlehem Well", description: "Why was water so important for people of that time?" },
        'bakery': { name: "Bakery", description: "How was bread made in ancient times?" },
        'spices': { name: "Spice Market", description: "What could spices reveal about the people who used them?" },
        'wise-men': { name: "Wise Men", description: "What gifts did the Wise Men bring, and why were they significant?" },
        'spinning-wheel': { name: "spinning-wheel", description: "Children will learn how." },
        'photo-zone': { name: "Photo Zone", description: "Take a picture to remember this special moment forever!" } the spinning wheel was used in ancient times to make clothing
    }
};

// Глобальні змінні
let currentLanguage = 'uk'; // Поточна мова
let stationStatus = {}; // Статуси станцій

// Функція для зміни мови
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на кнопках станцій
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

    // Оновлення тексту у модальному вікні
    const modal = document.getElementById('modal');
    if (modal.classList.contains('show')) {
        updateModalText(modal.dataset.station);
    }
}

// Функція для відкриття модального вікна
function openModal(stationKey) {
    const station = stationData[stationKey]; // Отримуємо дані станції
    if (!station) return; // Якщо даних немає, виходимо

    // Оновлюємо модальне вікно
    document.getElementById("modal-image").src = station.image;
    document.getElementById("modal-text").innerText = station.description[currentLanguage];
    document.getElementById("modal-title").innerText = station.title[currentLanguage];
    document.getElementById("modal").classList.remove("hidden");
}


// Функція для закриття модального вікна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

const stationData = {
    spinningWheel: {
        title: {
            uk: "Прядильне колесо",
            en: "Spinning Wheel"
        },
        description: {
            uk: "Діти дізнаються, як використовували прядильне колесо у стародавні часи для виготовлення одягу.",
            en: "Children will learn how the spinning wheel was used in ancient times to make clothing."
        },
        image: "images/spinning-wheel.png"
    },
    // Інші станції...

    

// Оновлення тексту у модальному вікні
function updateModalText(station) {
    const description = textData[currentLanguage][station]?.description || "Опис недоступний";
    const imgSrc = `images/${station}.png`;

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = description;

    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");
}

// Функція для перемикання статусу станції
function toggleCompletion() {
    const modal = document.getElementById("modal");
    const station = modal.dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Змінюємо статус
    stationStatus[station] = !stationStatus[station];

    // Додаємо або видаляємо клас `completed`
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }

    // Оновлюємо текст у модальному вікні
    updateModalText(station);
}

// Закриття модального вікна при кліці на фон
document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target.id === "modal") {
        closeModal();
    }
});
