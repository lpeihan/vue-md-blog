{
  "title": "path模块",
  "date": "2017-12-22",
  "tags": "node"
}

```javascript
// 引入path模块

const path = reuiqre('path');
```

###  `path.normalize` 路径整理

```javascript
// 对window系统，目录分隔为'\', 对于UNIX系统，分隔符为'/'
// 针对'..'返回上一级
// /与\\都被统一转换

const p = path.normalize(__dirname + '/test/a//b//../c/utilyou.mp3');
console.log(p); //windows: E:\workspace\NodeJS\app\fs\test\a\c\utilyou.mp3
```
<!-- lph -->
### `path.join` 拼接路径

```javascript
const path1 = 'path1';
const path2 = 'path2//pp\\';
const path3 = '../path3';

const p = path.join(path1, path2, path3);
console.log(p); // /path1\path2\path3
```

### `path.resolve` 绝对路径

```javascript
// 以应用程序为起点，根据参数字符串解析出一个绝对路径

const p = path.resolve('path1', 'path2', 'a/b\\c/');
console.log(p); // E:\workspace\NodeJS\path1\path2\a\b\c
```

### `path.relative` 相对路径

```javascript
// 获取两路径之间的相对关系

const from = 'c:\\from\\a\\';
const to = 'c:/test/b';

const p = path.relative(from, to);
console.log(p); // ..\..\test\b
```

### `path.dirname` 文件路径

```javascript
// 获取路径中目录名

const p = path.dirname(__dirname + '/test/util you.mp3');
console.log(p); 
```

### `path.basename` 获取路径中的文件名

```javascript
// 获取路径中文件名,后缀是可选的，如果加，请使用'.ext'方式来匹配，则返回值中不包括后缀名；

const p = path.basename(__dirname + '/test/util you.mp3', '.mp3');
console.log(p); // util you
```

### `path.extname` 文件后缀

```javascript
// 获取路径中的扩展名，如果没有'.'，则返回空
```

### `path.parse` 解析路径

```javascript
path.parse('/home/user/dir/file.txt');
// returns
{
    root : "/",
    dir : "/home/user/dir",
    base : "file.txt",
    ext : ".txt",
    name : "file"
}

// windows
path.parse('C:\\path\\dir\\index.html')
// returns
{
    root : "C:\\",
    dir : "C:\\path\\dir",
    base : "index.html",
    ext : ".html",
    name : "index"
}
```

### `path.format` 生成路径

```javascript
path.format({
  root : "/",
  dir : "/home/user/dir",
  base : "file.txt",
  ext : ".txt",
  name : "file"
})
// returns
'/home/user/dir/file.txt'
```

