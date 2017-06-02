func = function(){
  dice = Math.ceil(Math.random() * 100);

  message = "サイコロの結果は" + dice;
  if (dice <= 5) {
    message = message + "で、クリティカルです！";
    if (dice == 1) {
      message = message + "すげえ！";
    }
  }
  else if (96 <= dice) {
    message = message + "で、ファンブルです！"
    if (dice == 100) {
      message = message + "やっちまったな…";
    }
  }
  else {
    message = message + "です！";
  }

  return message;
};

count = 100000000;

results = {};
for (index = 0; index < count; index++) {
  result = func();
  if (!(result in results)) {
    results[result] = 0;
  }
  results[result]++;
}

resultsArray = [];
keys = Object.keys(results);
for (result of keys) {
  resultsArray.push([result, results[result]]);
}

resultsArray.sort(function(a, b){
  a[0].match(/^サイコロの結果は(\d+)/);
  aNum = Number(RegExp.$1);
  b[0].match(/^サイコロの結果は(\d+)/);
  bNum = Number(RegExp.$1);
  return aNum - bNum;
});


resultsArray.forEach(function(v){
  console.log(''+v[0]+':'+v[1]+' ('+(v[1]/count*100).toFixed(2)+'%)');
});