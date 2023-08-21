//&Description

// In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

// Example

// For

// matrix = [[true, false, false],
//           [false, true, false],
//           [false, false, false]]
// the output should be

// solution(matrix) = [[1, 2, 1],
//                     [2, 1, 1],
//                     [1, 1, 1]]

//*My solution
const directions = [
	[1, -1],
	[1, 0],
	[1, 1],
	[0, -1],
	[0, 1],
	[-1, -1],
	[-1, 0],
	[-1, 1],
];

solution = (matrix) =>
	matrix.map((row, y) =>
		row.map((col, x) =>
			directions.reduce(
				(count, i) =>
					(count += !!(
						matrix[y + i[0]] && matrix[y + i[0]][x + i[1]]
					)),
				0
			)
		)
	);

//*Others solutions
var dirs = [
	{ r: -1, c: -1 },
	{ r: -1, c: 0 },
	{ r: -1, c: 1 },
	{ r: 0, c: 1 },
	{ r: 0, c: -1 },
	{ r: 1, c: -1 },
	{ r: 1, c: 0 },
	{ r: 1, c: 1 },
];

function solution(matrix) {
	return matrix.map((a, r) =>
		a.map((_, c) =>
			dirs.reduce(
				(p, v) => (p += (matrix[r + v.r] || [])[c + v.c] | 0),
				0
			)
		)
	);
}
