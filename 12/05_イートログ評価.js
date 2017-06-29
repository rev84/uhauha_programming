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

eatlogReviews = [];

count = 0;
while (count < 10) {
  // 1～5の評価をランダムでおこなう
  review = Math.floor(Math.random() * 5) + 1;
  eatlogReviews.push(review);
  count++;
}

console.log(eatlogReviews);
console.log("平均評価："+average(eatlogReviews));
