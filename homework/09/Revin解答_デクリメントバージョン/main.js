// ページを開いたら実行される関数
main = function(){
  setInterval(changeNumber, 1000);
};

changeNumber = function() {
  // html()で取ってきて、それによって変化させる
  var numberStr = $('#message').html();
  // 1以上の時に減らす
  if (numberStr >= 1) {
    // 引き算もしくはデクリメントは、文字列に対しても演算できる
    numberStr--;
    // numberStr = numberStr - 1; でもOK
    // numberStr -= 1; でもOK

    $('#message').html(numberStr);
  }
};

$().ready(main);
