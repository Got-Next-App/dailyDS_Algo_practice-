//April 24, 2023 Monday

function findMinMax(arr) {
  let maxVal = arr[0]
  let minVal = arr[0]

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] > maxVal) {
      maxVal = arr[i]
    } else if (arr[i] < minVal) {
      minVal = arr[i]
    }
  }
  return [minVal, maxVal]
}

const arr = [3, 5, 1, 9, 2, 6]
const [minVal, maxVal] = findMinMax(arr)

console.log(`Minimum value is: ${minVal}`)
console.log(`Maximum value is: ${maxVal}`)

//April 25, 2023 Tuesday
// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

// The problem is asking you to find two numbers in a list of numbers (array)
// that add up to a specific number (target). The solution should return the index of each of
// the two numbers in the original list. You cannot use the same number twice, and there is only one correct answer. You can present the answer in any order.
// 0(n^2) time complexity
const twoSum = (nums, target) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j]
      }
    }
  }
}
console.log(twoSum([2, 7, 11, 15], 22))

//Time complexity 0(n) more efficient than 0(n^2)
const twoSumVersionTwo = (nums, target) => {
  // Create an empty object called numsMap. This object will serve as the hash table.
  const numsMap = {}

  for (let i = 0; i < nums.length; i++) {
    // Use a for loop to iterate through the nums array. For each element in the array,
    // calculate its complement (the difference between the target and the current element).
    const complement = target - nums[i]
    // Check if the complement exists as a key in the numsMap object. If it does,
    if (numsMap[complement] !== undefined) {
      // then return an array containing the indices of the current element and its complement.
      // The complement's index is already stored in the numsMap object,
      // so you just need to add the current element's index to complete the answer.
      return [numsMap[complement], i]
    }
    numsMap[nums[i]] = i
  }
}

console.log(twoSumVersionTwo([2, 7, 11, 15], 22))

//April 26 2003 Wednesday
// Given a square matrix, calculate the absolute difference between the sums of its diagonals.

// For example, the square matrix  is shown below:

// 1 2 3
// 4 5 6
// 9 8 9
const matrix = [
  [1, 2, 7],
  [4, 5, 6],
  [7, 8, 4]
]
const diagonalDifference = (arr) => {
  let diagonal1 = 0
  let diagonal2 = 0

  for (let i = 0; i < arr.length; i++) {
    diagonal1 += arr[i][i]
    // arr.length - i gives us the index of the element on the opposite diagonal.
    // For example, if we're on the first row (i = 0) of a 3x3 matrix
    // arr.length - i gives us 3, which is the
    // index of the element on the opposite diagonal (7).
    // we subtract 1 from this index to get the correct index of the element
    // on the second diagonal. For example, if we're on the first row of a 3x3 matrix
    // arr.length - i - 1 gives us 2, which is the index of the first element on the second diagonal (3).

    diagonal2 += arr[i][arr.length - i - 1]
  }
  return Math.abs(diagonal1 - diagonal2)
}

console.log(diagonalDifference(matrix))
