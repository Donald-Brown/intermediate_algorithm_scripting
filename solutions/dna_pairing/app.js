function pairElement(str) {
  let strArr = str.split('');
  let returnArray = [];
  for(let current of strArr){
    switch(current){
      case "C":
        returnArray.push(["C", "G"]);
        break;
      case "G":
        returnArray.push(["G", "C"]);
        break;
      case "A":
        returnArray.push(["A", "T"]);
        break;
      case "T":
        returnArray.push(["T", "A"]);
        break;

    }
  }
  return returnArray;
}

console.log(pairElement("GCG"));
console.log(pairElement("ATCGA"));
console.log(pairElement("TTGAG"));
console.log(pairElement("CTCTA"));

// pairElement("ATCGA") should return [["A","T"],["T","A"],["C","G"],["G","C"],["A","T"]].
// pairElement("TTGAG") should return [["T","A"],["T","A"],["G","C"],["A","T"],["G","C"]].
// pairElement("CTCTA") should return [["C","G"],["T","A"],["C","G"],["T","A"],["A","T"]].