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
        'spinning-wheel': { name: "Spinning Wheel", description: "Learn how clothes were made in ancient times and choose a costume for the photo booth!" },
        'photo-zone': { name: "Photo Zone", description: "Take a picture to remember this special moment forever!" }
    }
};

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

// Функція для обробки відгуків
function handleFeedbackSubmission() {
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const feedback = feedbackTextarea.value.trim();

    if (feedback) {
        // Відображення повідомлення залежно від мови
        alert(currentLanguage === 'uk' ? 'Дякуємо за ваш відгук!' : 'Thank you for your feedback!');
        feedbackTextarea.value = ''; // Очищення текстового поля
    } else {
        alert(currentLanguage === 'uk' ? 'Будь ласка, напишіть свій відгук.' : 'Please write your feedback.');
    }
}

// Додати обробник до кнопки
document.getElementById('feedback-submit').addEventListener('click', handleFeedbackSubmission);

// Завантаження сторінки
window.onload = function () {
    updateFeedbackLanguage(); // Встановити мову за замовчуванням
};
