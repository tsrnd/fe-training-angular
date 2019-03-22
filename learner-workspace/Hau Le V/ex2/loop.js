var students = [
  {name: 'Nguyen Van A', age: 12},
  {name: 'Huynh Thi B', age: 20},
  {name: 'Ho Thi C', age: 19},
  {name: 'Le Van D', age: 24}
];
act1 = (students)=>{
  arr = [];
  students.forEach((ele, index) => {
    if (ele.age < 24) { arr.push(ele);}
  });
  return arr;
}

act2 = (students) => {
  students.forEach((ele, index) => {
    if (ele.name == "Huynh Thi B") {ele.age = 25;}
  });
}

act3 = (students) => {
  let age = 0;
  students.forEach((ele, index) => {age += ele.age;});
  return age;
}

act4 = (students)=>{
  arr = [];
  students.forEach((ele, index) => {
    if (ele.age == 20) { arr.push(ele);}
  });
  return arr;
}

act5 = (students)=>{
  arr = [];
  students.forEach((ele, index) => {
    if (ele.age == 19) { arr.push(index);}
  });
  return arr;
}

act6 = (students) => {
  rs = false;
  students.forEach((ele, index) => {
    if (ele.name == "Le Van D") {
      rs = true;
      break;
    }
  });
  return rs;
}
