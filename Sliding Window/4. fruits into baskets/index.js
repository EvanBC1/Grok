// const fruits_into_baskets = function(fruits) {
// let windowStart = 0,
//   maxFruit = 0,
//   fruitMap = {};
//
//   for (let windowEnd = 0; windowEnd < fruits.length; windowEnd++) {
//     const rightFruit = fruits[windowEnd];
//     if (!(fruitMap[rightFruit])) {
//       fruitMap[rightFruit] = 0;
//     }
//     fruitMap[rightFruit]++;
//
//     while (Object.keys(fruitMap).length > 2) {
//       const leftFruit = fruits[windowStart];
//       fruitMap[leftFruit] -= 1;
//       if (fruitMap[leftFruit] === 0) {
//         delete fruitMap[leftFruit];
//       }
//       windowStart++;
//     }
//     maxFruit = Math.max(maxFruit, windowEnd - windowStart + 1);
//   }
//   return maxFruit;
// };
//
// console.log('you can fit: ' + fruits_into_baskets(['A', 'B', 'C', 'A', 'C']));
// console.log('you can fit: ' + fruits_into_baskets(['A', 'B', 'C', 'B', 'B', 'C']));