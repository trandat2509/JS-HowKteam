// các phương thước với chuỗi trong JS
// charAt : trả về một ký tự của một chuỗi mà bạn đưa vị trí index của nó vào
var s = "kteam trần hậu nguyên đạt";
console.log(s.charAt(4));

// includes: xác định xem chuỗi muốn tìm có nằm trong vị trí từ mấy đến mấy đó hay không
console.log(s.includes('trần',9))

// startsWith: xác định xem vị trí nào đó có được bắt đầu bằng ký tự nào đó trong chuỗi 
console.log(s.startsWith('trần',9))

// endsWith: xem chuỗi đó có được kết thúc bằng ký tự đó từ vị trí đó hay không
console.log(s.endsWith('đạt',25)) // trong đó 25 là giá trị độ dài của chuỗi có thể vượt quá độ dài chuỗi 

// indexOf: tìm kiếm và trả về vị trí xuất hiện lần đầu của giá trị được tìm kiếm bắt đầu từ vị trí nào đó
console.log(s.indexOf('n',10))

// lastindexOf: tìm kiếm và trả về vị trí xuất hiện lần đầu của giá trị được tìm kiếm nhưng nó tìm kiếm từ phía sau chuỗi đi lên
console.log(s.lastIndexOf('t',8))


