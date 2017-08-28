/********************************************************
 * どっちのコスパがいいかを返す関数
 ********************************************************/
compareCosper = function(goto1, goto2, destList) {
  // 行き先を検索してコスパを計算
  var cosper1 = -Infinity;
  var cosper2 = -Infinity;
  for (var index = 0; index < destList.length; index++) {
    var cost     = destList[index][0];  // かかる金額
    var distance = destList[index][1];  // 距離
    var name     = destList[index][2];  // 行き先の名前

    // 行き先を発見したので、コスパを保存
    if (goto1 == name) {
      cosper1 = distance / cost;
    }
    if (goto2 == name) {
      cosper2 = distance / cost;
    }
  }

  // コスパが-Infinityのままってことは
  // 行き先が見つからなかったのでfalse
  if (cosper1 == -Infinity || cosper2 == -Infinity) {
    return false;
  }

  // コスパのいい方の行き先を返す
  if (cosper1 > cosper2) {
    return goto1;
  }
  else if (cosper1 < cosper2) {
    return goto2;
  }

  // 残ったのは同じコスパだった場合のみなのでtrue
  return true;
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
  [105, 1.6,   "同コスパ青山"],  // 青山の半分の値段と距離なので同コスパの架空の駅

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

// 厨川
console.log(compareCosper("青山", "厨川", FROM_MORIOKA));

// 滝沢
console.log(compareCosper("滝沢", "巣子", FROM_MORIOKA));

// 目時
console.log(compareCosper("目時", "三戸", FROM_MORIOKA));

// 八戸
console.log(compareCosper("好摩", "八戸", FROM_MORIOKA));

// 金田一温泉
console.log(compareCosper("金田一温泉", "剣吉", FROM_MORIOKA));

// 西日暮里
console.log(compareCosper("北高岩", "西日暮里", FROM_MORIOKA));

// ニューヨーク
console.log(compareCosper("滝沢", "ニューヨーク", FROM_MORIOKA));

// ニューヨーク
console.log(compareCosper("福岡空港", "ニューヨーク", FROM_MORIOKA));

// true （同じ行き先なのでコスパは同じ）
console.log(compareCosper("滝沢", "滝沢", FROM_MORIOKA));

// true
console.log(compareCosper("青山", "同コスパ青山", FROM_MORIOKA));

// false（盛岡は行き先リストにない）
console.log(compareCosper("盛岡", "青山", FROM_MORIOKA));

// false（どっちも行き先リストにない）
console.log(compareCosper("太陽", "月", FROM_MORIOKA));

