{
  "title": "Dictionary",
  "tags": "javascript 数据结构",
  "date": "2018-05-18"
}

字典是一种以`键-值`形式存储的数数据结构，就像电话号码簿里的名字和电话号码一样。要找一个电话时，先找名字，名字找到了，紧挨这它的电话号码也就找到了。

`JavaScript`的`Object`类就是以字典的形式存在的。

`Dictionary`类的基础是`Array`类，而不是`Object`类。

1. `Dictionary`类

```js
class Dictionary {
  constructor() {
    this.dataStore = new Array();
  }

  add(key, value) {
    this.dataStore[key] = value;
  }

  remove(key) {
    delete this.dataStore[key];
  }

  count() {
    return Object.keys(this.dataStore).length;
  }

  clear() {
    Object.keys(this.dataStore).forEach((key) => {
      delete this.dataStore[key];
    });
  }
  
  // sort 是对键值进行排序
  showAll() {
    const keys = Object.keys(this.dataStore).sort();

    if (keys.length) {
      keys.forEach((key) => {
        console.log(`${key} -> ${this.dataStore[key]}`);
      });
    } else {
      console.log(null);
    }
  }
}

const pbook = new Dictionary();
pbook.add('Mike', 123);
pbook.add('David', 456);
pbook.add('Cynthia', 456);
pbook.remove('David');
pbook.showAll();
pbook.clear();
pbook.showAll();
```

