const max_sub_array_of_size_k = function(k, arr) {
  let maxSum = 0,
    windowSum = 0,
    windowStart = 0;
  for (let i = 0; i < arr.length; i++) {
    windowSum += arr[i];
    if (i >= k) {
      windowSum -= arr[windowStart];
      maxSum = Math.max(maxSum, windowSum);
      windowStart++;

    }
  }
  return maxSum;
};

console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));