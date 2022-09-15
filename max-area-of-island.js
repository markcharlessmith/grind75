/*You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

The area of an island is the number of cells with a value 1 in the island. 

Return the maximum area of an island in grid. If there is no island, return 0.

Example 1:
Input: grid = [[0,0,1,0,0,0,0,1,0,0,0,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,1,1,0,1,0,0,0,0,0,0,0,0],[0,1,0,0,1,1,0,0,1,0,1,0,0],[0,1,0,0,1,1,0,0,1,1,1,0,0],[0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,1,1,0,0,0,0]]
Output: 6
Explanation: The answer is not 11, because the island must be connected 4-directionally.

Example 2:
Input: grid = [[0,0,0,0,0,0,0,0]]
Output: 0

Constraints:
m == grid.length
n == grid[i].length
1 <= m, n <= 50
grid[i][j] is either 0 or 1.
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */

// perform a depth first search of the matrix (helper fx)
function dfs(grid, i, j) {
  // check if the i and j values are valid - if they aren't, return out
  if (
    i < 0 ||
    i >= grid.length ||
    j < 0 ||
    j >= grid[0].length ||
    grid[i][j] === 0
  )
    return;
  // reassign any values that are '1' to '0'
  grid[i][j] = 0;
  // look in all four directions, and call dfs for each
  dfs(grid, i + 1, j);
  dfs(grid, i - 1, j);
  dfs(grid, i, j + 1);
  dfs(grid, i, j - 1);
}

var maxAreaOfIsland = function (grid) {
  // declare a variable to represent the greatest area of an island, initialized at zero
  let greatestArea = 0;
  let temp = 0;
  console.log('hello');
  // loop through the grid
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // if the value at the index is '1', increase count by 1 and call dfs
      if (grid[i][j] === 1) {
        temp += 1;
        // console.log(temp);
        dfs(grid, i, j);
      }
      if (temp > greatestArea) {
        greatestArea = temp;
      }
    }
  }
  console.log(greatestArea);
  return greatestArea;
};

const grid1 = [
  [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
  [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0],
];
console.log(maxAreaOfIsland(grid1)); // expect 6

const grid2 = [[0, 0, 0, 0, 0, 0, 0, 0]];
console.log(maxAreaOfIsland(grid2)); // expect 0
