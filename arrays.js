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