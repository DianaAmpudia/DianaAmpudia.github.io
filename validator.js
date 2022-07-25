const validator = {
  
  isValid(creditCardNumber){

    /*convertimos el string a array con el método split y lo fragmentamos por elemento y con map(number) aseguramos que
    los elementos de nuestro array sean numeros. Posteriormente con .reverse, volteamos nuestro array*/

    let arraydnumeros = creditCardNumber.split("").map(Number);
    let arrayreverse = arraydnumeros.reverse();


    /* Despues duplicamos los numeros que se encuentren en posiciones pares, los números que no se encuentren en dichas
    posiciones se quedan con su valor original.
    
    ? : son operadores ternarios y que en este caso funcionan como condicionales*/
    
    arrayreverse = arrayreverse.map((numero,idx)=> idx % 2 === 1 ? numero * 2 : numero);
        
      
  /*Despues de duplicar, si los numeros pasan de 9 se debe restar 9, si no pasan de 9 se queda el número original. En el
  Algoritmo de Luhn, esto se explica como sumar los digitos hasta que quede uno solo, pero es lo mismo que restarle 9 */
  
      arrayreverse = arrayreverse.map(numero => numero > 9 ? numero -9 : numero);

      
  /*Hecho todo lo anterior se tiene que sumar todo. Usamos .reduce() para poder realizar operaciones (en este caso suma) a cada 
  uno de los elementos del array, de forma que nos devuelva un valor único.
  acc= accumulator*/

     let suma= arrayreverse.reduce((acc, numero)=> acc += numero, 0);


  /*Después de la suma se aplica el operador residuo. Si el resultado es 0 entonces mi tarjeta es valida, de lo contrario es invalida*/
       let resultado= suma % 10 === 0;
       if(resultado){
       true
       }else{
         false
       }
       return resultado   
    }, 
  //enmascarar
  maskify(creditCardNumber) {
    return creditCardNumber.split("").map((nums, idx) => 
      idx < creditCardNumber.length - 4 ? "#" : nums).join("");
    } 
  };

/* Otra forma de hacer el maskify
 maskify(creditCardNumber){

/* .slice (0,-4) El cero indica desde la posición del index de donde queremos empezar y el segundo parametro 
    indica hasta donde queremos llegar. 
    En este caso, el -4, quiere decir que va a llegar hasta las últimas cuatro posiciones del array.
    Ejemplo:
    
    const numbers = [1,2,3,4,5,6]
    const numbers2 = numbers.slice(0,-3);
    [1, 2, 3] */
 /*   
    
    let numerosaremplazar = creditCardNumber.slice(0, -4);
    /*Con el replace, le estamos diciendo que remplace 'numeroaremplazar' por #, y que se repita por
    todo el legth del array */
    
    /*
    
    let numeroenmascarado = creditCardNumber.replace(numerosaremplazar, "#".repeat(numerosaremplazar.length));
    return numeroenmascarado;
    }*/

export default validator