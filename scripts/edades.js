/**
 * Ingresar N cantidad de edades mediante prompt hasta que se ingrese un cero.
 * Al finalizar mostrar cuántos son mayores de edad
 * Muestra el resultado con un alert 
 */
function handleClickThree() {
    let age;
    let ageCount = 0;

    while(age !== '0') {
        age = prompt('Mazuzoe pide que por favor ingrese una edad (Escriba 0 para salir): '); 

        if(age === '0') {
           continue;
        } else if(age === null) {
            return;
        } 
        
        if(isNaN(age)) {
            alert(`¡Mazuzoe dice que ${age} no es un número!`);   
        } else if(parseInt(age) >= 18) {
            ageCount++
        }
       
    } 

    alert(`Los mayores de edad son: ${ageCount}`)
}