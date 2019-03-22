var students = [
    { name: 'Nguyen Van A', age: 12 },
    { name: 'Huynh Thi B', age: 20 },
    { name: 'Ho Thi C', age: 19 },
    { name: 'Le Van D', age: 24 }
];
var sum = 0;
var result = students.filter(age => age.age < 24);
students.forEach((student) => {
    if (student.name == 'Huynh Thi B') {
        student.age = 25;
    }
});
var iterator = students.values();
for (var value of iterator) {
    sum += value.age;
}
var tuoi20 = students.find(age => age.age == 20);
var index = students.findIndex(tuoi19 => tuoi19.age === 19);
var demo = function (student) {
    return student.name == "Le Van D";
};
let test = students.some(demo);
console.log(test);
