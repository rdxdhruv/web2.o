console.log("baby doll"); 
// colon is optional
//  js is single threaded, it uses only one core
// console.log(a); gives error a not defined
//  three ways to declare variable var, let, const
// use strict mode:The directive looks like a string: "use strict" or 'use strict'. When it is located at the top of a script, the whole script works the “modern” way.
// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
var b=1;
b=8;
console.log(b);
let user = 'John', age = 25, message = 'Hello'; // single line definition and initialization of variables
// but not recommended to use, use this let user = 'John';
// let age = 25;
// let message = 'Hello';
// let user = 'John',
//   age = 25,
//   message = 'Hello'; //can be declared like this as well
// Variables, declared with var, are either function-scoped or global-scoped. They are visible through blocks.
if (true) {
  var test = true; // use "var" instead of "let"
}

alert(test); //this variable is accessible globally. it does not happen in case of let if let was used then it would throw an error on accessing the variable outside the scope
var c=0;
var c=2 //its is valid to redeclare same variable using var but throws an error in case of let
// If a code block is inside a function, then var becomes a function-level variable:
// var declarations are processed when the function starts
// In other words, var variables are defined from the beginning of the function, no matter where the definition is (assuming that the definition is not in the nested function).
function sayHi() {
    phrase = "Hello";
  
    alert(phrase);
  
    var phrase;
  }
  sayHi();
// it Is technically the same as this (moved var phrase above):

function sayHi() {
  var phrase;

  phrase = "Hello";

  alert(phrase);
}
sayHi();
// this is also same:
function sayHi() {
  phrase = "Hello"; // (*)

  if (false) {
    var phrase;
  }

  alert(phrase);
}
sayHi();
// People also call such behavior “hoisting” (raising), because all var are “hoisted” (raised) to the top of the function.

// So in the example above, if (false) branch never executes, but that doesn’t matter. The var inside it is processed in the beginning of the function, so at the moment of (*) the variable exists.
// Declarations are hoisted, but assignments are not.

// That’s best demonstrated with an example:

function sayHi() {
  alert(phrase);

  var phrase = "Hello";
}

sayHi();
// The line var phrase = "Hello" has two actions in it:

// Variable declaration var
// Variable assignment =.
// The declaration is processed at the start of function execution (“hoisted”), but the assignment always works at the place where it appears. So the code works essentially like this:

// function sayHi() {
//   var phrase; // declaration works at the start...

//   alert(phrase); // undefined

//   phrase = "Hello"; // ...assignment - when the execution reaches it.
// }

// sayHi();
// Because all var declarations are processed at the function start, we can reference them at any place. But variables are undefined until the assignments.

// In both examples above, alert runs without an error, because the variable phrase exists. But its value is not yet assigned, so it shows undefined.
