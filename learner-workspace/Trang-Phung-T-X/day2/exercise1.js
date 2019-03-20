var students = [
  { name: 'Nguyen Van A', age: 12 },
  { name: 'Huynh Thi B', age: 20 },
  { name: 'Ho Thi C', age: 19 },
  { name: 'Le Van D', age: 24 }
];

// 1.Tìm ra danh sách students có tuồi nhỏ hơn 24 trả về array
//solution1
function less24(students) {
  let a = [];
  for (let i = 0; i < students.length; i++) {
    if (students[i]["age"] < 24) {
      a.push(students[i]);
    }
  }
  return a;
}
//solution2
let newArrStudent = students.filter(student => student.age < 24);

// 2.Tìm đến người có tên Huynh Thi B đổi tuổi thành 25
function newStudents(students) {
  let i = 0;
  while (i < students.length) {
    if (students[i]["name"] == 'Huynh Thi B') {
      students[i]["age"] = 25;
    }
    i++;
  }
  return students;
}


// 3.Tính tổng tuổi của danh sách students trên
function sumAgeStudent(students) {
  let sumAge = 0;
  for (let i = 0; i < students.length; i++) {
    sumAge += students[i]["age"];
  }
  return sumAge;
}

//solution2
let ageStudents = students.map(value => value.age);
let total = ageStudents.reduce((sum, value) => sum + value, 0);

// 4.Tìm ra người có tuổi bằng 20
//solution1
function student20Age(students) {
  let i = 0;
  while (i < students.length) {
    if (students[i]["age"] == 20) {
      return students[i];
    }
    i++;
  }
}
//solution2
let student20 = students.find(student => student.age == 20);

// 5.Tìm index của người có tuổi bằng 19
//solution1
function student19Age(students) {
  let i = 0;
  while (i < students.length) {
    if (students[i]["age"] == 19) {
      return i;
    }
    i++;
  }
}
//solution2
let student19 = students.findIndex(student => student.age == 19);


// 6.Tìm xem trong students có người nào là Le Van D không, trả về boolean
function checkStudent(students) {
  let i = 0;
  while (i < students.length) {
    if (students[i]["name"] == 'Le Van D') {
      return true;
    }
    i++;
  }
  return false;
}
