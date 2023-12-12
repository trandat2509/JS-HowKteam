// Kiểu dữ liệu Number cho phép tính toán chính xác nhất với các số trong khoảng -(2^53) - 1 đến (2^53) - 1
// Các giá trị này lần lượt là Number_MIN_SAFE_INTEGER và Number_MAX_SAFE_INTEGER.
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

/** Trong JavaScript, có 2 giá trị đặc trưng cho dương vô cùng  và âm vô cùng . Đó lần lượt là Number.POSITIVE_INFINITY và
Number.NEGATIVE_INFINITY. Trong JavaScript , 2 giá trị trên được kí hiệu là Infinity và -Infinity */
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

/** Constructor Number
 * cú pháp: Number(<value>)
 */
let k = Number(8);
console.log(k);
Number("1223");
// 1223
Number([1, 2, 3]);
// NaN
Number({ 1: 1, 2: 2 });
// NaN

/** Các phương thức với số trong JS
 *
 */
// phương thức Number.isNaN
// cú pháp: Number.isNaN(<value>)
console.log("Phương thức isNumber");
let a = 5;
// kiểm tra một giá trị xem có phải là một number hay không
console.log(Number.isNaN(a));
console.log(Number.isNaN("a"));
console.log(Number.isNaN(Infinity));

// Phương thức Number.isInfinite: xác định xem giá trị truyền vào có được xem là một số hữu hạn hay không
// cú pháp: Number.isNaN(<value>)
console.log("Phương thức isInfinite");
console.log(Number.isFinite(a));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log("");

// Phương thức Number.isInteger: Xác định giá trị truyền vào có phải là số nguyên hay không
// cú pháp: Number.isInteger(<value>)
console.log("Phương thức isInteger");
console.log(Number.isFinite(a));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(Infinity));
console.log("");

/** Phương thức toExponential: Trả về một giá trị chuỗi (Number-String), là số <Number> ban đầu được viết dưới dạng thu gọn thành tích của một số thực nhân với lũy thừa
của 10, với <fractionDigits> là số lượng chữ số được lấy sau dấu phẩy (trong JavaScript là dấu chấm).*/
// cú pháp: <Number>.toExponential(<fractionDigits>)
// Lưu ý: giá trị của <fractionDigits> phải nằm giữa 0 và 100, giá trị này được mặc định là số chữ số thuộc phần thập phân của  <Number>
console.log("Phương thức toExponential");
let d = 55.3928432974;
console.log(d.toExponential(0));
console.log("");

/**  Phương thức toFixed: Làm tròn số theo digits (làm tròn và lấy <digits> số ở phần thập phân), giá trị trả về cũng là một chuỗi. Theo mặc định, nếu không được
người dùng xác định, thì <digits> bằng 0. */
// cú pháp: <Number>.toFixed(<digits>)
console.log("Phương thức toFixed");
console.log(d.toFixed(5));
console.log("");

/** Phương thức parseFloat: Tách và xuất ra một số từ chuỗi <string> cho trước. Chương trình sẽ lấy các kí tự từ bên trái sang bên phải của <string>,  và lấy nhiều kí tự số
nhất có thể. Nếu không thể lấy được ít nhất một kí tự số, phương thức trả về NaN. */
// cú pháp: Number.parseFloat(<string>)
let e = "55.39284e32974";
console.log("Phương thức parseFloat");
console.log(Number.parseFloat(e));
console.log("");

/** Phương thức parseInt:
 * Phương thức này thực hiện 2 công việc sau:
 * - Phân tích <string> giống như cách phân tích của parseFloat (nhưng không lấy dấu chấm, tức là chỉ lấy các kí tự số từ trái sang), sau đó
chuyển thành số. Nếu không lấy được bất kì kí tự nào, tự động trả về NaN.
 * - Từ số mới được chuyển và hệ cơ số <radix>, chuyển về giá trị tương ứng ở hệ thập phân
 */
console.log("Phương thức parseInt");
console.log(Number.parseInt(e));
console.log("");

/** Math object trong JavaScript 
 * Để có thể làm việc một cách hiệu quả hơn với số, Javascript hỗ trợ một built-in object (đối tượng dựng sẵn) được gọi là Math
 * Vài thuộc tính của Math:
    - Math.E:  Hằng số euler, xấp xỉ 2.718
    - Math.PI: Số Pi, xấp xỉ 3.14159
    - Math.SQRT1_2: Căn bậc 2 của , xấp xỉ 0.707.
*/
console.log("Math object trong JavaScript");
console.log(Math.PI);
console.log(Math.E);
console.log(Math.SQRT1_2);
console.log(Math.abs(-5)); // trả về giá trị tuyệt đối
console.log(Math.ceil(8)); // trả về số nguyên nhỏ nhất lớn hơn hoặc bằng giá trị mình đưa vào
console.log(Math.cbrt(8)); // trả về căn bậc 3
console.log(Math.max(8, 6, 5, 7, 3, 5, 32)); // trả về giá trị lớn nhất
console.log(Math.min(8, 6, 5, 7, 3, 5, 32)); // trả về giá trị nhỏ nhất
