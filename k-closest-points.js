/*Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

Example 1:
Input: points = [[1,3],[-2,2]], k = 1
Output: [[-2,2]]
Explanation:
The distance between (1, 3) and the origin is sqrt(10).
The distance between (-2, 2) and the origin is sqrt(8).
Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].

Example 2:
Input: points = [[3,3],[5,-1],[-2,4]], k = 2
Output: [[3,3],[-2,4]]
Explanation: The answer [[-2,4],[3,3]] would also be accepted.

Constraints:
1 <= k <= points.length <= 104
-104 < xi, yi < 104*/

/**
 * @param {number[][]} points
 * @param {number} k
 * @return {number[][]}
 */
// const kClosest = function (points, k) {
//   const squaredDistance = ([x, y]) => x ** 2 + y ** 2;
//   // Calculate and return the squared Euclidean distance
//   // Sort the array with a custom lambda comparator function
//   points.sort((a, b) => squaredDistance(a) - squaredDistance(b));

//   // Return the first k elements of the sorted array
//   return points.slice(0, k);
// };

// using binary search
const kClosest = function (points, k) {
  // Precompute the Euclidean distance for each point
  let distances = points.map(euclideanDistance);
  // Create a reference array of point indices
  let remaining = points.map((_, i) => i);
  // Define the initial binary search range
  let low = 0,
    high = Math.max(...distances);
  // Perform a binary search of the distances
  // to find the k closest points
  let closest = [];
  while (k) {
    let mid = low + (high - low) / 2;
    let [closer, farther] = splitDistances(remaining, distances, mid);
    if (closer.length > k) {
      // If more than k points are in the closer distances
      // then discard the farther points and continue
      remaining = closer;
      high = mid;
    } else {
      // Add the closer points to the answer array and keep
      // searching the farther distances for the remaining points
      k -= closer.length;
      closest.push(...closer);
      remaining = farther;
      low = mid;
    }
  }

  // Return the k closest points using the reference indices
  return closest.map((i) => points[i]);
};

var splitDistances = function (remaining, distances, mid) {
  // Split the distances around the midpoint
  // and return them in separate arrays
  let closer = [],
    farther = [];
  for (let index of remaining) {
    if (distances[index] <= mid) {
      closer.push(index);
    } else {
      farther.push(index);
    }
  }
  return [closer, farther];
};

// Calculate and return the squared Euclidean distance
const euclideanDistance = ([x, y]) => x ** 2 + y ** 2;

const points = [
    [3, 3],
    [5, -1],
    [-2, 4],
  ],
  k = 2;
console.log(kClosest(points));
