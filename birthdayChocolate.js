function solve(n, s, d, m){
    // Complete this function
   let combos = 0;
   for (let i = 0; i < s.length; i++) {
       let total = 0;
       for (let j = i; j < i + m; j++) {
           total += s[j];
       }
       if(total === d) {
           combos += 1
       }
   }
    return combos
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var d_temp = readLine().split(' ');
    var d = parseInt(d_temp[0]);
    var m = parseInt(d_temp[1]);
    var result = solve(n, s, d, m);
    process.stdout.write(""+result+"\n");

}
