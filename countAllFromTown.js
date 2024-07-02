function countAllFromTown(regNumber, townPrefix) {
    const regNumberList = regNumber.split(',');
    townRegCount = 0;
    for(let i=0; i <regNumberList.length; i++){
    const regNumber = regNumberList[i].trim();
      if(regNumber.startsWith(townPrefix)){
        console.log(regNumber);
        townRegCount++;
      }
    }
    return townRegCount;
  }