const d = document;
const $input = d.querySelector(".input");
const $cards = d.querySelectorAll(".card");
const $containerReferencia = d.querySelector(".container-cards");
const mensaje = d.createElement("h2");
mensaje.textContent = "País no encontrado ❌";
mensaje.style.fontSize = "4rem";
mensaje.style.display = "none";
$containerReferencia.appendChild(mensaje);

function filtroBusqueda(input, cards) {
  const filtro = input.value.toLowerCase();
  let coincidencias = 0;

  cards.forEach((card) => {
    const texto = card.textContent.toLowerCase();
    if (texto.includes(filtro)) {
      card.style.display = "";
      coincidencias++;
    } else {
      card.style.display = "none";
    }
  });

  if (coincidencias === 0) {
    mensaje.style.display = "";
  } else {
    mensaje.style.display = "none";
  }
}

d.addEventListener("DOMContentLoaded", (e) => {
  $input.addEventListener("keyup", () => {
    filtroBusqueda($input, $cards);
  });
});
