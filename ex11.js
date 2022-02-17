
const score = (arrayA, arrayB) => {
  let i = 0;
  let pointB = 0;
  let pointA = 0;
  while (i < arrayA.length || i < arrayB.length) {
    
    if (arrayA[i] > arrayB[i]) {
      // console.log("alise akber");
      pointA++;
    }
    if (arrayA[i] < arrayB[i]) {
      // console.log("bob akber");
      pointB++;
    }
    i++;
  }

  // console.log(`alice score ${pointA}`);
  // console.log(`bob score ${pointB}`);
  const result = [pointA, pointB];
  console.log(result);
};

alice = [10, 14, 14, 14];
bob = [3, 10, 110, 1001];
console.log(alice);
console.log(bob);

score(alice, bob);
