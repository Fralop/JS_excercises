//filter: take even numbers out 
function isEven(num) {
    return num % 2 === 0;
}

//map: multiply by 3
function byThree(num) {
    return num * 3;
}

//reduce: add all numbers together
function addAll(sum, num) {
    return sum + num;
}

function SumOfTripledEvens (array) {
    let filteredArr = array.filter(isEven);
    let mappedArr = filteredArr.map(byThree);
    let reducedArr = mappedArr.reduce(addAll,0);
    return reducedArr;
}

//show in console


//show in html