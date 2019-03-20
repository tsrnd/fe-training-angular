var students: any[] = [
  {name: 'Nguyen Van A', age: 12},
  {name: 'Huynh Thi B', age: 20},
  {name: 'Ho Thi C', age: 19},
  {name: 'Le Van D', age: 24}
];

function list_students(age: number) : void {
	const list_students = students.filter(student => student.age < age);
	console.log(list_students);
}

function search_student_and_change_age(name: string, age: number) : void {
  students.map(student => {
    if (student.name === name) {
      student.age = age;
    }
  });
  console.log(students);
}

function total_age_students() : void {
  let initialValue = 0;
  let sum = students.reduce((accumulator, currentValue) => {
    return accumulator + currentValue.age;
  },initialValue);

  console.log(sum);
}

function find_student_with_age(age: number) : void {
  let student = students.find(student => student.age === age);
  console.log(student);
}

function find_index_student_with_age(age: number) : void {
  let studentIndex = students.findIndex(student => student.age === age);
  console.log(studentIndex);
}

function search_student(name: string) : boolean {
  let checkStudent = students.some(student => student.name === name);
  console.log(checkStudent);
  return checkStudent;
}

list_students(24);

search_student_and_change_age('Huynh Thi B', 25);

total_age_students();

find_student_with_age(25);

find_index_student_with_age(19);

search_student('Le Van D');
