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
    console.log(array);
    console.log(filteredArr);
    let mappedArr = filteredArr.map(byThree);
    console.log(mappedArr);
    let reducedArr = mappedArr.reduce(addAll,0);
    return reducedArr;
}
// Define array
let arr = [2, 3, 8, 10, 13, 15, 17, 20, 21, 23, 25, 26]

//show in console
console.log(SumOfTripledEvens(arr));

//show in html
const body = document.querySelector('body');
const para = document.createElement('p');
para.textContent = SumOfTripledEvens(arr);
body.appendChild(para);
console.log(para);
