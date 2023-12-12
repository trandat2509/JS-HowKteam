console.log(3 + 4);
console.log(3 - 4);
console.log(3 * 4);
console.log(3 / 4);
console.log(3 % 4); // 3%4 = 3 - (3/4)*4 = 3
console.log(3 ** 4); // mũ
console.log(3 / 0); // infinity
console.log(-3 / 0); // -infinity
console.log(3 % 0);

let t = 87;
t %= 98;
console.log(t);

// hệ thập phân: 0 -> 9 54, 89
// hệ tam phân: 0..2 202, 2102
// hệ thập lục phân: 0 -> 9, a b c d e f
// hệ nhị phân: 0..1

// trong JS các số được biểu thị dưới giải bit dài 32 ký tự

/**
 * AND: &   Trả về 1 nếu cả 2 bit đều là 1
 * VD: 1001 & 1101 -> 1001
 *
 * OR: |    Trả về 1 nếu có ít nhất một trong 2 bit bằng 1.
 * VD: 1101 | 1010 -> 0111
 *
 * XOR: ^   Trả về 1 nếu như một trong 2 bit là 1, và bit còn lại bằng 0.
 * VD: 1010 ^ 0110 -> 1100
 *
 * ~ NOT:   Chuyển các dãy bit từ 1 thành 0 và ngược lại.
 * VD: 1001 -> 0110
 *
 * << DỊCH TRÁI: Loại bỏ một vài bit ở đầu dãy và thêm các số 0 vào cuối dãy sao cho độ dài bằng với ban đầu
 * VD: 1011 0000 1111 1001 1101 << 4 => 0000 1111 1001 1101 0000
 *
 * >>> DỊCH PHẢI: Tương tự như dịch trái, nhưng loại bỏ các bit bên phải và thêm vào đầu dãy
 * VD: 1011 0000 1111 1001 1101 >>> 4 => 0000 1011 0000 1111 1001
 */

// Toán tử một ngôi
let a = 2;
console.log(a++);
let b = 2;
console.log(++b);
// a++ => thực hiện xong dòng code rồi mới cộng
// ++b => thực hiện cộng xong rồi mới chạy dòng code

// đối với JS ta có thể đặt dấu + trước một giá trị nào đó để nó chuyển thành số
let c = "dat";
console.log(+c);
console.log(typeof +c);
console.log(-["-3"]);

console.log(0.1 + 0.2);
