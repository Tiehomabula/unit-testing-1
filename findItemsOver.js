function findItemsOver(itemList, threshold) {
    let result = [];
  for(let i=0; i<itemList.length; i++){
    if(itemList[i].qty > threshold){
      result.push(itemList[i]);
    } 
    }
    return result;
  }