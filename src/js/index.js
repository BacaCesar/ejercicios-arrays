// El styles lo importamos aquí para que se encargue Vite de compilar todo
import '../scss/styles.scss';

//- Crea una función que reciba un array de 5 números, imprime por consola una posición aleatoria del array.

const getRandomNumbers = numbers => {
  const randomNumber = Math.floor(Math.random() * numbers.length);
  console.log(numbers[randomNumber]);
};

getRandomNumbers(['1', '2', '3', '4', '5']);
//- Crea una función que reciba un array con 3 números. La función deberá imprimir por consola.

'La suma de todos los números es:[suma]' -
  'La media de todos los números es:[media]' -
  'El mayor es [mayor] y el menor es [menor]';

const arrayNumbers = numbers => {
  const total = numbers[0] + numbers[1] + numbers[2];
  console.log(`La suma de todos los números es: ${total}`);
  const averageArrays2 = (numbers[0] + numbers[1] + numbers[2]) / 3;
  console.log(`La media de todos los números es: ${averageArrays2}`);
  const greatest = Math.max(numbers[0], numbers[1], numbers[2]);
  const least = Math.min(numbers[0], numbers[1], numbers[2]);
  console.log(`El mayor es ${greatest} y el menor es ${least}`);
};

arrayNumbers([1, 2, 3]);

//- Crea una función que reciba un array con 5 números del 0 al 10 (a tu elección). Dentro de la función genera un número aleario entre 0 y 10. La función deberá decir si el array contiene ese número y en qué posición está o si no lo contiene.

const randomArrayNumber = numbers => {
  const randomNumber = Math.floor(Math.random() * 11);
  if (numbers.includes(randomNumber)) {
    console.log(
      `El array contiene ${randomNumber} y su posición es ${numbers.indexOf(
        randomNumber
      )}`
    );
  } else console.log(`El número no está`);
};

randomArrayNumber([1, 2, 4, 6, 8]);

//- Crea una función que reciba un array vacío y lo devuelva con 3 números aleatorios entre 0 y 100.

const emptyArray = numbers => {
  numbers.push(Math.floor(Math.random() * 101));
  numbers.push(Math.floor(Math.random() * 101));
  numbers.push(Math.floor(Math.random() * 101));
  console.log(numbers);
};

emptyArray([]);

//- Crea una función que reciba un array de 5 números. Dentro de esa función crea dos arrays vacíos llamados even (pares) y odd (impares), después multiplica cada uno de los números del array recibido por un número aleatorio entre 1 y 10, si el resultado es par, guárdalo en el array de pares, si es impar, en el array de impares, al final, imprime los 3 arrays por consola.

const evenAndOddArray = numbers => {
  const even = [];
  const odd = [];
  const randomNumber = Math.floor(Math.random() * 11);
  const multiplyArray1 = numbers[0] * randomNumber;
  const multiplyArray2 = numbers[1] * randomNumber;
  const multiplyArray3 = numbers[2] * randomNumber;
  const multiplyArray4 = numbers[3] * randomNumber;
  const multiplyArray5 = numbers[4] * randomNumber;
  if (multiplyArray1 % 2 === 0) {
    console.log(`El número ${multiplyArray1} es par`);
    even.push(multiplyArray1);
  } else {
    console.log(`El número ${multiplyArray1} es impar`);
    odd.push(multiplyArray1);
  }
  if (multiplyArray2 % 2 === 0) {
    console.log(`El número ${multiplyArray2} es par`);
    even.push(multiplyArray2);
  } else {
    console.log(`El número ${multiplyArray2} es impar`);
    odd.push(multiplyArray2);
  }
  if (multiplyArray2 % 2 === 0) {
    console.log(`El número ${multiplyArray2} es par`);
    even.push(multiplyArray2);
  } else {
    console.log(`El número ${multiplyArray2} es impar`);
    odd.push(multiplyArray2);
  }
  if (multiplyArray3 % 2 === 0) {
    console.log(`El número ${multiplyArray3} es par`);
    even.push(multiplyArray3);
  } else {
    console.log(`El número ${multiplyArray3} es impar`);
    odd.push(multiplyArray3);
  }
  if (multiplyArray4 % 2 === 0) {
    console.log(`El número ${multiplyArray4} es par`);
    even.push(multiplyArray4);
  } else {
    console.log(`El número ${multiplyArray4} es impar`);
    odd.push(multiplyArray4);
  }
  console.log(numbers, even, odd);
};

evenAndOddArray([1, 2, 3, 4, 5]);

//- Crea una función llamada dniLetter que recibirá un número de DNI sin la letra. Dentro de esa función pon este array ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E'] La letra del DNI se calcula a través del resto de dividir el número de DNI entre 23, ese número te dará la posición del array donde se encuentra la letra correspondiente a ese DNI. Imprime por consola el DNI con su letra correspondiente.

//- Crea una función que reciba un array con 3 palabras, debes imprimir por consola un array que contenga la inicial y la última letra de cada palabra en mayúsculas, es decir, si nuestra función recibiera un array con ['hola', 'adios', 'gato'] deberá imprimir por consola ['H', 'A', 'A', 'S', 'G', 'O']
