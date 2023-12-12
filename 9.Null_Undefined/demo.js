/** Giá trị null là một kiểu dữ liệu nguyên thủy trong JavaScript, và đơn giản là: nó đại diện cho việc một biến mà không trỏ đến bất kì giá trị nào. */
var a = Boolean(null); // một falsy
console.log(a);
console.log(typeof a);
console.log("");

var b = String(null); // một String null
console.log(b);
console.log(typeof b);
console.log("");

var c = Number(null); //
console.log(c);
console.log(typeof c);
console.log("");

var d = Symbol(null); //
console.log(d);
console.log(typeof d);
console.log("");

var e = Object(null); //
console.log(e);
console.log(typeof e);
console.log("");

// Về mặt bản chất, null được tạo ra để giúp JavaScript tương tác với một loại ngôn ngữ khác, đó chính là Java

// thao tác toán tử với null
console.log(4 + null);

console.log(false + null);

console.log(null + true);

console.log(null === null);

console.log(undefined === null);
console.log("");

/**  undefined xuất hiện khi khởi tạo một giá trị mà không gán giá trị cho nó hoặc truyền undefined vào cho nó
 * - cố gắng truy cập vào một thuộc tính không có sẵn trong một object
 */

var t;
console.log(t);

var k = undefined;
console.log(k);
console.log("");

var h = {
  ten: "dat",
};
console.log(h.ten);
console.log(h.dat);
console.log("");

// undefined là giá trị mặc định của các tham số trong một hàm
function print(a, b) {
  console.log(a);
  console.log(b);
  return a, b;
}
print();
console.log("");

console.log(print());
console.log("");

console.log(4 + undefined);
console.log("");

var a = Boolean(undefined); // một falsy
var b = String(undefined); // một String undefined
var c = Number(undefined); //
var d = Symbol(undefined); //
var e = Object(undefined); //
console.log("");

// thao tác toán tử với undefined
console.log(4 + undefined);

console.log(false + undefined);

console.log(undefined + true);

console.log(undefined === undefined);

console.log(undefined == undefined);
