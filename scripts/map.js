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
        'photo-zone': { name: "Фотозона", description: "Зробіть фото, яке збереже цю мить!" },
        'feedback-title': "Залиште ваш відгук:",
        'feedback-placeholder': "Напишіть свій відгук тут...",
        'feedback-submit': "Відправити",
        'feedback-success': "Дякуємо за ваш відгук!",
        'feedback-empty': "Будь ласка, напишіть свій відгук."
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
        'spinning-wheel': { name: "Spinning Wheel", description: "Learn how clothes were made in ancient times and choose a costume for the photo booth!" },
        'photo-zone': { name: "Photo Zone", description: "Take a picture to remember this special moment forever!" },
        'feedback-title': "Leave your feedback:",
        'feedback-placeholder': "Write your feedback here...",
        'feedback-submit': "Submit",
        'feedback-success': "Thank you for your feedback!",
        'feedback-empty': "Please write your feedback."
    }
};
// Зберігає статус кожної станції (пройдено/непройдено)
let stationStatus = {};

// Глобальні змінні
let currentLanguage = 'uk'; // Поточна мова

// Функція для зміни мови
function changeLanguage(lang) {
    currentLanguage = lang;

    // Оновлення текстів на станціях
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

// Оновлення текстів у відгуках
function updateFeedbackLanguage() {
    const feedbackTitle = document.getElementById('feedback-title');
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const feedbackSubmit = document.getElementById('feedback-submit');

    feedbackTitle.textContent = textData[currentLanguage]['feedback-title'];
    feedbackTextarea.placeholder = textData[currentLanguage]['feedback-placeholder'];
    feedbackSubmit.textContent = textData[currentLanguage]['feedback-submit'];
}

// Функція для обробки відгуків
function handleFeedbackSubmission() {
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const feedback = feedbackTextarea.value.trim();

    if (feedback) {
        // Відображення повідомлення залежно від мови
        alert(textData[currentLanguage]['feedback-success']);
        feedbackTextarea.value = ''; // Очищення текстового поля
    } else {
        alert(textData[currentLanguage]['feedback-empty']);
    }
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
// Функція для перемикання статусу станції (пройдено/не пройдено)
function toggleCompletion() {
    const modal = document.getElementById("modal");
    const station = modal.dataset.station; // Отримуємо поточну станцію
    const button = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);

    // Перемикаємо статус станції
    stationStatus[station] = !stationStatus[station];

    // Оновлюємо текст на кнопці у модальному вікні
    const completeButton = document.getElementById("complete-button");
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    // Оновлюємо клас кнопки станції (наприклад, додаємо/знімаємо клас "completed")
    if (stationStatus[station]) {
        button.classList.add("completed");
    } else {
        button.classList.remove("completed");
    }
}
// Функція для перегляду всіх відгуків
function displayFeedbacks() {
    const feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
    console.log('Feedbacks:', feedbacks);
    alert(feedbacks.join('\n')); // Виводить усі відгуки через алерт
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

// Додати обробник до кнопки
document.getElementById('feedback-submit').addEventListener('click', handleFeedbackSubmission);

// Завантаження сторінки
window.onload = function () {
    updateFeedbackLanguage(); // Встановити мову за замовчуванням
};
