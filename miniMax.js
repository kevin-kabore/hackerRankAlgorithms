function main() {
    arr = readLine().split(' ');
    arr = arr.map(Number);

   // sort array
   // first four = min
   // last four = max
   sortedArr = arr.sort() ;
   function sum(a,b){
       return a + b;
   }
   var min = sortedArr.slice(0,4).reduce(sum, 0);
   var max = sortedArr.slice(1,5).reduce(sum, 0);
   console.log(min+' '+max)
}
