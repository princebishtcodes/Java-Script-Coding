// for each looping
// It is used to loop through the array or collections
// It is a method of array
// It takes a callback function as an argument
// It does not return anything

const myHeros = ["Captain America", "Iron Man", "Thor", "Hulk"];

// For general Function callback
/*myHeros.forEach(  function (item) {
//     console.log(myHeros);
}  )*/

// For IIFE Function callback
// myHeros.forEach( (val) => {
//     console.log(myHeros);
    
// } )
// myHeros.forEach(  function (item) {
//     console.log(myHeros);
// }  )
// For Predefined Function
function callMe(item) {
    // console.log(item)
}

// myHeros.forEach(callMe)

// It also has the access to index and the whole array

myHeros.forEach(  (items, index, arr) => {
    console.log(items, index, arr);
}  )