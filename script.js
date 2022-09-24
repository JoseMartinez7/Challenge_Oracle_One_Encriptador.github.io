//variables 
var botonEncriptar = document.querySelector(".encriptar");
var botonDesencriptar = document.querySelector(".desencriptar");
var message = document.querySelector(".mensaje");
var textResultado = document.querySelector(".resultado");
var answer = document.getElementById("copyAnswer");
var copy   = document.getElementById("copyBlock");

// recupera y/o guarda el valor pasado por el usuario y devuelve dicho valor


// Encripta y devuelve el valor encriptado
function Encrypt(){
    Ocultar();
    var messajeRecuoerado= message.value;
    var messageEncrypted = messajeRecuoerado.replaceAll("e","enter")
    .replaceAll("i","imes")
    .replaceAll("a","ai")
    .replaceAll("o","ober")
    .replaceAll("u","ufat")
    limpiar();
    textResultado.textContent = messageEncrypted;
    
}
// Desencripta y devuelve valor desencriptado
function Decrypt(){
    Ocultar();
    var messajeRecuoerado = message.value;
    var messajeDesencriptado = messajeRecuoerado.replaceAll("enter","e")
    .replaceAll("imes","i")
    .replaceAll("ai","a")
    .replaceAll("ober","o")
    .replaceAll("ufat","u")
    limpiar();
    textResultado.textContent = messajeDesencriptado;  
}

// oculta imagenes y texto para dar paso a lo valores encriptados o desencriptado
function Ocultar() {
    let imagen = document.querySelector(".contenedor-imagen");
    let h3 = document.querySelector(".contenedor-h3");
    let parrafo = document.querySelector(".contenedor-parrafo");
    imagen.classList.add("ocultar");
    h3.classList.add("ocultar");
    parrafo.classList.add("ocultar");
}
// copia el valor devuelto de la encriptacion o desencriptacion
copy.addEventListener('click', function(e) {
    // Sleccionando el texto
 textResultado.select(); 
 try {
        // Copiando el texto seleccionado
     var successful = document.execCommand('copy');
  
     if(successful) answer.value = alert("Texto copiado en el portapapeles!");
     else answer.value = alert("Incapaz de copiar!");
     limpiar();
 } catch (err) {
     answer.value = alert('Browser no soportado!');
 }
});
function limpiar(){
    message.focus();
    message.value = "";
}

limpiar();
// eventos onclick para encriptar y desencriptar
botonEncriptar.onclick = Encrypt;
botonDesencriptar.onclick = Decrypt;


    
