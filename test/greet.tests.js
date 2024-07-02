console.log(greet("Tieho"))

describe('greetFunction' , function(){
    it('it should return "Hello, nice to see you Tieho" when "Tieho" is called ', function(){

        assert.equal("Hello, nice to see you Tieho", greet("Tieho"));

        
    });

    it('it should return "Hello, nice to see you Ntombi" when "Ntombi" is called ', function(){

        assert.equal("Hello, nice to see you Ntombi", greet("Ntombi"));

        
    });

});