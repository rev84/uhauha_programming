canBuy = function (money, price) {
  // 所持金より値段の方が大きいなら
  if (money < price) {
    // 買えない
    return false;
  }
  // 買える
  return true;
};


testCase = [
  //  money   price
  [     100,    300  ],
  [     300,    100  ],
  [     300,    300  ],
  [  100000,  83495  ],
  [  123456, 999999  ],
];
testCase.forEach(function(v){
  mo = v[0];
  pr = v[1];
  console.log(mo+'円で'+pr+'円のものは'+(canBuy(mo, pr) ? '買える' : '買えない'));
});

