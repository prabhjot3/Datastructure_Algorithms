/*
Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.
Recursion would be a great way to solve this!
*/

function stringifyNumbers(obj) {
    var newObj = {};
    for (let key in obj) {
        if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
            newObj[key]= stringifyNumbers(obj[key])
        } else if(typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString();
            console.log(obj[key])
        } else {
            newObj[key] = obj[key];
        }
    }
    return newObj;
}
console.log(stringifyNumbers({
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}))