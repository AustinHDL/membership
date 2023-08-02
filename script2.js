const cards = {
    farley: {
        link: document.getElementById("card-farley-link"),
        info: document.getElementById("card-farley"),
    },
    farley2: {
        link: document.getElementById("card-farley2-link"),
        info: document.getElementById("card-farley2"),
    },
    singkwong: {
        link: document.getElementById("card-singkwong-link"),
        info: document.getElementById("card-singkwong"),
    },
    ccl: {
        link: document.getElementById("card-ccl-link"),
        info: document.getElementById("card-ccl"),
    },
    doremart: {
        link: document.getElementById("card-doremart-link"),
        info: document.getElementById("card-doremart"),
    },
    everwin: {
        link: document.getElementById("card-everwin-link"),
        info: document.getElementById("card-everwin"),
    },
    ekoway: {
        link: document.getElementById("card-ekoway-link"),
        info: document.getElementById("card-ekoway"),
    },
};

const closebutton = document.getElementById("popup-close");
const popup = document.getElementById("popup");
const htmlTag = document.documentElement;

function showCardInfo(infoElement) {
    for (const card of Object.values(cards)) {
        card.info.style.display = "none";
    }
    infoElement.style.display = "block";
}

for (const card of Object.values(cards)) {
    card.link.addEventListener("click", function() {
        popup.classList.add("open");
        htmlTag.classList.add("popup-open");
        showCardInfo(card.info);
    });
}

closebutton.addEventListener("click", function() {
    popup.classList.remove("open");
    htmlTag.classList.remove("popup-open");
});

popup.addEventListener("click", function(event) {
    if (event.target === this) {
        popup.classList.remove("open");
        htmlTag.classList.remove("popup-open");
    }
});