var experiences = [
    {
        imgSrc: "static/experience_1.png",
        offers: {
            hasWine: true,
            hasFood: false,
            hasNature: false,
        },
        title: "3 wines experience",
        timeAmount: 60,
        description: "Degustazione di tre vini al Rifugio del Vino e visita alla cantina e alla cantina.",
        price: {
            amount: 25,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_2.png",
        offers: {
            hasWine: true,
            hasFood: true,
            hasNature: false,
        },
        title: "5 wines experience",
        timeAmount: 90,
        description: "Degustazione di 5 vini del territorio presso il rifugio dei vini in cantina e barricaia",
        price: {
            amount: 34,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_3.png",
        offers: {
            hasWine: true,
            hasFood: false,
            hasNature: false,
        },
        title: "Wine and cheese experience",
        timeAmount: 90,
        description: "Degustazione di 5 vini selezionati in abbinamento a 6 formaggi locali e visita alla cantina e barricaia",
        price: {
            amount: 45,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_4.png",
        offers: {
            hasWine: true,
            hasFood: true,
            hasNature: false,
        },
        title: "Top wines experience",
        timeAmount: 100,
        description: "Degustazione di 5 vini di ala qualità accompagnati da un tagliere della gastronomia locale e visita alla cantina e barricaia",
        price: {
            amount: 65,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_5.png",
        offers: {
            hasWine: true,
            hasFood: true,
            hasNature: false,
        },
        title: "CÔteau la tour experience",
        timeAmount: 120,
        description: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
        price: {
            amount: 75,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_6.png",
        offers: {
            hasWine: true,
            hasFood: true,
            hasNature: false,
        },
        title: "Winemaker's experience",
        timeAmount: 100,
        description: "Scopri il mondo, raccontato dal nostro enologo Rafaele, dai vigneti alla cantina.",
        price: {
            amount: 90,
            isFixed: true,
            isIvaIncluded: true,
        },
    },
    {
        imgSrc: "static/experience_7.png",
        offers: {
            hasWine: true,
            hasFood: true,
            hasNature: true,
        },
        title: "CÔteau la tour experience",
        timeAmount: 90,
        description: "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
        price: {
            amount: 346,
            isFixed: false,
            isIvaIncluded: true,
        },
    },
];
var experiencesContainer = document.querySelector(".experiences");
experiences.forEach(function (experience) {
    var div = document.createElement("div");
    div.classList.add("experience--card");
    div.innerHTML = "\n                    <img\n                        src=".concat(experience.imgSrc, "\n                        alt=\"experience-img\"\n                    />\n                    <div class=\"content\">\n                        <div class=\"offers\">\n                            ").concat(experience.offers.hasWine
        ? '<i class="fa-solid fa-wine-glass-empty"></i>'
        : "", "\n                            ").concat(experience.offers.hasFood
        ? '<i class="fa-solid fa-utensils"></i>'
        : "", "\n                            ").concat(experience.offers.hasNature
        ? '<i class="fa-solid fa-leaf"></i>'
        : "", "\n                                <i class=\"fa-solid fa-clock\"></i><span>").concat(experience.timeAmount, "'</span>\n                        </div>\n                        <h3 class=\"title\">").concat(experience.title, "</h3>\n                        <hr />\n                        <p class=\"description\">").concat(experience.description, "</p>\n                        <div class=\"price\">\n                            <span class=\"price-label\">prezzo</span>\n                            <div class=\"amount-section\">\n                                ").concat(experience.price.isFixed
        ? "<span class=\"amount\">\u20AC".concat(experience.price.amount, " a persona</span>")
        : "<span class=\"amount\">A partire da \u20AC".concat(experience.price.amount, "</span>"), "\n                                ").concat(experience.price.isIvaIncluded &&
        '<div class="iva">IVA INCLUSA</div>', "\n                            </div>\n                        </div>\n                        <div class=\"details\">\n                            Dettagli <i class=\"fa-solid fa-arrow-right\"></i>\n                        </div>\n                    </div>\n    ");
    experiencesContainer.appendChild(div);
});
