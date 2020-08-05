function spinalCase(str) {

  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  //console.log(str);
  newStr = str.split(/(?: |_)/g);

  return newStr.join("-").toLowerCase();
}

console.log(spinalCase("This Is Spinal Tap"));
console.log(spinalCase("thisIsSpinalTap"));
console.log(spinalCase("The_Andy_Griffith_Show"));
console.log(spinalCase("Teletubbies say Eh-oh"));
console.log(spinalCase("AllThe-small Things"));
// /(?=[A-Z])/
