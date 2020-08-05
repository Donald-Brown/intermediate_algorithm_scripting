function translatePigLatin(str) {
  // Array of vowels
  let vowels = ["a", "e", "i", "o", "u"];
  if (vowels.includes(str.charAt(0))) {
    return str + "way";
  } else {
    // handles cases where word begins with a consonant
    return str.replace(/([b,c,d,e,f,g,h,j,k,l,m,n,p,q,r,s,t,v,w,x,y,z]+)([a,e,i,o,u][a-z]+)/, "$2$1") + "ay";
  }
}

console.log(translatePigLatin("consonant"));
console.log(translatePigLatin("california"));
console.log(translatePigLatin("glove"));
console.log(translatePigLatin("rhythm"));

// console.log(translatePigLatin("algorithm"));
// console.log(translatePigLatin("eight"));

//translatePigLatin("california") should return "aliforniacay".
//translatePigLatin("paragraphs") should return "aragraphspay".
//translatePigLatin("glove") should return "oveglay".
//translatePigLatin("algorithm") should return "algorithmway".
//translatePigLatin("eight") should return "eightway".
//Should handle words where the first vowel comes in the middle of the word. translatePigLatin("schwartz") should return "artzschway".
//Should handle words without vowels. translatePigLatin("rhythm") should return "rhythmay".
