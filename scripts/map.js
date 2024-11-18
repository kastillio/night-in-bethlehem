let currentLanguage = "uk";

const descriptions = {
    uk: {
        shepherds: "Зустріньте пастухів, які першими дізналися про чудо. Що ж вони побачили тієї ночі?",
        registration: "Дізнайтеся про перепис, який змінив життя багатьох. Чому всі мали зареєструватися у Вифлеємі?",
        carpenter: "Загляньте до тесляра та дізнайтеся про його ремесло. Що ж він створює своїми руками?",
        scribe: "Відвідайте писаря, який зберігає важливі записи. Яка таємниця захована в його книгах?",
        well: "Випийте води з відомої криниці. Чому ця вода така особлива?",
        bakery: "Відчуйте аромат свіжоспеченого хліба. Який секрет ховається у кожній булочці?",
        spices: "Загляньте у світ ароматів і спецій. Що за екзотичні запахи наповнюють цей магазин?",
        "wise-men": "Зустріньте мудреців, які прийшли здалеку з подарунками. Що вони принесли із собою?",
        stable: "Відвідайте скромну стайню, де сталося диво. Хто ж народився цієї ночі?",
        "photo-zone": "Зробіть фото на згадку про цю особливу ніч. Який спогад залишиться з вами?"
    },
    en: {
        shepherds: "Meet the shepherds who were the first to witness a miracle. What did they see that night?",
        registration: "Learn about the census that changed the lives of many. Why did everyone have to register in Bethlehem?",
        carpenter: "Step into the carpenter's workshop and see his craft. What is he building with his skilled hands?",
        scribe: "Visit the scribe who keeps important records. What secret is hidden in his books?",
        well: "Take a sip from the famous well. Why is this water so special?",
        bakery: "Smell the fresh bread baking in the oven. What secret ingredient makes it so delicious?",
        spices: "Explore the world of exotic spices and aromas. What mysterious scents fill the air here?",
        "wise-men": "Meet the wise men who traveled from afar with gifts. What treasures did they bring?",
        stable: "Step into the humble stable where a miracle happened. Who was born here that night?",
        "photo-zone": "Capture a memory of this special night. What moment will you remember forever?"
    }
};

function switchLanguage(lang) {
    currentLanguage = lang;
    updateText();
}

function updateText() {
    document.getElementById("title").textContent = descriptions[currentLanguage].title;
    document.querySelectorAll(".location-button").forEach(button => {
        const id = button.getAttribute("onclick").match(/'([\w-]+)'/)[1];
        button.textContent = descriptions[currentLanguage][id] || id;
    });
}

function openModal(station) {
    const imgSrc = `images/${station}.png`;
    const text = descriptions[currentLanguage][station] || "Description not available.";

    document.getElementById("modal-image").src = imgSrc;
    document.getElementById("modal-text").textContent = text;
    document.getElementById("modal").classList.add("show");
}

function closeModal(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal || event.target.id === "close-modal") {
        modal.classList.remove("show");
    }
}

document.addEventListener("DOMContentLoaded", updateText);
