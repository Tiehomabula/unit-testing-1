var isGP = regCheck('DV 23 NB GP', 'GP');

//should print true coz it ends with GP
console.log(isGP)

var isMP = regCheck('DV 23 LP GP', 'MP');

//should print false because it doesn't end with MP
console.log(isMP)

describe('regCheckFunction' , function(){
    it('it should return "true" if the registration number ends with that for that specific province and "false" otherwise ', function(){
        assert.equal(regCheck('NP 234 HN GP', 'GP'), true);
    })
    it('it should return "true" if the registration number ends with that for that specific province and "false" otherwise ', function(){
        assert.equal(regCheck('NP 234 HN MP', 'GP'), false);
    })

})