function birthdayCakeCandles(n, ar) {
    // Complete this function
    let tallest = ar[0];
    let count = 0;
    ar.forEach((num) => {
        if (num > tallest) { tallest = num};
    })
    ar.forEach((num) => {
        if (num === tallest) {count++};
    })
    return count;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = birthdayCakeCandles(n, ar);
    process.stdout.write("" + result + "\n");

}
