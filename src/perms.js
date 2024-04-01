set = ["A", "A", "C", "D"];
pick = 2;
if (pick > set.length) return console.error("Invalid Pick value");

function removeDups(arr) {
  string = JSON.stringify(
    arr.filter(
      (item, index, self) =>
        index ===
        self.findIndex((t) => JSON.stringify(t) === JSON.stringify(item))
    )
  );
  let dPerms = JSON.parse(string);
  return dPerms;
} //removes duplicate arrays

function genPerms(input) {
  let rawPerms = [];

  function permute(arr, m = []) {
    if (arr.length === 0) {
      rawPerms.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        const curr = arr.slice();
        const next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  }
  permute(input);
  return removeDups(rawPerms);
} //generates all non-distinct permutations for a given set

function joinArr(arr) {
  let string = JSON.stringify(arr).replace(/[\[\]]/g, "");
  let newArr = JSON.parse(`[${string}]`);
  return newArr;
} //joins the generated permutations arrays together in one array

function newPerms(arr) {
  perms = [];
  for (let i = 0; i <= arr.length - pick; i++) {
    perms.push(arr.slice(i, i + pick));
  }
  return removeDups(perms);
} //slices new arrays from a master array based on the pick integer

function sanityCheck(arr) {
  let outputArr = [];
  let setObj = {};
  set.forEach((element) => {
    setObj[element] = (setObj[element] || 0) + 1;
  });

  arr.forEach((element) => {
    if (compare(setObj, elementObj(element))) {
      outputArr.push(element);
    }
  });

  function elementObj(arr) {
    let arrObj = {};
    arr.forEach((element) => {
      arrObj[element] = (arrObj[element] || 0) + 1;
    });
    return arrObj;
  }

  function compare(set, arr) {
    for (const element in arr) {
      if (!(element in set) || arr[element] > set[element]) {
        return false;
      }
    }
    return true;
  }
  return outputArr;
} //checks array of arrays for invalid arrays

const output = sanityCheck(newPerms(joinArr(genPerms(set))));
console.log(`Original Set: ${set}`);
console.log(`Pick: ${pick}`);
console.log(`Distinct Permutations: ${output.length}`);

/*for explanation purposes only

console.log('All permutations w/o duplicates')
console.log(genPerms(set))
console.log(genPerms(set).length)

console.log('Join all permutations together in one string')
console.log(joinArr(genPerms(set)))

console.log('Generate a new set of permutations from the string')
console.log(newPerms(joinArr(genPerms(set))))
console.log(newPerms(joinArr(genPerms(set))).length)

console.log('Remove invalid permutations')
console.log(output)
console.log(output.length)
*/
