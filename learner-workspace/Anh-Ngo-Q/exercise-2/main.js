var students = [
  { name: 'Nguyen Van A', age: 12 },
  { name: 'Huynh Thi B', age: 20 },
  { name: 'Ho Thi C', age: 19 },
  { name: 'Le Van D', age: 24 }
];

// 1.Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array
let responseQuestion1 = students.filter(student => {
  return student.age < 24
})

// 2.Tìm đến người có tên Huynh Thi B đổi tuổi thành 25
let responseQuestion2 = students.map(student => {
  if (student.name == 'Huynh Thi B') {
    let newStudent = Object.assign({}, student);
    newStudent.age = 25
    return newStudent
  }
  return student
})

// 3.Tính tổng tuổi của danh sách students trên
let responseQuestion3 = students.reduce((previousValue, student, index) => {
  if (index == 1) {
    previousValue = previousValue.age
  }
  let total = previousValue + student.age
  return total
})

// 4.Tìm ra người có tuổi bằng 20
let responseQuestion4 = students.find((student) => {
  return student.age == 20
})

// 5.Tìm index của người có tuổi bằng 19
let responseQuestion5 = students.findIndex(student => {
  return student.age == 19
})

// 6.Tìm xem trong students có người nào là Le Van D không, trả về boolean
let responseQuestion6 = students.some(student => {
  return student.name == 'Le Van D'
})

