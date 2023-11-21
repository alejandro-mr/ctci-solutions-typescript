function zeroMatrix(matrix: Array<Array<number>>): Array<Array<number>> {
  if (matrix.length <= 0) return [];
  if (matrix[0].length <= 0) return [];

  const m = matrix[0].length;
  const n = matrix.length;

  /* Validate that matrix is symmetrical */
  for (let row of matrix) {
    if (row.length !== m) return [];
  }

  /* Bruteforce approach */
  let columnsToZero = [];
  let rowsToZero = [];

  for (let row = 0; row < n; row++) {
    for (let column = 0; column < m; column++) {
      if (matrix[row][column] === 0) {
        // Mark Columns and Rows to be set 0s
        columnsToZero = [...columnsToZero, column];
        rowsToZero = [...rowsToZero, row];
      }
    }
  }

  for (let row of rowsToZero) {
    for (let column = 0; column < m; column++) {
      matrix[row][column] = 0;
    }
  }
  for (let column of columnsToZero) {
    for (let row = 0; row < n; row++) {
      matrix[row][column] = 0;
    }
  }

  return matrix;
}

export default zeroMatrix;
export { zeroMatrix };
