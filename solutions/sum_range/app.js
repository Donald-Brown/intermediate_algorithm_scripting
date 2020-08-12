function sumAll(arr) {
  // let result = 0;
  return (Math.max(...arr) - Math.min(...arr) +1 ) / 2 * (Math.min(...arr) + Math.max(...arr));
  // for(let i = Math.min(...arr); i <= Math.max(...arr); i++){
  //   result += i;
  // }
  // return result;
}

console.log(sumAll([1, 4])); // returns 10

console.log(sumAll([10, 5])); // returns 45