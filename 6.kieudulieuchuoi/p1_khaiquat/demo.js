/** Chuỗi là tất cả những gì được đặt trong dấy "" or '' */

/**  khai báo một chuỗi */
// khai báo bằng biến
var S1 = 'tran hau\n nguyen dat"';
var S2 = "123";
// khai báo bằng cách sử dụng constructor
String("abc");

"abc".toString();

// thực hiện lấy một ký từ trong biến S1
console.log(S1[4]);

// không thể thay đỏi chuỗi bằng cách thực hiện một phép gán
S1[2] = "g";
console.log(S1);

// Độ dài của chuỗi
console.log("Độ dài của chuỗi:", S1.length);

/** Escape character */
var name1 = "tr\nan dat"; // tất cả xuống dòng khi nằm sau \n
var name2 = "tr\tan dat"; // bị cách ra một khoảng tab sau \t
var name3 = "tr\ban dat"; // xóa ký tự đứng trước con trỏ
var name4 = "tr'an dat"; // in ra dấu '
var name5 = 'tr"an dat'; // in ra dấu "
var name6 = "tr\\an dat"; // thêm dấu /

console.log(name1);
console.log(name2);
console.log(name3);
console.log(name4);
console.log(name5);
console.log(name6);

//  toán tử so sánh với chuỗi
var a = "kTeam";
var b = 67;
console.log(a != b);
console.log(a > b);
/** đầu tiên so sánh ký tự đầu tiên của hai chuỗi bằng cách 
so sánh hai vị trí của ký tự trong bảng mã ascii unicode */
// nếu chuỗi có các ký tự giông nhau thì chuỗi nào dài hơn thì chuỗi đó lớn hơn

/** toán tử nối chuỗi  */
console.log(a + " " + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);

/**  ngoài các toán tử + thì mọi toán tử trên các chuỗi ký tự
 * bao gồm chữ cái đều trả về giá trị NaN */

/** kiểu số và kiểu chuỗi có thể cộng lại với nhau
 * - chuyển số thành chuỗi, sau đó cộng chuỗi lại vơi nhau
 */
