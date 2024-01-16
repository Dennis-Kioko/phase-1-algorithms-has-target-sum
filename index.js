function hasTargetSum(array, target) {
  // Write your algorithm here
  const n = array.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      if (array[i] + array[j] === target) {
        return true;
      }
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
*/ 
// The time complexity uses quadratic time complexity O(n^2), 
//      where "n" is the length of the input array.
// This is because the function uses nested loops iteration 
//      to compare each pair of elements in the array,

/* 
  Add your pseudocode here
  Create a function that has two arguments(array, target)
  create a function to find the length of the array
  itereate over the elements of an array to find whether their sum equals to target
          if true returns true;
          if false return false;
*/

/*
  Add written explanation of your solution here
  // Outer loop (for (let i = 0; i < n; i++)) iterates through each element in the array
  // The inner loop (for (let j = i + 1; j < n; j++)) iterates through elements
      after the current element arr[i]
  // Function checks if the sum of elements at indices i and j equals the target, returning true
  // If no pair is found after both loops, the function returns false    
  
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
