main = function(){
  // ボタンを押したら、サイコロ追加
  $('#btn').on('click', appendDice1);
};

// サイコロ追加関数
appendDice1 = function(){
  // サイコロの img を作成
  var dice = $('<img>').attr('src', '../dice1.png');
  // dice_space に追加
  $('#dice_space').append(dice);
};


$().ready(main);

