// Si contiene 7 => Boom

function challengueBoom(arr) {
  console.log("El resultado contiene 7?: " + arr);
  let result = "Falso";

  if (arr.includes(7)) {
    result = "Si,Verdadero";
  }
  console.log(result);
}
challengueBoom([1, 2, 7, 10]);
challengueBoom([1, 2, 5, 10]);

console.log(" ");
// Contiene 7 con Ciclo FOR
function challengueBoom2(arr) {
  console.log("Contiene el 7?  " + arr);
  let n = arr.length;
  let result = "no contiene 7";
  for (let i = 0; i < n; i++) {
    const arrToString = String(arr[i]);
    if (arrToString.includes("7")) {
      result = "boom";
      break;
    }
  }

  console.log(result);
}
challengueBoom2([1, 2, 5, 5]);
challengueBoom2([1, 2, 5, 97]);
