dice = Math.ceil(Math.random() * 100);

message = "サイコロの結果は" + dice;
if (dice <= 5) {
  message = message + "で、クリティカルです！";
}
else if (96 <= dice) {
  message = message + "で、ファンブルです！"
}
else {
  message = message + "です！";
}

console.log(message);