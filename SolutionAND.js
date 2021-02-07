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
   //if its a single digit we can return it without any more work
   if (integerArr.length ===1 ){return integerArr}
 
   console.log(integerArr)

   let unsortedSiblings = getSiblings(integerArr) // launch recursive function

   function getSiblings(arr) {
    let result = []
    //set base cases
    if (arr.length === 0) return []
    if (arr.length === 1) return [arr]

    for (let i = 0; i< arr.length; i++){
      const currentInteger = arr[i]
      const remainingIntegers = arr.slice(0,i).concat(arr.slice(i+1))
      const remainingIntegersSiblings = getSiblings(remainingIntegers)
    
      for (let j=0; j< remainingIntegersSiblings.length; j++){
        const siblingArray = [currentInteger].concat(remainingIntegersSiblings[j])
        result.push(siblingArray.join(''))
      }
    }
    return result
   }

  //return the siblings sorted
  return unsortedSiblings.sort( (a,b) => b-a)
}


// some example inputs
console.log(solution('343')); 
// expected output 632,623,362,326,263,236
console.log(solution('A 3B2 C6D')); // expected output 632,623,362,326,263,236


// return Object.keys(siblingTracker).sort( (a,b) => {
//   return -1
// })