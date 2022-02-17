// function findRepeating(arr, n) {
//   let RepeatingElement = 0;

//   for (let i = 0; i < n; i++) {
//     let element = arr[Math.abs(arr[i])];

//     if (element < 0) {
//       RepeatingElement = arr[i];
//       break;
//     }

//     arr[Math.abs(arr[i])] = -arr[Math.abs(arr[i])];
//   }

//   return Math.abs(RepeatingElement);
// }

// let arr = [3, 5, 4, 3, 4];

// let n = arr.length;

// console.log(findRepeating(arr, n));
const findRepeating = (array, n) => {
  RepeatingElement = null;
  for (let i = 0; i < n; i++) {
    let elementI = array[i];
    for (let j = 1; j < n; j++) {
      let elementJ = array[j];
      if (elementI ===  elementJ) {
        return RepeatingElement = elementI;
       
      }
    }
  }
};

let arr = [3, 5, 4, 3, 4];

let n = arr.length;

console.log(findRepeating(arr, n));
