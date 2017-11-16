// 野球選手の日米通算成績（WikipediaやNPB公式ページより。時系列もまばらで正確性は保証しません）
var scores = {
  "松井秀喜" : {
    "打数": 9014,
    "安打": 2643,
  },
  "イチロー" : {
    "打数": 13504,
    "安打": 4358,
  },
  "前田健太" : {
    "打数": 436,
    "安打": 64,
  },
};

for (var name in scores) {
  var batCount = scores[name]["打数"];
  var hitCount = scores[name]["安打"];

  // 打率
  var hitRate = hitCount / batCount;

  console.log(name+"選手の打率は、"+hitRate+"です。");
}
