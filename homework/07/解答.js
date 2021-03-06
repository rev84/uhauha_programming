/********************************************************
 * 最もコスパのいい行き先を返す関数
 ********************************************************/
getBestCosper = function(money, destList) {
  // ベストコスパ
  var bestCosper = -Infinity;
  // ベスト行き先
  var bestName   = false;

  for (var index = 0; index < destList.length; index++) {
    var cost     = destList[index][0];  // かかる金額
    var distance = destList[index][1];  // 距離
    var name     = destList[index][2];  // 行き先の名前

    // コスパ（かかる金額は1以上なので、0除算を気にしなくていい）
    var cosper = distance / cost;

    // 所持金を超えておらず、かつ
    // 初コスパ計測、もしくは現在のベストコスパよりもコスパが良ければ
    // ベストコスパ更新
    if (cost <= money && (bestCosper == -Infinity || bestCosper <= cosper)) {
      bestCosper = cosper;
      bestName   = name;
    }
  }

  // 一回もベストコスパ更新されていなければ
  // bestName は false のままだろうから、分岐しなくていい
  return bestName;
};

/**************************************************************
 * 盛岡からの運賃と距離(km)と行き先
 * 適当に調べただけなので、内容の保証はしません
 **************************************************************/
var FROM_MORIOKA = [
  // 遠出
  [33930,  1713.5, "福岡空港"],
  [14730,   534.4, "西日暮里"],
  [99235, 10405,   "ニューヨーク"],

  // IGRいわて銀河鉄道～青い森鉄道
  [210,  3.2,   "青山"],
  [290,  5.6,   "厨川"],
  [370,  10.2,  "巣子"],
  [370,  12.2,  "滝沢"],
  [510,  16.6,  "渋民"],
  [650,  21.3,  "好摩"],
  [780,  26.9,  "岩手川口"],
  [920,  32.0,  "いわて沼宮内"],
  [1060, 37.3,  "御堂"],
  [1200, 44.4,  "奥中山高原"],
  [1440, 52.2,  "小繋"],
  [1550, 59.8,  "小鳥谷"],
  [1690, 64.5,  "一戸"],
  [1950, 70.8,  "二戸"],
  [1950, 73.7,  "斗米"],
  [2080, 78.4,  "金田一温泉"],
  [2360, 82.0,  "目時"],
  [2610, 87.5,  "三戸"],
  [2620, 91.5,  "諏訪ノ平"],
  [2690, 96.8,  "剣吉"],
  [2810, 100.2, "苫米地"],
  [2930, 103.0, "北高岩"],
  [3040, 107.9, "八戸"]
];

// false
console.log(getBestCosper(0, FROM_MORIOKA));

// false
console.log(getBestCosper(200, FROM_MORIOKA));

// 厨川
console.log(getBestCosper(300, FROM_MORIOKA));

// 滝沢
console.log(getBestCosper(400, FROM_MORIOKA));

// 滝沢
console.log(getBestCosper(500, FROM_MORIOKA));

// いわて沼宮内
console.log(getBestCosper(1000, FROM_MORIOKA));

// 奥中山高原
console.log(getBestCosper(1500, FROM_MORIOKA));

// 小鳥谷
console.log(getBestCosper(10000, FROM_MORIOKA));

// 福岡空港
console.log(getBestCosper(50000, FROM_MORIOKA));

// ニューヨーク
console.log(getBestCosper(100000000, FROM_MORIOKA));

// false（やられ君が情弱で行き先がひとつも分からなかった場合）
console.log(getBestCosper(100000000, []));

