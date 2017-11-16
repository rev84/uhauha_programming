b = {
  "yamada" : "喝！",
  "tanaka" : 1,
  "yoshioka" : true,
};

// キーがindexに入る
for (var index in b) {
  console.log(index);
}

// 要素を扱いたい場合は、b[キー]を参照すればよい
for (var index in b) {
  var value = b[index];
  console.log(value);
}

// ダメな例
for (var index in b) {
  var value = b.index;  // キー名が変数の場合、こういう書き方はできない
  console.log(value);
}
