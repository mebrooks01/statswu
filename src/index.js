const setString = 'ABCDABCDABCD'
const chooseInt = 5

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

function stringObj(str) {
  const obj = {}
  for (let char of str) {
    obj[char] = (obj[char] || 0) + 1
  }
  return obj
} //generates an object of letter counts for a given string

function objCheck(str1, str2) {
  const count1 = stringObj(str1)
  const count2 = stringObj(str2)

  if (Object.keys(count1).length !== Object.keys(count2).length) {
    return false
  }

  for (let char in count1) {
    if (count1[char] !== count2[char]) {
      return false
    }
  }

  return true
}//checks if two objects match

function removeDups(arr) {
  const result = []
  for (let i = 0; i < arr.length; i++) {
    let isUnique = true
    for (let j = 0; j < result.length; j++) {
      if (objCheck(arr[i], result[j])) {
        isUnique = false
        break
      }
    }
    if (isUnique) {
      result.push(arr[i])
    }
  }
  return result
} //removes duplicate combinations 

const combos = genCombs(setString, chooseInt)
const validCombos = removeDups(combos)

console.log(combos)

console.log(`Original Set: ${setString}`)
console.log(`Chose: ${chooseInt}`)
console.log(`Distinct Combinations: ${validCombos.length}`)
console.log(validCombos)
