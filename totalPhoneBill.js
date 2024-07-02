function totalPhoneBill (phoneString) {
    const phoneStringList = phoneString.split(', ');
    const call = 2.75;
    const sms = 0.65;
    var total = 0;
    
    for(let i=0; i<phoneStringList.length; i++) {
      const phoneString = phoneStringList[i];
      if(phoneString.includes('call')) {
        total += call
      } else {
     total += sms;
      }
    }
    return 'R' + total.toFixed(2);
  }