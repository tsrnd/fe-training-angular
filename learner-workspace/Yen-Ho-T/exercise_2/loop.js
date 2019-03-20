var students = [
    {name: 'Nguyen Van A', age: 12},
    {name: 'Huynh Thi B', age: 20},
    {name: 'Ho Thi C', age: 19},
    {name: 'Le Van D', age: 24}
];
// 1.
console.log(students.filter((ele) => {
    return ele.age < 24;
}));
// 2
console.log(students.map((ele) => {
    if (ele.name == 'Huynh Thi B') {
        return {name: ele.name, age: 25};
    }
    return ele
}))
// 3
console.log("Sum age of list is: ", students.reduce((ele1, ele2, i) => {
    if (i == 1) {
        return ele1.age + ele2.age
    }
    return ele1 + ele2.age
}))
// 4
console.log("Student has age = 20 is: ", students.find((ele) => {
    return ele.age == 20
}))
// 5
console.log("Index of student has age = 20 is: ", students.findIndex((ele) => {
    return ele.age == 20
}))
// 6
console.log("List student has student 'Le Van D' is: ", students.some((ele) => {
    return ele.name == 'Le Van ds'
}))
