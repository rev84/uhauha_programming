/*********************************************************
 * 分布を表示する関数
 *********************************************************/
getRangeCount = function(ary, min, max) {
  var count = 0;
  for(var index = 0;index < ary.length;index++){
    if(min <= ary[index] && ary[index] <= max){
      count++;
    }
  }
  return count;
};
showGraph = function(ary) {
  var count0 = getRangeCount(ary,0,9);
  var count10 = getRangeCount(ary,10,19);
  var count20 = getRangeCount(ary,20,29);
  var count30 = getRangeCount(ary,30,39);
  var count40 = getRangeCount(ary,40,49);
  var count50 = getRangeCount(ary,50,59);
  var count60 = getRangeCount(ary,60,69);
  var count70 = getRangeCount(ary,70,79);
  var count80 = getRangeCount(ary,80,89);
  var count90 = getRangeCount(ary,90,99);
  var count100 = getRangeCount(ary,100,100);
  var message0 = "  0 ";
  var message10 = " 10 ";
  var message20 = " 20 ";
  var message30 = " 30 ";
  var message40 = " 40 ";
  var message50 = " 50 ";
  var message60 = " 60 ";
  var message70 = " 70 ";
  var message80 = " 80 ";
  var message90 = " 90 ";
  var message100 = "100 ";
  for(var graph0 = 0;graph0 < count0;graph0++){
    message0 = message0 + '|';
  }
  for(var graph10 = 0;graph10 < count10;graph10++){
    message10 = message10 + '|';
  }
  for(var graph20 = 0;graph20 < count20;graph20++){
    message20 = message20 + '|';
  }
  for(var graph30 = 0;graph30 < count30;graph30++){
    message30 = message30 + '|';
  }
  for(var graph40 = 0;graph40 < count40;graph40++){
    message40 = message40 + '|';
  }
  for(var graph50 = 0;graph50 < count50;graph50++){
    message50 = message50 + '|';
  }
  for(var graph60 = 0;graph60 < count60;graph60++){
    message60 = message60 + '|';
  }
  for(var graph70 = 0;graph70 < count70;graph70++){
    message70 = message70 + '|';
  }
  for(var graph80 = 0;graph80 < count80;graph80++){
    message80 = message80 + '|';
  }
  for(var graph90 = 0;graph90 < count90;graph90++){
    message90 = message90 + '|';
  }
  for(var graph100 = 0;graph100 < count100;graph100++){
    message100 = message100 + '|';
  }
  console.log(message0);
  console.log(message10);
  console.log(message20);
  console.log(message30);
  console.log(message40);
  console.log(message50);
  console.log(message60);
  console.log(message70);
  console.log(message80);
  console.log(message90);
  console.log(message100);
};

// これを実行すると、スライドにある山型のグラフになる
showGraph([12, 49, 37, 26, 97, 4, 46, 72, 50, 80, 37, 91, 74, 98, 32, 87, 38, 28, 66, 69, 95, 64, 62, 50, 46, 100, 63, 14, 79, 63, 94, 85, 85, 73, 89, 87, 45, 69, 69, 56, 13, 16, 39, 34, 73, 27, 40, 77, 67, 100, 68, 45, 23, 10, 65, 12, 61, 27, 96, 75, 53, 55, 33, 74, 70, 31, 51, 71, 51, 74, 91, 51, 56, 50, 70, 23, 97, 74, 43, 9, 78, 22, 60, 37, 48, 7, 57, 39, 68, 100, 71, 78, 49, 67, 60, 54, 68, 49, 62, 26, 100, 23, 55, 63, 65, 78, 49, 37, 34, 60, 75, 42, 68, 17, 92, 15, 56, 50, 39, 6, 36, 61, 10, 61, 67, 64, 12, 86, 39, 50, 66, 74, 86, 75, 64, 100, 58, 20, 39, 12, 42, 91, 29, 12, 47, 89, 49, 67, 23, 57, 55, 83, 100, 47, 62, 69, 64, 68, 43, 83, 83, 37, 43, 46, 52, 71, 57, 93, 99, 100, 58, 80, 80, 40, 43, 19, 51, 26, 50, 49, 37, 49, 74, 46, 93, 75, 47, 21, 55, 42, 37, 78, 56, 40, 53, 65, 48, 66, 52, 95, 59, 65, 57, 53, 68, 40, 14, 16, 40, 13, 100, 74, 41, 24, 43, 56, 60, 86, 21, 62, 32, 49, 62, 84, 92, 8, 59, 14, 35, 64, 85, 82, 63, 71, 97, 40, 59, 30, 15, 97, 71, 35, 60, 100, 43, 9, 88, 74, 36, 30, 9, 42, 80, 44, 56, 85, 67, 82, 56, 64, 49, 22, 36, 69, 97, 28, 54, 35, 38, 77, 41, 31, 73, 94, 31, 52, 22, 35, 44, 48, 89, 72, 54, 57, 66, 50, 41, 26, 38, 56, 54, 8, 73, 62, 23, 52, 70, 50, 58, 77, 50, 35, 36, 74, 48, 41, 90, 21, 12, 41, 81, 6, 26, 75, 40, 56, 34, 35, 43, 2, 100, 51, 49, 19, 55, 26]);
