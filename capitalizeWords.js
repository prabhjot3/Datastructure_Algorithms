/*
Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
*/


function capitalizeWords(arr) {
    let result = [];
    (function helper(helperInput) {
        if(helperInput.length) {
            result = [...result, helperInput[0].toUpperCase()];
            helperInput = helperInput.slice(1);
            helper(helperInput);
        }
    })(arr)
    return result; 
}
console.log(capitalizeWords(['i', 'am', 'capitalizing', 'words']));