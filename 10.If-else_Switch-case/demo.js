a = 12;
b = "";
c = "TranDat";
if (a == 12 && (b == false || c == false)) {
  console.log("A bằng 12");
}

// sử dụng toán tử bên trong một lệnh if
m = 2;
n = "dat";
q = "";

// if ((m += 5)) {
//   console.log("Thực hiện phép toán thành công!");
// }

// cấu trúc câu đk if .. else
if (m == 5) {
  console.log("Thực hiện phép toán thành công!");
} else {
  console.log("Phép toán thực hiện thất bại!");
}
console.log("");

// cấu trúc câu đk if .. else if .. else
if (m == 5) {
  console.log("Thực hiện phép toán thành công!");
} else if (m != 2) {
  console.log("Phép toán thực hiện thất bại!");
} else {
  console.log("Phương trình không hoàn hảo!!");
}
console.log("");

// Ternary operator: Nó là một toán tử 3 ngôi cho phép thực hiện các lệnh điều kiện một cách nhanh chóng hơn.
// cú pháp: <condition> ? <value-1> : <value-2>

f = 0;
t = "";

result =
  f == 0 && t == true
    ? console.log("Điều kiện này đúng")
    : console.log("Điều kiện này sai");
console.log("");

/** Switch-case */
/** cú pháp:
switch(<expression>) {
    case <value-1>:
        <statement-1>
        break;
    case <value-2>:
        <statement-2>
        break;
    case <value-3>:
        <statement-3>
        break;
        .......................
    case <value-n>:
        <statement-n>
    default:
        <default-statement>
 */

xucXac = 6;

switch (xucXac) {
  case 1:
    console.log("Ăn một viên kẹo.");
    break;
  case 2:
    console.log("Ăn hai viên kẹo.");
    break;
  case 3:
    console.log("Ăn ba viên kẹo.");
    break;
  case 4:
    console.log("Ăn bốn viên kẹo.");
    break;
  case 5:
    console.log("Ăn năm viên kẹo.");
    break;
  case 6:
    console.log("Ăn sáu viên kẹo.");
    break;
  default:
    console.log("Không ăn viên kẹo nào");
    break;
}
