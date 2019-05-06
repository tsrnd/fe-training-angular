// Day 2
// Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array
// Tìm đến người có tên Huynh Thi B đổi tuổi thành 25
// Tính tổng tuổi của danh sách students trên
// Tìm ra người có tuổi bằng 20
// Tìm index của người có tuổi bằng 19
// Tìm xem trong students có người nào là Le Van D không, trả về boolean


var students = [
    {name:'Nguyen Van A', age:12},
    {name:'Huynh Thi B', age:20},
    {name:'Ho Thi C', age:19},
    {name:'Le Van D', age:24}
];

// Ex1
let filterStudent = students.filter(students => {
    return students.age < 24;
})
console.log(filterStudent);

// Ex2
let mapStudent = students.map(students => {
    if (students.name == "Huynh Thi B") {
        return {name: students.name, age: students.age = 25};
    }
    return students;
})
console.log(mapStudent);

// // Ex3
let reduceStudent = students.reduce((sum, student, index, students) => {
    return sum += student.age;
}, 0)
console.log(reduceStudent);

// Ex4
let findStudent = students.find(students => {
    return students.age == 20;
})
console.log(findStudent);

// Ex5 
let findIndexStudent = students.findIndex(students => {
    return students.age == 19;
})
console.log(findIndexStudent);

// Ex6
let someStudent = students.some(students => {
    return students.name == "Le Van D";
})
console.log(someStudent);

