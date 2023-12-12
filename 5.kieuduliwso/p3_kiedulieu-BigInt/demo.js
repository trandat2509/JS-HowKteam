/** kiểu dữ liệu BigInt */
// cs hai cách để khởi tao một BigInt
// - thêm n vào phía sau một số nguyên
// - cú pháp BigInt(<value>)
// a = 123n;
a = BigInt(123);
a = BigInt(0xf);
console.log(a);
console.log(typeof a);

// BigInt không tương tác được với number
a = 5n;
b = 20n;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b); // kết quả trả về là một số nguyên
console.log(a % b);
console.log(a ** b);

console.log(a > b);
console.log(a < b);
console.log(a >= b);
console.log(a <= b);
console.log(a === b);
console.log(a !== b);
