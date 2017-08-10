/********************************************************
 * 素因数分解した時、何個の素数の積になるかを返す関数
 ********************************************************/
getPrimeFactorCount = function(targetNum) {
  var count = 0;
  // 割る数divは2から1ずつ増やしていく
  // 元の数が1になったらもう割り尽くしたということで終了
  for (var div = 2; 1 < targetNum; div++) {
    // 割る数で割れるだけ割る
    while (targetNum % div == 0) {
      // 割れた回数を増やす
      count++;
      // 実際に割る
      targetNum /= div;
    }
  }
  return count;
};

// 3 (2 * 2 * 5)
console.log(getPrimeFactorCount(20));

// 4 (3 * 3 * 3 * 17)
console.log(getPrimeFactorCount(459));

// 1 (78439)
console.log(getPrimeFactorCount(78439));

// 1 (2)
console.log(getPrimeFactorCount(2));

// 6 (3 * 3 * 3 * 3 * 37 * 333667)
console.log(getPrimeFactorCount(999999999));

// 6 (2 * 2 * 2 * 3 * 3 * 5)
console.log(getPrimeFactorCount(360));

