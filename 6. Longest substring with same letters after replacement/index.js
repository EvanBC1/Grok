function length_of_longest_substring(str, k) {
  let windowStart = 0,
    maxLength = 0,
    maxRepeatLetterCount = 0,
    frequencyMap = {};

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in frequencyMap)) {
      frequencyMap[rightChar] = 0;
    }
    frequencyMap[rightChar] += 1;
    maxRepeatLetterCount = Math.max(maxRepeatLetterCount, frequencyMap[rightChar]);

    if (windowEnd - windowStart + 1 - maxRepeatLetterCount > k) {
      const leftChar = frequencyMap[windowStart];
      frequencyMap[leftChar] -= 1;
      windowStart++;
    }
    maxLength = Math.max(maxLength, windowEnd - windowStart + 1)
  }
  return maxLength;
}


console.log(length_of_longest_substring('aabccbb', 2));
console.log(length_of_longest_substring('abbcb', 1));
console.log(length_of_longest_substring('abccde', 1));