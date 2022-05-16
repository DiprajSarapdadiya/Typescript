/*
Chapter: 5 (Class and Interfaces)
Exercise 3
Problem Statement: Create one interface named Student contains id, name,
college, age, gender properties. gender is a optional property.
then after create one array of Student type. and write a logic that create
one object that contains data about number of students in particular college.
*/
var students = [
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
var Result = [];
var fun1 = function (value, index, students) {
    var r1 = Result.find(function (obj) { return obj.college === value.college; });
    if (r1) {
        r1.noOfStudents++;
    }
    else {
        Result.push({
            college: "".concat(value.college),
            noOfStudents: 1
        });
    }
};
students.forEach(fun1);
// students.map(fun1);
console.log(Result);
