{
  "title": "使用 Travis CI 自动更新 GitHub Pages",
  "tags": "javascript css",
  "date": "2017-05-14"
}

#### flex

`flex`就是`flexible box`的缩写，意为弹性布局。

任何一个容器都可以指定为`flex`布局。

```css
.box {
  display: flex;
}
```

行内元素也可以使用`flex`布局。

```css
.box {
  display: inline-flex;
}
```

注意，设为`flex`布局后，子元素的`float` `clear` `vertical-align`属性都会失效。

<!-- lph -->

### 基本概念

采用`flex`布局的元素，称为`flex`容器（`flex container`）。它的子元素称为`flex`项目（`flex item`）。

容器默认存在两根轴：水平的主轴（`main axis`）和垂直的交叉轴（`cross axis`）。

### 容器的属性

```css
flex-direction
flex-wrap
flex-flow
justify-content
align-items
align-content
```

1. `flex-direction`：主轴方向

```css
.box {
  flex-direction: row | row-reverse | column | column-reverse;
}
```

2. `flex-wrap`：换行

```css
.box {
  flex-wrap: nowrap | wrap | wrap-reverse;
}
```

3. `flex-flow`：`flex-direction`属性和`flex-wrap`属性的简写形式

```css
.box {
  flex-flow: <flex-direction> || <flex-wrap>;
}
```

4. `justify-content`：主轴的对齐方式
   * `space-between`：两端靠边对齐，项目之间的间隔都相等
   * `space-around`：每个项目两侧的间隔相等。所以，项目之间的间隔比项目与边框的间隔大一倍。

```css
.box {
  justify-content: flex-start | flex-end | center | space-between | space-around;
}
```


5. `align-items`：交叉轴对齐方式
   * `baseline`：项目的第一行文字的基线对齐
   * `stretch`: 默认值，如果项目未设置高度或设为auto，将占满整个容器的高度。

```css
.box {
  align-items: flex-start | flex-end | center | baseline | stretch;
}
```

6. `align-content`：定义了多根轴线的对齐方式。如果项目只有一根轴线，该属性不起作用。

```css
.box {
  align-content: flex-start | flex-end | center | space-between | space-around | stretch;
}
```

### 项目的属性

```css
order
flex-grow
flex-shrink
flex-basis
flex
align-self
```

1. `order`

```css
.item {
  order: <integer>;
}
```

2. `flex-grow`：放大比例

```css
.item {
  flex-grow: <number>; /* default 0 */
}
```

3. `flex-shrink`：缩小比例

```css
.item {
  flex-shrink: <number>; /* default 1 */
}
// 如果所有项目的flex-shrink属性都为1，当空间不足时，都将等比例缩小。如果一个项目的flex-shrink属性为0，其他项目都为1，则空间不足时，前者不缩小。
```

4. `flex-basis`：

```css
.item {
  flex-basis: <length> | auto; /* default auto */
}
// 它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。
```

5. `flex`：

```css
.item {
  flex: 0 1 auto;
}
// 后两个属性可选
```

6. `align-self`：属性允许单个项目有与其他项目不一样的对齐方式，可覆盖`align-items`属性。

```css
.item {
  align-self: auto | flex-start | flex-end | center | baseline | stretch;
}
```

### 注意事项

* `flex`的优先级比`width` `height`高

* 当子项目的内容超过容器设定


