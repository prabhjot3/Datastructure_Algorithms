function findLongestSubstring(str) {
  let longest = 0;
  let seen = {};
  let start = 0;
  let end = 0;

  while (end < str.length) {
    let char = str[end];
    if (seen[char]) {
      const index = str.indexOf(char);
      start = index + 1;
      str = str.split("").splice(start).join("");
      seen = {};
      end = 0;
      start = 0;
    } else {
      seen[char] = 1;
      longest = Math.max(longest, end - start + 1);
      end++;
    }
  }
  return longest;
}

console.log(findLongestSubstring("longestsubstring"));
