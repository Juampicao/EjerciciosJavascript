// Agregar Start al principio y End al final
console.log("Agregar Start al principio y End al final");
const array = ["a", "b", "c", "d"];

// Solucion 1
array.unshift("start");
array.push("end");
console.log(array);

console.log("");

// Solucion 2
console.log("Metodo Spread Operator: \n");
const array2 = ["a", "b", "c", "d"];
const resultado = ["start", ...array2, "end"];
console.log(resultado);

console.log("");

// Concatenar dos arrays o listas.
console.log("CONCATENAR 2 ARRAYS");

function mergeTwoArrays(list1, list2) {
  console.log("Concatenar 2 listas \n lista original: [1, 2, 3], [6, 5, 4]");
  resultConcat = list1.concat(list2);
  console.log("Resultado: " + resultConcat);
}
mergeTwoArrays([1, 2, 3], [6, 5, 4]);

console.log("");
