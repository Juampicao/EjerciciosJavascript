# EjerciciosJavascript
Hoja de estudio ejercicios Javascript

Soluciones Eficientes: 
 1) Escalables a numeros desconodos.
 2) Loops con FOR & LET I = 0, arr[i]. 
 3) Comparar con let Temp = 0. Hasta que sea X valor, break. 
 4) 

 Metodologia: 
 - Cada ejercicios dificl, escribirlo en una carpeta aparte, dentro de ejerciciosJavascript.
 - Copiarlo dentro del app.js principal para tener todos. 

Buenas Practicas: 

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