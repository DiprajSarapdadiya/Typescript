var str1 = 'DIP';
var str2 = 'DIP';
// const obj = undefined
var obj = {
    "Name": "Dhruvil",
    "Age": 22
};
// type obj = {[Key:string] :any}
// const a = (obj1:obj = {}) => {
//   console.log(obj1);
// };
// a();
var calculation = function (str1, str2) {
    if (str1 === str2)
        return true;
    else
        return false;
};
var main = function (str1, str2, calculation1) {
    return new Promise(function (resolve, reject) {
        var outPut = calculation1(str1, str2);
        if (outPut == true)
            resolve('given strings are exactly same');
        else
            reject('given strings are exactly not same');
    });
};
main(str1, str2, calculation).then(function (value) { return console.log(value); })["catch"](function (err) { return console.log(err); });
