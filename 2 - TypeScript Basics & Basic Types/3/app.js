// function unique(str: string){
//   let strSplit = str.split('');
//   let check='';
//   for(var i=0; i<strSplit.length; i++){
//     if(!check.includes(strSplit[i]))
//     check = check+strSplit[i];
//   }
//   return check;
// }
// console.log(unique('prominentpixel'));
var arr1 = [1, 2, 3, 4, 5];
var arr2 = [1, 5, 6];
arr2.push.apply(arr2, arr1);
console.log(arr2);
