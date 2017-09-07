// There are two kangaroos on a number line ready to jump in the positive direction (i.e, toward positive infinity). The first kangaroo starts at location  and moves at a rate of  meters per jump. The second kangaroo starts at location  and moves at a rate of  meters per jump. Given the starting locations and movement rates for each kangaroo, can you determine if they'll ever land at the same location at the same time?
//
// Input Format
//
// A single line of four space-separated integers denoting the respective values of , , , and .
//
// Constraints
//
// Output Format
//
// Print YES if they can land on the same location at the same time; otherwise, print NO.
//




function main() {
    var x1_temp = readLine().split(' ');
    var x1 = parseInt(x1_temp[0]);
    var v1 = parseInt(x1_temp[1]);
    var x2 = parseInt(x1_temp[2]);
    var v2 = parseInt(x1_temp[3]);

    if (v1 <= v2) {
        console.log('NO')
        return
    }
    while(x1 < x2) {
        x1+= v1
        x2+= v2
        if( x1 === x2) {
            console.log('YES')
            return
        }
    }
    console.log('NO')
}
