main = function(){
  $('#dice').css('top', '0px');
  $('#dice').css('left', '0px');

  // 0.1秒ごとにdiceGoAwayを実行
  setInterval(diceGoAway, 100);
};

diceGoAway = function(){
  var top  = getTop($('#dice'));
  var left = getLeft($('#dice'));

  top  += 10;
  left += 10;

  $('#dice').css('top',  ''+top+'px');
  $('#dice').css('left', ''+left+'px');
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
