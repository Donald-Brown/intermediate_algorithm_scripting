function sumFibs(num) {
  let newNum = 0;
  let numArr = [1, 1];
  let index = 0;
  while (newNum <= num) {
    newNum = numArr[index] + numArr[index + 1];
    numArr.push(newNum);
    index++;
  }
  numArr.splice(-1, 1);
  return numArr.filter(num => num%2 != 0).reduce((a,b) => a + b);
  
}

console.log(sumFibs(4));
console.log(sumFibs(75025));

//sumFibs(1) should return a number.
// sumFibs(1000) should return 1785.
// sumFibs(4000000) should return 4613732.
// sumFibs(4) should return 5.
// sumFibs(75024) should return 60696.
//sumFibs(75025) should return 135721.
