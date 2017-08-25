/********************************************
 * お釣りなしで会計できるかを判定する関数
 ********************************************/
canPayJust = function(payYen, coinAry) {

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
