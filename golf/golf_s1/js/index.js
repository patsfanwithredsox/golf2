//sums of strokes from holes 1-18

function totalStrokes(scores) {
	return scores.reduce((a,b) => a + b, 0);
}

// subtracts course rating from total

function subtract(total, rating){
	return (total - rating);
}

//multipies the difference by 113

function multiply(difference){
	return (difference * 113);
}

//divedes the product by the slope rating of the course to find the differential	
function divide(product, slope){
	return (product / slope);
}

//calculates the the non-truncated Handicap Index
function finalIndex(differential){
	return (differential * 0.96);
}

//truncates the Handicap Index to a whole integer for use in Tournaments and USGA Membership 
function truncate(Index){
	return (Math.trunc(Index));
}


	

module.exports.officalIndex = scores =>  {
	let totalStroke = this.totalStrokes(scores);
	let subtracts = this.subtract(totalStroke);
	let multiplys = this.multiply(subtracts);
	let divides = this.divide(multiplys);
	let FinalIndex = this.finalIndex(divides);
	let truncates = this.truncate(FinalIndex);
		return truncate;
};



module.exports.totalStrokes = totalStrokes;
module.exports.subtract = subtract;
module.exports.multiply = multiply;
module.exports.divide = divide;
module.exports.finalIndex = finalIndex;
module.exports.truncate = truncate;








