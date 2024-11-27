 /***
Autor: Ana Camila Nambo Delhumeau
Fecha: 27/11/2024
Lenguaje html
Fuente: local
 ***/


document.addEventListener("keydown", function(event){

    const elemento = document.getElementById("Cuerpo");

    if (event.key ==="1"){

        elemento.className = "Cuerpo00";                /** cambia color conforme al texto y la tecla */

    }

    if (event.key ==="2"){

        elemento.className = "Cuerpo01";

    }

    if(event.key ==="3"){

        elemento.className = "Cuerpo02";

    }

    if(event.key ==="4"){

        elemento.className = "Cuerpo03";

    }

    if(event.key ==="5"){

        elemento.className = "Cuerpo04";

    }


});




document.addEventListener("keydown", function(event){console.log(event)}); /** Imprime en la consola la tecla presionada */

function Boton() {
    alert("Hola mundo");
}

function Boton2() {
    alert("Nos vemos");
}

/***Ana Camila Nambo Delhumeau ***/
/***Diseño de la comunicacion grafica ***/
/***Diseño web ***/
/*** Rogelio Montelongo Sosa ***/