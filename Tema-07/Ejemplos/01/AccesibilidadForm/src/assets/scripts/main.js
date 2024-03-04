




function onIniciar() {
  console.log("Hola Mundo");

  // Script para cambiar la pestaña en el main
  const botonesTab = document.querySelectorAll(".listaBotones__botonTab");
  const bloquesTexto = document.querySelectorAll(".contenedorTexto__bloque");
  //console.log(botonesTab)

  // Recorremos la lista de botones para añadir un eventListener de click
  botonesTab.forEach((boton, i) => {
    //console.log(boton)

    // El evento consiste en quitar la clase activo a todos los botones
    // y acto seguido añadir la clase activo únicamente al que se le ha hecho click
    boton.addEventListener("click", () => {
      botonesTab.forEach((botonF, i) => {
        botonF.classList.remove("activo");
      });
      boton.classList.add("activo");
    });
  });
  
  //contenedorTexto.addEventListener("click", removeActivo);
}


window.onload = onIniciar();
