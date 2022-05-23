let romanToInt = function (s) {
  let romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let n = s.length;
  let total = 0;

  for (let i = 0; i < n; i++) {
    let currentInt = romanToInt[s.charAt(i)];
    let nextInt = romanToInt[s.charAt(i + 1)];
  }

  return total;
};

console.log(romanToInt());
