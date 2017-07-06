// Alice and Bob each created one problem for HackerRank. A reviewer rates the two challenges, awarding points on a scale from  to  for three categories: problem clarity, originality, and difficulty.
//
// We define the rating for Alice's challenge to be the triplet , and the rating for Bob's challenge to be the triplet .
//
// Your task is to find their comparison points by comparing  with ,  with , and  with .
//
// If , then Alice is awarded  point.
// If , then Bob is awarded  point.
// If , then neither person receives a point.
// Comparison points is the total points a person earned.
//
// Given  and , can you compare the two challenges and print their respective comparison points?
//
// Input Format
//
// The first line contains  space-separated integers, , , and , describing the respective values in triplet .
// The second line contains  space-separated integers, , , and , describing the respective values in triplet .
//
// Constraints
//
// Output Format
//
// Print two space-separated integers denoting the respective comparison points earned by Alice and Bob



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

function solve(a0, a1, a2, b0, b1, b2){
    // Complete this function
    let res =[];
    let a = 0;
    let b = 0;
    function compare(alice, bob){
        if(alice === bob) {return null}
        alice > bob ? a+= 1 : b+= 1;
    }
    compare(a0, b0);
    compare(a1, b1);
    compare(a2, b2);
    console.log(a , b)
}

function main() {
    var a0_temp = readLine().split(' ');
    var a0 = parseInt(a0_temp[0]);
    var a1 = parseInt(a0_temp[1]);
    var a2 = parseInt(a0_temp[2]);
    var b0_temp = readLine().split(' ');
    var b0 = parseInt(b0_temp[0]);
    var b1 = parseInt(b0_temp[1]);
    var b2 = parseInt(b0_temp[2]);
    var result = solve(a0, a1, a2, b0, b1, b2);
    result

}
