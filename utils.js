function multiplyMatrices(matrix1, matrix2){
    let array1 = matrix1[0];
    let array2 = [];
    for (let i = 0; i < matrix2.length; i++){
      array2.push(matrix2[i][0]);
    }
    if(array1.length === array2.length){
      let matrix1Rows = matrix1.length;
      let matrix1Cols = matrix1[0].length;
      let matrix2Cols = matrix2[0].length;
      let result = new Array(matrix1Rows);
      for (let j = 0; j < matrix1Rows; j++) {
        result[j] = new Array(matrix2Cols);
        for (let c = 0; c < matrix2Cols; c++) {
          result[j][c] = 0;
          for (let i = 0; i < matrix1Cols; i++) {
            result[j][c] += matrix1[j][i] * matrix2[i][c];
          }
        }
      }
      return result;
    }else{
      return 'Numbers does not much';
    }
  }

  function printElements(matrix) {

    let result = "";
  
    for (let i = 0; i < matrix.length; i++) {
      for (let j = 0; j < matrix.length; j++) {
        result += matrix[i][j] + '\t';
      }
      result += "\n";
    }
    return result;
  }

  module.exports = {
    multiplyMatrices,
    printElements
  };