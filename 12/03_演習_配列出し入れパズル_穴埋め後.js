a = ["Revin", "最", "低"];

// push, pop, unshift, shift だけを使おう
a.shift();
a.unshift("やられ");
a.pop();
a.push("高");

// a を順番にくっつけたら「やられ最高」になってるかな？
if (a.join("") == "やられ最高") {
  console.log("★★★正解★★★");
}
else {
  console.log("×××間違い×××");
}
