// số đặt trong JS sẽ có kiểu dữ liệu là number
a = 123;
console.log(typeof a);

// infinity và -infinity lằn lượt bằng với giá trị 2^(53-1) và -2^(53-1)
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);

// NaN, Undefined, Null, Float thì Float thuộc kiểu dữ liệu number
b = undefined;
c = null;
d = NaN;
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);

/** Viết chương trình làm tròn số n, sau đó tính bình phương của số n, rồi in ra màn hình
Trong đó n là một số cho trước */

n = 4.40987214098327;

console.log("Số n ban đầu:", n);

console.log("Số n khi đã làm tròn");
console.log(Math.round(n));

console.log("Số n khi đã bình phương");
console.log(Math.round(n ** 2));

// một vài hằng số với math trong JS
/**
 * - round
 * - max
 * - floor
 * - abs
 * - min
 */
// một vài hằng số với Number trong JS
/**
 * - NaN
 * ......
 */

// đặc điểm cơ bản nhất của BigInt là: Số nguyên lớn và phía sau có chữ n

// ta có thể sử dụng BigInt như là Number nhưng không thể xài chung với nhau (làm việc với các toán tử)

// bitwise operator 
/**
 * OR
 * XOR
 * AND
 */
