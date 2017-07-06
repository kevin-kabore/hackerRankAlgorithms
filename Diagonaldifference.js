// Given a square matrix of size , calculate the absolute difference between the sums of its diagonals.
//
// Input Format
//
// The first line contains a single integer, . The next  lines denote the matrix's rows, with each line containing space-separated integers describing the columns.
//
// Constraints
//
// Output Format
//
// Print the absolute difference between the two sums of the matrix's diagonals as a single integer.
//
// Sample Input
//
// 3
// 11 2 4
// 4 5 6
// 10 8 -12
// Sample Output
//
// 15
// Explanation
//
// The primary diagonal is:
//
// 11
//    5
//      -12
// Sum across the primary diagonal: 11 + 5 - 12 = 4
//
// The secondary diagonal is:
//
//      4
//    5
// 10
// Sum across the secondary diagonal: 4 + 5 + 10 = 19
// Difference: |4 - 19| = 15

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

function main() {
    var n = parseInt(readLine());
    var a = [];
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    }

    //started here
    let d1 = 0; //diagonal 1 back slash
    let d2 = 0; //diagonal 2 forward slash


    for(var i = 0; i < n; i++){
        for (var j = 0; j < n; j++){
            if(i==j) {
                d1+=a[i][j] // array[row][row]
            }
            if (i+j == n-1) { //= forward slash
                d2+= a[i][j]
            }
        }
    }
    console.log(Math.abs(d1-d2));
}
