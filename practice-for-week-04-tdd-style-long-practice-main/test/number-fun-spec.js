const {expect} = require("chai")
const {returnsThree, reciprocal} = require("../problems/number-fun");
describe ("returnsThree", function () {
    it ("Should return a number equal to three", function () {
        let test = returnsThree
        expect(test()).to.equal(3);
    })
})
describe ("reciprocal", function (){
    it ("Should return the reciporical of the input number", function () {
        let test2 = reciprocal
        expect(test2(5)).to.equal(1/5);
        expect.fail.if("Hello")
    })
})
describe ("reciprocal", function (){
     it ("Should return the reciporical of the input number", function () {
        if (n < 1 || n > 1000000) {
            throw new Error("TypeError the input arguement must be within the range of 1 - 1000000")
          }
})

})
