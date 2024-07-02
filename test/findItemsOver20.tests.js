
describe('itemsOver20Function' , function(){
    it('it should return all the products with a qty higher than 20 ', function(){

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
        assert.deepEqual(results, findItemsOver20(itemList));
        assert.deepEqual(results1, findItemsOver20(itemList1));
        
        
    });

   console.log('findItemsOver20 passed!')

});
