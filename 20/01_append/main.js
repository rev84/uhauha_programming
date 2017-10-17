main = function(){
  // jQuery で img タグを作る
  var img = $('<img>').attr('src', '../dice1.png');

  // append で body に追加する
  $('body').append(img);
};


$().ready(main);

