let i = 0;
const onWindowResized = () => {
    if (window.innerWidth <= 600) {
        changeDesign;
    }
}

const changeDesign = () => {
    const normalNav = document.querySelector("header .header__zonaNavegacion");
    const hambNav = document.querySelector("header .header__zonaNavegacionHamb");

    if (!normalNav.classList.contains("hidden")) {
        console.log("Mostrar nav hamburger");
        normalNav.classList.add("hidden");
        hambNav.classList.remove("hidden");
    }
    else {
        console.log("Mostrar nav normal");
        hambNav.classList.add("hidden");
        normalNav.classList.remove("hidden");
    }
}

window.onresize = onWindowResized;