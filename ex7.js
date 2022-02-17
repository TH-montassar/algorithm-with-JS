function findPair(array, target) {
  let y = 0;
  for (let i = 0; i < array.length; i++) {
    const elementI = array[i];

    for (let j = i + 1; j < array.length; j++) {
      const elementJ = array[j];

      if (elementI + elementJ === target) {
        y++
        console.log(`Pair [${elementI} , ${elementJ}]  =10`);
      }
    }
  }
  console.log(`  ${y}   Pair   found`);
}

const numbs = [8, 7, 2, 5, 4, 1];
const target = 10;

findPair(numbs, target);
