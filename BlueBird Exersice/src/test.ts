var args = process.argv;

function main() {
  var choice = args[2];
  if (!choice) {
    console.error("Please add your choice in command line argument");
    process.exit(1);
  }
  executeChoice(choice);
}

function executeChoice(choice: string) {
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

const task1 = (order: number, delay: number) => {
  /*  console.log(`Order ${order} and delay ${delay}`);
  return new Promise((resolve, reject) => resolve(order)); */
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Order ${order} and delay ${delay}`);
      resolve(order);
    }, delay);
  });
};

const fun1 = () => {
  return new Promise(async (resolve, reject) => {
    const result = await task1(1, Math.floor(1 * 1000));
    resolve(result);
  });
};

const fun2 = async (para: string) => {
  return new Promise(async (resolve, reject) => {
    const result = await task1(2, Math.floor(5 * 1000));
    resolve(para + result);
  });
};

const fun3 = (para: string) => {
  return new Promise(async (resolve, reject) => {
    const result = await task1(3, Math.floor(3 * 1000));
    resolve(para + result);
    resolve("dipraj");
  });
};

const seriesCall1 = () => {
  fun1()
    .then((value) =>
      fun2(`${value}`).then((value) =>
        fun3(`${value}`).then((value) => console.log(value))
      )
    )
    .finally(() => console.log("Finished"));
};

/* parallel method */

const result1 = (ra: any[]) => {
  let result = "";
  ra.forEach((value) => {
    result = result + value;
  });
  console.log(result);
};

function task(order: number, delay: number) {
  return new Promise((resolve, reject) => {
    setTimeout(function () {
      console.log(`Order ${order} and delay ${delay}`);
      resolve(order);
    }, delay);
  });
}

const fun11 = () => {
  return new Promise(async (resolve, reject) => {
    let result;
    await task(1, Math.floor(Math.random() * 1000)).then(
      (value) => (result = value)
    );
    resolve(result);
  });
};

const fun12 = () => {
  return new Promise(async (resolve, reject) => {
    let result;
    await task(2, Math.floor(Math.random() * 1000)).then(
      (value) => (result = value)
    );
    resolve(result);
  });
};

const fun13 = () => {
  return new Promise(async (resolve, reject) => {
    let result;
    await task(3, Math.floor(Math.random() * 1000)).then(
      (value) => (result = value)
    );

    resolve(result);
  });
};

const parallelCall1 = async () => {
  let arr: any[] = await Promise.all([fun11(), fun12(), fun13()]);

  result1(arr);
  console.log("finished");
};

/* WaterFall Method */

const fun21 = () => {
  return new Promise((resolve, reject) => {
    var total = 0;
    var add = 5;
    var newTotal = total + add;
    console.log(`${total} + ${add} = ${newTotal}`);
    resolve(newTotal);
  });
};

const fun22 = (total: any) => {
  return new Promise((resolve, reject) => {
    var add = 2;
    var newTotal = total + add;
    console.log(`${total} + ${add} = ${newTotal}`);
    resolve(newTotal);
  });
};

const fun23 = (total: any) => {
  return new Promise((resolve, reject) => {
    var add = 3;
    var newTotal = total + add;
    console.log(`${total} + ${add} = ${newTotal}`);
    resolve(newTotal);
  });
};

const waterfallCall = async () => {
  const finalValue = await fun21().then((value) =>
    fun22(value).then((value) => fun23(value))
  );
  console.log(finalValue);
  console.log("finished");
};

/* Each method */

const arr = [
  {
    order: 1,
    delay: 1000,
  },
  {
    order: 2,
    delay: 750,
  },
  {
    order: 3,
    delay: 650,
  },
];

let counter = 0;

function taskOfEach(order: number, delay: number) {
  setTimeout(function () {
    counter++;
    console.log(`Order ${order} and delay ${delay}`);
    if (counter == arr.length) console.log("finished");
  }, delay);
}

const fun31 = () => {
  arr.forEach((value) => {
    taskOfEach(value.order, value.delay);
  });
};

const eachCall = async () => {
  const finalValue = fun31();
};

main();
