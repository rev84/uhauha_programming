// 身長をランダムに返す
randHeight = function () {
  return 130 + Number((Math.random() * 50).toFixed(1));
}

// 配列の平均値を返す関数
average = function (ary) {
  var index = 0;
  var total = 0;  // 合計
  while (index < ary.length) {
    total = total + ary[index];
    index++;
  }
  return total / ary.length;  // 平均
}

heights = [];
count = 0;
while (count < 100) {
  heights.push(randHeight());
  count++;
}

console.log("身長の平均は、"+average(heights));
