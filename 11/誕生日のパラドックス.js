CONST = {
  LOOP_COUNT : 100000,
  MEMBER_MAX : 100
};

getBirthday = function() {
  return Math.floor(Math.random()*365) + 1;
};


for (var memberMax = 2; memberMax <= CONST.MEMBER_MAX; memberMax++) {
  var total = 0;
  var duplicateCount = 0;
  for (var loopCount = 0; loopCount < CONST.LOOP_COUNT; loopCount++) {
    var results = {};
    var isDuplicate = false;
    for (var memberIndex = 0; memberIndex < memberMax; memberIndex++) {
      var birthday = getBirthday();
      if (birthday in results) {
        isDuplicate = true;
        break;
      }
      results[birthday] = true;
    }

    total++;
    if (isDuplicate) {
      duplicateCount++;
    }
  }

  console.log(''+memberMax+'人いて誰かの誕生日がかぶっている確率:'+(duplicateCount / total * 100).toFixed(2)+'%');
}

