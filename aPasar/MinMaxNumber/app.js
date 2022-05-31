const maxNumber = (numbers) => console.log(numbers);

function maxNumbers2(numbers) {
  Math.min(numbers);
}
maxNumbers2([1, 2, 3, 4, 5]);

// window.onload = function () {
//   document.getElementById(`hide-spiner`).style.display = `none`;
// };

$(window).load(function () {
  $(".hide-spiner").hide();
});
