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
    printElements
  }