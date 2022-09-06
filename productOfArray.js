/*
Write a function called productOfArray which takes in an array of numbers and returns the product of them all.
*/

function productOfArray(arr) {
    let result = 1;

(function helper(helperInput) {
    if (!helperInput.length) return result;
    result *= helperInput[0];
    helperInput = helperInput.splice(1);
    helper(helperInput);
    
    
})(arr);

return result;
}
console.log(productOfArray([1,2,3,4,6,8]))