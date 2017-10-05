$().ready(function(){
  //setInterval(changeDice, 1000);
  $('button').on('click', changeDice);
});

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};

// diceの画像をランダムなサイコロに変える
changeDice = function(){
  // サイコロの目を決定
  var diceNumber = rand(1, 6);

  // サイコロの目からファイル名を作る
  var filename = '../dice'+diceNumber+'.png';

  // diceをそのファイルに変える
  $('#dice').attr('src', filename);

  // サイコロの目からメッセージを作る
  var diceMessage = ''+diceNumber+'が出ました！';
  // dice_messageをメッセージに変える
  $('#dice_message').html(diceMessage);
};
