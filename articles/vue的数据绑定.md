{
  "title": "Vue简单的数据绑定",
  "date": "2018-04-29",
  "tags": "javascript vue"
}

`vue.js`的`getter`和`setter`


```javascript
// 观察者构造函数

function Observer(data) {
  this.data = data;
  this.convert(data);
}

Observer.prototype.convert = function(obj) {
  let val;
  for (let key in obj) {
  	//for...in循环会把对象原型链上的所有可枚举属性都循环出来
	if (obj.hasOwnProperty(key)) {
      val = obj[key];
	  if (typeof val === "object") {
	    new Observer(val);
	  }
	  this.setVaule(key, val);
	}
  }
};

Observer.prototype.setVaule = function(key, val) {
  Object.defineProperty(this.data, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      console.log('你访问了' + key);
      return val;
    },
    set: function(newVal) {
      console.log('你设置了' + key);
      console.log('新的' + key + ' = ' + newVal);
      val = newVal;
    }
  });
};

// 调用
const vue = new Observer({
  name: {
    firstName: 'peihan',
    lastName: 'li'
  },
  age: 25
});

vue.data.age = 18;
vue.data.name.firstName = 'pipi';

console.log(vue.data.age);

// 你设置了age
// 新的 age = 18
// 你访问了 name
// 你设置了 firstName
// 新的 firstName = 'pipi'
```



