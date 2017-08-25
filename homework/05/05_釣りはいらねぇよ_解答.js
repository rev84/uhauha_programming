/********************************************
 * お釣りなしで会計できるかを判定する関数
 ********************************************/
canPayJust = function(payYen, coinAry) {
  // coinAryに合わせた値段表
  var coinPriceAry = [1, 5, 10, 50, 100, 500];
  // 値段の高い小銭から順番に支払いを試みる
  // payYenが0になったらもう支払わなくていいのでforをやめる
  for (var index = coinPriceAry.length-1; index >= 0 && payYen != 0; index--) {
    // その小銭の値段
    var price     = coinPriceAry[index];
    // その小銭の所持枚数
    var coinCount = coinAry[index];

    // 「その小銭だけで払うと必要な枚数」を切り下げることで
    // その小銭を使える最大枚数が出る
    var useCount  = Math.floor(payYen / price);
    // 使える枚数が持ってる枚数より多くても、持ってる枚数しか使えない
    if (coinCount < useCount) {
      useCount = coinCount;
    }
    // その小銭を使って、会計の額を減らす
    payYen -= price * useCount;
  }

  // 会計が払いきれている（0円になってる）ならピッタリ払えた
  return payYen == 0;
};

// true (100円は、1円玉100枚あればピッタリ払える)
console.log(canPayJust(100, [100, 0, 0, 0, 0, 0]));

// true (100円は、10円玉10枚あればピッタリ払える)
console.log(canPayJust(100, [0, 0, 10, 0, 0, 0]));

// true (100円は、100円玉1枚あればピッタリ払える)
console.log(canPayJust(100, [0, 0, 0, 0, 1, 0]));

// true (100円は、1円玉5枚、5円玉1枚、10円玉4枚、50円玉1枚あればピッタリ払える)
console.log(canPayJust(100, [5, 1, 4, 1, 0, 0]));

// true (100円は、1円玉100枚、5円玉100枚、10円玉100枚、50円玉100枚あればピッタリ払える)
console.log(canPayJust(100, [100, 100, 100, 100, 0, 0]));

// false (100円は、文無しでは払えない)
console.log(canPayJust(100, [0, 0, 0, 0, 0, 0]));

// false (100円は、500円玉1枚ではピッタリ払えない)
console.log(canPayJust(100, [0, 0, 0, 0, 0, 1]));

// false (100,000円は、1円玉99,999枚ではピッタリ払えない)
console.log(canPayJust(100000, [99999, 0, 0, 0, 0, 0]));

// true
console.log(canPayJust(114514, [11, 45, 14, 8, 10, 893]));

// false
console.log(canPayJust(1145148, [11, 45, 14, 8, 10, 893]));


// true (1円玉4枚、5円玉1枚、10円玉4枚、50円玉1枚、100円玉4枚、500円玉1枚あれば、999円までならピッタリ払える)
var allIsCanPay = true;
for (var payYen = 1; payYen <= 999; payYen++) {
  if (canPayJust(payYen, [4, 1, 4, 1, 4, 1]) != true) {
    allIsCanPay = false;
    break;
  }
}
var message = '1円玉4枚、5円玉1枚、10円玉4枚、50円玉1枚、100円玉4枚、500円玉1枚で、999円までの会計をすべてピッタリ払え';
if (allIsCanPay) {
  message += 'る';
}
else {
  message += 'ない。え？　おかしいやん';
}
console.log(message);

// false (どんなにたくさん持ってても、1円玉がなければ、1の位が1の会計はピッタリ払えない)
var allIsCannotPay = true;
for (var payYen = 1; payYen <= 999999; payYen+=10) {
  if (canPayJust(payYen, [0, 99999, 99999, 99999, 99999, 9999]) == true) {
    allIsCannotPay = false;
    break;
  }
}
var message = 'どんなにたくさん持ってても、1円玉がなければ、1の位が1の会計はピッタリ払え';
if (allIsCannotPay) {
  message += 'ない';
}
else {
  message += 'る。え？　おかしいやん';
}
console.log(message);
