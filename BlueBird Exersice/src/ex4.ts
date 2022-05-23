let str1 = 'DIP';
let str2 = 'DIP'; 
// const obj = undefined
const obj:{[Key:string]:any} = {
  "Name": "Dhruvil",
  "Age" : 22
};
// type obj = {[Key:string] :any}
// const a = (obj1:obj = {}) => {
//   console.log(obj1);
  
// };
// a();

const calculation = (str1: string, str2: string) => {
  if(str1 === str2)
  return true
  else return false
}

const main = (str1: string, str2: string, calculation1:any) => {
  return new Promise((resolve, reject)=> {
    const outPut = calculation1(str1, str2);
    if(outPut == true)
    resolve('given strings are exactly same')
    else reject ('given strings are exactly not same');
  })
}


main(str1, str2, calculation).then(value => console.log(value)).catch(err => console.log(err));
