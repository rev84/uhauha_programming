main = function(){
  // monthが変化したら、dayの選択肢を変更する
  $('#month').on('change', changeDay);
  initMonth();
  changeDay();
  // ボタンが押されたら、メッセージを変更する
  $('#decide').on('click', changeMessage);
};

/****************************************
 * メッセージを変更する関数を実装してね
 * メッセージは「○月△日です！」
 ****************************************/
changeMessage = function(){

};

// 月から日数を返す
month2day = function(month){
  if (month == 4 || month == 6 || month == 9 || month == 11) {
    return 30;
  }
  else if (month == 2) {
    return 29;
  }
  else {
    return 31;
  }
};

// 月の選択肢を追加
initMonth = function(){
  for (var m = 1; m <= 12; m++) {
    // <option>タグを作ってmonthに追加する
    var option = $('<option>').val(m).html(m);
    $('#month').append(option);
  }
};

// dayの内容を変化させる
changeDay = function(){
  // dayの選択肢を全消し
  $('#day').html('');
  // 月
  var month = $('#month').val();
  // 日数を取得
  var dayMax = month2day(month);
  // 日数分、選択肢を追加
  for (var d = 1; d <= dayMax; d++) {
    var option = $('<option>').val(d).html(d);
    $('#day').append(option);
  }
};

$().ready(main);

