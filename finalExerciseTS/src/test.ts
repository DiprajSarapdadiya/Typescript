let currency1: { [key: string]: number }[] = [
  { PENNY: 0.01 },
  { NICKEL: 0.05 },
  { DIME: 0.1 },
  { QUARTER: 0.25 },
  { ONE: 1 },
  { FIVE: 5 },
  { TEN: 10 },
  { TWENTY: 20 },
  { HUNDRED: 100 },
];

type resultDisplay = {
  status: "OPEN" | "CLOSE" | "INSUFFICIENT_FUNDS";
  change: any[];
};

let count: number;
let totalAmount: number;
let change1: number;
let resultArray: any[] = [];
let ArrayCounter: number = -1;

let currency2 = currency1.sort(
  (a, b): number => Object.values(b)[0] - Object.values(a)[0]
);

const noFund = () => {
  const result: resultDisplay = {
    status: "INSUFFICIENT_FUNDS",
    change: [],
  };
  resultArray = [];
  return result;
};

const totalDrawerAmount = (drawer: any[]): number => {
  let total = 0;
  drawer.forEach((value) => {
    total += value[1];
  });
  return total;
};

const removeNote = (drawer: any[], firstKey: string, firstValue: number) => {
  if (firstValue < change1) {
    let resultCounter = 0;
    let result: any[] = [];
    do {
      change1 = Math.round((change1 + Number.EPSILON) * 100) / 100;
      if (change1 >= firstValue) {
        if (drawer[count][1] != 0) {
          change1 = change1 - firstValue;
          drawer[count][1] = drawer[count][1] - firstValue;
          resultCounter++;
        }
      } else break;
    } while (drawer[count][1] != 0);
    if (resultCounter != 0) {
      result = [firstKey, firstValue * resultCounter];
      resultArray.push(result);
    }
  }

  if (count > 0) count--;
  else count = drawer.length - 1;
};

const changeCalculate = (drawer: any[]) => {
  for (const value of currency2) {
    const firstKey = Object.keys(value)[0];
    const firstValue = Object.values(value)[0];
    removeNote(drawer, firstKey, firstValue);
  }
};

const changeValidator = (change: number) => {
  let calculatedChange = totalDrawerAmount(resultArray);
  calculatedChange =
    Math.round((calculatedChange + Number.EPSILON) * 100) / 100;

  if (calculatedChange === change) return true;
  else return false;
};

const closedResult = (totalAmount: number) => {
  const result: resultDisplay = {
    status: "CLOSE",
    change: resultArray,
  };
  resultArray = [];
  return result;
};

const printResult = (totalAmount: number) => {
  const result: resultDisplay = {
    status: "OPEN",
    change: resultArray,
  };
  resultArray = [];
  return result;
};

const giveMeSomeChange = (val1: number, val2: number, drawer: any[]) => {
  let change = val1 - val2;

  if (change < 0) change = change * -1;

  totalAmount = totalDrawerAmount(drawer);
  change1 = change;
  count = drawer.length - 1;

  if (change > totalAmount) {
    console.log(noFund());
  } else if (change === totalAmount) {
    changeCalculate(drawer);
    console.log(closedResult(totalAmount));
  } else if (change < totalAmount) {
    changeCalculate(drawer);
    if (changeValidator(change)) console.log(printResult(totalAmount));
    else console.log(noFund());
  }
};

//Example
giveMeSomeChange(19.5, 20, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],
  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

// Test Case 1
giveMeSomeChange(2.26, 100, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.1],
  ["QUARTER", 4.25],
  ["ONE", 90],

  ["FIVE", 55],
  ["TEN", 20],
  ["TWENTY", 60],
  ["ONE HUNDRED", 100],
]);

//Test Case 2
giveMeSomeChange(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

//Test case 3
giveMeSomeChange(19.5, 20, [
  ["PENNY", 0.01],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 1],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);

// Test case 4
giveMeSomeChange(19.5, 20, [
  ["PENNY", 0.5],
  ["NICKEL", 0],
  ["DIME", 0],
  ["QUARTER", 0],
  ["ONE", 0],
  ["FIVE", 0],
  ["TEN", 0],
  ["TWENTY", 0],
  ["ONE HUNDRED", 0],
]);
