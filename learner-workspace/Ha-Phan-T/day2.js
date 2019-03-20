var students = [{
        name: 'Nguyen Van A',
        age: 12
    },
    {
        name: 'Huynh Thi B',
        age: 20
    },
    {
        name: 'Ho Thi C',
        age: 19
    },
    {
        name: 'Le Van D',
        age: 24
    }
];
// 1. Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về arrays

function ageStudent() {
    var arr = [];
    for (let i in students) {
        if (students[i].age < 24) {
            arr.push(students[i]);
        }
    }
    return arr
}
console.log(ageStudent());

// 2. Tìm đến người có tên `Huynh Thi B` đổi tuổi thành `25`
function changeAge(name, age) {
    for (let i in students) {
        if (students[i].name === name) {
            students[i].age = age;
            return students[i]
        }
    }
}
console.log(changeAge("Huynh Thi B", 25));

// 3. Tính tổng tuổi của danh sách students trên
function sumAge() {
    var s = 0;
    for (let i in students) {
        s += students[i].age;
    }
    return s;
}
console.log(sumAge());

// 4. Tìm ra người có tuổi bằng `20` 
function findAge() {
    var arr = []
    for (let i in students) {
        if (students[i].age === 20) {
            arr.push(students[i])
        }
    }
    return arr
}
console.log(findAge());

// 5. Tìm index của người có tuổi bằng `19`
var first = students.findIndex(myFunction);

function myFunction(value, index, array) {
    return (value.age === 19);
}

console.log(first);
// 6. Tìm xem trong students có người nào là `Le Van D` không, trả về `boolean`
function findPerson(name) {
    for (let i in students) {
        if (students[i].name === name) {
            return true;
        }
    }
    return false;
}
console.log(findPerson("Le Van D"));
