// Your task in this kata is to implement a function that calculates the sum of the integers inside a string. For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

// Note: only positive integers will be tested.

//&My solution
function sumOfIntegersInString(s) {
	let regExp = /\d+/g;
	let nums = s.match(regExp);
	let total = 0;

	if (nums !== null) {
		for (let num of nums) {
			total += parseInt(num);
		}
	} else {
		return 0;
	}

	return total;
}

//&Others solutions
function sumOfIntegersInString(s) {
	return (s.match(/\d+/g) || []).reduce((s, n) => s + +n, 0);
}
