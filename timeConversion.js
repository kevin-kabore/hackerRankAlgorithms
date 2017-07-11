function timeConversion(s) {
    // Complete this function
    let arr = s.split(':')
    let hour = parseInt(arr[0]);
    let mins = arr[1];
    let secs = arr[2].substr(0,2);
    let amPm = arr[2].substr(2) //AM or PM?


     if(hour === 12 && amPm === 'AM') {
        hour = 0;
    } else if(hour === 12 && amPm === 'PM') {
        hour = 12;
    } else if(hour < 12 && amPm === 'PM'){
        hour = hour + 12;
    };

    if(hour < 10) {
        hour = '0' + hour.toString()
    }

    let newTime = hour.toString()+':'+mins+':'+secs;
    return newTime
}
