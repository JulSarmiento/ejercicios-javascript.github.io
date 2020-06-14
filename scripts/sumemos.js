let sum;
const TOTAL_NUMBER = 5; /*cambiar cuando habi deje de atacarme e insista que no lo hace*/


/**
 * Crear un script que permita ingresar solamente 5 valores mediante prompt y nos 
 * muestre la suma total de todos los valores ingresados. 
 * Mostrar el resultado utilizando un alert
 */
function handleClickOne() {
    sum = 0;
    let countSum = 1; 
   
    while(countSum <= TOTAL_NUMBER) {
        let number = prompt(`Mazuzoe pide que ingrese #${countSum}: `); 

        if(number === null) {
            return;
        }
        
        if(isNaN(number)) {
            alert(`¡Mazuzoe dice que ${number} no es un número!`);   
        
        } else {
            sum += parseInt(number);
            countSum++; 
        }
       
    } 

    alert(`La suma de sus números es: ${sum}`)
}

/**
 * A nuestro script agreguemos el promedio de todos los números ingresados.
 * Muestra el resultado con un alert
 */
function handleClickTwo() {
    if(isNaN(sum)) {
        alert('¡Mazuzoe dice que debes realizar la sumatoria antes de pasar por aquí!')
    } else {
        alert(`El promedio es: ${(sum / TOTAL_NUMBER)}`)
    }
}
