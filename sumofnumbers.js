function sumFor(array) {
  let total = 0;
  for (const num of array) total += num;
  return total;
}
function sumWhile(array) {
  let total = 0;
  let i = 0;
  while (i < array.length) {
    total += array[i];
    i++;
  }
  return total;
}
function sumRecursion(array) {
  return (array.length === 0) ? 0 : array[0] + sumRecursion(array.slice(1));
}
function sumTheSimpleWay(array) {
  return _.reduce(array, function (memo, num) { return memo + num; });
}
const array = [1, 2, 3, 4, 5];
console.log(sumFor(array));
console.log(sumWhile(array));
console.log(sumRecursion(array));
console.log(sumTheSimpleWay(array));
