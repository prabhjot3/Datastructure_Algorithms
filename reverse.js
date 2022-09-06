/*
Write a recursive function called reverse which accepts a string and returns a new string in reverse.
*/

function reverse(str) {
    let reverse = "";
    (function helper(helperInput) {
        if (!helperInput.length) return reverse;
        reverse += helperInput[helperInput.length-1];
        helper(helperInput.substring(0,helperInput.length-1))
    
    })(str);
    return reverse;

}
console.log(reverse("hello"))