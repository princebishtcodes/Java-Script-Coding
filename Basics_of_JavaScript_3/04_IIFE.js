// IIFE stands for Immediately Invoked Function Expressions
// When we want to connect a Database, it is the first thing we want in a website or app so we use IIFE to connect the database to avoid the pollutions due to global variables

//Syntax of IIFE
function one(){ //This is normal syntax of Function
    console.log(`Database Connected`);
}

one();
// This is for Arrow Function
const two = () => console.log(`Database Connected Two`);
two();

//This is the use and Syntax of IIFE: ( ) ( )
// This is a Named IIFE
(function chai(name){
    console.log(`Database Connected Three, ${name}`);
})("Priyanshu"); //If you do not have ";" here it will give error

// This is Unnamed IIFE
( (name) => {
    console.log(`Database Connected Four, ${name}`);
} )("Prince");

//Here the () () 1st () can be used to write the argument and 2nd () is used to define the parameter

// Named IIFE can be written using the normal function and Unnamed IIFE can be written using Arrow Function