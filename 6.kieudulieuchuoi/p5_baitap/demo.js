console.log("12" + "12");
console.log(12 + "12");
console.log("12" * "12");
console.log("a" * 13);
console.log("a" + 13);
console.log("aa" + "12" * 3);

console.log("");
console.log("In hình mặt mèo ra màn hình");
console.log(".".repeat(12));
console.log(
  ".".repeat(3) + "+".repeat(2) + ".".repeat(2) + "+".repeat(2) + ".".repeat(3)
);
console.log(".".repeat(5) + "-".repeat(2) + ".".repeat(5));
console.log(".".repeat(4) + "_".repeat(4) + ".".repeat(4));
console.log(".".repeat(12));

console.log("");
console.log("In ra màn hình cây thông noel");
console.log(".".repeat(9));
console.log(".".repeat(4) + "+" + ".".repeat(4));
console.log(".".repeat(3) + "+".repeat(3) + ".".repeat(3));
console.log(".".repeat(2) + "+".repeat(5) + ".".repeat(2));
console.log("." + "+".repeat(7) + ".");
console.log(".".repeat(9));

console.log("");
a = "howKteam and kter";
// a. a.split(‘t’)
// b. a.replace(‘ a’, ‘__’)
// c. a.padStart(‘o’)
// d. a.slice(-13, 8)

console.log(a.split("t"));
console.log(a.replace("a", "__"));
console.log(a.padStart(19, "o "));
console.log(a.slice(-13, 8));

console.log("");
// ‘cha’ < ‘con’
// ‘toan’ < ‘TOAN’
// ‘ton’ == ‘tOn’
// ‘anh’ > ‘em’
// ‘small’ >= ‘big’
console.log("cha" < "con");
console.log("toan" < "TOAN");
console.log("ton" == "tOn");
console.log("anh" > "em"); 
console.log("small" >= "big");
/**  ==> So sánh chuỗi trong JavaScript là so sánh số thứ tự của chuỗi trong bảng mã ASCII
 * - thứ tự trong bảng mã ASCII nhỏ hơn thì phép so sánh nhỏ hơn
 */

/**  Hãy chỉ ra các đặc điểm cơ bản của chuỗi khi nó được dùng với cặp `` (backtics)
 * - cho phép chèn vào các ký tự đặc biệt vào đó
 * - có thể đưa biểu thức vào và thực hiện trực tiếp trong đó
 * - 
 */
