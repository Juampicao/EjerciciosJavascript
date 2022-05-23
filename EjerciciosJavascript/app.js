// ITERAR ARRAYS NUMERICOS
console.log("!! ITERAR ARRAYS NUMERICOS  !!");
// 1° Opcion for
let nums = [1, 2, 3];

for (let i = 0; i < nums.length; i++) {
  console.log("Iterar con For + I: " + nums[i]);
}

// 2° Opcion For of
for (let item of nums) {
  console.log("iterar con For Of: " + item);
}

// 3° Opcion For of + Sumar a cada uno un valor.
let addToEveryNums = 1;
for (let item of nums) {
  let result = item + addToEveryNums;
  console.log("Iterar sumando x: " + result);
}

console.log("");

// Merge Two List // Concatenar dos arrays o listas.
console.log("CONCATENAR 2 ARRAYS");
console.log("lista original: [1, 2, 3], [6, 5, 4]");

function mergeTwoArrays(list1, list2) {
  resultConcat = list1.concat(list2);
  console.log("Concat: " + resultConcat);

  let result = [...list1, ...list2].sort();
  console.log("Spread Operator + Sort: " + result);

  desordenarArray = result.sort(function () {
    return Math.random() - 0.5;
  });
  console.log("Array desordenado: " + desordenarArray);
}
mergeTwoArrays([1, 2, 3], [6, 5, 4]);

console.log("");

// Dos numeros. True si uno es 100 o si la suma de ambos es 100.

function isEqualTo100(num1, num2) {
  let result = num1 === 100 || num2 === 0 || num1 + num2 === 100;
  console.log("Encontrar si alguno es 100: " + result);
}

isEqualTo100(50, 50);

console.log("");

// Get extension of a fileName (metodo Slice).
console.log("index.html");
const getFileExtension = (str) => str.slice(str.lastIndexOf(`.`));
console.log("LastIndexOf + Slice (Cortar palabra a partir de un punto)=> ");
console.log(getFileExtension("index.html"));

console.log("");

// Reemplazar cada letra , por la siguiente en el abecedario
function moveCharsForward(str) {
  console.log("abcd");
  let result = str
    .split(``)
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join(``);

  console.log("Jugar con el abecedario: Sumarle +1: ABCD =>  " + result);
}
moveCharsForward(`abcd`);
console.log("");

// Remplazar parte de una palabra
const str = "JavaScript";
const nuevaStr = str.replace("ava", "-");
console.log("Replace: Javascript to " + nuevaStr); // J-Script

console.log("");

// Fecha de hoy 2° Metodo
let date = new Date();
let output =
  "La fecha de hoy: " +
  String(date.getDate()).padStart(2, "0") +
  "/" +
  String(date.getMonth() + 1).padStart(2, "0") +
  "/" +
  date.getFullYear();
console.log(output);

console.log("");

// Create new string adding "Agregado!" at start.
const newString = (palabra) => `Agregado! ${palabra}`;
function nuevoString(palabra) {
  return `DesdeFuncion! ${palabra}`;
}
console.log(newString("hola"));

console.log("");

// Dado un string, si string.length es <= 3, return string.
// Else, mostrar los 3 primeros y los 3 ultimos caracteres.

function threeCharacterString(str) {
  if (str.length <= 3) {
    return str;
  } else {
    let first3Character = str.slice(0, 3);
    let last3Character = str.slice(-3);

    let resultado = first3Character + last3Character;
    return resultado;
  }
}
console.log("SLICE: sacar caracteres: AB y 123456789 =>  ");
console.log(threeCharacterString("ab"));
console.log(threeCharacterString("123456789"));
console.log("");

// Extraer  la mitad del letras que el string posea.

const firstHalf = (str) =>
  "La mitad del length [1,2,3,4,5,6] =>  " + str.slice(0, str.length / 2);
console.log(firstHalf([1, 2, 3, 4, 5, 6]));

console.log("");

// Concatenar 2 strings pero sin los primeros characters de cada uno.

const concat2Strings = (str1, str2) =>
  "Slice: Junior Developer => " + str1.slice(1, -1) + str2.slice(1, -1);
console.log(concat2Strings("junior", "developer"));

console.log(" ");

// Encontrar que valor de A & B esta mas cerca de 100.

const closestTo100 = (a, b) =>
  "el numero mas cercano a 100 es: " + (100 - a < 100 - b ? a : b);
console.log(closestTo100(50, 49));

console.log(" ");

// Numero mas cercano a 43 / X.
function numeroMasCercano(arr) {
  console.log(arr);
  let i;
  let resultadoFinal = "";
  for (let i of arr) {
    if (i == 60) {
      // resultadoFinal.push(arr[i]);
      break;
    }
    console.log("Buscar numero mas cercano a 60/X: " + i);
  }
}
numeroMasCercano([25, 50, 43, 64]);
console.log(" ");

// Elimar 2 numeros iguales de un array con FILTER

function eliminar2Iguales(arr) {
  let resultado = arr.filter((num) => num % 2 === 0).length;
  console.log("Eliminar duplicados con filter: " + resultado);
}
eliminar2Iguales([1, 1, 2, 2, 3, 5, 5]);

// Mostrar numeros eliminando duplicados SET
const data = [1, 2, 3, 3, 5, 5];
console.log(data);
const dataArr = new Set(data);
let result = [...dataArr];
console.log("Eliminar duplicados con SET: " + result);
console.log(" ");

// Ordenar de menor a mayor y mayor a menor.
function ordenarAscendente(arr) {
  console.log(arr);
  console.log("Ordenar algo: " + arr.sort());
}
ordenarAscendente(["River", "Arsenal", "Boca"]);

function ordenarDescendente(arr) {
  console.log(arr);
  console.log("Ordenar al reves: " + arr.reverse());
}
ordenarDescendente(["Banfield", "Boca", "Velez"]);
console.log(" ");

// Fijarse si estan en orden o no.
const isAscending = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i + 1] < arr[i])
      console.log("Verificar TRUE ORDENADO: No esta Ordenado");
  }
  console.log("Verificado TRUE ORDENADO: Si, esta ordenado");
};

isAscending([1, 2, 3, 4, 5, 6]);
isAscending([5, 2, 3, 4, 3, 6]);
console.log(" ");

// Replace first digit for a $ character.

function replaceFirst(word) {
  let result = word.slice(1);
  console.log("Reemplazar primer Letra: " + result.concat("$"));
}
replaceFirst("rona1ldo2");

console.log(" ");
console.log(" ");

// Numero mas grande de todos, largest number array.
function largestNumber(arr) {
  console.log(arr);
  n = arr.length;
  temp = 0;

  for (let i = 0; i < n; i++) {
    if (temp < arr[i]) {
      temp = arr[i];
    }
  }
  console.log(`Numero mas grande con For & I: ` + temp);
  console.log(
    "Temp = 0; Mientras temp < arr[i], temp = arr[i]. Sigue el loop hasta el mas grande."
  );
}
largestNumber([4, 5, 6, 22, 100, 105, 11, 10]);

console.log(" ");

function numeroMasChico(arr) {
  console.log(arr);
  let n = arr.length;
  let temp = 10000;

  for (let i = 0; i < n; i++) {
    if (temp > arr[i]) {
      temp = arr[i];
    }
  }

  console.log(temp);
  console.log("Temp=10000. Loop hasta el mas chico.");
}
numeroMasChico([1, 2, 5, 10]);

console.log(" ");

// Numero mas grande con ForEach()
function numeroMasGrande(arr) {
  console.log(arr);
  let temp = 0;
  arr.forEach((element) => {
    if (temp < element) {
      temp = element;
    }
  });
  console.log("Numero mas grande con ForEach(): " + temp);
}

numeroMasGrande([1, 99, 3, 2, 5]);
console.log(" ");

// Comprobar arreglo vacio length
function isEmptyArray(arr) {
  console.log(arr);
  if (!arr.length) {
    console.log("Esta vacio el array");
  } else {
    console.log("Esta lleno el array");
  }
}
isEmptyArray([]);
isEmptyArray([1, 2]);

console.log(" ");
// Salto de linea en JS
console.log(" Salto \n de \n linea en \n javascript");
console.log(" ");

console.log(" ");

// NUMERO UNICO // NUMBER UNIQUE
function singleNumber(arr) {
  let n = arr.length;
  let i; // Primer Loop
  let j; // Segundo Loop
  let unique = [];

  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        continue;
      }
      if (arr[i] === arr[j]) {
        break;
      }
    }
    if (j === n) {
      unique.push(arr[i]);
    }
  }
  console.log("los numeros unicos son: " + unique);
}

singleNumber([-1, 2, 5, 6, 2, 9, -1, 6, 5, -1, 3, 11]);
console.log(" ");

/* Solucion: 
      1) Realizar bucle for para iterar dos veces, para comparar.
      2) Si son iguales, continuar. 
      3) Agregar al nuevo arreglo  los unicos
      4) Mostrar arreglo
   */
