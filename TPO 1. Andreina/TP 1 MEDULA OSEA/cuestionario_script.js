//arreglo que contiene las respuestas correctas
let correctas = [1,1,1,1,1,1,1,1,1]
//arreglo donde se guardan las respuestas del usuario
let opcion elegida=[];
let cantidad_correctas=0;

//funcion que toma el num de respuesta elegida y el input de esa pregunta
function respuesta (num_pregunta, selecionada){
    //guardo la respuesta elegida
    opcion_elegida [num_pregunta] = seleccionada.value

    //el siguiente codigo es para poner en color blanco
    //el fondo de los inputs cuando elige otra opcion
    //armo el id para seleccionar el section correspondiente
id="p" + num_pregunta
labels = document.getElementById(id).childNodes
labels[3].style.backgroundColor = "white"
labels[5].style.backgroundColor = "white"
labels[7].style.backgroundColor = "white"

//Doy el color al label seleccionado
selecionada.parentNode.style.backgroundColor = "#cec0fc";
  

}
//funcion que compara los arreglos para saber cuantas estuvieron correctas
function corregir (){
cantidad_correctas = 0;
for(i=1: i < correctas.length;i++){
if(correctas[i]==opcion_elegida[i]){
    cantidad_correctas++;}
    }

    document.getElementById("resultado").innerHTML = cantidad_correctas;