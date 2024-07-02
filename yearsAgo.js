function yearsAgo (year) {
    var currentYear= new Date().getFullYear();
    var yearDiff = currentYear - year;
    return yearDiff;
}
