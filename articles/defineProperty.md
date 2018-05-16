{
  "title": "神奇的Object.defineProperty",
  "date": "2018-05-17",
  "tags": "javascript"
}


`vue.js`是通过`defineProperty`实现双向绑定的。

简单使用：

```javascript
const a = {};
Object.defineProperty(a, 'b', {
  value:123
});
console.log(a.b);  //123
```

它接受三个参数，而且都是必填的。

#### 传入参数

* 第一个参数：目标对象
* 第二个参数：需要定义的属性或方法的名字。
* 第三个参数：目标属性所拥有的特性`descriptor` 。

####  descriptor

- `value`
- `writable`：属性的值是否能被重写
- `configurable`：一旦为false，就不能再设置`value`，`writable`，`configurable`
- `enumerable`：是否能在`for...in`循环中遍历出来或在`Object.keys`中列举出来
- `get`
- `set`
<!-- lph -->

再来看第一个例子：

```javascript
const a = {};
Object.defineProperty(a, 'b', {
  value:123
});
console.log(a.b);  //123
```

和下面等价

```javascript
const a = {}
Object.defineProperty(a, 'b', {
  value: 123,
  writable: false,
  enumerable: false,
  configurable: false
});
console.log(a.b);//123
```

* `writable`

```javascript
const a = {}; 
Object.defineProperty(a, "b", { 
    value: 123,
    writable: false
});

console.log(a.b); // 打印 123
a.b = 25; // 没有错误抛出（在严格模式下会抛出，即使之前已经有相同的值）
console.log(a.b); // 打印 123， 赋值不起作用。
```

* `enumerable`

```javascript
const a = {};
Object.defineProperty(a, 'b',{
  value: 123,
  enumerable: false
})
console.log(Object.keys(a)); // 打印[]
```

* `set`和`get`

不能同时设置访问器`get set`和 `wriable` 或 `value`，否则会错。就是说想用 `get` 和`set`，就不能用 `writable` 或 `value` 中的任何一个。

```javascript
Observer.prototype.setVaule = function(key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function () {
      console.log('你访问了' + key);
      return val;
    },
    set: function (newVal) {
      console.log('你设置了' + key);
      console.log('新的' + key + ' = ' + newVal);
      val = newVal;
    }
  });
};
```

