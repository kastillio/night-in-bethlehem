const language = {
    uk: {
        title: "Ніч у Вифлеємі",
        missions: {
            stable: "Відвідайте ясла та знайдіть дари для Ісуса.",
            shepherds: "Зустріньте пастухів і дізнайтеся, що вони бачили.",
            market: "Знайдіть на ринку дари для Ісуса.",
            star: "Слідуйте за зіркою, щоб знайти місце народження Ісуса."
        }
    },
    en: {
        title: "Night in Bethlehem",
        missions: {
            stable: "Visit the stable and find gifts for Jesus.",
            shepherds: "Meet the shepherds and learn what they saw.",
            market: "Find gifts for Jesus at the market.",
            star: "Follow the star to find the birthplace of Jesus."
        }
    }
};

let currentLanguage = "uk";

document.getElementById("language-toggle").addEventListener("click", () => {
    currentLanguage = currentLanguage === "uk" ? "en" : "uk";
    updateLanguage();
});

function updateLanguage() {
    document.getElementById("title").textContent = language[currentLanguage].title;
}

function startMission(location) {
    const missionText = language[currentLanguage].missions[location];
    const modalImageSrc = `images/${location}.png`;

    document.getElementById("modal-image").src = modalImageSrc;
    document.getElementById("mission-text").textContent = missionText;
    document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
    document.getElementById("modal").classList.add("hidden");
}

updateLanguage();
