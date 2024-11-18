let currentLanguage = "uk";

const textData = {
    uk: {
        title: 'Інтерактивна Карта "Ніч у Вифлеємі"',
        shepherds: "Зустріньте пастухів і почуйте їхню історію.",
        bakery: "Відвідайте пекарню і відчуйте аромат хліба.",
        "wise-men": "Зустріньте мудреців, які принесли подарунки."
    },
    en: {
        title: 'Interactive Map "Night in Bethlehem"',
        shepherds: "Meet the shepherds and hear their story.",
        bakery: "Visit the bakery and smell the bread.",
        "wise-men": "Meet the wise men who brought gifts."
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    document.getElementById("title").textContent = textData[currentLanguage].title;
}

function openModal(station) {
    const imageSrc = `images/${station}.png`;
    const text = textData[currentLanguage][station] || "No description available.";

    document.getElementById("modal-image").src = imageSrc;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("modal").style.display = "block";
}

function closeModal(event) {
    if (event.target.id === "modal" || event.target.id === "close-button") {
        document.getElementById("modal").style.display = "none";
    }
}
