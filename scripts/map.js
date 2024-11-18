const descriptions = {
    shepherds: {
        img: "images/shepherds.png",
        text: "Що такого особливого побачили пастухи тієї ночі? Вони хочуть поділитися з вами дивовижною історією."
    },
    registration: {
        img: "images/registration.png",
        text: "Дізнайтеся, чому римські солдати зібралися тут. У вас є шанс стати частиною великої події!"
    },
    carpenter: {
        img: "images/carpenter.png",
        text: "Познайомтеся з другом Йосипа та дізнайтеся, яку важливу новину він несе цього вечора."
    },
    scribe: {
        img: "images/scribe.png",
        text: "Що записав писар у своїх сувоях? Зайдіть і дізнайтеся, які стародавні секрети він готовий розкрити вам."
    },
    well: {
        img: "images/well.png",
        text: "Що приховує криниця Вифлеєма? Місцеві жінки готові поділитися своїми історіями з вами."
    },
    bakery: {
        img: "images/bakery.png",
        text: "Відчуйте аромат свіжої випічки та дізнайтеся, чому цей хліб такий особливий."
    },
    spices: {
        img: "images/spices.png",
        text: "Запахи спецій перенесуть вас у далекі краї. Що ж особливого приховують ці аромати?"
    },
    "wise-men": {
        img: "images/wise-men.png",
        text: "Хто ці подорожні, що прийшли здалеку? Вони мають із собою дещо дуже важливе."
    },
    stable: {
        img: "images/stable.png",
        text: "Що відбувається всередині цієї скромної стайні? Зайдіть і дізнайтеся, хто народився тут цієї ночі."
    },
    "photo-zone": {
        img: "images/photo-zone.png",
        text: "Зробіть зупинку для пам'ятного фото. Хто знає, можливо, ви знайдете щось незвичайне у цьому місці."
    }
};

function openModal(location) {
    const modal = document.getElementById("modal");
    const img = document.getElementById("modal-image");
    const text = document.getElementById("modal-text");

    img.src = descriptions[location].img;
    text.textContent = descriptions[location].text;

    modal.classList.add("show");
    modal.classList.remove("hidden");
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.classList.remove("show");
    modal.classList.add("hidden");
}
