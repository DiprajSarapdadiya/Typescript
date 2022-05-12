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
];
var Result = [
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
];
function fun1(value, index, students) {
    if (value.college === 'GEC') {
        Result[0].noOfStudents++;
    }
    else if (value.college === 'DARSHAN') {
        Result[1].noOfStudents++;
    }
    else if (value.college === 'VVP') {
        Result[2].noOfStudents++;
    }
}
students.map(fun1);
console.log(Result);
