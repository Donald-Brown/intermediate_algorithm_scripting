function smallestCommons(arr) {
  let low = Math.min(...arr);
  let high = Math.max(...arr);
  let scm = high;
  while(true){
    let isSCM = true;
    for(let i = low; i <= high; i++){
      if(scm % i !== 0){
        isSCM = false;
        break;
      }
    }
    if(isSCM){
      return scm;
    }else{
      scm++;
    }
  }
}

console.log(smallestCommons([1,5]));
console.log(smallestCommons([23, 18]));

// smallestCommons([1, 5]) should return a number.
// smallestCommons([1, 5]) should return 60.
// smallestCommons([5, 1]) should return 60.
// smallestCommons([2, 10]) should return 2520.
// smallestCommons([1, 13]) should return 360360.
// smallestCommons([23, 18]) should return 6056820.