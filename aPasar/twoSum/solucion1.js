function add(arr, target) {
  let result = [];
  for (let item of arr) {
    const num1 = target - item;
    if (arr.includes(num1)) {
      return result.concat(num1, item);
    }
  }
  return "Unfortunately there is no answer";
}

const result = add([3, 4, 5, 6, 10], 16);

// will print [10, 6]
console.log(result);
