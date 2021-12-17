/**
*  Name: Danhiel Vu
*  Date: 12/15/2021
*
*  This is the JS Unit testing for calculating our score within the dice game.
*/

const calculateScore = require('./index.js');

// Given tests
test('Calculates [1,1,1,1,1] to equal 1200', () => {
    expect(calculateScore([1,1,1,1,1])).toBe(1200);
});

test('Calculates [1,1,1,5,1] to equal 1150', () => {
    expect(calculateScore([1,1,1,5,1])).toBe(1150);
});

test('Calculates [2,3,4,6,2] to equal 0', () => {
    expect(calculateScore([2,3,4,6,2])).toBe(0);
});

test('Calculates [3,4,5,3,3] to equal 350', () => {
    expect(calculateScore([3,4,5,3,3])).toBe(350);
});

// Test individual dices
test('Calculates [2,2,2,2,2] to equal 200', () => {
    expect(calculateScore([2,2,2,2,2])).toBe(200);
});

test('Calculates [3,3,3,3,3] to equal 300', () => {
    expect(calculateScore([3,3,3,3,3])).toBe(300);
});

test('Calculates [4,4,4,4,4] to equal 400', () => {
    expect(calculateScore([4,4,4,4,4])).toBe(400);
});

test('Calculates [5,5,5,5,5] to equal 600', () => {
    expect(calculateScore([5,5,5,5,5])).toBe(600);
});

test('Calculates [6,6,6,6,6] to equal 600', () => {
    expect(calculateScore([6,6,6,6,6])).toBe(600);
});

// Test triples with a single and five
test('Calculates [2,2,2,1,5] to equal 350', () => {
    expect(calculateScore([2,2,2,1,5])).toBe(350);
});

test('Calculates [1,3,3,3,5] to equal 450', () => {
    expect(calculateScore([1,3,3,3,5])).toBe(450);
});

test('Calculates [4,4,1,4,5] to equal 550', () => {
    expect(calculateScore([4,4,1,4,5])).toBe(550);
});

test('Calculates [5,1,5,5,5] to equal 650', () => {
    expect(calculateScore([5,1,5,5,5])).toBe(650);
});

test('Calculates [1,6,5,6,6] to equal 650', () => {
    expect(calculateScore([1,6,5,6,6])).toBe(750);
});

// Placement testing
test('Calculates [1,2,1,2,1] to equal 1000', () => {
    expect(calculateScore([1,2,1,2,1])).toBe(1000);
});

test('Calculates [2,2,1,1,2] to equal 400', () => {
    expect(calculateScore([2,2,1,1,2])).toBe(400);
});

test('Calculates [3,3,4,4,3] to equal 300', () => {
    expect(calculateScore([3,3,4,4,3])).toBe(300);
});

test('Calculates [4,5,4,5,5] to equal 500', () => {
    expect(calculateScore([4,5,4,5,5])).toBe(500);
});

test('Calculates [6,1,1,6,6] to equal 800', () => {
    expect(calculateScore([6,1,1,6,6])).toBe(800);
});