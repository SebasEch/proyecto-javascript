// JUEGO PARA ADIVINAR UN NUMERO ALEATORIO GENERADO POR LA APP JS


let numeroAleatorio = Math.floor(Math.random() * (10)) + 1
let selectDificultad = prompt("Seleccione dificultad: \n 1 = facil\n 2= normal \n 3= dificil \n 4= legendario")
let dificultad = 0;
let vidas = 0;
let aciertos = false;


if (selectDificultad == 1) {
    dificultad = 1
}

if (selectDificultad == 2) {
    dificultad = 2
}

if (selectDificultad == 3) {
    dificultad = 3
}

if (selectDificultad == 4) {
    dificultad = 4
}


if (dificultad == 1) {
    alert("seleccionaste nivel Facil, deberas adivinar un numero del 1 al 10, tienes vidas infinitas");
    while (aciertos == false) {
        let numUsuario = prompt("introduce un numero del 1 al 10");
        vidas++;
        if (numUsuario == numeroAleatorio) {
            alert("Adivinaste!!! intenta el proximo nivel!")
            alert("GAME OVER")
            aciertos = true;
            document.write("el numero era " + numeroAleatorio)
        } else {
            alert("fallaste, llevas " + (vidas) + " intentos")
        }
    }
}

if (dificultad == 2) {
    alert("seleccionaste nivel Normal, deberas adivinar un numero del 1 al 10, tienes 6 vidas");
    while (aciertos == false && vidas < 6) {
        let numUsuario = prompt("introduce un numero del 1 al 10");
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
}

if (dificultad == 3) {
    alert("seleccionaste nivel Dificil, deberas adivinar un numero del 1 al 10, tienes 3 vidas");
    while (aciertos == false && vidas < 3) {
        let numUsuario = prompt("introduce un numero del 1 al 10");
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
            alert ("GAME OVER")
        }
    }
}

if (dificultad == 4) {
    alert("seleccionaste nivel Normal, deberas adivinar un numero del 1 al 10, tienes 1 vida");
    while (aciertos == false && vidas < 1) {
        let numUsuario = prompt("introduce un numero del 1 al 10");
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
            alert ("GAME OVER")
        }
    }
}