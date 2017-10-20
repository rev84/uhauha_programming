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
  // 合計金額
  var total = 0;
  // 結果
  var result = [];

  for (var index = 0; index < boughtNumbers.length; index++) {
    var boughtNumber = boughtNumbers[index];

    /**************************************
     * くじの当落を示すID。
     * 0 : ハズレ
     * 1 : 当選
     * 2 : おしいで賞
     * 3 : 参加賞
     * とする。（addLineと同じにしとく）
     * 
     * とりあえずハズレをセット
     **************************************/
    var rewardType = 0;

    // 当選は、完全一致
    if (rewardNumber == boughtNumber) {
      rewardType = 1;
      total += 10000 * 100;
    }
    // おしいで賞は、上3桁なので、10で割った整数部分が一致。
    // ただし「当選」そのものもその条件に該当してしまうが、
    // それは最初の if で判定しているので、当選の場合はそこで引っかかってここには来ない
    else if (Math.floor(rewardNumber / 10) == Math.floor(boughtNumber / 10)) {
      rewardType = 2;
      total += 10000 * 1;
    }
    // 参加賞は10で割った余りが一致
    else if (rewardNumber % 10 == boughtNumber % 10) {
      rewardType = 3;
      total += 300;
    }

    // 行追加
    addLine(boughtNumber, rewardType);
  }

  // 当選番号を書き込む
  $('#reward_number').html(rewardNumber);
  // 合計金額を書き込む
  $('#total_reward').html(total);
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
