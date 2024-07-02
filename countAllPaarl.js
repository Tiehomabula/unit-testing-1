function countAllPaarl (regNumber) {
    const regNumberList = regNumber.split(', ');
    paarlRegCount = 0;
    for(let i=0; i<regNumberList.length; i++){
    const regNumber = regNumberList[i].trim();
      if(regNumber.startsWith('CJ')){
        console.log(regNumber);
         paarlRegCount ++;
      }
    }
    return paarlRegCount;
  }