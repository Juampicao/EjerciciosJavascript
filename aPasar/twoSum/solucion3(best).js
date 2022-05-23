const twoSum = (num, target) => {
  let resultado = [];

  for (let i = 0; i < num.length; i++) {
    for (let j = i + 1; j < num.length; j++) {
      if (num[i] + num[j] === target) {
        resultado.push(i, j);
      }
    }
  }
  console.log(resultado);
};

twoSum([1, 2, 4], 5);

// Explicacion
// 1° I = Recorro cada numero con num.lenght
// 2° J = Segundo numero, i + 1.
// Si ambos numeros sumados == target, mostrar su num.index.
// Llamar a la funcion excribiendo en NUM[] , TARGET.

// https://dev.to/eidorianavi/the-two-sum-problem-in-javascript-2gm7
