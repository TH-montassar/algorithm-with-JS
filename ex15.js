const permutation = (tab) => {
  let result = [];
  const permute = (arr, m = []) => {
    if (arr.length === 0) {
      result.push(m);
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice();
        let next = curr.splice(i, 1);
        permute(curr.slice(), m.concat(next));
      }
    }
  };
  permute(tab);

  return result;
};
const numbs = [1, 2, 3];
console.log(permutation(numbs));

// const permutations = (arr) => {
//   if (arr.length <= 2) {
//     return arr.length === 2 ? [arr, [arr[1], arr[0]]] : arr;
//   }
//   return arr.reduce(
//     (acc, item, i) =>
//       acc.concat(
//         permutations([...arr.slice(0, i), ...arr.slice(i + 1)]).map((val) => [
//           item,
//           ...val,
//         ])
//       ),
//     []
//   );
// };

// console.log(permutations([1, 1, 2]));
