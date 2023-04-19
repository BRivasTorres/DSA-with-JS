//#Scalability
//#Readability
//#n === input size

//&Drop constants === this means that if we have three O(n) operations and in the other hand we have one O(n^n)
//&Drop Less Significant Terms === hyrerquical only import the worst case
//&To simplyfy fully, apply the product rule, followed by the sum rule. Ej:
	//0(5n^2 + 100n + 17) = O(n^2 + n + 1) = O(n^2) 

//*Constant === O(1) ==> Complexity never changes.
//*Cuadratic === O(n^2) ==> Input increases, operations increases
//*Logarithmic ===  O(log(n)) ==> Oposite of an exponent
//*Linear === O(n) ==> Input increases, operations increases 1-1
//*Loglinear === O(n*log(n)) ===> Has linear behavior nested in log steps >O(n) but <O(n^2)
//*Polynomial === O(n^c) ==> 
//*Exponential === O(c^n) ===> This means that i take 2 an multiply n steps, for example in a recursive call with 2 calls
//*Factorial === O(n!) ==> Decreases the number



const walkMatrix = (matrix) => {
	const results = [];
	const rowCount = matrix.length;
	const columnCount = matrix[0].length;

	let startRow = 0;
	let startCol = 0;
	let endRow = rowCount - 1;
	let endCol = columnCount - 1;

	while (endRow >= startRow && endCol >= startCol) {
		for (let column = startCol; column <= endCol; column++) {
			results.push(matrix[startRow][column]);
		}
		startRow++;

		for (let row = startRow; row <= endRow; row++) {
			results.push(matrix[row][endCol]);
		}
		endCol--;

		if (endRow >= startRow) {
			for (let column = endCol; column >= startCol; column--) {
				results.push(matrix[endRow][column]);
			}
		}
		endRow--;

		if (endCol >= startCol) {
			for (let row = endRow; row >= startRow; row--) {
				results.push(matrix[row][startCol]);
			}
		}
		startCol++;
	}

	return results;
};
