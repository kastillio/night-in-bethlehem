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
        'spinning-wheel': { name: " Spinning Wheel", description: "Learn how clothes were made in ancient times and choose a costume for the photo booth!" },
        'photo-zone': { name: "Photo Zone", description: "Take a picture to remember this special moment forever!" }
    }
};

// Глобальні змінні
let currentLanguage = 'uk'; // Поточна мова
let stationStatus = {}; // Статуси станцій


function showQuestion() {
    const question = prompt("Чому пастухи стали першими, хто почув Добру Новину?");
    if (question.toLowerCase().includes("бог")) {
        alert("Правильно! Пастухи були обрані Богом за їхню простоту та віру.");
    } else {
        alert("Спробуй ще раз!");
    }
}

// Функція для зміни мови
function changeLanguage(lang) {
    currentLanguage = lang;
function updateFeedbackLanguage() {
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const feedbackSubmit = document.getElementById('feedback-submit');

    if (currentLanguage === 'uk') {
        feedbackTitle.textContent = 'Залиште ваш відгук:';
        feedbackTextarea.placeholder = 'Напишіть свій відгук тут...';
        feedbackSubmit.textContent = 'Відправити';
    } else if (currentLanguage === 'en') {
        feedbackTitle.textContent = 'Leave your feedback:';
        feedbackTextarea.placeholder = 'Write your feedback here...';
        feedbackSubmit.textContent = 'Submit';
    }
}
// Інші функції, наприклад, changeLanguage, openModal

// Обробник для кнопки Submit
document.getElementById('feedback-submit').addEventListener('click', function () {
    const feedbackTextarea = document.getElementById('feedback-textarea'); // Отримуємо текстове поле
    const feedback = feedbackTextarea.value.trim(); // Отримуємо текст

    if (feedback) {
        // Відображення повідомлення успіху
        alert(currentLanguage === 'uk' ? 'Дякуємо за ваш відгук!' : 'Thank you for your feedback!');
        feedbackTextarea.value = ''; // Очищуємо поле після успішного відправлення
    } else {
        // Якщо текстове поле порожнє, відобразити помилку
        alert(currentLanguage === 'uk' ? 'Будь ласка, напишіть свій відгук.' : 'Please write your feedback.');
    }
});


// Інші функції, наприклад, виклики showQuizModal, showFeedbackModal

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

    // Оновлення тексту у відгуках
    updateFeedbackLanguage();
}


// Функція для відкриття модального вікна
function openModal(station) {
    const modal = document.getElementById("modal");
    modal.dataset.station = station;

    // Оновлення тексту та зображення у модальному вікні
    updateModalText(station);

    // Відображення модального вікна
    modal.classList.add("show");
}

// Функція для закриття модального вікна
function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
}

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
// Завантаження відгуків із LocalStorage
function loadFeedbackFromLocalStorage() {
    const storedData = localStorage.getItem("feedbackData");
    if (storedData) {
        feedbackData = JSON.parse(storedData);
    }
}

// Збереження відгуків у LocalStorage
function saveFeedbackToLocalStorage() {
    localStorage.setItem("feedbackData", JSON.stringify(feedbackData));
}

// Викликаємо завантаження відгуків при старті сторінки
window.onload = () => {
    loadFeedbackFromLocalStorage();
};

function submitFeedback() {
    const feedback = document.getElementById("feedback").value;
    if (feedback) {
        alert("Дякуємо за ваш відгук!");
    } else {
        alert("Будь ласка, залиште коментар.");
    }
}

// Функція для перемикання статусу станції
function toggleCompletion() {
    const modal = document.getElementById("modal");
    const station = modal.dataset.station;
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    stationStatus[station] = !stationStatus[station];

    // Оновлення статусу кнопки
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }

    // Оновлення тексту у модальному вікні
    updateModalText(station);
}


// Закриття модального вікна при кліці на фон
document.getElementById("modal").addEventListener("click", (event) => {
    if (event.target.id === "modal") {
        closeModal();
    }
});
