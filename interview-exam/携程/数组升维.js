/* 数组升维
时间限制：C/C++语言 1000MS；其他语言 3000MS
内存限制：C/C++语言 65536KB；其他语言 589824KB
题目描述：
对一维数组，根据 type 类型分组成二维数组。

输入
输入的参数可能是空数组 []，空对象 null，undefined, 数字，字符串等异常值，也可能是结构为 [{ type, content }] 的有效值，甚至是[null, null, { type, content }] 等有效和非法值混合的数据。

输出
当输入数据不合法时，输出空数组 []。

当输入数据有效时（请先过滤数组里的异常元素），然后将相同type值的元素合并，形成新元素{"type":"A","contents":[content1,content2]}，其中，contents为一个数组，元素为所有type值相同的content值。

注意：输出一个标准json格式，字段名需要用英文双引号引起来，值如果为字符串，则也需要用双引号引起来。英文冒号、花括号、中括号前后都不能带空格或制表符（即不要任何缩进格式）。


样例输入
[null, 2, "test", undefined, {

    "type": "product",

    "content": "product1"

  },  {

    "type": "product",

    "content": "product2"

  },  {

    "type": "tag",

    "content": "tag1"

  }, {

    "type": "product",

    "content": "product3"

  }, {

    "type": "tag",

    "content": "tag2"

}]

样例输出
[{"type":"product","contents":["product1","product2","product3"]},{"type":"tag","contents":["tag1","tag2"]}]

以上是答案，为了方便您查看，缩进格式如下；

[{

    "type": "product",

    "contents": ["product1", "product2", "product3"]

  }, {

    "type": "tag",

    "contents": ["tag1", "tag2"]

}] */
