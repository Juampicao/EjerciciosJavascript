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

/* Solucion: 
      1) Realizar bucle for para iterar dos veces, para comparar.
      2) Si son iguales, continuar. 
      3) Agregar al nuevo arreglo  los unicos
      4) Mostrar arreglo
   */
