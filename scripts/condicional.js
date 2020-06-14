/**
 * Ingresar N cantidad de números mediante prompt.Mostrar el promedio de los números ingresados de 1 dígito. 
 * Terminar el programa con la palabra “salir”. 
 * Muestra el resultado con un alert 
 */
function handleClickFour() {
    let number;
    let sum = 0;
    let count = 0;

    while(number !== 'salir') {
        number = prompt('Mazuzoe solicita que por favor ingreses los número que desees (Para finalizar escriba "salir"): '); 

        if(number === 'salir') {
           continue;
        } else if(number=== null) {
            return;
        } 
        
        if(isNaN(number)) {
            alert(`¡Mazuzoe dice que ${number} no es un número!`);   
        } else if(Math.abs(parseInt(number)) < 9) {
            sum += parseInt(number);
            count++
        }
       
    } 

    alert(`El promedio es: ${(sum / count)}`)
}