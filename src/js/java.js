const celdas = Array.from(document.getElementsByClassName("gatos")); 
const btnReset = document.getElementById("btnReset"); 
const msjGanador = document.getElementById("msjGanador");
const marcadorX = document.getElementById("contadorX");
const marcadorO = document.getElementById("contadorO");
let ganador = false;

const posGane = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], 
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], 
  [0, 4, 8],
  [2, 4, 6], 
];

function movihuman() {
  celdas.forEach((celda) => {
    celda.addEventListener("click", () => {
      if (celda.innerHTML === "" && !ganador) {
        celda.innerHTML = "X";
        detectarGanador();
        if (!ganador) {
          setTimeout(() => {
            movimachin();
          }, 500);
        }
      }
    });
  });
}

movihuman();

function movimachin() {
  const espacio = celdas.filter((celda) => {
    return celda.innerHTML === "";
  });

  if (espacio.length > 0) {
    const movi = Math.floor(Math.random() * espacio.length);
    espacio[movi].innerHTML = "O";
    detectarGanador();
  }
}


function restablecer() {
  celdas.forEach((celda) => {
    celda.innerHTML = "";
  });
  msjGanador.style.display = "none";
  ganador = false;
}

function detectarGanador() {
  for (const iteracion of posGane) {
    let [posA, posB, posC] = iteracion;
    if (
      celdas[posA].textContent &&
      celdas[posA].textContent === celdas[posB].textContent &&
      celdas[posA].textContent === celdas[posC].textContent
    ) {
      msjGanador.textContent = `El jugador ${celdas[posA].textContent} ganó`;
      msjGanador.style.display = "block";
      actualizarMarcador(celdas[posA].textContent);
      ganador = true;
    }
  }
}
let x = 0;
let o = 0;
function actualizarMarcador(ganador) {
  if (ganador === "X") {
    x++;
    marcadorX.innerHTML = x;
  } else if (ganador === "O") {
    o++;
    marcadorO.innerHTML = o;
  }
}

btnReset.addEventListener("click", restablecer);
