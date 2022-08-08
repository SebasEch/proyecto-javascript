// JUEGO PARA ADIVINAR UN NUMERO ALEATORIO GENERADO POR LA APP JS

// FUNCION QUE DEFINE EL NUMERO CON QUE SE JUGARA 
const numCom = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


// VARIABLES
let dificultad = prompt("Seleccione dificultad: \n 1 = facil\n 2= normal \n 3= dificil \n 4= legendario");

// FUNCION QUE CONTIENE EL JUEGO
const game = (vidas, aciertos) => {

if (dificultad == 1) {
    let numeroAleatorio = numCom(1, 10);
    alert("seleccionaste nivel Facil, deberas adivinar un numero del 1 al 10, tienes vidas infinitas");
    while (aciertos == false) {
        let numUsuario = Number(prompt("introduce un numero del 1 al 10"));
        vidas++;
        if (numUsuario == numeroAleatorio) {
            alert("Adivinaste!!! intenta el proximo nivel!")
            alert("GAME OVER")
            aciertos = true;
            document.write("el numero era " + numeroAleatorio)
        } else {
            alert("fallaste, llevas " + (vidas) + " vidas")
        }
    }
}
else if (dificultad == 2) {
    let numeroAleatorio = numCom(1, 10)
    alert("seleccionaste nivel Normal, deberas adivinar un numero del 1 al 10, tienes 6 vidas");
    while (aciertos == false && vidas < 6) {
        let numUsuario = Number(prompt("introduce un numero del 1 al 10"));
        vidas++;
        if (numUsuario == numeroAleatorio) {
            alert("Adivinaste!!! intenta el proximo nivel!")
            alert("GAME OVER")
            aciertos = true;
            document.write("el numero era " + numeroAleatorio)
        } else {
            alert("fallaste, llevas " + (vidas) + " vidas")
        }
        if (vidas == 6) {
            document.write("el numero era: " + (numeroAleatorio))
            alert("GAME OVER")
        }
    }
} else if (dificultad == 3) {
    let numeroAleatorio = numCom(1, 10)
    alert("seleccionaste nivel Dificil, deberas adivinar un numero del 1 al 10, tienes 3 vidas");
    while (aciertos == false && vidas < 3) {
        let numUsuario = Number(prompt("introduce un numero del 1 al 10"));
        vidas++;
        if (numUsuario == numeroAleatorio) {
            alert("Adivinaste!!! intenta el proximo nivel!")
            alert("GAME OVER")
            aciertos = true;
            document.write("el numero era " + numeroAleatorio)
        } else {
            alert("fallaste, llevas " + (vidas) + " vidas")
        }
        if (vidas == 3) {
            document.write("el numero era: " + (numeroAleatorio))
            alert("GAME OVER")
        }
    }
} else if (dificultad == 4) {
    let numeroAleatorio = numCom(1, 10)
    alert("seleccionaste nivel Normal, deberas adivinar un numero del 1 al 10, tienes 1 vida");
    while (aciertos == false && vidas < 1) {
        let numUsuario = Number(prompt("introduce un numero del 1 al 10"));
        vidas++;
        if (numUsuario == numeroAleatorio) {
            alert("Adivinaste!!! ya eres nivel LEYENDA")
            alert("GAME OVER")
            aciertos = true;
            document.write("el numero era " + numeroAleatorio)
        } else {
            alert("fallaste, llevas " + (vidas) + " vidas")
        }
        if (vidas == 1) {
            document.write("el numero era: " + (numeroAleatorio))
            alert("GAME OVER")
        }
    }
}
}
// SE EJECUTA LA FUNCION JUEGO

game(0,false)