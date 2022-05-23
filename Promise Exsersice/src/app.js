var OTP = function () {
    var otp = (Math.random() * 10000).toFixed(0);
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
var promiseArray = [];
var fun1 = function () {
    for (var i = 1; i <= 5; i++) {
        var myPromise = new Promise(function (resolve, reject) {
            var otp = 2126;
            if (otp % 2 === 0) {
                resolve('You are succeeded');
            }
            else
                reject('Err Oops!');
        });
        promiseArray.push(myPromise);
    }
};
fun1();
Promise.all(promiseArray).then(function (value) {
    console.log(value);
});
