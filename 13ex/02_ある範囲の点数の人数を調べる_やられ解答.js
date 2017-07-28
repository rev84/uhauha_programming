/*********************************************************
 * 指定した範囲の点数をとった人数を返す関数
 * (ただし、範囲とは min 点～ max 点であり、
 *  min 点、max 点をとった人を含む)
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

// 0～50点をとった人数は2人
console.log(getRangeCount([67, 23, 70, 51, 35, 66, 54, 99, 73, 88], 0, 50));

// 50～100点をとった人数は8人
console.log(getRangeCount([67, 23, 70, 51, 35, 66, 54, 99, 73, 88], 50, 100));

// 0点をとった人数は0人
console.log(getRangeCount([67, 23, 70, 51, 35, 66, 54, 99, 73, 88], 0, 0));

// 50点をとった人数は1人
console.log(getRangeCount([50], 50, 50));

// 100点をとった人数は0人
console.log(getRangeCount([50], 100, 100));

// 41点をとった人数は9人
console.log(getRangeCount([64, 93, 70, 58, 77, 82, 21, 20, 39, 21, 15, 94, 13, 9, 6, 86, 39, 33, 34, 70, 47, 95, 3, 52, 85, 63, 26, 61, 20, 38, 5, 3, 22, 3, 25, 11, 50, 90, 88, 45, 47, 3, 61, 32, 4, 94, 62, 36, 8, 58, 21, 84, 91, 82, 95, 82, 75, 50, 81, 20, 73, 11, 70, 18, 9, 94, 41, 48, 81, 1, 99, 49, 94, 60, 74, 71, 24, 79, 6, 10, 1, 62, 46, 22, 89, 75, 1, 7, 29, 53, 49, 24, 96, 96, 65, 33, 71, 13, 6, 25, 22, 24, 100, 18, 1, 94, 70, 81, 94, 91, 56, 33, 12, 83, 54, 100, 92, 60, 64, 72, 0, 21, 71, 19, 8, 79, 29, 68, 45, 42, 50, 25, 71, 55, 13, 34, 91, 92, 55, 18, 93, 32, 45, 93, 29, 40, 7, 30, 4, 69, 90, 99, 65, 91, 0, 38, 19, 84, 1, 25, 43, 100, 36, 59, 30, 38, 72, 35, 19, 52, 15, 72, 19, 96, 63, 32, 6, 9, 94, 91, 44, 48, 58, 19, 41, 64, 11, 22, 74, 75, 58, 62, 36, 19, 8, 18, 16, 78, 57, 86, 52, 81, 4, 83, 19, 30, 41, 3, 63, 20, 21, 98, 2, 22, 59, 74, 82, 43, 39, 24, 90, 0, 94, 24, 0, 27, 98, 12, 76, 53, 28, 28, 8, 62, 43, 50, 70, 93, 20, 100, 90, 56, 90, 6, 84, 79, 28, 75, 87, 12, 76, 90, 45, 86, 46, 44, 87, 56, 92, 24, 72, 31, 64, 96, 64, 51, 87, 74, 12, 86, 76, 13, 29, 94, 42, 3, 87, 67, 91, 35, 98, 2, 44, 95, 18, 97, 1, 38, 79, 76, 6, 46, 1, 51, 45, 26, 20, 20, 5, 43, 41, 96, 97, 17, 62, 29, 32, 41, 1, 14, 14, 69, 56, 92, 43, 52, 14, 70, 88, 72, 12, 81, 73, 48, 11, 13, 86, 79, 54, 29, 40, 3, 57, 63, 45, 8, 61, 20, 93, 82, 65, 40, 95, 26, 99, 90, 41, 61, 27, 7, 12, 71, 54, 47, 45, 78, 100, 56, 28, 91, 8, 51, 30, 83, 4, 48, 46, 51, 28, 34, 53, 66, 77, 96, 47, 7, 95, 14, 37, 18, 21, 74, 87, 84, 71, 33, 61, 81, 87, 54, 8, 75, 12, 16, 58, 83, 24, 53, 29, 76, 81, 63, 55, 25, 11, 80, 23, 74, 20, 17, 71, 85, 70, 22, 57, 71, 17, 22, 14, 77, 73, 6, 10, 51, 75, 28, 60, 18, 15, 0, 91, 55, 91, 64, 89, 57, 28, 100, 50, 71, 20, 96, 77, 15, 99, 49, 48, 59, 91, 0, 6, 65, 13, 35, 18, 96, 73, 3, 3, 5, 42, 10, 7, 26, 14, 16, 61, 22, 35, 51, 38, 74, 39, 94, 72, 51, 1, 21, 24, 100, 5, 96, 23, 96, 11, 7, 88, 94, 60, 0, 94, 69, 70, 14, 43, 44, 47, 61, 61, 37, 81, 45, 13, 26, 0, 96, 79, 86, 25, 20, 55, 90, 99, 64, 12, 63, 87, 50, 56, 62, 94, 93, 63, 92, 93, 6, 89, 2, 47, 60, 31, 18, 74, 12, 21, 97, 73, 32, 91, 21, 25, 14, 72, 25, 69, 64, 12, 37, 40, 33, 71, 63, 63, 81, 97, 15, 75, 44, 80, 61, 71, 88, 11, 87, 62, 26, 13, 3, 65, 68, 39, 55, 68, 1, 40, 46, 55, 40, 51, 26, 34, 44, 49, 87, 13, 12, 49, 19, 50, 12, 53, 52, 70, 80, 56, 96, 21, 40, 34, 81, 39, 80, 37, 38, 27, 80, 3, 80, 91, 69, 44, 52, 68, 74, 32, 90, 86, 86, 62, 85, 20, 66, 15, 32, 69, 63, 48, 99, 89, 46, 90, 1, 28, 46, 93, 72, 61, 88, 87, 53, 70, 24, 10, 100, 90, 82, 36, 30, 49, 23, 91, 44, 11, 9, 52, 14, 84, 48, 19, 14, 89, 12, 84, 97, 36, 27, 76, 21, 56, 31, 50, 7, 72, 59, 62, 50, 33, 81, 6, 59, 49, 17, 12, 82, 7, 17, 4, 18, 37, 48, 63, 0, 100, 25, 48, 20, 45, 44, 41, 79, 59, 48, 73, 64, 51, 80, 91, 98, 26, 18, 43, 38, 6, 37, 75, 100, 58, 20, 95, 52, 68, 64, 11, 33, 6, 33, 41, 40, 6, 13, 28, 50, 31, 35, 70, 23, 86, 39, 82, 66, 52, 27, 79, 33, 9, 66, 99, 17, 43, 96, 81, 12, 39, 88, 47, 28, 17, 20, 60, 44, 46, 31, 25, 29, 33, 76, 96, 94, 46, 87, 13, 98, 57, 26, 11, 65, 54, 68, 6, 53, 69, 11, 67, 14, 58, 94, 23, 62, 85, 100, 94, 31, 90, 45, 4, 40, 50, 70, 33, 28, 90, 3, 30, 99, 79, 27, 37, 19, 16, 93, 88, 58, 31, 12, 94, 36, 23, 37, 97, 28, 68, 81, 73, 52, 49, 100, 9, 99, 50, 64, 43, 6, 59, 43, 3, 71, 76, 85, 64, 35, 99, 97, 91, 61, 79, 96, 7, 90, 76, 95, 35, 11, 22, 81, 52, 58, 86, 98, 95, 78, 41, 65, 61, 71, 71, 29, 40, 42, 79, 84, 33, 26, 1, 8, 89, 13, 91, 22, 47, 89, 39, 2, 71, 3, 7, 33, 83, 25, 18, 31, 92, 81, 85, 88, 27, 8, 2, 58, 22, 35, 24, 70, 54, 44, 3, 75, 65, 95, 93, 15, 71, 65, 33, 39, 34, 72, 30, 82, 86, 15, 96, 29, 51, 66, 94, 66, 95, 84, 11, 88, 70, 65, 79, 15, 66, 35, 59, 6, 1, 10, 91, 65, 82, 87, 82, 46, 24, 7, 13, 24, 18, 84, 21, 82, 98, 10, 11, 23, 14, 28, 80, 76, 93, 19, 79, 22, 100, 81, 45, 98, 88, 100, 2, 74, 96, 15, 62, 13, 19, 68, 28, 15, 12, 80, 93, 91, 48, 65, 71, 13, 88, 21, 10, 54, 74, 35, 5, 35, 67, 76], 41, 41));

// 101点をとった人数は0人
console.log(getRangeCount([64, 93, 70, 58, 77, 82, 21, 20, 39, 21, 15, 94, 13, 9, 6, 86, 39, 33, 34, 70, 47, 95, 3, 52, 85, 63, 26, 61, 20, 38, 5, 3, 22, 3, 25, 11, 50, 90, 88, 45, 47, 3, 61, 32, 4, 94, 62, 36, 8, 58, 21, 84, 91, 82, 95, 82, 75, 50, 81, 20, 73, 11, 70, 18, 9, 94, 41, 48, 81, 1, 99, 49, 94, 60, 74, 71, 24, 79, 6, 10, 1, 62, 46, 22, 89, 75, 1, 7, 29, 53, 49, 24, 96, 96, 65, 33, 71, 13, 6, 25, 22, 24, 100, 18, 1, 94, 70, 81, 94, 91, 56, 33, 12, 83, 54, 100, 92, 60, 64, 72, 0, 21, 71, 19, 8, 79, 29, 68, 45, 42, 50, 25, 71, 55, 13, 34, 91, 92, 55, 18, 93, 32, 45, 93, 29, 40, 7, 30, 4, 69, 90, 99, 65, 91, 0, 38, 19, 84, 1, 25, 43, 100, 36, 59, 30, 38, 72, 35, 19, 52, 15, 72, 19, 96, 63, 32, 6, 9, 94, 91, 44, 48, 58, 19, 41, 64, 11, 22, 74, 75, 58, 62, 36, 19, 8, 18, 16, 78, 57, 86, 52, 81, 4, 83, 19, 30, 41, 3, 63, 20, 21, 98, 2, 22, 59, 74, 82, 43, 39, 24, 90, 0, 94, 24, 0, 27, 98, 12, 76, 53, 28, 28, 8, 62, 43, 50, 70, 93, 20, 100, 90, 56, 90, 6, 84, 79, 28, 75, 87, 12, 76, 90, 45, 86, 46, 44, 87, 56, 92, 24, 72, 31, 64, 96, 64, 51, 87, 74, 12, 86, 76, 13, 29, 94, 42, 3, 87, 67, 91, 35, 98, 2, 44, 95, 18, 97, 1, 38, 79, 76, 6, 46, 1, 51, 45, 26, 20, 20, 5, 43, 41, 96, 97, 17, 62, 29, 32, 41, 1, 14, 14, 69, 56, 92, 43, 52, 14, 70, 88, 72, 12, 81, 73, 48, 11, 13, 86, 79, 54, 29, 40, 3, 57, 63, 45, 8, 61, 20, 93, 82, 65, 40, 95, 26, 99, 90, 41, 61, 27, 7, 12, 71, 54, 47, 45, 78, 100, 56, 28, 91, 8, 51, 30, 83, 4, 48, 46, 51, 28, 34, 53, 66, 77, 96, 47, 7, 95, 14, 37, 18, 21, 74, 87, 84, 71, 33, 61, 81, 87, 54, 8, 75, 12, 16, 58, 83, 24, 53, 29, 76, 81, 63, 55, 25, 11, 80, 23, 74, 20, 17, 71, 85, 70, 22, 57, 71, 17, 22, 14, 77, 73, 6, 10, 51, 75, 28, 60, 18, 15, 0, 91, 55, 91, 64, 89, 57, 28, 100, 50, 71, 20, 96, 77, 15, 99, 49, 48, 59, 91, 0, 6, 65, 13, 35, 18, 96, 73, 3, 3, 5, 42, 10, 7, 26, 14, 16, 61, 22, 35, 51, 38, 74, 39, 94, 72, 51, 1, 21, 24, 100, 5, 96, 23, 96, 11, 7, 88, 94, 60, 0, 94, 69, 70, 14, 43, 44, 47, 61, 61, 37, 81, 45, 13, 26, 0, 96, 79, 86, 25, 20, 55, 90, 99, 64, 12, 63, 87, 50, 56, 62, 94, 93, 63, 92, 93, 6, 89, 2, 47, 60, 31, 18, 74, 12, 21, 97, 73, 32, 91, 21, 25, 14, 72, 25, 69, 64, 12, 37, 40, 33, 71, 63, 63, 81, 97, 15, 75, 44, 80, 61, 71, 88, 11, 87, 62, 26, 13, 3, 65, 68, 39, 55, 68, 1, 40, 46, 55, 40, 51, 26, 34, 44, 49, 87, 13, 12, 49, 19, 50, 12, 53, 52, 70, 80, 56, 96, 21, 40, 34, 81, 39, 80, 37, 38, 27, 80, 3, 80, 91, 69, 44, 52, 68, 74, 32, 90, 86, 86, 62, 85, 20, 66, 15, 32, 69, 63, 48, 99, 89, 46, 90, 1, 28, 46, 93, 72, 61, 88, 87, 53, 70, 24, 10, 100, 90, 82, 36, 30, 49, 23, 91, 44, 11, 9, 52, 14, 84, 48, 19, 14, 89, 12, 84, 97, 36, 27, 76, 21, 56, 31, 50, 7, 72, 59, 62, 50, 33, 81, 6, 59, 49, 17, 12, 82, 7, 17, 4, 18, 37, 48, 63, 0, 100, 25, 48, 20, 45, 44, 41, 79, 59, 48, 73, 64, 51, 80, 91, 98, 26, 18, 43, 38, 6, 37, 75, 100, 58, 20, 95, 52, 68, 64, 11, 33, 6, 33, 41, 40, 6, 13, 28, 50, 31, 35, 70, 23, 86, 39, 82, 66, 52, 27, 79, 33, 9, 66, 99, 17, 43, 96, 81, 12, 39, 88, 47, 28, 17, 20, 60, 44, 46, 31, 25, 29, 33, 76, 96, 94, 46, 87, 13, 98, 57, 26, 11, 65, 54, 68, 6, 53, 69, 11, 67, 14, 58, 94, 23, 62, 85, 100, 94, 31, 90, 45, 4, 40, 50, 70, 33, 28, 90, 3, 30, 99, 79, 27, 37, 19, 16, 93, 88, 58, 31, 12, 94, 36, 23, 37, 97, 28, 68, 81, 73, 52, 49, 100, 9, 99, 50, 64, 43, 6, 59, 43, 3, 71, 76, 85, 64, 35, 99, 97, 91, 61, 79, 96, 7, 90, 76, 95, 35, 11, 22, 81, 52, 58, 86, 98, 95, 78, 41, 65, 61, 71, 71, 29, 40, 42, 79, 84, 33, 26, 1, 8, 89, 13, 91, 22, 47, 89, 39, 2, 71, 3, 7, 33, 83, 25, 18, 31, 92, 81, 85, 88, 27, 8, 2, 58, 22, 35, 24, 70, 54, 44, 3, 75, 65, 95, 93, 15, 71, 65, 33, 39, 34, 72, 30, 82, 86, 15, 96, 29, 51, 66, 94, 66, 95, 84, 11, 88, 70, 65, 79, 15, 66, 35, 59, 6, 1, 10, 91, 65, 82, 87, 82, 46, 24, 7, 13, 24, 18, 84, 21, 82, 98, 10, 11, 23, 14, 28, 80, 76, 93, 19, 79, 22, 100, 81, 45, 98, 88, 100, 2, 74, 96, 15, 62, 13, 19, 68, 28, 15, 12, 80, 93, 91, 48, 65, 71, 13, 88, 21, 10, 54, 74, 35, 5, 35, 67, 76], 101, 101));

