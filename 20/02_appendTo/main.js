main = function(){
  // jQuery で img タグを作る
  var img = $('<img>').attr('src', '../dice2.png');

  // appendTo で body に追加する
  img.appendTo('body');
};


$().ready(main);

