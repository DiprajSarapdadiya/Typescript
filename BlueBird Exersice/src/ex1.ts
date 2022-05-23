const mainArr: number[] = [2, 4, 1, 3, 5, 1, 1, 5];
let count: number = 0;

const timer = (value:number) => {
  return new Promise((resolve, reject)=>{
    setTimeout(() => {
      count++;
      console.log(value);
      resolve(true);
    }, value * 1000);
  })
};

const printValue = async () => {
  let value = mainArr[count];
  await timer(value);
  if (count < mainArr.length) printValue();
};

printValue();


