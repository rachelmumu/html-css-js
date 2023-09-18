

// 1. 声明变量
let name = '';
// 2. 给变量赋值
name = "mumu"
// 3. 声明变量并同时赋值
let gender = "female";
let age = 18;
let married = true;
// 4. 重新给变量赋值
name = name + 'qiangqiang' 

// 5. 打印内容进行观察
console.log("my name:", name);
console.log("my gender:", gender);
console.log("my age:", age);
console.log("my married:", married);

// 6.声明常量并赋值，常量在声明时必须马上赋值，不能像变量一样等到后面再来赋值。
const fixedName = 'qiang';

// 7. 常量的值不能改变，否则会报错
// fixedName = 'another value'; // 取消这行代码注释将会报错

console.log("fixedName:", fixedName)