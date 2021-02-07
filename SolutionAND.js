/**
* The following is the function where the solution shall be written
*/

function solution (input) {

   //check for valid input
   if (typeof input !== "string") return "Not a valid input, strings only please."
   //get only the numbers in input into an array.
   const integerArr = Array.from(input).filter( element => {
     if (Number(element)) return element
   })
   //check for no integers
   if (integerArr.length === 0){ return `No integers found in ${input}`}
 

  return null; 
}

// some example inputs
console.log(solution('326')); // expected ouput 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected ouput 632,623,362,326,263,236
