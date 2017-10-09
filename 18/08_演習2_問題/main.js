$().ready(function(){
  $('button').on('click', changeDice);
});

// ボタンを押した時の待機員
changeDice = function(){
  // 3つのサイコロの目を決定

  // 3つのサイコロの目からファイル名を作る

  // 3つのimgタグのsrcを変える

  // 合計値を計算

  // メッセージを合計値に変える

};

// min～maxの整数をランダムに返す
rand = function (min, max) {
  return Math.floor(Math.random() * (max - min+ 1)) + min;
};
