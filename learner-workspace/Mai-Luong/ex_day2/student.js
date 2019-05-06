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
function ageStudent() {
  var array = [];
  for (let i=0; i<students.length; i++) {
    if (students[i].age < 24) {
      array.push(students[i].name);
    }
  }
  return array;
}
console.log(ageStudent());

// Ex2
function swapAgeStudent() {
  var array = [];
  for (let i=0; i<students.length; i++) {
    if (students[i].name == "Huynh Thi B") {
      students[i].age = 25;  
    } 
    array.push(students[i]);
  }
  return array;
}
console.log(swapStudent());

// Ex3
function sumAgeStudent(){
  var sum = 0;
  for (let i=0; i<students.length; i++) {
    sum += students[i].age;
  }
  return sum;
}
console.log(sumAgeStudent());

// Ex4
function searchAgeStudent() {
  var array = [];
  for (let i=0; i<students.length; i++) {
    if (students[i].age == 20) {
      array.push(students[i]);
    }
  }
  return array;
}
console.log(searchAgeStudent());

// Ex5
function indexStudent() {
  var array = [];
  for (let i=0; i<students.length; i++) {
    if (students[i].age == 19) {
      array.push(i);
    }
  }
  return array;
}
console.log(indexStudent());

// Ex6
function searchStudent() {
  var array = [];
  for (let i=0; i<students.length; i++) {
    if (students[i].name == "Le Van D") {
      array.push(students[i]);
    }
  }
  if (array == '') {
    return false;
  } else {
    return true;
  }
}
console.log(searchStudent());