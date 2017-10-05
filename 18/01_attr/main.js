$().ready(function(){
  main();
});

main = function(){
  // 5秒後にサイコロの画像を変える関数を起動
  setTimeout(changeDice, 5000);
};

changeDice = function(){
  // 456サイに変える
  $('#dice').attr('src', '../dice456.png');
};
