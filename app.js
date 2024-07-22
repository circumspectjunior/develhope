let num = 10;
let num2 = 15;
let va = 0;

for (let i = num; i <= num2; i += 1) {
  if (i % 2 == 0) {
    va += 1;
  }
}

console.log(va);
