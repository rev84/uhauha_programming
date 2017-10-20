// ページを開いたら実行される関数
main = function(){
  Subt = function(){
    var num = $("#message").html();
    if(0 < num){
    $("#message").html(num - 1);
  }
  };

  //1秒ごとに数字を減らす
  setInterval(Subt,1000);

};

$().ready(main);
