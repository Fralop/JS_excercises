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

let usersMapped = [...users]; 
usersMapped.forEach((item, index) => {
    let newItem = {
        fullName: item.name + ' ' + item.surname,
        id: item.id
    };
    usersMapped[index] = newItem;
});

/* Website solution:
let usersMapped = users.map(user => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id
}));
*/

//Exercise 8: Sort by age
let johnsito = { name: "John", age: 25 };
let petesito = { name: "Pete", age: 30 };
let marysita = { name: "Mary", age: 28 };

let arr8 = [ petesito, johnsito, marysita ];

function sortByAge (arr) {
    newArr = arr.sort((a,b) => a.age-b.age);
    return newArr;
}

let sortedByAge = sortByAge(arr8);
console.log(sortedByAge);

//Excercise 9: shuffle array
let arr9 = [1,2,3];
function shuffle (arr) {
    arr.sort((a,b) => Math.random() * 2 - 1);
} //not the Fisher-Yates Shuffle

//Excercise 10: Get average age
let john10 = { name: "John", age: 25 };
let pete10 = { name: "Pete", age: 30 };
let mary10 = { name: "Mary", age: 29 };

let arr10 = [ john10, pete10, mary10 ];

function getAverageAge (arr) {
   let averageAge = arr.reduce(addAll, 0) / arr.length;
   return averageAge; 
};

function addAll (sum,item) {
    return sum + item.age;
};


// (25 + 30 + 29) / 3 = 28