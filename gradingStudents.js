// HackerLand University has the following grading policy:
//
// Every student receives a  in the inclusive range from  to .
// Any  less than  is a failing grade.
// Sam is a professor at the university and likes to round each student's  according to these rules:
//
// If the difference between the  and the next multiple of  is less than , round  up to the next multiple of .
// If the value of  is less than , no rounding occurs as the result will still be a failing grade.
// For example,  will be rounded to  but  will not be rounded because the rounding would result in a number that is less than .
//
// Given the initial value of  for each of Sam's  students, write code to automate the rounding process. For each , round it according to the rules above and print the result on a new line.

function solve(grades){
    for(var i = 0;i < grades.length ;i++){
        if(grades[i] > 37){
            if(grades[i] % 5 > 2){
                grades[i] = grades[i] + (5 - (grades[i] % 5));
            }
        }
    }
    return grades;
}

function main() {
    var n = parseInt(readLine());
    var grades = [];
    for(var grades_i = 0; grades_i < n; grades_i++){
       grades[grades_i] = parseInt(readLine());
    }
    solve(grades).forEach(grade => console.log(grade))


}
