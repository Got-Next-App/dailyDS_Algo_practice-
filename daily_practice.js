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
