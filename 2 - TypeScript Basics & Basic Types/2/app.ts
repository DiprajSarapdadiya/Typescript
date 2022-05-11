// function main(l1:string, cb: (l2:string) => void) {
//   console.log(l1);
//   cb('Hello World');
// }

// main('prominentpixel', (l2)=>
//   console.log(l2)
// )

function fun1 (str:string, fun){
  console.log(str);
  fun2('Hello World');
}

function fun2 (str2:string){
  console.log(str2);
}

fun1('prominentpixel', fun2)