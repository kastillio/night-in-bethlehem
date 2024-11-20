const textData = {
    uk: {
        shepherds: { name: "Пастухи", description: "Дізнайтеся, що побачили пастухи тієї ночі." },
        registration: { name: "Реєстрація", description: "Дізнайтеся, чому Йосип і Марія прийшли до Віфлеєму." },
        // Додайте інші станції
    },
    en: {
        shepherds: { name: "Shepherds", description: "Find out what the shepherds saw that night." },
        registration: { name: "Registration", description: "Learn why Joseph and Mary traveled to Bethlehem." },
        // Add other stations
    }
};

let currentLanguage = 'uk';

function changeLanguage(lang) {
    currentLanguage = lang;

    document.querySelectorAll('.station-item').forEach(button => {
        const station = button.getAttribute('onclick').match(/'(.+)'/)[1];
        button.querySelector('.station-label').textContent = textData[currentLanguage][station].name;
    });

    const title = document.getElementById('page-title');
    title.textContent = currentLanguage === 'uk'
        ? 'Інтерактивна Карта "Ніч у Вифлеємі"'
        : 'Interactive Map "Night in Bethlehem"';
}

function openModal(station) {
    const modal = document.getElementById('modal');
    const img = document.getElementById('modal-image');
    const text = document.getElementById('modal-text');
    const completeButton = document.getElementById('complete-button');

    img.src = `images/${station}.png`;
    text.textContent = textData[currentLanguage][station].description;

    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    modal.classList.remove('hidden');
    modal.dataset.station = station;
}

function closeModal() {
    document.getElementById('modal').classList.add('hidden');
}

let stationStatus = {};

function toggleCompletion() {
    const modal = document.getElementById('modal');
    const station = modal.dataset.station;
    stationStatus[station] = !stationStatus[station];

    const completeButton = document.getElementById('complete-button');
    completeButton.textContent = stationStatus[station]
        ? (currentLanguage === 'uk' ? "Зняти галочку" : "Remove Mark")
        : (currentLanguage === 'uk' ? "Пройдено" : "Completed");

    const stationButton = document.querySelector(`.station-item[onclick="openModal('${station}')"]`);
    if (stationStatus[station]) {
        stationButton.classList.add('completed');
    } else {
        stationButton.classList.remove('completed');
    }
}
