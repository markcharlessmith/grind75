/*You are given an array of integers stones where stones[i] is the weight of the ith stone.
We are playing a game with the stones. On each turn, we choose the heaviest two stones and smash them together. Suppose the heaviest two stones have weights x and y with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y has new weight y - x.
At the end of the game, there is at most one stone left.

Return the weight of the last remaining stone. If there are no stones left, return 0.

Example 1:
Input: stones = [2,7,4,1,8,1]
Output: 1
Explanation: 
We combine 7 and 8 to get 1 so the array converts to [2,4,1,1,1] then,
we combine 2 and 4 to get 2 so the array converts to [2,1,1,1] then,
we combine 2 and 1 to get 1 so the array converts to [1,1,1] then,
we combine 1 and 1 to get 0 so the array converts to [1] then that's the value of the last stone.\

Example 2:
Input: stones = [1]
Output: 1
*/

/**
 * @param {number[]} stones
 * @return {number}
 */
const lastStoneWeight = function (stones) {
  if (!Array.isArray(stones))
    return 'please smash together a valid pile of stones';

  if (stones.length === 0) return 'no stones were smashed';

  let greatest = -Infinity;
  let nextGreatest = -Infinity;
  let difference = 0;

  // sort the stones array from greatest to least
  stones = stones.sort((a, b) => {
    return b - a;
  });
  console.log(stones);
  // for (let i = 0; i < stones.length; i++) {
  while (stones.length > 1) {
    // take the difference of the two greatest values
    greatest = stones[0];
    nextGreatest = stones[1];
    // console.log([greatest, nextGreatest]);
    difference = greatest - nextGreatest;
    // console.log(difference);
    // push the difference onto the stones array
    stones.push(difference);
    stones.shift();
    stones.shift();
    // console.log(stones);
    if (stones.length === 0) return 0;
  }
  return stones[0];
};

const pileOfStones1 = [2, 7, 4, 1, 8, 1];
console.log(lastStoneWeight(pileOfStones1)); // expect 1

const pileOfStones2 = [1];
console.log(lastStoneWeight(pileOfStones2)); // expect 1

const pileOfStones3 = [2, 2, 3, 1, 3, 1];
console.log(lastStoneWeight(pileOfStones3)); // expect 0

const pileOfStones4 = 'x';
console.log(lastStoneWeight(pileOfStones4));

const pileOfStones5 = [];
console.log(lastStoneWeight(pileOfStones5));
