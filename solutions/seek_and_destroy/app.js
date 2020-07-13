function destroyer(arr) {
  let destroyers = [...arguments].slice(1);
  let array = [...arguments[0]];
  newArr = array.filter(e => !destroyers.includes(e));
  return newArr;
}

console.log(destroyer([1, 2, 3, 1, 2, 3], 2, 3)); // returns [1,1];
console.log(destroyer(["possum", "trollo", 12, "safari", "hotdog", 92, 65, "grandma", "bugati", "trojan", "yacht"], "yacht", "possum", "trollo", "safari", "hotdog", "grandma", "bugati", "trojan")); // returns [12, 92, 65]
console.log(destroyer(["tree", "hamburger", 53], "tree", 53)); // returns  ['hamburger']
console.log(destroyer([3, 5, 1, 2, 2], 2, 3, 5)); // returns [1]
console.log(destroyer([2, 3, 2, 3], 2, 3)); // returns []