const zero = (array, l) => {
  for (let i = 0; i <= l; i++) {
    if (array[i] === 0) {
      array.push(array[i]);
      array.splice(i, 1);
    }
  }
  return array;
};
const numbs = [0, 1, 0, 0, 1];
const length = numbs.length;
console.log(numbs, length);

zero(numbs, length);
console.log(zero(numbs, length));

// const zero = (array, l) => {
//     let a = 0;

//     for (let i = 0; i < l; i++) {
//       if (array[i] != 0) {
//         array[a++] = array[i];
//       }
//     }
//     for (let i = a; i < l; i++) {
//       array[i] = 0;
//     }
//   };
//   const numbs = [ 6, 0, 2, 0, 0, 1 ]
//   const length = numbs.length;
//   console.log(numbs, length);

//   zero(numbs, length);

//   console.log(numbs);
