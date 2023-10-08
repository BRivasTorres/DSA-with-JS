// Check if all digits of the given integer are even.

// Example

// For n = 248622, the output should be
// solution(n) = true;
// For n = 642386, the output should be
// solution(n) = false.
// Input/Output

// [execution time limit] 4 seconds (js)

// [memory limit] 1 GB

// [input] integer n

// Guaranteed constraints:
// 1 ≤ n ≤ 109.

// [output] boolean

// true if all digits of n are even, false otherwise.

function solution(n) {
	let nums = n.toString().split("");

	for (let i = 0; i < nums.length; i++) {
		if (parseInt(nums[i]) % 2 !== 0) {
			return false;
		}
	}
	return true;
}
