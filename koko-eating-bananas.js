/*Koko loves to eat bananas. There are n piles of bananas, the ith pile has piles[i] bananas. The guards have gone and will come back in h hours.  Koko can decide her bananas-per-hour eating speed of k. Each hour, she chooses some pile of bananas and eats k bananas from that pile. If the pile has less than k bananas, she eats all of them instead and will not eat any more bananas during this hour. Koko likes to eat slowly but still wants to finish eating all the bananas before the guards return.  

Return the minimum integer k such that she can eat all the bananas within h hours.

Example 1:
Input: piles = [3,6,7,11], h = 8
Output: 4

Example 2:
Input: piles = [30,11,23,4,20], h = 5
Output: 30

Example 3:
Input: piles = [30,11,23,4,20], h = 6
Output: 23

Constraints:
1 <= piles.length <= 104
piles.length <= h <= 109
1 <= piles[i] <= 109
*/

/**
 * @param {number[]} piles
 * @param {number} h
 * @return {number}
 */

// var minEatingSpeed = function (piles, h) {
//   piles.sort((a, b) => a - b);
//   if (piles.length === h) return piles[piles.length - 1];
//   const max = Math.max(...piles);
//   for (let i = 1; i <= max; i++) {
//     // if (piles[i] >= 10 ** 9) return piles[i];
//     let sum = 0;
//     for (let pile of piles) {
//       sum += Math.ceil(pile / i);
//     }
//     if (sum <= h) return i;
//   }
// };

// optimized solution
// const minEatingSpeed = (piles, h) => {
//   let min = 1,
//     max = Math.max(...piles),
//     best = max;

//   const time = (speed) =>
//     piles.reduce((sum, pile) => sum + Math.ceil(pile / speed), 0);

//   while (min <= max) {
//     const mid = Math.floor((min + max) / 2);

//     if (time(mid) <= h) {
//       best = mid;
//       max = mid - 1;
//     } else min = mid + 1;
//   }

//   return best;
// };

//
function minEatingSpeed(piles, h) {
  let result = Math.max(...piles);
  let [left, right] = [1, result];

  while (left <= right) {
    let hours = 0;
    let k = Math.floor((left + right) / 2);
    for (let pile of piles) {
      hours += Math.ceil(pile / k);
    }
    if (hours <= h) {
      result = Math.min(result, k);
      right = k - 1;
    } else left = k + 1;
  }

  return result;
}

console.log(minEatingSpeed([3, 6, 7, 11], 8)); // expect 4
console.log(minEatingSpeed([30, 11, 23, 4, 20], 5)); // expect 30
console.log(minEatingSpeed([30, 11, 23, 4, 20], 6)); // expect 23
