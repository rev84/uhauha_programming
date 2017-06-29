// 配列aryの合計値を返す
sum = function (ary) {
  var index = 0;
  var total = 0;
  while (index < ary.length) {
    total = total + ary[index];
    index++;
  }
  return total;
}

// 1～diceMaxまでの乱数を返す
dice = function (diceMax) {
  return Math.floor(Math.random() * diceMax) + 1;
}

// diceMax面ダイスをdiceCount個振る
diceEx = function (diceCount, diceMax) {
  // サイコロを振る
  var ary = [];
  var count = 0;
  while (count < diceCount) {
    ary.push(dice(diceMax));
    count++;
  }

  // 表示
  console.log(ary);
  console.log(""+diceCount+"d"+diceMax+"の結果は、"+sum(ary)+"です！");
}

// 3d6振ってみる
diceEx(3, 6);