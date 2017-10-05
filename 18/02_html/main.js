$().ready(function(){
  main();
});

main = function(){
  // 5秒後に現実を突きつける
  setTimeout(changeMessage, 5000);
};

changeMessage = function(){
  // メッセージを変える
  $('#message').html('ウソだよベロベロバ～ｗｗｗ');
};
