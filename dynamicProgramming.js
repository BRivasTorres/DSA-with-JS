//#MEMOIZATION
// js object, keys wil be arg to fn, value will the be return value
//&Make it work.
//     visualize the problem as a tree
//     implement the tree using recursion
//      test it
//&Make it efficient
//      add a memo object
//      add a base case to return memo values
//      store retrun values into the memo

// const fib = (n, memo = {}) => {
// 	if (n in memo) return memo[n];
// 	if (n <= 2) return 1;
// 	memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
// 	return memo[n];
// };
// console.log(fib(4))

//*Grid Traveler
// const gridTraveler = (m, n) => {
// 	if (m === 1 && n === 1) return 1;
// 	if (m === 0 || n === 0) return 0;
// 	return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
// };
// console.log(gridTraveler(3, 2));

// const gridTraveler = (m, n, memo = {}) => {
// 	const key = `${m},${n}`;
// 	if (key in memo) return memo[key];
// 	if (m === 1 && n === 1) return 1;
// 	if (m === 0 || n === 0) return 0;
// 	memo[key] = gridTraveler(m - 1, n, memo) + gridTraveler(m, n, -1, memo);
// 	return memo[key];
// };


// const canSum = (targetSum, numbers) => {
// 	if (targetSum === 0) return true;
// 	if (targetSum < 0) return false;
// 	for (let num of numbers) {
// 		const remainder = targetSum - num;
// 		if (canSum(remainder, numbers) === true) {
// 			return true;
// 		}
// 	}
// 	return false;
// };
//&memoiaze
// const canSum = (targetSum, numbers, memo = {}) => {
// 	if (targetSum in memo) return memo[targetSum];
// 	if (targetSum === 0) return true;
// 	if (targetSum < 0) return false;

// 	for (let num of numbers) {
// 		const remainder = targetSum - num;
// 		if (canSum(remainder, numbers, memo) === true) {
// 			memo[targetSum] = true;
// 			return true;
// 		}
// 	}
// 	memo[targetSum] = false;
// 	return false;
// };

// console.log(canSum(7, [2, 3]));
//console.log(canSum(7, [5,3,4,7]))
//console.log(canSum(7, [2,4]))
// console.log(canSum(300, [7,14]))

//&howSUm with recursivity
// const howSum = (targetSum, numbers) => {
// 	if(targetSum === 0) return []
// 	if(targetSum < 0) return null

// 	for(let num of numbers) {
// 		const remainder = targetSum - num
// 		const remainderResult = howSum(remainder, numbers)
// 		if(remainderResult !== null) {
// 			return [...remainderResult, num]
// 		}
// 	}
// 	return null
// }
//&Memoization
// const howSum = (targetSum, numbers, memo = {}) => {
// 	if (targetSum in memo) return memo[targetSum];
// 	if (targetSum === 0) return [];
// 	if (targetSum < 0) return null;

// 	for (let num of numbers) {
// 		const remainder = targetSum - num;
// 		const remainderResult = howSum(remainder, numbers, memo);
// 		if (remainderResult !== null) {
// 			memo[targetSum] = [...remainderResult, num];
// 			return memo[targetSum];
// 		}
// 	}
// 	return null;
// };
// console.log(howSum(7, [2, 3]));
