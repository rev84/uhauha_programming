dice = Math.floor(Math.random() * 100) + 1;

message = "サイコロの結果は" + dice;
if (dice <= 5) {
  message = message + "で、クリティカルです！";
  if (dice == 1) {
  	message = message + "すげえ！";
  }
}
else if (96 <= dice) {
  message = message + "で、ファンブルです！"
  if (dice == 100) {
  	message = message + "やっちまったな…";
  }
}
else {
  message = message + "です！";
}

console.log(message);