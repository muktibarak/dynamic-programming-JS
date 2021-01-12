// Import stylesheets
import "./style.css";

// Write Javascript code!
const appDiv = document.getElementById("app");
appDiv.innerHTML = `<h1>grid traveller 2d array</h1>`;

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
