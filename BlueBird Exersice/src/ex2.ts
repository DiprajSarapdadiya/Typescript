const fun1 = () => Promise.resolve("pass");
const fun2 = () => Promise.reject("fail");
const fun3 = () => Promise.reject("fail");
const fun4 = () => Promise.resolve("pass");
const fun5 = () => Promise.resolve("pass");
const fun6 = () => Promise.resolve("pass");
const fun7 = () => Promise.resolve("pass");
const fun8 = () => Promise.resolve("pass");
const fun9 = () => Promise.resolve("pass");
const fun10 = () => Promise.resolve("pass");

const main = async () => {
  const finalValue = await Promise.allSettled([
    fun1(),
    fun2(),
    fun3(),
    fun4(),
    fun5(),
    fun6(),
    fun7(),
    fun8(),
    fun9(),
    fun10(),
  ]);
  finalValue.forEach((value) => {
    console.log(value.status);
  });
};

main();
