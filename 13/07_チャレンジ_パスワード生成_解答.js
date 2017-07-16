// 0～maxまでの整数をランダムで返す関数
dice = function(max) {
  return Math.floor(Math.random() * (max+1));
};

// パスワードを生成する関数
generatePassword = function() {
  // 使う文字を変数にまとめて入れとく
  var strings = "0123456789abcdefghijklmnopqrstuvwxyz";
  // 最終的に返す文字列
  var result = "";
  // 8回
  for (var count = 0; count < 8; count++) {
    // 0～(文字の長さ-1)番目から1文字ランダムにコピる
    // 例えば5文字なら、0～4番目と数えるので、(文字の長さ)番目は存在しない
    result += strings.substr(dice(strings.length-1), 1);
  }
  return result;
};

// 検証
for (count = 0; count < 10; count++) {
  console.log(generatePassword());
}

