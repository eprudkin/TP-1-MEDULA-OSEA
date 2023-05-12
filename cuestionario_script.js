//arreglo que contiene las respuestas correctas
let correctas = [1, 1, ...Array(7).fill(2)];
//arreglo donde se guardan las respuestas del usuario
let opcion_elegida = [];
let cantidad_correctas=0;

//funcion que toma el num de respuesta elegida y el input de esa pregunta
function respuesta (num_pregunta, seleccionada){
    
    cantidad_correctas = 0;
//guardo la respuesta elegida
    opcion_elegida[num_pregunta] = seleccionada.value;

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs cuando elige otra opcion
    //armo el id para seleccionar el section correspondiente
    const id = "p" + num_pregunta;
    const labels = document.getElementById(id).childNodes;
    labels[3].style.backgroundColor = "white";
    labels[5].style.backgroundColor = "white";
    labels[7].style.backgroundColor = "white";

    //Doy el color al label seleccionado
    seleccionada.parentNode.style.backgroundColor = "#cec0fc";
    
}

//funcion que compara los arreglos para saber cuantas estuvieron correctas
function verResultado() {
    let cantidad_si = 0;
    let cantidad_no = 0;
  
    for (let i = 0; i < correctas.length; i++) {
      if (opcion_elegida[i] !== undefined) {
        if (parseInt(opcion_elegida[i]) === 1) {
          cantidad_si++;
        } else if (parseInt(opcion_elegida[i]) === 2) {
          cantidad_no++;
        }
      }
    }
  
    const resultadoSpan = document.getElementById("resultado");
    resultadoSpan.innerText = `Cantidad de respuestas SI: ${cantidad_si} | Cantidad de respuestas NO: ${cantidad_no}`;
  }
  

