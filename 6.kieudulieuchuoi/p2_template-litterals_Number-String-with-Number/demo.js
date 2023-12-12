//  template literals là những chuỗi được đặt trong cặp backtick
var a = `how'kTeam
`;
var b = `dooooo`;

console.log(typeof a);
console.log(typeof b);
// nhúng một biểu thức hay một hàm vào trong chuỗi
var sum = 6 + 6 + 6;
var c = `hi 

${("tổng sum", sum)}`;
var d = `hihi ${[1, 2, 3] + [1, 1, 1]}`;
console.log(c);
console.log(d);

/** Mối liên hệ giữa chuỗi và số trong javascript */
var sums = "666";
var tong = 456;

console.log(sums + tong);
console.log(sums - tong);
console.log(sums * tong);
console.log(sums * tong);
console.log(sums / tong);
console.log(sums % tong);
// -> Đối với Number-String, Javascript sẽ cho phép nó thực hiện các toán tử giống như kiểu dữ liệu số (ngoại trừ phép cộng sẽ nối các chuỗi với nhau)
// các toán tử giữa numberString và number sẽ so sánh bình thường
console.log(sums == tong);

// => numberString sẽ xài được như số bình thường
