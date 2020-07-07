function diffArray(arr1, arr2) {
  return [
    ...arr1.filter((e) => !arr2.includes(e)),
    ...arr2.filter((e) => !arr1.includes(e)),
  ];
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(diffArray(["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"]));

function diffTwoArray(arr1, arr2) {
  const newArr = new Set([...arr1, ...arr2]);

    // Loop through newArr
    const diffArr = [];
    for(const current of newArr){
      if(arr1.includes(current) && !arr2.includes(current)){
        diffArr.push(current);
      }else if(arr2.includes(current) && !arr1.includes(current)){
        diffArr.push(current);
      }
    }
    return diffArr;
}

console.log(diffTwoArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffTwoArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
