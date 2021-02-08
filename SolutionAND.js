/**
 * The following is the function where the solution shall be written
 */

function solution(input) {
  //check that a valid string was provided
  if (typeof input !== "string")
    return "Not a valid input, strings only please.";
  //Filter out numbers and spaces in input while putting input into an array
  const integerArr = Array.from(input).filter(
    (element) => Number.isInteger(Number(element)) && element !== " "
  );

  //check for no integers in the string
  if (integerArr.length === 0) {
    return `No integers found in ${input}`;
  }

  let unsortedSiblings = getSiblingsRecursive(integerArr); // launch the recursive function below. This could be a more generalised helper function outside of solution.

  function getSiblingsRecursive(arr) { //This is the recursive function that is used. 
    let result = [];
    //set base case
    if (arr.length === 1) return [arr];

    for (let i = 0; i < arr.length; i++) {
      const currentInteger = arr[i]; // get the next integer in the loop
      const seenIntegers = arr.slice(0, i); // get the integers that have come before.
      if (!seenIntegers.some((int) => currentInteger === int)) { //only proceed if currentInteger is a new one (prevents duplicate values and improves runtime)
        const remainingIntegers = seenIntegers.concat(arr.slice(i + 1)); // combine the integers that came before and came afterwards
        const remainingIntegersSiblings = getSiblingsRecursive( //call the recursive function on the rest of the integers.
          remainingIntegers
        );
        
        for (let j = 0; j < remainingIntegersSiblings.length; j++) {
          const siblingArray = [currentInteger].concat( //add the current integer to the rest.
            remainingIntegersSiblings[j]
          );
          result.push(siblingArray.join("")); //convert the result back to a string
        }
      }
    }
    return result;
  }
  //return the siblings sorted in descending order
  return unsortedSiblings.sort((a, b) => b - a);
}

// some example inputs
// console.log(solution("343"));
// expected output 632,623,362,326,263,236
console.log(solution("A 3B2 C6D")); // expected output 632,623,362,326,263,236
console.log(solution("654")); // expected output 632,623,362,326,263,236
