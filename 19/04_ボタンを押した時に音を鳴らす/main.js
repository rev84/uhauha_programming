$().ready(function(){
  main();
});

main = function(){
  // ボタンクリック時に playAtumori 出動
  $('#play').on('click', playAtumori);
};

playAtumori = function(){
  // あつもり再生
  aud = new Audio('../atumori2.wav');
  aud.play();
};
