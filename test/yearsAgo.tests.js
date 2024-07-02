console.log(yearsAgo('2006'))

describe('yearsAgoFunction' , function(){
    it('it should return the difference in the number of years of the year chosen and the current year ', function(){
        assert.equal(yearsAgo('2001'), 23);
    })
    it('it should return the difference in the number of years of the year chosen and the current year ', function(){
        assert.equal(yearsAgo('2004'), 20);
    })

})