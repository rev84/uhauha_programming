main = function(){
  $('#dice').css('top', '0px');
  $('#dice').css('left', '0px');

  // 0.1秒ごとにdiceGoAwayを実行
  setInterval(diceGoAway, 100);
};

diceGoAway = function(){

};

// topを数値で取得する
getTop = function(jQueryElement) {
  return Number($(jQueryElement).css('top').replace('px', ''));
};

// leftを数値で取得する
getLeft = function(jQueryElement) {
  return Number($(jQueryElement).css('left').replace('px', ''));
};

$().ready(main);
