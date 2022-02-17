const maxArea = (A, len) => {
  let area = 0;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      min = Math.min(A[j], A[i]);
     // console.log("min", min);

      newArea = min * (j - i);
     // console.log("new ", newArea);

      area = Math.max(area, newArea);
    }
  }

  return area;
};

let a = [1, 8, 6, 2, 5, 4, 8, 3, 7];
let b = [3, 7, 2, 4, 4];

let len1 = a.length;
console.log(maxArea(a, len1));

let len2 = b.length;
console.log(maxArea(b, len2));
