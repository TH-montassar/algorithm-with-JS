const star = 4;

for (let i = 0; i < star; i++) {
  let step = " ";

  for (let j = 0; j < star; j++) {
    if (j <= i) {
      step += "#";
    } else {
      step += " ";
    }
  }
  console.log(step);
}
