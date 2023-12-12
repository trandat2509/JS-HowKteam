// boolean: true | false
// biểu thị giá trị boolean:  Boolean(<value>)
console.log(Boolean(0));
console.log(Boolean(1));
console.log(Boolean(2));

console.log(Boolean(""));
console.log(Boolean("Trần đạt"));

// giá trị null và undefined khi chuyển thành giá trị boolean thì sẽ bằng false
// Các giá trị khi chuyển về boolean mà bằng true, thì ta gọi là truthy, và falsy tương ứng với false.
// Khi chuyển từ boolean sang number, ta sẽ nhận được các giá trị tương ứng: 1 = true, 0 = false.

//  liên hệ giữa toán tử so sánh và boolean
var result = 114 >= 113;
console.log(result);
console.log(typeof result);

/**  các toán tử quan hệ 
- Toán tử AND (ký hiệu: &&): Trả về true nếu tất cả các điều kiện được xét đều là true, trả về false trong các trường hợp khác
- Toán tử OR (ký hiệu: ||): Trả về true nếu một trong các điều kiện đang xét là true, trả về false khi và chỉ khi tất cả các điều kiện đang xét đều false.
- Toán tử NOT (ký hiệu: !): Trả về false nếu điều kiện được xét là true và ngược lại.
*/

console.log(2 > 3 && 4 < 1);
console.log(2 > 3 || 4 > 1);
console.log(4 < 5 != 3 > 1);
