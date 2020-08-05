function fearNotLetter(str) {
  let strArray = str.split('');
  let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z'];
  let index = letters.indexOf(strArray[0]);
  for(let i = index; i <= str.length + index; i++){
    if(!strArray.includes(letters[i])){
      return letters[i];
    }
  }
}

console.log(fearNotLetter("abce"));
console.log(fearNotLetter("stvwx"));
console.log(fearNotLetter("abcdefghijklmnopqrstuvwxyz"));

//fearNotLetter("abce") should return "d".
//fearNotLetter("abcdefghjklmno") should return "i".
// fearNotLetter("stvwx") should return "u".
// fearNotLetter("bcdf") should return "e".
// fearNotLetter("abcdefghijklmnopqrstuvwxyz") should return undefined.
