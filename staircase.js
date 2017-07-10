function main() {
    var n = parseInt(readLine());
    var staircase = '';
    var space = ' ';

    for (var i = n; i > 0; i--) {
        staircase = staircase+space.repeat(i-1).concat('#'.repeat(n-(i-1))) + "\n";
    }

    console.log(staircase)
}
