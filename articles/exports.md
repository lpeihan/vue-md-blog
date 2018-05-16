{
  "title": "exports和module.exports的区别",
  "date": "2018-04-25",
  "tags": "node javascript ES6"
}


`exports`是对`module.exports`的一个引用。

如下：

```js
const module = {
    exports: {}
};

const exports = module.exports;

console.log(exports === module.exports); // true
```

<!-- lph -->

故导出模块可以用：

```js
function test() {};
const pi = 3.14;

module.exports = {
    test,
    pi
};

// 等价于
module.exports.test = test;
module.exports.pi = pi;
// 等价于
exports.test = test;
exports.pi = pi;
```

但是如果下面写法就会有问题：

```js
exports = function() {}; // 改变了 exports 的引用，exports 不在指向 module.exports; 而 require 只能看到module.exports 这个对象，看不到 exports

// 正确的写法
module.exports = function() {};
```

