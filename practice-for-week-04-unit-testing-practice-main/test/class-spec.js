const chai = require("chai");
const expect = chai.expect;

const { Word } = require("../class");

describe("Word", function () {
  describe("Word constructor function", function () {
    let word = new Word("word")
    it('should have a "word" property', function () {
      expect(word.word).to.exist;
    });
  
    it('should set the "word" property when a new word is created', function () {
      expect(word.word).to.equal("word");
    });
  });

  describe("removeVowels function", function () {
    let word = new Word("potato")
    it("should return a the word with all vowels removed", function () {
      expect(word.removeVowels()).to.equal("ptt");
    });
  });

  describe("removeConsonants function", function () {
    let word = new Word("potato")
    it("should return the word with the consonants removed", function () {
      expect(word.removeConsonants()).to.equal("oao");
    });
  });
  
  describe("pigLatin function", function () {
    let word = new Word("potato")
    it("should return the word converted to pig latin", function () {
      expect(word.pigLatin()).to.equal("otatopay");
    });
  });
});
