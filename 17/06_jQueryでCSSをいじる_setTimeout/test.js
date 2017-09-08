main = function(){
  setTimeout(diceMove, 5000);
};

diceMove = function(){
  $('#dice').css('top', '100px');
  $('#dice').css('left', '100px');
};

$().ready(main);
