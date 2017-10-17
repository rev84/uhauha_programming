main = function(){
  $('#btn').on('click', addDice);
};

// サイコロを追加しながら合計値を改変する関数にしてください
addDice = function(){
  // サイコロの目を決める
  var dice = rand(1, 6);

  // そのサイコロの目のimgタグを作る
  var img = $('<img>').attr('src', '../dice'+dice+'.png');

  // dice_space に append(appendTo) でimgタグを追加
  $('#dice_space').append(img);

  // 今までの合計値をとってくる(Number関数で数字にする)
  var total = Number($('#total').html());

  // 今までの合計値にサイコロの目を足して書き換える
  $('#total').html(total + dice);
};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};

$().ready(main);

