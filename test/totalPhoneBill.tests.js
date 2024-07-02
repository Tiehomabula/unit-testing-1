describe('totalPhoneBillFunction' , function(){
    it('it should return the total phone bill based on the sms and calls recorded and the costs of each', function(){

        assert.equal('R10.20', totalPhoneBill('call, call,sms,sms, sms, call, sms, sms'));

        
    });

    it('it should return the total phone bill based on the sms and calls recorded and the costs of each', function(){

        assert.equal('R2.75', totalPhoneBill('call'));
      });

});