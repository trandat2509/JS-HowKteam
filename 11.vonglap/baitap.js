/** câu 1: sự khác nhau giữa while và do..while
 * - while: xét đk trước sau ms thực hiện vòng lặp
 * - do..while: thực hiện vòng lặp sau mới đi xét điều kiện
 */

/**  câu 2: viết một chương trình in ra các ước vơi n có sẵn */
// n = 9;
// if (n % 3 == 0) {
//   console.log(` Số 3 là ước ${n}`);
// } else {
//   console.log(` Số 3 không phải là ước của ${n}`);
// }

// cách 2:
// console.log("viết một chương trình in ra các ước vơi n có sẵn ");
// n = 100;
// for (let i = 1; i <= n; i++) {
//   if (n % i == 0) {
//     console.log(`${i} là ước của ${n}`);
//   }
// }
// console.log("");

/** Câu 3: viết chương trình tính số chẵn số lẻ từ 1 đến n (với n có sẵn) */
console.log("viết chương trình tính số chẵn số lẻ từ 1 đến n (với n có sẵn)");
// cách 1:
// n = 100;
// le = 0;
// for (let i = 1; i <= n; i += 2) {
//   le += i;
// }
// console.log("Tổng các số lẻ:", le);

// chan = 0;
// for (let j = 0; j <= n; j += 2) {
//   chan += j;
// }
// console.log("Tổng các số chẵn:", chan);

// cách 2:
n = 100;
sumChan = 0;
sumLe = 0;

for (let i = 0; i <= n; i++) {
  if (i % 2 == 0) {
    sumChan += i;
  } else {
    sumLe += i;
  }
}
console.log(`Tổng số chẵn: ${sumChan}`);
console.log(`Tổng số lẻ: ${sumLe}`);
