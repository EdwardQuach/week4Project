// Your code here
const {expect} = require("chai"); 
const reverseString = require("../problems/reverse-String")

describe ("reverseString" , function () {
    it("should reverse input string", function(){
        let test = reverseString
        expect(test("fun")).to.equal("nuf")
    })
})