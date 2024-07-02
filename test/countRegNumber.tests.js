var regCount = countRegNumber('CA 182736,CY 523519,CJ 812328')
console.log(countRegNumber('CA 182736,CY 523519,CJ 812328'));

console.log(countRegNumber('CA 182736'));

describe('countRegNumber' , function(){
    it('it should return the number of registration numbers when the registration numbers are listed ', function(){

        assert.equal(2, countRegNumber('CY 123 456 GP, TN 223 081 MP'));

        
    });

    it('it should return the number of registration numbers when the registration numbers are listed ', function(){

        assert.equal(1, countRegNumber('TN 223 081 MP'));
      });

});

