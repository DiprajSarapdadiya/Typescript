/*
Chapter: 5 (Class and Interfaces)
Exercise 3
Problem Statement: Create one interface named Student contains id, name, 
college, age, gender properties. gender is a optional property.
then after create one array of Student type. and write a logic that create 
one object that contains data about number of students in particular college.
*/


interface Student {
  id: number;
  name: string;
  college: string;
  age: number;
  gender?: string;
}
let students: Student[] =[
  {
          id: 1,
          name: 'Rohan',
          college: 'GEC',
          age: 20
  },
  {
          id: 2,
          name: 'Rahul',
          college: 'GEC',
          age: 20
  },
  {
          id: 3,
          name: 'Ram',
          college: 'VVP',
          age: 20
  },
  {
          id: 4,
          name: 'Rakesh',
          college: 'DARSHAN',
          age: 20
  },
];

var Result:{college: string; noOfStudents: number }[] =[
  {
    college: 'GEC',
    noOfStudents: 0
  },

  {
    college: 'DARSHAN',
    noOfStudents: 0
  },

  {
    college: 'VVP',
    noOfStudents: 0
  },

] 

function fun1(value:Student, index:number, students: Student[]){
  if (value.college === 'GEC') {
    Result[0].noOfStudents ++;
  }else if (value.college === 'DARSHAN') {
    Result[1].noOfStudents ++;
  } else if (value.college === 'VVP') {
    Result[2].noOfStudents ++;
  }
}
students.map(fun1);
console.log(Result);