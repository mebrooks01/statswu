const setString = 'AABC'
const chooseInt = 3

function genCombs(input, size) {
  const result = []
  function genComms(current, start) {
    if (current.length === size) {
      result.push(current.join(''))
      return
    }

    for (let i = start; i < input.length; i++) {
      current.push(input[i])
      genComms(current.slice(), i + 1)
      current.pop()
    }
  }

  genComms([], 0)

  return result
} //generates an array of strings of valid combinations

const result = genCombs(setString, chooseInt)
console.log(result)

//code to revise

function countLetters(str) {
  const count = {}
  for (let char of str) {
    count[char] = (count[char] || 0) + 1
  }
  return count
}

function hasSameLetterCount(str1, str2) {
  const count1 = countLetters(str1)
  const count2 = countLetters(str2)

  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false
  }

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false
    }
  }

  return true
}

function removeDuplicates(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true
    for (let j = 0; j < result.length; j++) {
      if (hasSameLetterCount(arr[i], result[j])) {
        isUnique = false
        break
      }
    }
    if (isUnique) {
      result.push(arr[i])
    }
  }
  return result
}

const inputArray = ['AAB', 'AAC', 'ABC', 'ACB']
const uniqueArray = removeDuplicates(inputArray)
console.log(uniqueArray) // Output: ['AAB', 'AAC', 'ABC']
