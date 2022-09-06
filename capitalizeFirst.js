/*
Write a recursive function called capitalizeFirst. Given an array of strings, capitalize the first letter of each string in the array.
*/

function capitalizeFirst(arr) {
    let result = [];
    (function helper (helperInput) {
    if(helperInput.length) {
        result.push(helperInput[0].charAt(0).toUpperCase() + helperInput[0].substring(1));
        helperInput = helperInput.splice(1);
        helper(helperInput);
    }
return result;
})(arr)
return result;
}
console.log(capitalizeFirst(['son', 'daughter', 'wife']));