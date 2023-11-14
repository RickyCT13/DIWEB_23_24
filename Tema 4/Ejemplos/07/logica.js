let i = 0;
const onWindowResized = () => {
    if (window.innerWidth <= 600) {
        changeDesign;
    }
}

const changeDesign = () => {
    const normalNav = document.querySelector("header .header__zonaNavegacion");
    const hambNav = document.querySelector("header .header__zonaNavegacionHamb");

    if (normalNav.getAttribute("hidden") === null) {
        console.log("Mostrar nav hamburger");
        normalNav.setAttribute("hidden", "true");
        normalNav.style.display = "none";
        hambNav.removeAttribute("hidden");
    }
    else {
        console.log("Mostrar nav normal");
        hambNav.setAttribute("hidden", "true");
        normalNav.removeAttribute("hidden");
    }
}

window.onresize = onWindowResized;