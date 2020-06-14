/**
 * Ingresar N cantidad de números mediante prompt. Mostrar quién tuvo más ingresos, si los pares o los impares. 
 * Terminar el programa un 0.
 * Muestra el resultado con un alert
 */
function handleClickFive() {
    let number;
    let sumPar = 0;
    let sumImpar = 0;

    while(number !== '0') {
        number = prompt('Mazuzoe solicita que por favor ingreses los número que desees (Para finalizar escriba "0"): '); 

        if(number === '0') {
           continue;
        } else if(number=== null) {
            return;
        } else if(isNaN(number)) {
            alert(`¡Mazuzoe dice que ${number} no es un número!`);   
            continue;
        } 

        number = parseInt(number);
        
        if(number % 2 === 1) {
            sumImpar += number;
        } else {
            sumPar += number;
        }

    }

    if(sumImpar > sumPar) {
        alert('¡Mazuzoe dice que hay más números impares!')
    } else {
        alert('¡Mazuzoe dice que hay más números pares!')
    }
}