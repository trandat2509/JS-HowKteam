/**
 * Cú pháp:
while(<condition>) <statement>
 */
// number = 0;
// while (number < 7) {
//   console.log(number);
//   number = Math.floor(Math.random() * 10);
// }
// // console.log("");
// console.log(number);

// VD
// var t = 0,
//   Sum = 0;
// while (t <= 100) {
//   Sum += t;
//   t += 1;
// }
// console.log(Sum);

// VD
// console.log("");
// str = "howKteam";
// t = 0;
// while (t < str.length) {
//   console.log(str[t]);
//   t++;
// }

/** Vòng lặp Do while:
 * Cú pháp:
        do <statement> while(<condition>)
*/
// t = 0;
// do {
//     console.log(t);
//     t += 2;
// } while (t <= 10);

/** Break và continue
 * - Break: trong vòng lặp khi đang chạy mà gặp lệnh break thì chương trình kết thúc luôn mà không cần kiểm tra điều kiện
 * - continue: Trong vòng lặp while sẽ khiến chương trình bỏ qua các lệnh sau nó và trực tiếp chuyển đến kiểm tra điều kiện
 */
/** break */
// while (true) {
//   console.log("Kteam");
//   break;
// }
// console.log("Out loop");

// VD:
// var t = 0,
//   sum = 0;
// while (t <= 100) {
//   if (t > 50) break;
//   t++;
// }
// console.log(t);

/** continue */
var t = 0,
  sum = 0;
while (t <= 100) {
  t++;
  if ((t >= 50) && (t <= 60)) continue;
  sum += t;
  console.log(t);
}
console.log(sum);
