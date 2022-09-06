/*
Write a function called collectStrings which accepts an object and returns an array of all the values in the object that have a typeof string
*/

function collectStrings(obj) {
    let result  = [];
    (function helper(helperInput) {
        for(let key in helperInput) {
            if(typeof helperInput[key] === 'string') {
                result.push(helperInput[key]);
            } else if(typeof helperInput[key] === 'object') {
                 helper(helperInput[key])
            }
        }
    })(obj)
  
    return result;
}
console.log(collectStrings({
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}))