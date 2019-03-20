var students = [
    {name: 'Nguyen Van A', age: 12},
    {name: 'Huynh Thi B', age: 20},
    {name: 'Ho Thi C', age: 19},
    {name: 'Le Van D', age: 24}
];

// 1. Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array
// Option 1:
ageLessThan24 = [];
for (let i = 0; i < students.length; i++) {
    if (students[i].age < 24) {
        ageLessThan24.push(students[i]);
    }
}
console.log(ageLessThan24);

// Option 2:
function CheckAgeLessThan24(ob) {
    return ob.age < 24;
}
console.log(students.filter(CheckAgeLessThan24));



// 2. Tìm đến người có tên `Huynh Thi B` đổi tuổi thành `25`
for (let i = 0; i < students.length; i++) {
    if (students[i].name == 'Huynh Thi B') {
        students[i].age = 25;
        console.log(students[i]);
    }
}

// 3. Tính tổng tuổi của danh sách students trên
totalAge = 0;
for (let i = 0; i < students.length; i++) {
    totalAge += students[i].age;
}
console.log(totalAge);

// 4. Tìm ra người có tuổi bằng `20`
for (let i = 0; i < students.length; i++) {
    if (students[i].age == 20) {
        console.log(students[i]);
    }
}

// 5. Tìm index của người có tuổi bằng `19`
// Option 1:
for (let i = 0; i < students.length; i++) {
    if (students[i].age == 19) {
        console.log(students.indexOf(students[i]));
    }
}

// Option 2:
console.log(students.findIndex((obj) => {
    return obj.age == 19;
}));


// 6. Tìm xem trong students có người nào là `Le Van D` không, trả về `boolean`
for (let i = 0; i < students.length; i++) {
    checkName = false;
    if (students[i].name == 'Le Van D') {
        checkName = true;
    }
}
console.log(checkName);
