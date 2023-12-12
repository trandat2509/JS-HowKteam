/** Khởi trạo biến bằng var và let */

// let: khởi tạo một biến cục bộ, chỉ sử dụng bên trong khối lệnh nơi nó đc tạo
{
  let t = "Kteam";
  console.log(t);
}

// var: bất kỳ chổ nào mà biến được khai báo với từ khóa var nó sẽ trở thành biến toàn cục
// var cho phép sử dụng trước khi khởi tạo
{
  var a = 19;
}
console.log(a);

// không thể khởi tạo cùng một tên biến mà sử dụng hai từ khóa var và let
var b;
let b;
// var có thể được khởi tạo bằng biến cùng tên
var x = 10;
var x = "Kteam";

// let không thể được khởi tạo bằng biến cùng tên
// let c;
// let c;

// * Biến cục bộ được ưu tiên xử lý ở trong cục bộ hơn biến toàn cục
