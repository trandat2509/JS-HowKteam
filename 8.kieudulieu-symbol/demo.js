/** Tong JS Symbol là một trong 7 loại kiểu dữ liệu nguyên thủy bao gồm:
 * - số: number, BigInt
 * - chuỗi: (string), boolean, undefined, symbol và null.
 */

/**cấu trúc: symbol(<key>)
 * - <key> có thể là một số, một chuỗi hay bất kì kiểu dữ liệu nào khác, miễn là nó hợp lệ
 */

/** Để khởi tạo một giá trị kiểu symbol, ta dùng constructor Symbol
 * - Symbol(<value>)
 * - Trong đó: <value> có thể có hoặc không. Nhưng nếu có,<value> phải là một giá trị hợp lệ, và nó có thể mang bất kỳ kiểu dữ liệu nào.
 */
a = Symbol("key");
b = Symbol("1");
c = Symbol(true);
console.log(a);
console.log(b);
console.log(c);
console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log("");

function f() {
  return 1;
}
c = Symbol(f);
console.log(c);
console.log("");

/** Đặc điểm
 * - Đối với kiểu dữ liệu symbol, thì mỗi giá trị là độc nhất trong một chương trình,
 * có nghĩa là, không thể tồn tại hai giá trị symbol bằng nhau,
 * ngoại trừ trường hợp ta dùng phép gán.
 */
t = Symbol("Trần Hậu Nguyên Đạt");
d = Symbol();
console.log(t == d); // kết quả cho ra false vì t và d có giá trị độc nhất
a = c;
console.log(a == c); // trường hợp này cho kết quả ra true vì sử dụng phép gán, gán a = c
// k = Symbol(t);
// console.log(k == t); // trường hợp này sẽ ko đc và chương trình sẽ báo lỗi
console.log("");

/** Các giá trị Symbol khi ép qua kiểu dữ liệu khác
 * - Boolean: -> true
 * - Number: không thể chuyển từ Symbol sang Number
 * - String: -> chuỗi tương ứng
 * - Array: -> một array bao gồm các Symbol
 */
console.log(Boolean(t));
// console.log(Number(t));
console.log(String(t));
console.log(Array(t));
console.log("");

// Sử dụng symbol như là một thuộc tính của object
sb = Symbol("â");
obj = {
  Name: "Kter",
  Age: 18,
  [sb]: "Trần Hậu Nguyên Đạt",
};

console.log(obj[sb]);
console.log(obj["aa"]);
console.log(obj["Name"]);
console.log(obj["Age"]);
