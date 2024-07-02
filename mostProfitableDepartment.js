function mostProfitableDepartment (salesData) {
    let departmentSales = {};// why not array?//
    for(let i=0; i<salesData.length; i++){
      let department= salesData[i].department;
      let sales=salesData[i].sales;
      if(departmentSales[department]){ // if sales in specific dept exceed overall sales then these sales are added to sales//
        departmentSales[department] += sales;
      } else {
        departmentSales[department] = sales;
      }
      }
    let maxSales = 0;
    let maxDepartment = ' ';
    for(let department in departmentSales){
      if(departmentSales[department] > maxSales){
        maxSales = departmentSales[department];
        maxDepartment = department;
      }
    }
      return maxDepartment;
    }
    