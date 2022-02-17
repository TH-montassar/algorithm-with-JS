const reversedNum = (result) => {
  parseFloat(result.toString().split("").reverse().join("")) *
    Math.sign(result);
};

let l1 = [2, 4, 3];
let l2 = [5, 6, 4];
console.log(l1, l2);
l1.reverse();
l2.reverse();

const L1Number = Number(l1.join(""));
const L2Number = Number(l2.join(""));

const result = L1Number + L2Number;

console.log(reversedNum(result));
