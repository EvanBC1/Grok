const on_repeat_substring = function(fruits) {
  let windowStart = 0,
    maxFruit = 0,
    fruitMap = {};

  for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
    const rightFruit = fruits[windowEnd];
    if (!(rightFruit in fruitMap)) {
      fruitMap[rightFruit] = 0;
    }
    fruitMap[rightFruit]++;

    while (fruitMap[rightFruit] > 1) {
      const leftFruit = fruits[windowStart];
      fruitMap[leftFruit] -= 1;
      if (fruitMap[leftFruit] === 0) {
        delete fruitMap[leftFruit];
      }
      windowStart++;
    }
    maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1);
  }
  return maxFruit;
};

console.log('you can fit: ' + on_repeat_substring('aabccbb'));
console.log('you can fit: ' + on_repeat_substring("abbbb"));
console.log('you can fit: ' + on_repeat_substring("abccde"));