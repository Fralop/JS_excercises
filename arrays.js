//ARRAY METHODS EXCERCISES

//Excercise 1: Translate border-left-width to borderLeftWidth
function camelize (str) {
    arr = str.split('-');
    capitalizedArr = arr.map(capitalize)
    newString = capitalizedArr.join('');
    return newString;
}

function capitalize (str, index) {
    if (index == 0) {
      newString = str;
    } else newString = str[0].toUpperCase() + str.slice(1);
    return newString
}

//Excercise 2: Filter Range
function filterRange (arr, a, b) {
    filteredArr = arr.filter(item => (item >= a && item <=b));
    return filteredArr;
}

//Excercise 3: Filter range "in place"
const arr = [2,5,25,35,48];
function filterRangeInPlace(arr, a, b) {
    let indices = [];
    arr.forEach((item, index) => {
        if (item < a || item > b) {
            indices.push(index);
        }
    });
    indices.forEach(item => {
        arr.splice(item, 1);
    })
    return arr;
}

//Excercise 4: Sort in decreasing order
let arr4 = [5, 2, 1, -10, 8];
function reverseArr (arr) {
    newArr = arr.sort((a,b) => b-a);
    return newArr;
}

//Exc. 5: copy and sort array
let arr5 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr5);
function copySorted(arr) {
    let temp = arr.slice();
    return temp.sort();
}

//Exc. 6: map to names
//let john = { name: "John", age: 25 };
//let pete = { name: "Peter", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let users = [ john, pete, mary ];
//
//let names = users.map(item => item.name).join(', ');

//Exc. 7: map to objects
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [ john, pete, mary ];

let usersMapped = /* ... your code ... */

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

alert( usersMapped[0].id ) // 1
alert( usersMapped[0].fullName )