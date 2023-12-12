/** vòng lặp For:
 * Cú pháp:
        for(<initialization>; <condition>; <final-expression>){
            <statement> // code
        }
 */

// for (let i = 2; i < 10; i += 2) {
//   console.log(i);
// }

// VD: In ra tổng các số từ 0 đến 100
sum = 0;
for (let t = 0; t <= 100; t++) {
  sum += t;
}
console.log("Tổng sum:", sum);
console.log("");

// VD: In ra ký tự trong một chuỗi
Name = "Trần Hậu Nguyên Đạt";
for (let a = 0; a <= Name.length; a++) {
  console.log(Name[a]);
}
console.log("");

// ghép nhiều điều kiện lại với nhau bằng toán tử NOT, OR, END
i = 0;
j = 0;
for (k = i + j; 100 > i, j < 100; i++, j += i) {
  console.log(k);
}
