function challenge1(s) {
  console.log("Primas 5 letras y en el medio.");
  result2 = s.slice(0, 5);
  result1 = s.slice(10, 15);
  result = result2 + result1;
  console.log(result);
}
challenge1("Agarrar las primero 5 letras");
console.log(" ");

function challenge2(s) {
  console.log("Ultimas 5 letras");
  console.log(s.slice(s.length - 5));
}
challenge2("Agarrar las Ultimas 5 letras");

console.log(" ");
