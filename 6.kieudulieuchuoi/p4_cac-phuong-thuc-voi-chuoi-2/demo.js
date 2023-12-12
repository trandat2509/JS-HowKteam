// toUppercase: làm cho toàn bộ chuỗi viết hoa
var ten = "Trần Hậu Nguyên Đạt     ";
console.log(ten.toUpperCase());
console.log(ten.toLowerCase()); // viết thường toàn bộ chữ trong chuỗi

// repeat: số lần lặp lại chuỗi
console.log(ten.repeat(3));

// <String>.padStart(<length>, <padString>); : chèn các chuỗi vào đầu chuỗi string ban đầu có độ dài bằng length sao cho length có độ dài bằng tổng của chuỗi string ban đầu và chuỗi mới thêm vào. trường hợp length nhỏ hơn hoặc bằng độ dài cảu string thì chương trình không thực hiện
console.log("Độ dài của chuỗi ban đầu:", ten.length);
var x = "Tôi là ";
console.log("Độ dài của chuỗi muốn thêm vào:", x.length);
console.log("Kết quả sau khi được thêm {x} vào chuỗi:", ten.padStart(31, x));

// <String>.padEnd(<length>, <padString>): cũng như trường hợp padStart nhưng chuỗi cần thêm vào được đưa vào cuối
console.log(ten.padEnd(36, " phải không?"));

// trim: cắt khoảng trắng ở hai đầu
console.log(ten.trim());

// <String>.split(<seperator>, <limit>): chuỗi được cắt ra thành nhiều chuỗi theo ký tự mà bạn chọn => trả ra một danh sách
console.log(ten.split(" ")); // limit là số chuỗi mà bạn muốn cắt ra

// replace: thay thế các thành phần trong một chuỗi bằng các thành phần khác
console.log(ten.replace("Nguyên", "Bé"));

/** Các phương thức phân tách: dùng để tách các chuỗi thành các phần nhỏ hơn,
 * - không thay đổi chuỗi ban đầu và kết quả trả về một chuỗi mới
 * - in ra kết quả chuỗi tách được
 */

//  <String>.slice(<start>, <end>)
console.log("Chuỗi ban đầu: ", ten);
console.log("Chuỗi in ra sau khi tách: ", ten.slice(-8));

// <String>.substring(<start>, <end>) : Cũng tương tự như slice, phương thức substring giúp ta phân tách một phần của chuỗi. Tuy nhiên, substring không chấp nhận các tham số âm.
console.log("Chuỗi ban đầu: ", ten);
console.log("Chuỗi in ra sau khi tách: ", ten.substring(5));

// <String>.substr(<start>, <length>): bắt đầu lấy giá trị từ <start> và lấy với độ dài là <length>
console.log("Chuỗi ban đầu: ", ten);
console.log("Chuỗi sau khi tách: ", ten.substr(4, 11));
