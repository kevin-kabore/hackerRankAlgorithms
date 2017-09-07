// Steve has a string, , consisting of  lowercase English alphabetic letters. In one operation, he can delete any pair of adjacent letters with same value. For example, string "aabcc" would become either "aab" or "bcc" after operation.
//
// Steve wants to reduce  as much as possible. To do this, he will repeat the above operation as many times as it can be performed. Help Steve out by finding and printing 's non-reducible form!
//
// Note: If the final string is empty, print Empty String .
//
// Input Format
//
// A single string, .
//
// Constraints
//
// Output Format
//
// If the final string is empty, print Empty String; otherwise, print the final non-reducible string.
//
// Sample Input 0
//
// aaabccddd
// Sample Output 0
//
// abd

function super_reduced_string(s){
    // Complete this function
    s = s.split('');
    for (var i = 0; i < s.length; i++){
        if(s[i] === s[i+1]) {
            s.splice(i, 2)
            i = -1
        }
    }
    if (s.length === 0 ){
        return 'Empty String'
    } else {
        return s.join('')
    }
}

function main() {
    var s = readLine();
    var result = super_reduced_string(s);
    process.stdout.write("" + result + "\n");

}
