$().ready(function(){
  $('button').on('click', diceChange);
});

// ボタンを押した時の待機員
diceChange = function(){
  // 3つのサイコロの目を決定
  var dice1Num = rand(1,6);
  var dice2Num = rand(1,6);
  var dice3Num = rand(1,6);

  // 3つのサイコロの目からファイル名を作る
  var filename1 = '../dice'+dice1Num+'.png';
  var filename2 = '../dice'+dice2Num+'.png';
  var filename3 = '../dice'+dice3Num+'.png';

  // 3つのimgタグのsrcを変える
  $('#dice1').attr('src', filename1);
  $('#dice2').attr('src', filename2);
  $('#dice3').attr('src', filename3);

  // 合計値を計算
  var dicesum = dice1Num + dice2Num + dice3Num;

  // メッセージを合計値に変える
  $('#dice_message').html(dicesum + 'が出ました！');
};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};
