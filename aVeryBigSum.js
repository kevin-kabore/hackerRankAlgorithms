// You are given an array of integers of size . You need to print the sum of the elements in the array, keeping in mind that some of those integers may be quite large.
//
// Input Format
//
// The first line of the input consists of an integer . The next line contains  space-separated integers contained in the array.
//
// Output Format
//
// Print a single value equal to the sum of the elements in the array.
//
// Constraints
//
//
// Sample Input
//
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
// Output
//
// 5000000015


process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function aVeryBigSum(n, ar) {
    // Complete this function
    let sum =  0;
    ar.forEach((num) => {sum+=num})
    return sum;
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = aVeryBigSum(n, ar);
    process.stdout.write("" + result + "\n");

}
