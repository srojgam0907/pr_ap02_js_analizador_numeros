const formulario= document.querySelector("#form");
const mensaje= document.querySelector("#textoError");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); //evita que la pagina se recargue

    const texto= document.querySelector("#numero").value;
    const numeros= texto.split(",").map(n => Number(n));

    comprobarArray(numeros)
    //analisisNumero
    //Mostrar resultados

}); 

function mostrarMensajeError(mensaje) {
    mensaje.textContent= mensaje;

    setTimeout(() => {
        mensaje.textContent= "";
    }, 2000);
}

function comprobarArray(numeros) {


};

function analisisNumeros() {
    //Cantidad total de numeros
    //Cuantos son positivos
    //Cuantos son negativos
    //Cuantos son 0
    //El numero mayor
    //El numero menor

};