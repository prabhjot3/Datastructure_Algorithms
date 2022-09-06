/*
Write a recursive function called isPalindrome which returns true if the string passed to it is a palindrome
 (reads the same forward and backward). Otherwise it returns false.
*/

function isPalindrome(str) {
    let isPalindrome = false;
    (function helper(helperInput) {
        if(helperInput.length ===1) return isPalindrome;
        if (helperInput[0] === helperInput[helperInput.length-1]){
            isPalindrome = true;
            helper(helperInput.substring(1, helperInput.length-1))
        } else {
            isPalindrome = false;
        }
    })(str)
    return isPalindrome;
}
console.log(isPalindrome('foobar'))