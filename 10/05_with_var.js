// start～endの間の合計を返す関数作ったぜ
sum = function(start, end) {
  var yoshida = start;  // ちゃんと var つけて関数内宣言
  var total = 0;
  while(yoshida <= end) {
    total = total + yoshida;
    yoshida++;
  }
  return total;
};

// 吉田の年齢は後で使うから変数に入れとこ
yoshida = 20;
// そんで吉田に1～100の合計の金もらえるから計算しとこ
price = sum(1, 100);
// 表示しよっと
console.log("俺は吉田("+yoshida+"歳)に"+price+"円もらえる！グヘヘ");

