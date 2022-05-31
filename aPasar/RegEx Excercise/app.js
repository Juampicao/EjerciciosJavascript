// Take off number // Quitar Numeros Regex.
console.log("Quitar Numeros");
let ex1 = "AB21D5K1LD2";
console.log(ex1.replace(/[A-Z]/g, ""));

console.log("");
// Take off Letters // Quitar Letras
console.log("Quitar Letras");
console.log(ex1.replace(/[0-9]/g, ""));
