// An ATM has banknotes of nominal values 10, 20, 50, 100, 200 and 500 dollars. You can consider that there is a large enough supply of each of these banknotes.

// You have to write the ATM's function that determines the minimal number of banknotes needed to honor a withdrawal of n dollars, with 1 <= n <= 1500.

// Return that number, or -1 if it is impossible.

// Good Luck!!!

//*My solution
function solve(n) {
	if (n % 10 !== 0) return -1;
	let nomVal = [10, 20, 50, 100, 200, 500];
	let bankNotes = 0;
	let i = nomVal.length - 1;

	while (n !== 0) {
		if (nomVal[i] <= n) {
			n -= nomVal[i];
			bankNotes++;
		} else {
			i--;
		}
	}

	return bankNotes;
}

//*Others solution
function solve(n) {
	if (n % 10) return -1;
	return [500, 200, 100, 50, 20, 10].reduce((s, v) => {
		let ans = (n / v) | 0;
		n %= v;
		return s + ans;
	}, 0);
}

function solve(n) {
	let counter = 0;
	[500, 200, 100, 50, 20, 10].forEach((item) => {
		counter += Math.floor(n / item);
		n = n % item;
	});
	return n ? -1 : counter;
}
