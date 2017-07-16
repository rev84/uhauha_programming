for (count = 1; count <= 100; count++) {
  // 3の倍数の時はアホになる
  if (count % 3 == 0) {
    console.log("ホアーッ！"+count);
  }
  // 10の位が3ということは、
  // 10で割った整数部分が3である時
  else if (Math.floor(count / 10) == 3) {
    console.log("ホアーッ！"+count);
  }
  // 1の位が3ということは、10で割った時の余りが3
  else if (count % 10 == 3) {
    console.log("ホアーッ！"+count);
  }
  // その他の時は数字を数える
  else {
    console.log(count);
  }
}
