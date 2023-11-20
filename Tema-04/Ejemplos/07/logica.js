const cambiarDisenio = () => {
    const navNormal = document.querySelector("header .header__zonaNavegacion");
    const navHamb = document.querySelector("header .header__zonaNavegacionHamb");

    if (!navNormal.classList.contains("hidden")) {
        navNormal.classList.add("hidden");
        navHamb.classList.remove("hidden");
    }
};

const cambiarDisenio2 = () => {
    const navNormal = document.querySelector("header .header__zonaNavegacion");
    const navHamb = document.querySelector("header .header__zonaNavegacionHamb");

    if (navNormal.classList.contains("hidden")) {
        navHamb.classList.add("hidden");
        navNormal.classList.remove("hidden");
    }
};

window.onresize = () => {
    if (window.innerWidth <= 600) {
        cambiarDisenio();
    } else {
        cambiarDisenio2();
    }
};