{
  "title": "promise",
  "tags": "javascript",
  "date": "2016-08-01"
}

* 概念

`Promise`是异步编程的一种解决方案，比传统的解决方案（回调函数和事件）更合理更强大，能优雅解决回调地狱难题。

所谓`Promise`，简单说就是一个容器，里面保存着某个未来才会结束的事件的结果。

`Promise`对象代表一个异步操作，有三种状态：`Pending(进行中)`、`Resolved(已完成)`和`Rejected(已失败)`。只有异步操作的结果，可以决定当前是哪一种状态，任何其他操作都无法改变这个状态。这也是`Promise`这个名字的由来，它的英语意思就是“承诺”，表示其他手段无法改变。 

* 基本用法

`Promise`构造函数接受一个函数作为参数，该函数的两个参数分别是`resolve`和`reject`。

`resolve`将`Promise`对象的状态从从`Pending`变为`Resolved`，在异步操作成功时调用，并将异步操作的结果，作为参数传递出去。

`reject`函数的作用是，在异步操作失败时调用，并将异步操作报出的错误，作为参数传递出去。

`Promise`实例生成以后，可以用`then`方法分别制定`Resolved`状态和`Rejected`状态的回调函数。

```javascript
const promise = new Promise(function(resolve, reject) {
  // ... some code
  if (/* 异步操作成功 */) {
    resolve(value);
  } else {
    reject(error);
  }
});

promise.then(function(value) {
  // sucess
}, function(error) {
  // failure
});
```
<!-- lph -->
* `Promise`新建后会立即执行

```javascript
const promise = new Promise(function(resolve, reject) {
  console.log('promise');
  resolve();
});

promise.then(function() {
  console.log('resolve');
});

console.log('hi');

// promise
// hi
// resolve
```

上面代码中，`new Promise`后立即执行，先输出的是`promise`，`then`方法的回调函数将在当前脚本所有同步任务执行完才会执行，所以`resolve`最后输出。

* 多任务并行处理

当多个异步任务没有依赖关系，且要等多个异步任务全部返回后才执行相应的回调函数，`Promise`也可以优雅的解决 。

```javascript
Promise.all([
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  }),
  new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(2);
    }, 2000);
  })
])
  .then(function(results) {
    console.log(results); // [1, 2]
  });
```

