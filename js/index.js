//sums of strokes from holes 1-18

function totalStrokes(scores) {
	return scores.reduce((a,b) => a + b, 0);
}

// subtracts course rating from total

function subtract(totalStrokes, rating){
	return (totalStrokes - rating);
}

//multipies the difference by 113

function multiply(subtract){
	return (subtract * 113);
}

//divedes the product by the slope rating of the course to find the differential	
function divide(multiply, slope){
	return (multiply / slope);
}

//calculates the the non-truncated Handicap Index
function finalIndex(divide){
	return (divide * 0.96);
}

//truncates the Handicap Index to a whole integer for use in Tournaments and USGA Membership 
function truncate(finalIndex){
	return (Math.trunc(finalIndex));
}



//puts all the functions together to form the full program
module.exports.officalIndex = (scores, rating, slope) =>  {
	let totalStroke = this.totalStrokes(scores);
	
	let subtracts = this.subtract(totalStroke, rating);
		
	let multiplys = this.multiply(subtracts);
	
	let divides = this.divide(multiplys, slope);
		
	let FinalIndex = this.finalIndex(divides);
	
	let truncates = this.truncate(FinalIndex);
		
		return truncates;
};


module.exports.totalStrokes = totalStrokes;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.finalIndex = finalIndex;
module.exports.truncate = truncate;








