const charge = require('../test-driven-range');
const { expect } = require('chai');

describe('charge range with test driven development', () => {
  it('isNotEmpty() should check for non empty array', () => {
    let input1 = [];
    let actual1 = charge.isNotEmpty(input1);
    console.log(actual1);
    expect(actual1).to.be.false;

    let input2 = [1, 2, 3];
    let actual2 = charge.isNotEmpty(input2);
    expect(actual2).to.be.true;
  });

  it('isArray() should check for values is not array', () => {
    let input1 = 'abc';
    let actual1 = charge.isArray(input1);
    expect(actual1).to.be.false;

    let input2 = [];
    let actual2 = charge.isArray(input2);
    expect(actual2).to.be.true;
  });

  it('isArray() should check for values is array', () => {
    let input2 = [];
    let actual2 = charge.isArray(input2);
    expect(actual2).to.be.true;
  });

  it('should check for the empty value', () => {
    let input = 'non array data';
    let actual = charge.formRange(input);
    expect(actual).equal('Wrong Input');
  });

  it('should check for the empty value', () => {
    let input1 = [];
    let actual1 = charge.formRange(input1);
    expect(actual1).equals('Wrong Input');
  });

  it('formRange() should check for the one value', () => {
    let input2 = [1];
    let actual2 = charge.formRange(input2);
    let expectedObject = [{ min: 1, max: 1, occurence: 1 }];
    expect(actual2).deep.equal(expectedObject);
  });

  it('formRange() should check for the two value', () => {
    let input2 = [1, 2];
    let actual2 = charge.formRange(input2);
    let expectedObject = [
      {
        min: 1,
        max: 2,
        occurence: 2,
      },
    ];
    expect(actual2).deep.equal(expectedObject);
  });

  it('formRange() should check for range of repeated value', () => {
    let input3 = [1, 2, 5, 5, 6, 7];
    let actual3 = charge.formRange(input3);
    let expectedObject1 = [
      {
        min: 1,
        max: 2,
        occurence: 2,
      },
      {
        min: 5,
        max: 7,
        occurence: 4,
      },
    ];
    expect(actual3).deep.equal(expectedObject1);
  });

  it('printRange() should Print Ranges', () => {
    let input3 = [1, 2, 5, 5, 6, 7];
    let actual3 = charge.printRange(input3);
    let expectedObject1 = [
      {
        min: 1,
        max: 2,
        occurence: 2,
      },
      {
        min: 5,
        max: 7,
        occurence: 4,
      },
    ];
    expect(actual3).deep.equal(expectedObject1);
  });

  it('getDifference() should print the difference of two numbers', () => {
    let number1 = 2,
      number2 = 4;
    let actual = charge.getDifference(number1, number2);
    let expected = -2;
    expect(actual).deep.equal(expected);
  });
});
