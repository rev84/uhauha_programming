// ページを開いたら実行される関数
main = function(){
  // 当選番号をランダムに決める
  var rewardNumber = generateRandomNumber();
  // 買ったくじの番号をランダムに100件決める
  var boughtNumbers = [];
  for (var index = 0; index < 100; index++) {
    boughtNumbers.push(generateRandomNumber());
  }
  // チェックにかける
  rewardCheck(rewardNumber, boughtNumbers);
  // ソート
  resultSort();
};

// ここを作ってください
rewardCheck = function(rewardNumber, boughtNumbers){
  //合計金額の変数
  var totalmoney = 0;
  //当選番号html置換
  $("#reward_number").html(rewardNumber);
  //買ったクジ配列
  for (var index = 0; index < 100; index++) {
    //当たり以外は外れ
    var rewardType = false;
    var boughtNumber = boughtNumbers[index];
    //当選    
    if(rewardNumber == boughtNumber){
      rewardType = 1;
      totalmoney += 1000000;
    }
    //おしいで賞
    else if(Math.floor(rewardNumber / 10) == Math.floor(boughtNumber / 10)){
      rewardType = 2;
      totalmoney += 10000;
    }
    //参加賞
    else if(boughtNumber % 10 == rewardNumber % 10){
      rewardType = 3;
      totalmoney += 300;
    }
  addLine(boughtNumber, rewardType);
  }
  //合計金額html置換
  $("#total_reward").html(totalmoney);
};

// ランダムな番号を返す
generateRandomNumber = function(){
  var result = '';
  // 先頭は1～9
  result += rand(1, 9);
  // あとは0～9
  for (var index = 1; index < 4; index++) {
    result += rand(0, 9);
  }
  return result;
};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};

// 抽選結果に1行追加する
addLine = function(boughtNumber, rewardType) {
  var className = '';
  var money = 0;
  if (rewardType == 1) {
    className = 'reward1';
    money = 10000 * 100;
  }
  else if (rewardType == 2) {
    className = 'reward2';
    money = 10000 * 1;
  }
  else if (rewardType == 3) {
    className = 'reward3';
    money = 300;
  }


  $('#result tbody').append(
    $('<tr>').append(
      $('<td>').html(boughtNumber)
    ).append(
      $('<td>').html(''+String(money).replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')+'円')
               .addClass(className)
               .addClass('money')
    )
  );
};

// 抽選結果を金額で降順ソートする
resultSort = function(){
  var trs = $('#result tbody tr');
  var trsAry = [];
  for (var index = 0; index < trs.length; index++) {
    trsAry.push(trs[index]);
  }

  trsAry.sort(function(a, b){
    var aNum = Number($(a).find('.money').eq(0).html().replace('円', '').replace(/\,/g, ''));
    var bNum = Number($(b).find('.money').eq(0).html().replace('円', '').replace(/\,/g, ''));
    return bNum - aNum;
  });

  $('#result tbody').html('');
  for (var index = 0; index < trsAry.length; index++) {
    $('#result tbody').append($(trsAry[index]));
  }
};

$().ready(main);
