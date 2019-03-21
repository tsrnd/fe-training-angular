var students = [
  {name: 'Nguyen Van A', age: 12},
  {name: 'Huynh Thi B', age: 20},
  {name: 'Ho Thi C', age: 19},
  {name: 'Le Van D', age: 24}
];
console.log('1. Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array');
let young = students.filter(student => student.age < 24);
console.log(young);

console.log('2. Tìm đến người có tên Huynh Thi B đổi tuổi thành 25');
let findStudent = (student, index) =>{
  if(student.name === "Huynh Thi B")
    student.age = 25;
};
let find = students.forEach(findStudent);
console.log(students);

console.log('3. Tính tổng tuổi của danh sách students trên')
function getSum(total, currentValue, currentIndex, students) {
  return total += currentValue.age;
}
let sumAge = students.reduce(getSum, 0);
console.log(sumAge);

console.log('4. Tìm ra người có tuổi bằng 20');
let findAge = students.filter((student) => student.age === 20);
console.log(findAge);

console.log('5. Tìm index của người có tuổi bằng 19');
let findIndex = students.findIndex((student) => student.age === 19);
console.log(findIndex);

console.log('6. Tìm xem trong students có người nào là Le Van D không, trả về boolean');
let getName = students.map((student) => student.name);
let findName = getName.includes('Le Van D');
console.log(findName);
