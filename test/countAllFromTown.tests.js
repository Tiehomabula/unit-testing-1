
console.log(countAllFromTown('CT 234, CN 123, CT 567, CT 678', 'CT'))

describe('countFromAllTownFunction' , function(){
    it('it should return the number of registration numbers for a specific town from a string', function(){

        var fromKrugersdorp = countAllFromTown('CT 456,CT 567,CL 234, TN 456,CT 341','CT');

assert.equal(fromKrugersdorp, 3)


    });

    it('it should return the number of registration numbers for a specific town from a string', function(){

        var fromVaal = countAllFromTown('SM 24,SC 567,SO 345, ST 456, SE 341','ST');

assert.equal(fromVaal, 1)
      });

});


