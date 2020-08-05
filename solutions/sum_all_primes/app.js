function sumPrimes(num) {
  let primeArray = [];
  let currentArray = [];

  for (let i = 2; i <= num; i++) {
    for (let j = 2; j <= i; j++) {
      if (i % j == 0) {
        currentArray.push(j);
      }
    }
    if (currentArray.length === 1) {
      let num = 0;
      num = currentArray[0];
      primeArray.push(num);
    }
    currentArray = [];
  }
  return primeArray.reduce((a, b) => a + b);
}

console.log(sumPrimes(10));
console.log(sumPrimes(977));

// sumPrimes(10) should return a number.
// sumPrimes(10) should return 17.
// sumPrimes(977) should return 73156.
