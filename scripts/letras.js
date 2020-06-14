/**
 * Ingresa un número entre 1 y 10 mediante prompt y transformarlo en su equivalente en el abecedario. 
 * Siendo 1 = a y 10 = j cualquier otro valor mostrar un mensaje de error. Muestra el resultado con un alert
 */

function handleClickSix() {
   

    let number = prompt('Mazuzoe solicita que por favor ingreses un número del 1 al 10 (Para finalizar escriba "0"): '); 

    if(isNaN(number)) {
        alert(`¡Mazuzoe dice que ${number} no es un número!`); 

    } else if(number === null) {
        return;
        
    } 
    
    number = parseInt(number);

    if(number > 10 || number < 1) {
        alert(`¡Mazuzoe dice que "${number}" es un número mayor a 11!`)

    } else {
        const letter = String.fromCharCode(96 + number)
        alert(`¡Sopresa!, tú número "${number}" se ha convertido en la letra "${letter.toUpperCase()}"`)

    }
    
}


// String.fromCharCode(96 + 1)