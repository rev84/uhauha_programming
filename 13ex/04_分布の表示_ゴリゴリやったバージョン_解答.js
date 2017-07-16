/*********************************************************
 * 分布を表示する関数
 *********************************************************/
showGraph = function(ary) {
  /**********************************
   * 0～10の分布配列 bunpu を作る
   * グラフの項目の単位は、10で割った時の整数部分であることを利用する
   * [0] 0点台
   * [1] 10点台
   * ....
   * [9] 90点台
   * [10] 100点
   **********************************/
  var bunpu = [];
  for (var basePoint = 0; basePoint <= 10; basePoint++) {
    bunpu[basePoint] = 0;
  }

  // 与えられた配列を、bunpu に分類する
  for (var index = 0; index < ary.length; index++) {
    // 分布におけるどこに対応するかは、10で割った答えの整数部分
    var bunpuIndex = Math.floor(ary[index] / 10);
    bunpu[bunpuIndex]++;
  }

  // bunpu から、グラフを表示する
  for (var bunpuIndex = 0; bunpuIndex < bunpu.length; bunpuIndex++) {
    // 表示する文字列
    var message = '';
    // 項目名は、10倍したもの
    var basePoint = bunpuIndex * 10;
    // (おまけ。発想が至らなくてもよい)
    // 項目名を揃えるため、
    // 0点の場合は空白2文字、
    // 10～90点の場合は空白1文字を先頭におぎなう
    if (basePoint == 0) {
      message = '  0';
    }
    else if (10 <= basePoint && basePoint <= 90) {
      message = ' '+basePoint;
    }
    else {
      message += basePoint;
    }

    // 項目名とグラフの区切り
    message += ' ';

    // 人数分、| を追加する
    for (var index = 0; index < bunpu[bunpuIndex]; index++) {
      message += '|';
    }

    // 表示
    console.log(message);
  }
};

showGraph([81, 88, 89, 88, 45, 55, 65, 0, 94, 28, 34, 49, 0, 74, 100, 97, 40, 69, 35, 48, 47, 98, 41, 2, 10, 84, 75, 64, 95, 20, 43, 56, 100, 87, 58, 31, 91, 87, 91, 10, 68, 51, 16, 68, 56, 47, 73, 59, 65, 66, 15, 22, 62, 70, 27, 60, 10, 39, 74, 78, 15, 46, 38, 18, 27, 69, 55, 96, 60, 7, 51, 47, 27, 27, 10, 24, 11, 16, 9, 16, 13, 15, 3, 82, 26, 90, 43, 63, 57, 25, 2, 15, 53, 19, 43, 64, 49, 17, 19, 41]);
