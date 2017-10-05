$().ready(function(){
  $('button').on('click', changeDice);
});

// ボタンを押した時の待機員
changeDice = function(){
  // 3つのサイコロの目を決定
  var dice1 = rand(1, 6);
  var dice2 = rand(1, 6);
  var dice3 = rand(1, 6);

  // 3つのサイコロの目からファイル名を作る
  var file1 = '../dice'+dice1+'.png';
  var file2 = '../dice'+dice2+'.png';
  var file3 = '../dice'+dice3+'.png';

  // 3つのimgタグのsrcを変える
  $('#dice1').attr('src', file1);
  $('#dice2').attr('src', file2);
  $('#dice3').attr('src', file3);

  // 合計値を計算
  var total = dice1 + dice2 + dice3;

  // メッセージを合計値に変える
  $('#dice_message').html('合計値は'+total+'です');
};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};
