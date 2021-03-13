
// You should implement your task here.

module.exports = function towelSort (matrix) {
	if(matrix == undefined ){
		return []
	}
	
	let newArray = []

	for (let i = 0; i < matrix.length; i++) {
		if( i % 2 > 0 && i > 0){
			matrix[i].reverse()
		}
		
	}

	for (let i = 0; i < matrix.length; i++) {
		for (let j = 0; j < matrix[i].length; j++) {
			newArray.push(matrix[i][j])
			
		}
	}

	matrix = newArray
	return matrix;


}
