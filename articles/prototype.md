{
  "title": "原型和原型链详解",
  "date": "2018-02-22",
  "tags": "javascript"
}

## 私有变量和函数

在函数内部定义的变量和函数，如果不对外提供接口，外部是无法访问到的，也就是该函数的`私有变量`和`私有函数`。

```javascript
function Person() {
  const name = 18;
  const say = function() {
    console.log('hello world');
  }
}

const person = new Person();
person.name; // undefined
person.say; // undefined
```

## 静态变量和函数

当定义一个函数后通过点号 `'.'`为其添加的属性和函数，通过对象本身仍然可以访问得到，但是其实例却访问不到，这样的变量和函数分别被称为`静态变量`和`静态函数`。

```javascript
function Person() {};

Person.age = 18;
Person.say = function() {
  console.log(`hello world`);
}

Person.age; // 18
typeof Person.say; // function

const person = new Person();
person.age; // undefined
person.say; // undefined

```
<!-- lph -->
## 实例变量和函数

实例可以访问的变量和函数

```javascript
function Person() {
  this.name = 'John';
  this.walk = function() {
    console.log('walking');
  };
}

const p1 = new Person();
p1.name; // 'John'
p1.walk(); // 'walking'

// 接下来
const p2 = new Person();
p1.walk === p2.walk; // false
```

上面的`p1.walk === p2.walk; // false`可以看出，`p1`和`p2`的`walk`函数名相同,，做完全一样的功能，却不是同一个引用。

如果一个函数有千万个实例，那么每个实例的方法就要保持一千万份的复制，这显然太浪费资源了。

`prototype`应运而生。

## 基本概念

每个构造函数（对象）都有一个`prototype`属性，这是一个指针，指向一个对象，这个对象的用途是包含可以由特定类型的所有实例共享的属性和方法。

每个构造函数都有一个内部属性`prototype`属性，我们称之为`原型` 。

实例不具备`prototype`属性，而是用`__proto__`指向原型。

下面是原型对象的结构：

```javascript
Person.prototype = {
  constructor : Function, // 构造函数
  __proto__ : parent prototype, // 指向上一层的原型对象
  some prototype properties: ... // 共享的对象和方法
};
```

接下来看个原型实例：

```javascript
function Person(name) {
  this.name = name;
}

Person.prototype.say = function() {
  console.log(`hello ${this.name}`);
}

const p = new Person('John');

p.say(); // 'hello John'
```

当我们调用`p.say()`方法时，由于`Person`中没有这个方法，所以，它就会去`__proto__`中找，也就是`Person.prototype`。

* `prototype`和`__proto__`的关系：

 ![prototype](http://note.youdao.com/yws/api/personal/file/D8B6646E2F1F4650988AD6F867D5F39D?method=download&shareKey=4f83ebac192d6d74f5f3fb719caeb535)

实例一旦创造出来，就具有`contructor`（指向构造函数）和`__proto__`（指向原型对象）。

构造函数中也有一个`prototype`属性，是一个指针，指向它的原型对象。

如上图，我们可以得出下面的关系：

```javascript
function Person() {
  this.name = 'John';
}

Person.prototype.say = function() {
  console.log('hello world');
}
const p1 = new Person();
const p2 = new Person();

Person.prototyp.say === p1.say === p2.say; // true
Person.prototype === p1.__proto__ === p2.__proto__; // true
Person.prototype.constructor === p1.constructor ==== p2.constructor === Person; // true
```

事实上，`new`就做了三件事：

```javascript
var obj  = {};  
obj.__proto__ = Base.prototype;  
Base.call(obj);
```

## 原型链

当从一个对象那里调取属性或方法时，如果该对象自身不存在这样的属性或方法，就会自己指向的的`prototype`原型对象寻找，如果没有，就会去`prototype`关联的上层`prototype`寻找，如果再没有则继续查找，依次类推，直到为`prototype`为`null`从而形成了所谓的原型链。

* 原型继承

  在原型链的末端，就是`Object`构造函数`prototype`属性指向的那个原型对象。它是所有对象的祖先，实现了诸如`toString `的对象天生就有的方法。

  `ECMAScript`中，实现继承的方法就是依靠原型链实现的。

```javascript
function Father() {
  this.name = 'John';
  
  this.walk = function() {
    console.log('walking');
  }
}

Father.prototype.say = function() {
  console.log('I\'m Father');
}

function Son() {
  this.age = 18;
}

Son.prototype = new Father();

const s1 = new Son();
const s2 = new Son();

s1.name; // 'John'
s1.say(); // 'I'm Father'
s1.walk(); // 'walkding'

s1.walk === s2.walk; // true
```

`Father`的实例属性也就变成`Son`原型的属性，而`Son.prototype.__proto__ === Father.prototype` 。

## 参考

1. https://segmentfault.com/a/1190000000662547#articleHeader6
2. http://www.jianshu.com/p/aa1ebfdad661

