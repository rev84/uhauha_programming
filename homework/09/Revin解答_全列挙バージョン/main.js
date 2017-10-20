// ページを開いたら実行される関数
main = function(){
  setInterval(changeNumber, 1000);
};

changeNumber = function() {
  // html()で取ってきて、それによって変化させる
  var numberStr = $('#message').html();
  // Number関数などは教えてないので、文字列で全パターンを列挙
  if (numberStr == '10') {
    $('#message').html('9');
  }
  else if (numberStr == '9') {
    $('#message').html('8');
  }
  else if (numberStr == '8') {
    $('#message').html('7');
  }
  else if (numberStr == '7') {
    $('#message').html('6');
  }
  else if (numberStr == '6') {
    $('#message').html('5');
  }
  else if (numberStr == '5') {
    $('#message').html('4');
  }
  else if (numberStr == '4') {
    $('#message').html('3');
  }
  else if (numberStr == '3') {
    $('#message').html('2');
  }
  else if (numberStr == '2') {
    $('#message').html('1');
  }
  else if (numberStr == '1') {
    $('#message').html('0');
  }
};

$().ready(main);
