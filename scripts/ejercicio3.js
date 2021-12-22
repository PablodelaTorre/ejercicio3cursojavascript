let elige = parseInt(prompt('Si desea elegir el programa 1, escriba 1, si quiere el segundo escriba 2:'))
const nombrepensado = "Diego"
const valor = 9
const nombremin = nombrepensado.toLowerCase()
const nombremay = nombrepensado.toUpperCase()
const respuestaCorrecta = "javascript"
let respuestaElegida = 0


if (elige == 1){
    //Aplicación1
    for(let i = 0; i <= valor; i++){
        let nombre = prompt("Ingrese su nombre")
        if((nombre === nombrepensado) || (nombre === nombremin) || (nombre === nombremay))
        {
            alert("Adivinaste!!!")
            break
        }
        else{
            alert("Te has equivocado, intentalo nuevamente, te quedan " + (valor - i) + " intentos")
        }
    }
}
else if (elige == 2){
    //Aplicación 2    
    while(respuestaElegida != "javascript"){
        let respuestaElegida = prompt("Responda la pregunta: ¿En que lenguaje de programación se encuentra realizado este ejercicio?")
        if (respuestaElegida === respuestaCorrecta){
            alert("Correcto!!")
            break
        }
        else{
            alert("Te has equivocado, intentalo nuevamente")
        }
    }
}
else {
    alert("Debe ingresar solo el valor 1 o el valor 2")
}
