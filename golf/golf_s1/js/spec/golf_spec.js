//import everything
var index = require('../index');

describe("A program to calculate golf handicap indexs", () => {

  it("sum all strokes from round", () => {
  	expect(index.totalStrokes([3,4,5,5,4,6,4,3,5,3,4,4,4,5,3,4,5,4]))
  	.toEqual(75);
  });

  it('subtracts the Course Rating from the AGS', function () {
     expect(index.subtract(75, 71.5))
     .toEqual(3.5);
    });

  it('multiplies the difference by 113', function () {
     expect(index.multiply(3.5))
     .toEqual(395.5);
    });

	it('divides by the slope rating', function () {
     expect(index.divide(395.5, 124))
     .toEqual(3.189516129032258);
    });

	it('multiply the differential by 96%', function () {
     expect(index.finalIndex(3.189516129032258))
     .toEqual(3.0619354838709674);
    });

	it('truncate the calculated Index', function () {
     expect(index.truncate(3.0619354838709674))
     .toEqual(3);
    });

  it('calculates the official Handicap Index', function () {
     expect(index.officalIndex([3,4,5,5,4,6,4,3,5,3,4,4,4,5,3,4,5,4], 71.5, 124))
     .toEqual(3);
    });


  });



