const length_of_longest_substring = function(str, k) {
  let windowStart = 0,
    longestSubString = 0,
    maxRepeatLetterCount = k,
    stringMap = {};


  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightFruit = str[windowEnd];
    if (!(rightFruit in stringMap)) {
      stringMap[rightFruit] = 0;
    }
    stringMap[rightFruit]++;

    while (stringMap[rightFruit] > 1) {
      const leftFruit = str[windowStart];
      stringMap[leftFruit] -= 1;
      if (stringMap[leftFruit] === 0) {
        delete stringMap[leftFruit];
      }
      windowStart++;
    }
    longestSubString = Math.max(longestSubString, windowEnd - windowStart + 1);
  }
  return longestSubString;
};

console.log('you can fit: ' + length_of_longest_substring('aabccbb', k=2));
console.log('you can fit: ' + length_of_longest_substring("abbbb", k=1));
console.log('you can fit: ' + length_of_longest_substring("abccde", k=1));