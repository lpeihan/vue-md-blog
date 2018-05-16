{
  "title": "Promise",
  "date": "2018-02-23",
  "tags": "javascript 算法 leetcode"
}

Write a function that takes a string as input and returns the string reversed.

Example:
Given s = "hello", return "olleh".

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    return s.split('').reverse().join('');
};
```

```js
/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function(s) {
    let str = '';
    for (let i = s.length - 1; i >= 0; i--) {
        str += s[i];
    }
    return str;
};
```