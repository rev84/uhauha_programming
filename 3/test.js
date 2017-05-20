var results = [];
for (var num = 1; num <= 100; num++) {
  if (num % 2 == 0) {
    results.push(num);
  }
}
console.log(results.join(','));
