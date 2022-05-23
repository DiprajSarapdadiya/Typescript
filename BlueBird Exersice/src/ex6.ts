// const {Promise} = require("bluebird");
// import { request } from "http";
// import async from "../../../../.cache/typescript/4.4/node_modules/@types/async";

let count: number = 0;
let reqArray: any[] = [];
do{
  const myPromise = () => new Promise((resolve, reject) => {
    resolve(count);
  })
  count++
  reqArray.push(myPromise())
}while(count<50);



const request = (value: any) => {
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      console.log(value);
    }, 2000)
  })
}


Promise.map(reqArray, async (value)=> {
  
  return request(value);
  
    
  
},{concurrency : 10}) 


