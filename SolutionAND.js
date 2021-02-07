/**
* The following is the function where the solution shall be written
*/

const { string } = require("check-types")
const { resourceLimits } = require("worker_threads")

function solution (input) {

   //check for valid input
   if (typeof input !== "string") return "Not a valid input, strings only please."
   //get only the numbers in input into an array.
   const integerArr = Array.from(input).filter( element => {
     if (Number(element)) return element
   })
   //check for no integers
   if (integerArr.length === 0){ return `No integers found in ${input}`}
 
   return getSiblings(integerArr) // launch recursive function

   function getSiblings(arr) {
    let siblings = [] //array to collect siblings found

    if (integerArr === 1) { //base condition
      siblings.push(integerArr)
      return siblings
    }

    for (let i = 0; i < integerArr.length; i++){ //
      let firstInteger = integerArr[i];
      let integersRemaining  = numbers.filter((integer) => {
        return integer!==integerArr[i]
      });
      let innerSiblings = getSiblings(integersRemaining)
      for (let j=0;j< innerSiblings.length; j++){
        siblings.push(firstInteger + innerSiblings[j])
      }
    }
    return siblings
   } 

   
   
  return null; 
}

// some example inputs
console.log(solution('326')); // expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236
