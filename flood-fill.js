/*An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

You are also given three integers sr, sc, and newColor. You should perform a flood fill on the image starting from the pixel image[sr][sc].

To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with newColor.

Return the modified image after performing the flood fill.

 

Example 1:
Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: From the center of the image with position (sr, sc) = (1, 1) (i.e., the red pixel), all pixels connected by a path of the same color as the starting pixel (i.e., the blue pixels) are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected to the starting pixel.

Example 2:
Input: image = [[0,0,0],[0,0,0]], sr = 0, sc = 0, newColor = 2
Output: [[2,2,2],[2,2,2]]
 

Constraints:

m == image.length
n == image[i].length
1 <= m, n <= 50
0 <= image[i][j], newColor < 216
0 <= sr < m
0 <= sc < n
*/

// notes: sr represents source row, sc represents source column

function floodFill(image, sr, sc, newColor) {
  // store the pixel that needs to be replaced in a variable
  let current = image[sr][sc];
  // if the new color is the same as current, return the original image
  console.log('Here is the image:', image);
  if (newColor === current) return image;
  // otherwise, return a call to the helper function which will fill in the image
  return filler(image, sr, sc, newColor, current);
}
// helper function
function filler(image, sr, sc, newColor, current) {
  //If row < 0 or column < 0 or row > image length or column greater than image length, return
  if (sr < 0 || sc < 0 || sr > image.length - 1 || sc > image[sr].length - 1)
    return 'Please ensure source row and source column are valid';
  //If the current pixel is not which needs to be replaced
  if (image[sr][sc] !== current) {
    return 'Error';
  }
  //Update the new color
  image[sr][sc] = newColor;
  console.log(image);
  //Fill in all four directions
  //Fill Prev row
  filler(image, sr - 1, sc, newColor, current);
  //Fill Next row
  filler(image, sr + 1, sc, newColor, current);
  //Fill Prev col
  filler(image, sr, sc - 1, newColor, current);
  //Fill next col
  filler(image, sr, sc + 1, newColor, current);
  return image;
}

console.log(
  floodFill(
    [
      [1, 1, 1],
      [1, 1, 0],
      [1, 0, 1],
    ],
    1,
    1,
    2
  )
);
