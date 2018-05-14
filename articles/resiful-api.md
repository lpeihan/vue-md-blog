{
  "title": "promise",
  "tags": "javascript mongo redis webpack node koa express",
  "date": "2018-03-01"
}

资源：网络上的一个实体，或者一个具体信息。

`restful api` ：

`http`协议：应用层协议。

完整的`URL` ：`schema://host[:port]path[?query-string][#anchor]`

协议、`IP`地址或域名、端口、资源路径、发送给`http`的数据、锚

```js
GET / HTTP/1.1 CRLF

// get post put delete

HTTP/1.1 200 OK

响应状态码
200 OK
201 CREARED 新建或修改数据成功
204 NO CONTENT 删除数据成功
400 bad request 当前客户端请求有语法错误，不能被服务器所理解
401 unauthorized 服务器收到请求，到客户端并没有授权，服务器拒绝服务
403 forbidden 用户访问被禁止
404 not found 请求资源不存在
405 method not allowed,请求方法不被允许
422 当创建一个对象时，发生一个错误，比如创建用户少了密码字段
500 internal server error 服务器内部错误，服务器发生不可预知的错误
503 server unavailble 服务器性能达到瓶颈
```

资源路径

每一个网址代表一种资源，所以网址中不能有动词，只能有名词。一般来说，`API`中的名词应该使用负数。

```js
https://example.com/api/v1/zoos // 动物园资源
https://example.com/api/v1/animals // 动物资源

POST /zoos 新建一个动物园
GET /zoos/id 获取某个动物园
PUT /zoos/id 更新一个动物园
DELETE /zoos/id 删除一个动物园

过滤信息：
?offset=10
?page=2&per_page=100
?sortby=name&order=asc
?animal_type_id=1

```

错误处理

```js
如果状态是 4xx 或者 5xx，就应该向用户返回出错信息。
{
    "error": "参数错误"
}
```

返回结果

```js
GET /collections 返回资源对象列表（数组）
GET /collections/identity 返回单个资源对象
POST /collection 返回新生成资源对象的全部属性
PUT /collection/identity 返回完整的资源对象
DELETE /collection/identity 返回一个空文档 204状态码
PATCH /collection/identity 返回被修改的对象属性
```

实例：

```js
用户表： id username password create_time
文章表： id title content create_time user
restful api 六要素：资源路径（URI）HTTP动词 过滤信息 状态码 错误处理 返回结果

```



参考：https://www.imooc.com/video/14356

