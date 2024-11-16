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

