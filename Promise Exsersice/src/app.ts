const OTP = () => {
  const otp = (Math.random() * 10000).toFixed(0);
  return +otp;
};

// const myPromise = (otp: number) => {
//   return new Promise((resolve, reject) => {
//     if (otp % 2 === 0) {
//       resolve(true);
//     } else reject(`Oops Some error accurse`);
//   });
// };

// const fun1 = async () => {
//   for (let i = 0; i <= 5; i++) {
//     const otp = OTP();
//     const mp = await myPromise(otp);
//     if (mp == true) {
//       console.log(`Your OTP is: `+ otp);
//     } else break;
//   }
// };

// fun1();

let promiseArray: any[] = [];

const fun1 = () => {
  for (let i = 1; i <= 5; i++) {
    const myPromise: Promise<string> = new Promise((resolve, reject) => {
      const otp = 2126;
      if (otp % 2 === 0) {
        resolve('You are succeeded');
      } else reject('Err Oops!');
    });
    
    
    promiseArray.push(myPromise);
  }
};

fun1();


Promise.all(promiseArray).then((value) => {
  console.log(value);
});
