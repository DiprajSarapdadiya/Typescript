type student = {
  id: number;
  name: string;
  collage: string;
  marks: number;
};
const arr: number[] = [1, 2, 3];

var student: student[];

student = [
  {
    id: 1,
    name: "Mohan",
    collage: "VVP",
    marks: 60,
  },
  {
    id: 2,
    name: "Rakesh",
    collage: "VVP",
    marks: 71,
  },
  {
    id: 3,
    name: "Manohar",
    collage: "GECR",
    marks: 80,
  },
  {
    id: 4,
    name: "Rohan",
    collage: "GECR",
    marks: 70,
  },
  {
    id: 5,
    name: "Mohit",
    collage: "DARSHAN",
    marks: 31,
  },
];

function fun1(value: student, index: number, student: student[]) {
  if (value.marks > 70) return value;
}

function fun2(value: student, index: number, student: student[]): string {
  return value.name;
}

function fun3(value: student, index:number, student: student[]) {
  if (value.marks > 33) {
    return {
      id: value.id,
    name: value.name,
    collage: value.collage,
    marks: value.marks,
    result: "PASS"
    }
  }else {
    return {
      id: value.id,
    name: value.name,
    collage: value.collage,
    marks: value.marks,
    result: "FAIL"
    }
  }
}

let result1 = (student: student[]) => {
  let value1 = student.filter(fun1);
  return value1;
};

let result2 = (student: student[]) => {
  let value1 = student.map(fun2);
  return value1;
};

let result3 = (student: student[]) => {
  let value1 = student.map(fun3);
  return value1;
};

console.log(result1(student));
console.log(result2(student));
console.log(result3(student));
