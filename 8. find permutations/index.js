const find_permutation = function(str, pattern) {
let patternMap = {},
  strMap = {},
  windowStart = 0;

  for (let i = 0; i < pattern.length; i++) {
    const rightChar = pattern[i];
    if (!(rightChar in patternMap)) {
      patternMap[rightChar] = 0;
    }
    patternMap[rightChar] += 1;
  }

  for (let windowEnd = 0; windowEnd < str.length; windowEnd++) {
    const rightChar = str[windowEnd];
    if (!(rightChar in strMap)) {
      strMap[rightChar] = 0;
    }
    strMap[rightChar] += 1;

    if (windowEnd - windowStart + 1 >= pattern.length) {
      const strKeys = Object.keys(strMap).sort();
      const patternKeys = Object.keys(patternMap).sort();

      if (JSON.stringify(strKeys) === JSON.stringify(patternKeys)) {
        return true;
      }
      const leftChar = str[windowStart];
      strMap[leftChar] -= 1;
      if (strMap[leftChar] === 0) {
        delete strMap[leftChar]
      }
      windowStart++;
    }
  }
  return false;
};

console.log(find_permutation('oidbcaf', 'abc'));
console.log(find_permutation('odicf', 'dc'));
console.log(find_permutation('bcdxabcdy', 'bcdxabcdy'));
console.log(find_permutation('aaacb', 'abc'));