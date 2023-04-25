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
