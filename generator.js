
//Generator 函数是一个普通函数，但是有两个特征。一是，function关键字与函数名之间有一个星号；
// 二是，函数体内部使用yield表达式，定义不同的内部状态（yield在英语里的意思就是“产出”）。

// 遍历器对象的next方法的运行逻辑如下。
//（1）遇到yield表达式，就暂停执行后面的操作，并将紧跟在yield后面的那个表达式的值，作为返回的对象的value属性值。
//（2）下一次调用next方法时，再继续往下执行，直到遇到下一个yield表达式。
//（3）如果没有再遇到新的yield表达式，就一直运行到函数结束，直到return语句为止，并将return语句后面的表达式的值，作为返回的对象的value属性值。
//（4）如果该函数没有return语句，则返回的对象的value属性值为undefined。

function* helloWorldGenerator() {
    yield 'hello';
    yield 'world';
    return 'ending';
}
  
var hw = helloWorldGenerator();

hw.next();

console.log(hw.next().value);  // world
console.log(hw.next().value);  // ending 
console.log(hw.next().value);  // undefined 



// Generator 函数可以不用yield表达式，这时就变成了一个单纯的暂缓执行函数。
function* f() {
    console.log('执行了！')
}
  
var generator = f();

setTimeout(function () {
  generator.next()
}, 2000);


//for...of循环可以自动遍历 Generator 函数时生成的Iterator对象，且此时不再需要调用next方法。
function *foo() {
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
    return 6;
  }
  
  for (let v of foo()) {
    console.log(v);
  }





