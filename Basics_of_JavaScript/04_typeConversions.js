let score = false;

console.log(typeof(score));
console.log(typeof score);

let valueInNumber = Number(score);
console.log(typeof valueInNumber);
console.log(valueInNumber);
// "33" => 33
//"33abc" => NaN
// true => 1, false => 0
// null => 0
// undefined => NaN

let isLoggedIn = "Prince";
let boolLoggedIn = Boolean(isLoggedIn);
console.log(boolLoggedIn);
console.log(typeof boolLoggedIn);