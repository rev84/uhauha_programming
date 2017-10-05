$().ready(function(){
  // ボタンの「clickイベント」に、
  // ボタンが押された時の関数を結びつける
  $('button').on('click', buttonClicked);
});

// ボタンが押された時に発動する関数
buttonClicked = function(){
  // メッセージを変更する
  $('#message').html('ボタンが押されました');
};

