const celdas = Array.from(document.getElementsByClassName("gatos")); // Declaramos la variable que va a tener guardaada TODAS las casillas. Se convierte en arreglo con el Array.from()
const btnReset = document.getElementById("btnReset"); // Botón de reinicio
const msjGanador = document.getElementById("msjGanador");
const marcadorX = document.getElementById("marcadorX");
const marcadorO = document.getElementById("marcadorO");
let marcador = 0


/*
 moviguman
 Se recorren las celdas una por una, dando la funcionalidad del click. 
 Para cuando las toque, se marque la "X"
 Luego de haber marcado la "X", se ejecuta la función de aleaotrio
 */
const posGane = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8], // H
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8], // V
  [0, 4, 8],
  [2, 4, 6], // D
];

function movihuman() {
  celdas.forEach((celda) => {
    celda.addEventListener("click", () => {
      if (celda.innerHTML == "") {
        celda.innerHTML = "X";
        setTimeout(() => {
          movimachin();
        }, 500);
        detectarGanador();
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
/*
movimachin, se filtran las casillas vacías, para obtener las jugadas posibles de "O"
luego, se valida si esas posibilidades son > (mayor) a 0 y se hace el aleatorio con
 esa cantidad de jugadas posibles, y se coloca el O en esa posición
*/

function restablecer() {
  celdas.forEach((celda) => {
    celda.innerHTML = "";
  });
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
    }
  }
}

function actulizarMarcador(ganador) {
if(ganador === "X")
    maracadorX++;
contadorX.textContent = maracadorX; 

}    if (ganador === "O") {
    maracador++;
    conatadorO.textContent = maracadorO
}



/*
detectarGanador
recorre con un forOf la lista de posibles ganes, tomando posición por posicón.
 Para luego ponerlos en un arreglo pequeño, que tendrá cada una de las 3 posibles ganes (let [posA, posB, posC] = iteracion;)
 Dentro del if, se valida que el valor de las celdas en la posición que se recorre sean iguales, tanto la 1era como la 2da, y la
 1era con la 3era
 Dentro del if, se dice quién ganó.
*/

btnReset.addEventListener("click", restablecer);
