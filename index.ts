type Experience = {
    imgSrc: string;
    title: string;
    offers: {
        hasWine: boolean;
        hasFood: boolean;
        hasNature: boolean;
    };
    timeAmount: number;
    description: string;
    price: {
        amount: number;
        isFixed: boolean;
        isIvaIncluded: boolean;
    };
};

const experiences: Experience[] = [
    {
        imgSrc: "static/experience_1.png",
        offers: {
            hasWine: true,
            hasFood: false,
            hasNature: false,
        },
        title: "3 wines experience",
        timeAmount: 60,
        description:
            "Degustazione di tre vini al Rifugio del Vino e visita alla cantina e alla cantina.",
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
        description:
            "Degustazione di 5 vini del territorio presso il rifugio dei vini in cantina e barricaia",
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
        description:
            "Degustazione di 5 vini selezionati in abbinamento a 6 formaggi locali e visita alla cantina e barricaia",
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
        description:
            "Degustazione di 5 vini di ala qualità accompagnati da un tagliere della gastronomia locale e visita alla cantina e barricaia",
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
        description:
            "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
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
        description:
            "Scopri il mondo, raccontato dal nostro enologo Rafaele, dai vigneti alla cantina.",
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
        description:
            "Degustazione di 5 vini accompagnati da un tagliere della gastronomia locale e visita in cantina e barricaia. Tour del vigneto di Côteau e brindisi nella torre medievale",
        price: {
            amount: 346,
            isFixed: false,
            isIvaIncluded: true,
        },
    },
];

const experiencesContainer = document.querySelector(
    ".experiences"
) as HTMLElement;

experiences.forEach((experience) => {
    const div = document.createElement("div");
    div.classList.add("experience--card")
    div.innerHTML = `
        <img
            src=${experience.imgSrc}
            alt="experience-img"
        />
        <div class="content">
            <div class="offers">
                ${
                    experience.offers.hasWine
                        ? '<i class="fa-solid fa-wine-glass-empty"></i>'
                        : ""
                }
                ${
                    experience.offers.hasFood
                        ? '<i class="fa-solid fa-utensils"></i>'
                        : ""
                }
                ${
                    experience.offers.hasNature
                        ? '<i class="fa-solid fa-leaf"></i>'
                        : ""
                }
                    <i class="fa-solid fa-clock"></i><span>${
                        experience.timeAmount
                    }\'</span>
            </div>
            <h3 class="title">${experience.title}</h3>
            <hr />
            <p class="description">${experience.description}</p>
            <div class="price">
                <span class="price-label">prezzo</span>
                <div class="amount-section">
                    ${
                        experience.price.isFixed
                            ? `<span class="amount">€${experience.price.amount} a persona</span>`
                            : `<span class="amount">A partire da €${experience.price.amount}</span>`
                    }
                    ${
                        experience.price.isIvaIncluded &&
                        '<div class="iva">IVA INCLUSA</div>'
                    }
                </div>
            </div>
            <div class="details">
                Dettagli <i class="fa-solid fa-arrow-right"></i>
            </div>
        </div>
    `;
    experiencesContainer.appendChild(div);
});
