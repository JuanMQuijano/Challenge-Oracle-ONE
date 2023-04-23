//Identificamos los botones del HTML
const btnEncriptar = document.querySelector("#encriptar");
const btnDesencriptar = document.querySelector("#desencriptar");
const btnCopiar = document.querySelector("#copiar");

//Identificamos el lugar donde ingresaremos el resultado
let resultado = document.querySelector("#resultado");

//Agregamos un evento a cada botón en este caso el evento click
btnEncriptar.addEventListener("click", () => {
  //Obtenemos el mensaje del textarea
  let mensaje = document.querySelector("#mensaje").value;
  //Llamamos la función correspondiente y le pasamos como argumento el mensaje
  encriptarMensaje(mensaje);
  btnCopiar.style.display = "block";
});

btnDesencriptar.addEventListener("click", () => {
  //Obtenemos el mensaje del textarea
  let mensaje = document.querySelector("#mensaje").value;
  //Llamamos la función correspondiente y le pasamos como argumento el mensaje
  desencriptarMensaje(mensaje);
  btnCopiar.style.display = "block";
});

btnCopiar.addEventListener("click", ()=>{
  const mensajeFinal = resultado.textContent;  
  const aux = document.createElement("input");
  aux.setAttribute("value", mensajeFinal);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);

  alert("Mensaje Copiado!")
})

function encriptarMensaje(mensaje) {
  //Declaramos una nueva variable donde almacenaremos el mensaje encriptado
  let mensajeEncriptado = "";

  //Iteramos sobre cada letra del mensaje que recibimos
  for (const letra of mensaje) {
    //Si la letra actual es igual a alguna de estas opciones, concatenamos el valor correspondiente a la variable de mensaje encriptado
    switch (letra) {
      case "a":
        mensajeEncriptado += "ai";
        break;
      case "e":
        mensajeEncriptado += "enter";
        break;
      case "i":
        mensajeEncriptado += "imes";
        break;
      case "o":
        mensajeEncriptado += "ober";
        break;
      case "u":
        mensajeEncriptado += "ufat";
        break;
      default:
        mensajeEncriptado += letra;
        break;
    }
  }

  resultado.textContent = "";
  resultado.textContent = `Resultado: \n${mensajeEncriptado}`;
}

function desencriptarMensaje(mensaje) {
  //Declaramos una nueva variable donde almacenaremos el mensaje desencriptado
  let mensajeDesencriptado = "";
  //Separamos por espacios el mensaje que recibimos
  let arregloMensaje = mensaje.split(" ");

  //Por cada palabra que encontremos en el nuevo arreglo iteramos.
  for (let palabra of arregloMensaje) {
    //Revisamos 5 veces la misma palabra para verificar que todas las condiciones se hayan reemplazado
    for (let j = 0; j < 5; j++) {
      palabra = palabra
        .replace("enter", "e")
        .replace("imes", "i")
        .replace("ai", "a")
        .replace("ober", "o")
        .replace("ufat", "u");
    }

    //Agregamos a la variable mensaje la palabra reemplazada
    mensajeDesencriptado += palabra;
    //Agregamos un espacio al final
    mensajeDesencriptado += " ";
  }

  resultado.textContent = "";
  resultado.textContent = `Resultado: \n${mensajeDesencriptado}`;
}
