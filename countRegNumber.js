function countRegNumber(regNoString) {
    var registrations = regNoString.split(','); /** (',') represents the list of registration 
    numbers separated by a comma**/
    return registrations.length;/** how many regNo's are there in the list**/
  }