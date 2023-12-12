// cách khai báo biến: sử dụng từ khóa let hoặc từ khóa var
/** cú pháp:
 * <từ_khóa> <tên_biến> = <giá tri khởi tạo>;
 * - tên biến được đặt theo quy tắc đặt tên biến
 */
let myInfo = "Trần Đạt";
const age = 19;
var u;

console.log(myInfo);
console.log(age);
console.log(u);

// biến cục bộ: chó có thể được sử dụng bên trong một khối lệnh hoặc một hàm
{
  let a = 5;
  console.log(a);
}

// biến toàn cục: có thể được sử dụng ở bất kỳ vị trí nào bên trong chương trình
// các bến myInfo, age, ... trên được coi là biến toàn cục


// hằng số là giá trị được khởi tạo một lần trong chương trình và không thể thay đổi
//  hằng số được khởi tạo bằng từ khóa const, giá trị của hằng số được gán ngay trong lúc khởi tạo

