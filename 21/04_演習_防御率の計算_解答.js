// 野球選手の日米通算成績（WikipediaやNPB公式ページより。時系列もまばらで正確性は保証しません）
var scores = {
  "松井秀喜" : {
    "投球回": 0,
    "自責点": 0,
  },
  "イチロー" : {
    "投球回": 1,
    "自責点": 1,
  },
  "前田健太" : {
    "投球回": 1509.2,
    "自責点": 401,
  },
};

/****************************************
「○○選手の防御率は、(防御率)です。」
と選手全員分をconsole.logしてください。

ただし、投球したことがない選手は
「○○選手は投球したことがありません。」
としてください。

防御率 = (自責点 × 9) ÷ 投球回
*****************************************/
for (var name in scores) {
  var inning    = scores[name]['投球回'];
  var earnedRun = scores[name]['自責点'];

  //if (earnedRun == 0) { ←間違い
  if (inning == 0) {
    console.log(name+'選手は投球したことがありません。');
  }
  else {
    var guardRate = (earnedRun * 9) / inning;

    console.log(name+'選手の防御率は、'+guardRate+'です。');
  }
}
