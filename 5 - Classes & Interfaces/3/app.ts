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
  {
         id: 5,
         name: 'test',
         college: 'IIT',
         age: 21
  },
  {
    id: 6,
    name: 'raj',
    college: 'NIT',
    age: 21
  }
];

var Result:{college: string; noOfStudents: number }[] =[];

const fun1 = (value:Student, index:number, students: Student[])=>{
  let r1 = Result.find((obj :{college: string; noOfStudents: number })=>obj.college === value.college)
  if(r1){
      r1.noOfStudents ++; 
  }else {
    Result.push({
      college: `${value.college}`,
      noOfStudents: 1,
    })
  }
}

students.forEach(fun1);
// students.map(fun1);
console.log(Result);