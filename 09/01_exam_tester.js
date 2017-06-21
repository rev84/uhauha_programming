func = function(){
  return Math.ceil(Math.random() * 6);
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
  return Number(a[0]) - Number(b[0]);
});


resultsArray.forEach(function(v){
  console.log(''+v[0]+':'+v[1]+' ('+(v[1]/count*100).toFixed(2)+'%)');
});