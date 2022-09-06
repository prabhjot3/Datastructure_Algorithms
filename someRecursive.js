/*
Write a recursive function called someRecursive which accepts an array and a callback.
The function returns true if a single value in the array returns true when passed to the callback. Otherwise it returns false.
*/

const isOdd = val => val % 2 !== 0;
function someRecursive(arr, cb) {
    let isValid = false;
    (function helper(helperInput) {
        if (!helperInput.length) return isValid;
        isValid = cb(helperInput[0]);
        if (isValid) return isValid;
        helper(helperInput.splice(1));
    })(arr)
    return isValid;
}
console.log(someRecursive([1,2,3,4], isOdd))