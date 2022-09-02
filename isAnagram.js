function isAnagram(str1, str2) {
    if (str1.length !== str2.length) {
      return false;
    }
    let freqObj1 = {};
    let freqObj2 = {};
    for(let char of str1) {
      freqObj1[char] = (freqObj1[char] || 0) +1;
    }
    for(let char of str2) {
      freqObj2[char] = (freqObj2[char] || 0) +1;
    }
    console.log(freqObj1, freqObj2)
    for(let key in freqObj1) {
      if(freqObj2[key] !== undefined && freqObj1[key] === freqObj2[key]) {
        return true
      } else {
        return false
      }
    }
  }
  
  console.log(isAnagram("swwonuw", "onwswwu"));