const formulario= document.querySelector("#form");
const mensaje= document.querySelector("#textoError");
const texto= document.querySelector("#numero");

formulario.addEventListener("submit", function(event) {
    event.preventDefault(); //evita que la pagina se recargue

    const numeros= texto.value.split(","); //Convierte un string a un array de strings

    const valores= comprobarArray(numeros);
    analisisArray(valores);

}); 

function mostrarMensajeError(texto) {
    mensaje.textContent= texto;

    setTimeout(() => {
        mensaje.textContent= "";
    }, 2000);
}

function comprobarArray(numeros) {

    for(let i= 0; i< numeros.length; i++) {
        if(numeros[i].trim() === "") {
            mostrarMensajeError("No puede dejarlo vacio");
            return; //para cortar la validacion

        } else if(isNaN(numeros[i].trim())) {
            mostrarMensajeError("Los valores tiene que ser numeros");
            return;
        }
    }

    const valores= numeros.map(v => Number(v)); //Crea un nuevo array con los numeros en formato numero
    return valores;
};

function analisisArray(valores) {
    let total;
    let positivos= 0;
    let negativos= 0;
    let ceros= 0;
    let mayor= 0;
    let menor= 0;

    //Bucle para contar
    for(let i= 0; i< valores.length; i++) {
        //Positivos o negativos
        if(valores[i] === 0) {
            ceros++;

        } else if(valores[i] > 0) {
            positivos++;

        } else {
            negativos++;
        }

        if(valores[i] > mayor) {
            mayor= valores[i];

        } else if(valores[i] < menor) {
            menor= valores[i];
        }

    }

    //Cantidad total de numeros
    total= valores.length;
    mensaje.innerHTML+= "-Total numeros: " + total + "<br>";

    //Cuantos son positivos
    mensaje.innerHTML+= "-Total positivos: " + positivos + "<br>";

    //Cuantos son negativos
    mensaje.innerHTML+= "-Total negativos: " + negativos + "<br>";

    //Cuantos son 0
    mensaje.innerHTML+= "-Total de ceros: " + ceros + "<br>";

    //El numero mayor
    mensaje.innerHTML+= "-Numero mayor: " + mayor + "<br>";

    //El numero menor
    mensaje.innerHTML+= "-Numero menor: " + menor + "<br>";

};