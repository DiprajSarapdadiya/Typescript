var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var args = process.argv;
function main() {
    var choice = args[2];
    if (!choice) {
        console.error("Please add your choice in command line argument");
        process.exit(1);
    }
    executeChoice(choice);
}
function executeChoice(choice) {
    switch (choice) {
        case "series":
            seriesCall1();
            break;
        case "parallel":
            parallelCall1();
            break;
        case "waterfall":
            waterfallCall();
            break;
        case "each":
            eachCall();
            break;
        default:
            console.error("Invalid choice");
            process.exit(1);
            break;
    }
}
var task1 = function (order, delay) {
    /*  console.log(`Order ${order} and delay ${delay}`);
    return new Promise((resolve, reject) => resolve(order)); */
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Order ".concat(order, " and delay ").concat(delay));
            resolve(order);
        }, delay);
    });
};
var fun1 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task1(1, Math.floor(1 * 1000))];
                case 1:
                    result = _a.sent();
                    resolve(result);
                    return [2 /*return*/];
            }
        });
    }); });
};
var fun2 = function (para) { return __awaiter(_this, void 0, void 0, function () {
    var _this = this;
    return __generator(this, function (_a) {
        return [2 /*return*/, new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                var result;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, task1(2, Math.floor(5 * 1000))];
                        case 1:
                            result = _a.sent();
                            resolve(para + result);
                            return [2 /*return*/];
                    }
                });
            }); })];
    });
}); };
var fun3 = function (para) {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task1(3, Math.floor(3 * 1000))];
                case 1:
                    result = _a.sent();
                    resolve(para + result);
                    resolve("dipraj");
                    return [2 /*return*/];
            }
        });
    }); });
};
var seriesCall1 = function () {
    fun1()
        .then(function (value) {
        return fun2("".concat(value)).then(function (value) {
            return fun3("".concat(value)).then(function (value) { return console.log(value); });
        });
    })["finally"](function () { return console.log("Finished"); });
};
/* parallel method */
var result1 = function (ra) {
    var result = "";
    ra.forEach(function (value) {
        result = result + value;
    });
    console.log(result);
};
function task(order, delay) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            console.log("Order ".concat(order, " and delay ").concat(delay));
            resolve(order);
        }, delay);
    });
}
var fun11 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task(1, Math.floor(Math.random() * 1000)).then(function (value) { return (result = value); })];
                case 1:
                    _a.sent();
                    resolve(result);
                    return [2 /*return*/];
            }
        });
    }); });
};
var fun12 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task(2, Math.floor(Math.random() * 1000)).then(function (value) { return (result = value); })];
                case 1:
                    _a.sent();
                    resolve(result);
                    return [2 /*return*/];
            }
        });
    }); });
};
var fun13 = function () {
    return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
        var result;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, task(3, Math.floor(Math.random() * 1000)).then(function (value) { return (result = value); })];
                case 1:
                    _a.sent();
                    resolve(result);
                    return [2 /*return*/];
            }
        });
    }); });
};
var parallelCall1 = function () { return __awaiter(_this, void 0, void 0, function () {
    var arr;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, Promise.all([fun11(), fun12(), fun13()])];
            case 1:
                arr = _a.sent();
                result1(arr);
                console.log("finished");
                return [2 /*return*/];
        }
    });
}); };
/* WaterFall Method */
var fun21 = function () {
    return new Promise(function (resolve, reject) {
        var total = 0;
        var add = 5;
        var newTotal = total + add;
        console.log("".concat(total, " + ").concat(add, " = ").concat(newTotal));
        resolve(newTotal);
    });
};
var fun22 = function (total) {
    return new Promise(function (resolve, reject) {
        var add = 2;
        var newTotal = total + add;
        console.log("".concat(total, " + ").concat(add, " = ").concat(newTotal));
        resolve(newTotal);
    });
};
var fun23 = function (total) {
    return new Promise(function (resolve, reject) {
        var add = 3;
        var newTotal = total + add;
        console.log("".concat(total, " + ").concat(add, " = ").concat(newTotal));
        resolve(newTotal);
    });
};
var waterfallCall = function () { return __awaiter(_this, void 0, void 0, function () {
    var finalValue;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fun21().then(function (value) {
                    return fun22(value).then(function (value) { return fun23(value); });
                })];
            case 1:
                finalValue = _a.sent();
                console.log(finalValue);
                console.log("finished");
                return [2 /*return*/];
        }
    });
}); };
/* Each method */
var arr = [
    {
        order: 1,
        delay: 1000
    },
    {
        order: 2,
        delay: 750
    },
    {
        order: 3,
        delay: 650
    },
];
var counter = 0;
function taskOfEach(order, delay) {
    setTimeout(function () {
        counter++;
        console.log("Order ".concat(order, " and delay ").concat(delay));
        if (counter == arr.length)
            console.log("finished");
    }, delay);
}
var fun31 = function () {
    arr.forEach(function (value) {
        taskOfEach(value.order, value.delay);
    });
};
var eachCall = function () { return __awaiter(_this, void 0, void 0, function () {
    var finalValue;
    return __generator(this, function (_a) {
        finalValue = fun31();
        return [2 /*return*/];
    });
}); };
main();
