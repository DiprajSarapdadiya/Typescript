var arr1 = [1,2,3,4]
var arr2 = [1,2,5]

arr1.push(...arr2);
console.log(arr1);

var obj1 = {id:1, name:"Mohan"}
var obj2 = {age: 20, country: "IND"}

var obj3 = {...obj1, ...obj2};
console.log(obj3);
