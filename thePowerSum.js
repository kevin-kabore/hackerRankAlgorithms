function processData(input) {
    //Enter your code here
    input = input.split('\n').map(Number)
    let tot = input[0], pow = input[1]
    const powerOf = (total, power, currentNum) => {
        let rem = total - Math.pow(currentNum, power);
        if(rem === 0){
          return 1;  
        } else if (rem < 0 ) {
            return 0;
        } else {
            let includingCurrent = powerOf(rem, power, currentNum +1)
            let excludingCurrent = powerOf(total, power, currentNum+1)
            return includingCurrent + excludingCurrent
        }
    }

    console.log(powerOf(tot, pow, 1))
}
