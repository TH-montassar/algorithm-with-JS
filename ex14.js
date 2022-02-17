   const numb = [2,3,1,1,4]
   let number_of_jumps =0
   let i =0
   while (i< numb.length) {
     i=i+numb[i]+1
     number_of_jumps++
   }
   console.log( number_of_jumps)

// function minJumps(arr, n) {
//   if (n ==/*1*/) return 0;

//   let res = Number.MAX_VALUE;
//   for (let i = n - 2; i >= 0; i--) {
//     if (i + arr[i] >= n - 1) {
//       let sub_res = minJumps(arr, i + 1);
//       if (sub_res != Number.MAX_VALUE) res = Math.min(res, sub_res + 1);
//     }
//   }

//   return res;
// }

// let arr = [2, 3, 1, 1, 4/*]*/;
// let n = arr.length;
// console.log("Minimum number of jumps to");
// console.log(" reach end is " + minJumps(arr, n));
