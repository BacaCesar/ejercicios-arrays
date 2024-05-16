// El styles lo importamos aquí para que se encargue Vite de compilar todo
import "../scss/styles.scss";

//- Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const numbers = ["1", "2", "3", "4", "5"];

const randomNumber = numbers[Math.floor(Math.random() * 5)];

console.log(randomNumber) -
  //- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

  "La suma de todos los números es:[suma]" -
  "La media de todos los números es:[media]" -
  "El mayor es [mayor] y el menor es [menor]";

const arrayNumbers = [1, 2, 3];
const adittionArrays = arrayNumbers[0] + arrayNumbers[1] + arrayNumbers[2];
console.log(`La suma de todos los números es: ${adittionArrays}`);

const arrayNumbers2 = [1, 2, 3];
const averageArrays2 =
  (arrayNumbers2[0] + arrayNumbers2[1] + arrayNumbers2[2]) / 3;
console.log(`La media de todos los números es: ${averageArrays2}`);

const arrayNumbers3 = [1, 2, 3];

const greaterThan = Math.max(arrayNumbers[0], arrayNumbers[1], arrayNumbers[2]);
const lessThan = Math.min(arrayNumbers[0], arrayNumbers[1], arrayNumbers[2]);

console.log(`El mayor es ${greaterThan} y el menor es ${lessThan}`);

//- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const numbersX = [null,null ,null];

const emptyArray1 = numbersX[Math.floor(Math.random() * 101)];
const emptyArray2 = numbersX[Math.floor(Math.random() * 101)];
const emptyArray3 = numbersX[Math.floor(Math.random() * 101)];

console.log(`${emptyArray1} ${emptyArray2} ${emptyArray3}`);

//- Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOddArray = numbers =>{

}