let objA = { a: 1, b: 2, c: 3 };
let objB = {"1":5,"2":7,"3":0,"4":0,"5":0,"6":0,"7":0,"8":0,"9":0,"10":0,"11":0,"12":0};

function entries(obj) {
  return Object.keys(obj).map(function(key) {
    return [key, obj[key]];
  });
}

console.log(entries(objA));
console.log(entries(objB));