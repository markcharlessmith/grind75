/*
You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

Return intervals after the insertion.

Example 1:
Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Example 2:
Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].
*/

/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */

// inputs: an array of arrays, representing intervals, and a newInterval array
// output: a mutated array of arrays intervals
const insert = function (intervals, newInterval) {
  // check if intervals and newInterval are valid arrays
  if (!Array.isArray(intervals) || !Array.isArray(newInterval)) {
    return 'input data type is invalid';
  }
  const result = [];
  // loop through the intervals array
  for (let i = 0; i < intervals.length; i++) {
    let interval = intervals[i];
    // if there is an overlap
    if (
      Math.max(interval[0], newInterval[0]) <=
      Math.min(interval[1], newInterval[1])
    ) {
      newInterval = [
        Math.min(interval[0], newInterval[0]),
        Math.max(interval[1], newInterval[1]),
      ];
      continue;
    }

    // if lower
    if (interval[0] > newInterval[1]) {
      result.push(newInterval, ...intervals.slice(i));
      return result;
    }
    result.push(interval);
    // return the mutated array of arrays, intervals
  }
  result.push(newInterval);
  return result;
};

const intervals = [
  [1, 3],
  [6, 9],
];
const newInterval = [2, 5];
console.log(insert(intervals, newInterval)); // expect [[1,5],[6,9]]

const intervals2 = [
  [1, 2],
  [3, 5],
  [6, 7],
  [8, 10],
  [12, 16],
];
const newInterval2 = [4, 8];
console.log(insert(intervals2, newInterval2)); // expect [[1,2], [3,10], [12,16]]
