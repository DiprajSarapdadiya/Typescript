var currency1 = [
    { PENNY: 0.01 },
    { NICKEL: 0.05 },
    { DIME: 0.1 },
    { QUARTER: 0.25 },
    { ONE: 1 },
    { TWO: 2 },
    { FIVE: 5 },
    { TEN: 10 },
    { TWENTY: 20 },
    { HUNDRED: 100 },
];
var count;
var totalAmount;
var change1;
var resultArray = [];
var ArrayCounter = -1;
var currency2 = currency1.sort(function (a, b) { return Object.values(b)[0] - Object.values(a)[0]; });
var noFund = function () {
    var result = {
        status: "INSUFFICIENT_FUNDS",
        change: []
    };
    resultArray = [];
    return result;
};
var totalDrawerAmount = function (drawer) {
    var total = 0;
    drawer.forEach(function (value) {
        total += value[1];
    });
    return total;
};
var removeNote = function (drawer, firstKey, firstValue) {
    // console.log(change1);
    // console.log(drawer[count][1]);
    // console.log(drawer[count][1]);
    if (firstValue < change1) {
        var resultCounter = 0;
        var result = [];
        do {
            change1 = Math.round((change1 + Number.EPSILON) * 100) / 100;
            if (change1 >= firstValue) {
                if (drawer[count][1] != 0) {
                    change1 = change1 - firstValue;
                    drawer[count][1] = drawer[count][1] - firstValue;
                    resultCounter++;
                }
            }
            else
                break;
        } while (drawer[count][1] != 0);
        if (resultCounter != 0) {
            result = [firstKey, firstValue * resultCounter];
            resultArray.push(result);
        }
    }
    if (count > 0)
        count--;
    else
        count = drawer.length - 1;
};
var changeCalculate = function (drawer) {
    for (var _i = 0, currency2_1 = currency2; _i < currency2_1.length; _i++) {
        var value = currency2_1[_i];
        var firstKey = Object.keys(value)[0];
        var firstValue = Object.values(value)[0];
        removeNote(drawer, firstKey, firstValue);
    }
};
var changeValidator = function (change) {
    var calculatedChange = totalDrawerAmount(resultArray);
    calculatedChange =
        Math.round((calculatedChange + Number.EPSILON) * 100) / 100;
    if (calculatedChange === change)
        return true;
    else
        return false;
};
var closedResult = function (totalAmount) {
    var result = {
        status: "CLOSE",
        change: resultArray
    };
    resultArray = [];
    return result;
};
var printResult = function (totalAmount) {
    var result = {
        status: "OPEN",
        change: resultArray
    };
    resultArray = [];
    return result;
};
var giveMeSomeChange = function (val1, val2, drawer) {
    var change = val1 - val2;
    if (change < 0)
        change = change * -1;
    totalAmount = totalDrawerAmount(drawer);
    change1 = change;
    count = drawer.length - 1;
    if (change > totalAmount) {
        console.log(noFund());
    }
    else if (change === totalAmount) {
        changeCalculate(drawer);
        console.log(closedResult(totalAmount));
    }
    else if (change < totalAmount) {
        changeCalculate(drawer);
        if (changeValidator(change))
            console.log(printResult(totalAmount));
        else
            console.log(noFund());
    }
};
// //Example
// giveMeSomeChange(19.5, 20, [
//   ["PENNY", 1.01],
//   ["NICKEL", 2.05],
//   ["DIME", 3.1],
//   ["QUARTER", 4.25],
//   ["ONE", 90],
//   ["FIVE", 55],
//   ["TEN", 20],
//   ["TWENTY", 60],
//   ["ONE HUNDRED", 100],
// ]);
// Test Case 1
giveMeSomeChange(2.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["TWO", 5],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
]);
// //Test Case 2
// giveMeSomeChange(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
// //Test case 3
// giveMeSomeChange(19.5, 20, [
//   ["PENNY", 0.01],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 1],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
// // Test case 4
// giveMeSomeChange(19.5, 20, [
//   ["PENNY", 0.5],
//   ["NICKEL", 0],
//   ["DIME", 0],
//   ["QUARTER", 0],
//   ["ONE", 0],
//   ["FIVE", 0],
//   ["TEN", 0],
//   ["TWENTY", 0],
//   ["ONE HUNDRED", 0],
// ]);
