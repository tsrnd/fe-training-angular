
var students = [
    {name: 'Nguyen Van A', age: 12},
    {name: 'Huynh Thi B', age: 20},
    {name: 'Ho Thi C', age: 19},
    {name: 'Le Van D', age: 24}
];

// Dùng các loops function trong js để làm theo những yêu dưới đây và code bằng ES6

// Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array
// Tìm đến người có tên Huynh Thi B đổi tuổi thành 25
// Tính tổng tuổi của danh sách students trên
// Tìm ra người có tuổi bằng 20
// Tìm index của người có tuổi bằng 19
// Tìm xem trong students có người nào là Le Van D không, trả về boolean

//1
// var result1 = [];
// for (i=0; i<students.length; i++) {
//     if (students[i].age < 24) {
//         result1.push(students[i]);
//     }
// }
// console.log(result1);

console.log(students.filter((stud) => {
    return stud.age < 24;
}));



//2
// for (i=0; i<students.length; i++) {
//     if (students[i].name == "Huynh Thi B") {
//         students[i].age = 25;
//     }
// }
// console.log(students);

console.log(students.map((stud) => {
    if (stud.name == 'Huynh Thi B') {
        return {name: stud.name, age: 25};
    } else return stud;
}))


//3
// var sumAge = 0;
// for (i=0; i<students.length; i++) {
//     sumAge += students[i].age;
// }
// console.log(sumAge);

console.log(students.reduce((sum, stud, index, students) => {
    return sum += stud.age;
}, 0));



//4
// for (i=0; i<students.length; i++) {
//     if (students[i].age == 20) {
//         console.log(students[i]);
//     }
// }

console.log(students.find((stud) => {
    return stud.age == 20;
}));

//5
// for (i=0; i<students.length; i++) {
//     if (students[i].age == 19) {
//         console.log(i);
//     }
// }

console.log(students.findIndex((stud) => {
    return stud.age == 19;
}));

//6
// function getDUser() {
//     for (var i=0; i<students.length; i++) {
//         if (students[i].name == "Le Van D") {
//             return true;
//         }
//     }
//     return false;
// }
// // console.log(students.length);

// console.log(getDUser());

console.log(students.some((stud) => {
    return stud.name == "Le Van D";
}));