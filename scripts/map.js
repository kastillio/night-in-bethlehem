const locations = {
    shepherds: {
        img: "images/shepherds.png",
        text: "Ви зустріли пастухів, які бачили ангела, що сповістив їм про народження Ісуса."
    },
    registration: {
        img: "images/registration.png",
        text: "Зареєструйтесь для участі у заході та отримайте свій сес-код."
    },
    carpenter: {
        img: "images/carpenter.png",
        text: "Цех тесляра, де ви можете побачити, як виготовляються дерев'яні вироби."
    },
    scribe: {
        img: "images/scribe.png",
        text: "Намет писаря, де ви можете написати послання для Ісуса."
    },
    well: {
        img: "images/well.png",
        text: "Вифлеємська криниця, де люди приходять набирати воду."
    },
    bakery: {
        img: "images/bakery.png",
        text: "Пекарня, де ви можете скуштувати свіжий хліб."
    },
    spices: {
        img: "images/spices.png",
        text: "Магазин спецій, наповнений ароматними травами та спеціями."
    },
    "wise-men": {
        img: "images/wise-men.png",
        text: "Мудреці, які прийшли поклонитися новонародженому цареві."
    },
    stable: {
        img: "images/stable.png",
        text: "Стайня, де народився Ісус."
    },
    "photo-zone": {
        img: "images/photo-zone.png",
        text: "Фотозона, де ви можете зробити пам'ятне фото."
    }
};

function openModal(location) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-image");
    const text = document.getElementById("modal-text");

    img.src = locations[location].img;
    text.textContent = locations[location].text;

    modal.classList.add("show");
    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    modal.classList.add("hidden");
}
