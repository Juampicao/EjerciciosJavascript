// Boomerang es posicion 0 y 2 igual. la 1 no improta. Cuantos hay?
function challengueBoom2(arr) {
  console.log(
    "Cuantos Boomerangs hay?: \n" +
      arr +
      "\n" +
      "Regla: 3,3,3 no cuenta como boomerang."
  );
  let n = arr.length;
  let countBoomerang = 0;

  for (i = 0; i < n; i++) {
    if (arr[i] === arr[i + 2] && arr[i + 1] !== arr[i]) {
      countBoomerang = countBoomerang + 1;
    }
  }
  console.log("Hay: " + countBoomerang + " boomerangs");
}
challengueBoom2([1, 2, 1, 5, 0, 5, 5, 2, 3, 3, 3, 3]);
// challengueBoom2([1, 2, 5, 97]);
