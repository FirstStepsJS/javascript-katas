var chai = require('chai');
var expect = chai.expect;
var fuzzyTime = require('./fuzzyTime');

describe("fuzzyTime", function() {
	it("should exist", function() {
		expect(fuzzyTime).to.exist;
	});
	it("should return a string", function() {
		expect(fuzzyTime('')).to.be.a('string');
	});
	it("should return o'clock", function() {
		expect(fuzzyTime('1:00')).to.equal("one o'clock");
		expect(fuzzyTime('2:00')).to.equal("two o'clock");
		expect(fuzzyTime('3:00')).to.equal("three o'clock");
		expect(fuzzyTime('4:00')).to.equal("four o'clock");
		expect(fuzzyTime('5:00')).to.equal("five o'clock");
		expect(fuzzyTime('6:00')).to.equal("six o'clock");
		expect(fuzzyTime('7:00')).to.equal("seven o'clock");
		expect(fuzzyTime('8:00')).to.equal("eight o'clock");
		expect(fuzzyTime('9:00')).to.equal("nine o'clock");
		expect(fuzzyTime('10:00')).to.equal("ten o'clock");
		expect(fuzzyTime('11:00')).to.equal("eleven o'clock");
	});
	it("should return noon and midnight", function() {
		expect(fuzzyTime('12:00')).to.equal("noon");
		expect(fuzzyTime('24:00')).to.equal("midnight");
	});
});
