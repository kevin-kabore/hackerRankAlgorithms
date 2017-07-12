function solve(year){
    var date;
    var day;
    function isLeapJul(year) { // check if leap year on Jul cal
        if (year%4 === 0) {
            return true
        } else {
            return false;
        }
    }

    function isLeapGreg(year) { // check if leap year on Greg cal
        if (year%400 === 0) {
            return true
        } else if (year % 4 === 0 && year %100 !== 0) {
            return true;
        }
    }

    if (year < 1918){
        if(isLeapJul(year)) {
            day = 256 - 244;
            date = day+'.'+'09.'+year;
        } else {
            day = 256-243;
            date = day+'.'+'09.'+year;
        }
    } else if (year >1918) {
        if(isLeapGreg(year)) {
            day = 256 - 244;
            date = day+'.'+'09.'+year;
        } else {
            day = 256-243;
            date = day+'.'+'09.'+year;
        }
    } else { // year is 1918 & 8th month is 230th day
        day = 256 - 230;
        date = day+'.'+'09.'+year;
    }

    return date
}

function main() {
    var year = parseInt(readLine());
    var result = solve(year);
    process.stdout.write(""+result+"\n");

}
