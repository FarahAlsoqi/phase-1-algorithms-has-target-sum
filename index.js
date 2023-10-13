function hasTargetSum(array, target) {
  // Write your algorithm here
  for(i=0; i<array.length; i++){
    for (j=i+1; j<array.length; j++){
      if ( array[i] + array[j] == target ){
        return true
      }
    }
  }
   return false
}

/* 
  Write the Big O time complexity of your function here
  n^2
*/

/* 
  Add your pseudocode here
1. Create a function `hasTargetSum` takes two parameters: `array` and `target`.
2. Create nested loop, the outer loop start from index zero(i=0), the inner loop start from index 1 or (J=i+1)
3. Create condition inside the nested loop checking if their sum is equal to the target
4. if sum is equal to the target return ture
5. otherwise, return false 

*/

/*
  Add written explanation of your solution here
1. The `hasTargetSum` function takes in an array of integers (`array`) and a target integer (`target`) as its parameters.
2. The function uses two nested loops to iterate through each possible pair of numbers in the array.
3. The outer loop iterates over the array from the first element to the second-to-last element. It uses the index variable `i`.
4. The inner loop iterates over the array from the element next to the current outer loop element to the last element. It uses the index variable `j`.
5. Inside the inner loop, the function checks if the sum of the current element at index `i` and the element at index `j` is equal to the target. If it is, the function immediately returns `true` to indicate that a pair of numbers adding up to the target has been found.
6. If the loops complete without finding a pair that adds up to the target, the function reaches the `return false` statement, indicating that no pair was found.

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
