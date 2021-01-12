// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>grid traveller 2d array</h1>`;
/**
 * Problem 1:
 * Say that you are a traveller on a 2D grid. You begin in the top-left
 * corner and your goal is to travel to the bottom-right corner.
 * You may only move down or right.
 * In how many ways can you travel to the goal on a grid with dimensions
 * m * n ?
 */

const gridTraveller = (m, n, memo = {}) => {
  // are these args in the memo?
  const key = m + "," + n;
  if (key in memo) return memo[key];
  if (m === 1 && n === 1) return 1;
  if (m === 0 || n === 0) return 0;
  memo[key] = gridTraveller(m - 1, n, memo) + gridTraveller(m, n - 1, memo);
  return memo[key];
};

console.log(gridTraveller(1, 1));
console.log(gridTraveller(3, 2));
console.log(gridTraveller(2, 3));
console.log(gridTraveller(3, 3));
console.log(gridTraveller(18, 18));
console.log(gridTraveller(47, 56));

// Memoization receipe
/**
 * Make it work first:
 * - visualize the problem as a tree
 * - implement the tree using recursion
 * - test the result
 *
 * Make it efficient
 * - add a memo object
 * - add a base case to return memo value
 * - store return values into the memo
 */

/**
 * Problem 2:
 * Write a function 'canSum(targetSum, numbers)' that takes in a targetSum and
 * an array of numbers as arguments.
 * The function should return a boolean indicating whether or not it is
 * possible to generate the targetSum using numbers from the array.
 * You may use an element of an array as many times as needed.
 * You also may assume that all the input numbers are non negative.
 * eg: canSum(7, [5, 3, 4, 7]) ---> true //as 4 + 7 = 7
 * eg: canSum(7, [2, 3]) ---> true //as 2+2+3 = 7
 * eg: canSum(7, [2, 4]) ---> false // as there is no way we can add and get 7
 *
 */

const canSum = (targetSum, numbers, memo = {}) => {
  if (targetSum in memo) return memo[targetSum];
  if (targetSum === 0) return true;
  if (targetSum < 0) return false;
  // lets iterate over numbers array

  for (let num of numbers) {
    const remainder = targetSum - num;
    if (canSum(remainder, numbers, memo) === true) {
      memo[targetSum] = true;
      return true;
    }
  }
  memo[targetSum] = false;
  return false;
};

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3]));
console.log(canSum(307, [44, 34, 33]));

/**
 * Problem 3:
 * Write a function 'howSum(targetSum, numbers)' that takes in a
 * targetSum and an array of numbers as args.
 * The function should return an array containing any combination of the
 * elements that add up to exactly the targetSum, then return null.
 * If there are multiple combinations possible, you may return any single one.
 *
 * howSum(7, [5, 3, 4, 7]) ---> [7] or [3, 4]
 * howSum(8, [2, 3, 5]) ---> [3, 5] or [2, 2, 2, 2]
 */

const howSum = (targetedSum, numArr, memo = {}) => {
  if (targetedSum in memo) return memo[targetedSum];
  if (targetedSum === 0) return [];
  if (targetedSum < 0) return null;

  for (let num of numArr) {
    const remainder = targetedSum - num;
    const remainderResult = howSum(remainder, numArr, memo);
    if (remainderResult !== null) {
      memo[targetedSum] = [...remainderResult, num];
      return memo[targetedSum];
    }
  }
  memo[targetedSum] = null;
  return null;
};

console.log(howSum(7, [2, 3]));
console.log(howSum(7, [5, 3, 4]));
console.log(howSum(7, [2, 4]));
console.log(howSum(8, [2, 3]));
console.log(howSum(307, [7, 14]));
