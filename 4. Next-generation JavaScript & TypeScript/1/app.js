var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var arr1 = [1, 2, 3, 4];
var arr2 = [1, 2, 5];
arr1.push.apply(arr1, arr2);
console.log(arr1);
var obj1 = { id: 1, name: "Mohan" };
var obj2 = { age: 20, country: "IND" };
var obj3 = __assign(__assign({}, obj1), obj2);
console.log(obj3);
