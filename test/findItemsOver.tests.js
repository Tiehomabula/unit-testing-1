describe('itemsOverFunction' , function(){
    it('it should return all the products with a qty higher than the threshhold ', function(){

        var itemList = [
            {name : 'sweets', qty : 10},
            {name : 'chocolates', qty : 37},
            {name : 'sour worms', qty : 27},
            {name : 'gummy bears', qty : 3},
        ];
        
      
        var results = [
            {name : 'chocolates', qty : 37},
            {name : 'sour worms', qty : 27},
        ];

        var itemList1 = [
            {name : 'sweets', qty : 34},
            {name : 'chocolates', qty : 5},
            {name : 'sour worms', qty : 23},
            {name : 'gummy bears', qty : 2},
        ];
        var results1 = [
            {name : 'sweets', qty : 34},
           {name : 'sour worms', qty : 23},
        ];
        
        //
        assert.deepEqual(results, findItemsOver(itemList,20 ));
        assert.deepEqual(results1, findItemsOver(itemList1, 20));
        
    });

    it('it should return all the products with a qty higher than the threshold', function(){
        var itemList = [
            {name : 'sandals', qty : 0},
            {name : 'sneakers', qty : 0},
            {name : 'heels', qty : 0},
            {name : 'boots', qty : 0},
        ];
        
      
        var results = [
        
        ];

        assert.deepEqual(results, findItemsOver(itemList,30 ));
    })

   console.log('findItemsOver passed!')

});
