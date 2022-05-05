const chai = require('chai');
const expect = chai.expect;
const spies = require('chai-spies');
chai.use(spies);
const { myMap } = require('../problems/my-map');
describe ("myMap", function(){
    let arr;
    beforeEach(() => {
        arr = [1,2,3];
    });
    it ("it should not mutate", function() {
        let result = myMap(arr, (el) => el * 2);
        expect(arr).to.eql([1,2,3]);
    })
    it('should not use Array.map()', function() {
        const spy = chai.spy.on(arr, 'map');
        myMap(arr, (el) => el * 2);
        expect(spy).to.not.have.been.called();
    });
    it('should invoke passed-in cb for each element in the passed-in array', () => {
        const testCb = (el) => el * 2;
        const spy = chai.spy(testCb);
        myMap(arr, spy);
        expect(spy).to.have.been.called.exactly(3);
    })
})
