//**DESCRIPTION */
// You'll be given a list of two strings, and each will contain exactly one colon (":") in the middle (but not at beginning or end). The length of the strings, before and after the colon, are random.

// Your job is to return a list of two strings (in the same order as the original list), but with the characters after each colon swapped.

// Examples
// ["abc:123", "cde:456"]  -->  ["abc:456", "cde:123"]
// ["a:12345", "777:xyz"]  -->  ["a:xyz", "777:12345"]

//*My solution
function tailSwap(arr) {
	let tempArr = [];

	for (let i = 0; i < arr.length; i++) {
		let parts = arr[i].split(":");
		tempArr.push(parts);
	}
	let deflatArr = tempArr.flat();
	let part1 = `${deflatArr[0]}:${deflatArr[3]}`;
	let part2 = `${deflatArr[2]}:${deflatArr[1]}`;
	let result = [part1, part2];
	return result;
}

//*Others Solutions
function tailSwap(arr) {
	const [aa, ab] = arr[0].split(":");
	const [ba, bb] = arr[1].split(":");
	return [`${aa}:${bb}`, `${ba}:${ab}`];
}

tailSwap = (a) =>
	(a + "").replace(/(.+:)(.+),(.+:)(.+)/, "$1$4,$3$2").split(",");
