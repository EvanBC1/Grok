const max_sub_array_of_size_k = function(k, arr) {
  let largestSoFar = 0;
  for (let i = 0; i + k < arr.length + 1; i++) {
    let sum = 0;
    for (let j = i; j - i < k; j++) {
      sum += arr[j];
    }
    if(sum > largestSoFar) {
      largestSoFar = sum;
    }
  }
  return largestSoFar;
};

console.log(max_sub_array_of_size_k(2, [2, 3, 4, 1, 5]));