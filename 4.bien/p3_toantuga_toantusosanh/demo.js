/** toán tử gán và toán tử so sánh trong JS */
let t = "JavaScript";
t = "kTeam";
console.log(t);
// có thể gán cho nhiều biến cùng một giá trị
let a, b, c;
a = b = c = "Huế";
// thực hiện nhiều phép gán trên một dòng
[x, y, z] = ["trần", "hậu", "đạt"];
console.log(a);
console.log(b);
console.log(c);
console.log(x);
console.log(y);
console.log(z);

// cách kiểm trả kiểu dữ liệu của một biến
console.log(typeof a);
console.log(typeof z);

// toán tử so sánh: toán tử đúng giữa hai phép so sánh thì được gọi là toán tử so sánh
/** các toán tử so sánh
 * ==   bằng
 * >    lớn hơn
 * <    nhỏ hơn
 * >=   lớn hơn hoặc bằng
 * <=   nhỏ hơn hoặc bằng
 * !=   khác
 * ===  so sánh giá trị tuyệt đối: nếu hai giá trị bằng nhau và có cùng kiểu dữ liệu thì kq trả về là true nếu khác kiểu dữ liệu thì kq trả về là false
 * !==  tương tự như ===:
 */

console.log("4" == 4);
console.log("4" === 4);
console.log("4" != 4);
console.log("4" !== 4);
