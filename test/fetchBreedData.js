const { assert } = require("chai");
const fetchBreedDescription = require("../fetchBreedDescription");

describe('fetchBreedDescription()', () => {

  it('returns a string description for a vaild breed via a callback', (done) => {

    fetchBreedDescription('Siberian', (err, desc) => {

      assert.equal(err, null);

      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDescription, desc.trim());

      done();
    });
    
  });

});
describe('fetchBreedDescription()', () => {

  it('returns a string description for a vaild breed via a callback', (done) => {

    fetchBreedDescription('Uwu', (err, desc) => {

      assert.equal(err, 'no cats')

      done();
    });
    
  });

});