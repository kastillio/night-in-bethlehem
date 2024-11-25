const quizData = {
    uk: [
        {
            station: "shepherds",
            question: "Чому пастухи стали першими, хто почув Добру Новину?",
            options: ["Були поряд", "Були смиренними", "Знали ангелів", "Мали багато овець"],
            correct: 1
        },
        {
            station: "shepherds",
            question: "Що робили пастухи вночі, коли побачили ангелів?",
            options: ["Спали", "Пасли овець", "Молились", "Відпочивали"],
            correct: 1
        },
        {
            station: "registration",
            question: "Чому Йосип і Марія поїхали до Вифлеєму?",
            options: ["На весілля", "На перепис населення", "Зустрітися з родичами", "Для відпочинку"],
            correct: 1
        },
        {
            station: "registration",
            question: "Хто видав наказ про перепис населення?",
            options: ["Понтій Пилат", "Цезар Август", "Ірод", "Петро"],
            correct: 1
        },
        {
            station: "carpenter",
            question: "Які інструменти використовували теслі у стародавні часи?",
            options: ["Гвинти", "Молоток і пилу", "Електродриль", "Лазерний рівень"],
            correct: 1
        },
        {
            station: "carpenter",
            question: "Який матеріал був основним для теслярів?",
            options: ["Метал", "Камінь", "Дерево", "Глина"],
            correct: 2
        },
        {
            station: "scribe",
            question: "Що писарі використовували для написання текстів?",
            options: ["Друкарську машинку", "Гусяче перо", "Книги", "Олівець"],
            correct: 1
        },
        {
            station: "scribe",
            question: "На чому писали писарі в ті часи?",
            options: ["Папір", "Папірус", "Пергамент", "Дерево"],
            correct: 1
        },
        {
            station: "well",
            question: "Чому вода була такою важливою для людей того часу?",
            options: ["Для поливу рослин", "Для приготування їжі", "Для пиття", "Все вище перелічене"],
            correct: 3
        },
        {
            station: "well",
            question: "Як люди здобували воду з криниці?",
            options: ["Використовували відра", "За допомогою помпи", "Лазили в криницю", "Дивом"],
            correct: 0
        },
        {
            station: "bakery",
            question: "Який був основний інгредієнт для виготовлення хліба?",
            options: ["Борошно", "Цукор", "Олія", "Вода"],
            correct: 0
        },
        {
            station: "bakery",
            question: "Який вид хліба був популярний у давнину?",
            options: ["Білий хліб", "Бездріжджовий хліб", "Цільнозерновий хліб", "Солодкий хліб"],
            correct: 1
        },
        {
            station: "spices",
            question: "Яка спеція була найдорожчою в давні часи?",
            options: ["Кориця", "Шафран", "Чорний перець", "Кардамон"],
            correct: 1
        },
        {
            station: "spices",
            question: "Для чого використовували спеції?",
            options: ["Приготування їжі", "Лікування", "Як прикраси", "Все вище перелічене"],
            correct: 3
        },
        {
            station: "wise-men",
            question: "Що мудреці принесли до Ісуса?",
            options: ["Золото, ладан, смирну", "Срібло, олію, хліб", "Тканини, гроші, прикраси", "Спеції, олію, срібло"],
            correct: 0
        },
        {
            station: "wise-men",
            question: "Скільки мудреців прийшло до Ісуса?",
            options: ["Троє", "Четверо", "Невідомо", "П'ятеро"],
            correct: 2
        },
        {
            station: "spinning-wheel",
            question: "Що виробляли за допомогою прядильного колеса?",
            options: ["Тканини", "Килими", "Одяг", "Прядива"],
            correct: 2
        },
        {
            station: "spinning-wheel",
            question: "З чого виготовляли нитки?",
            options: ["Бавовна", "Льон", "Шерсть", "Все вище перелічене"],
            correct: 3
        },
        {
            station: "photo-zone",
            question: "Який одяг популярний у фотозоні?",
            options: ["Давній одяг", "Сучасний костюм", "Капелюхи", "Футболки"],
            correct: 0
        },
        {
            station: "photo-zone",
            question: "Який фон використовується для фотозони?",
            options: ["Нічне небо", "Криниця", "Пустеля", "Храм"],
            correct: 0
        }
    ],
    en: [
        // Translation of above questions into English
    ]
};

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
// Збереження відгуку у LocalStorage
document.getElementById('feedback-submit').addEventListener('click', function () {
    const feedbackTextarea = document.getElementById('feedback-textarea');
    const feedback = feedbackTextarea.value.trim();

    if (feedback) {
        // Отримуємо існуючі відгуки з LocalStorage
        let feedbacks = JSON.parse(localStorage.getItem('feedbacks')) || [];
        
        // Додаємо новий відгук
        feedbacks.push(feedback);
        
        // Зберігаємо оновлений список у LocalStorage
        localStorage.setItem('feedbacks', JSON.stringify(feedbacks));
        
        // Повідомлення про успіх
        alert(currentLanguage === 'uk' ? 'Дякуємо за ваш відгук!' : 'Thank you for your feedback!');
        
        // Очищення текстового поля
        feedbackTextarea.value = '';
    } else {
        alert(currentLanguage === 'uk' ? 'Будь ласка, напишіть свій відгук.' : 'Please write your feedback.');
    }
});
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
// Функція для запуску вікторини
let currentQuestionIndex = 0; // Змінна для поточного питання
let currentStation = null; // Станція, до якої належить вікторина

function showQuizModal(station) {
    currentStation = station; // Встановлюємо станцію
    currentQuestionIndex = 0; // Починаємо з першого питання
    const quizModal = document.getElementById("quiz-modal");
    quizModal.classList.remove("hidden"); // Показуємо модальне вікно
    loadQuestion(); // Завантажуємо перше питання
}
// Функція для завантаження питання
function loadQuestion() {
    const quizQuestionElement = document.getElementById("quiz-question"); // Блок питання
    const quizOptionsElement = document.getElementById("quiz-options"); // Блок варіантів відповідей
    const language = currentLanguage; // Поточна мова (uk або en)

    // Фільтруємо питання для обраної станції
    const questions = quizData[language].filter(q => q.station === currentStation);
    const currentQuestion = questions[currentQuestionIndex]; // Беремо поточне питання

    // Оновлюємо текст питання
    quizQuestionElement.textContent = currentQuestion.question;

    // Очищаємо попередні варіанти відповідей
    quizOptionsElement.innerHTML = "";

    // Додаємо нові варіанти відповідей
    currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("quiz-option");
        button.onclick = () => checkAnswer(index); // Перевіряємо відповідь
        quizOptionsElement.appendChild(button); // Додаємо кнопку до DOM
    });
}
// Функція для перевірки відповіді
function checkAnswer(selectedIndex) {
    const questions = quizData[currentLanguage].filter(q => q.station === currentStation);
    const currentQuestion = questions[currentQuestionIndex];

    // Перевіряємо, чи правильна відповідь
    if (selectedIndex === currentQuestion.correct) {
        alert(currentLanguage === "uk" ? "Правильно!" : "Correct!");
    } else {
        alert(currentLanguage === "uk" ? "Неправильно, спробуйте ще раз!" : "Wrong, try again!");
    }

    // Завантажуємо наступне питання або завершуємо вікторину
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion(); // Наступне питання
    } else {
        closeQuizModal(); // Закриваємо модальне вікно
        alert(currentLanguage === "uk" ? "Вікторина завершена!" : "Quiz completed!");
    }
}
// Функція для закриття модального вікна вікторини
function closeQuizModal() {
    const quizModal = document.getElementById("quiz-modal");
    quizModal.classList.add("hidden"); // Ховаємо модальне вікно
}
