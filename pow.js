/*
Write a function called power which accepts a base and an exponent. The function should return the power of the base to the exponent.
This function should mimic the functionality of Math.pow()  - do not worry about negative bases and exponents.
*/
function pow(num, exp) {
if (exp === 1) {
    return num;
}
else if (exp === 0) return 1;
return num * pow(num, exp-1);
}
console.log(pow(2,0))
