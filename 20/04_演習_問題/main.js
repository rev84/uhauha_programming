main = function(){
  $('#btn').on('click', addDice);
};

// サイコロを追加しながら合計値を改変する関数にしてください
addDice = function(){
  // サイコロの目を決める

  // そのサイコロの目のimgタグを作る

  // dice_space に append(appendTo) でimgタグを追加

  // 今までの合計値をとってくる(Number関数で数字にする)

  // 今までの合計値にサイコロの目を足して書き換える
  
};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};

$().ready(main);

