###　问答题

1.第一题

```javascript
// 试用HTML5/css3一个双栏布局，顶部有导航栏，底部有网站简介。
// 要求如下：
// — PC上，侧边栏在左侧，宽度固定，主内容在右侧，宽度自适应，内容区域高度不定。
// - 手机上，所有区域竖排，依次是内容、导航、侧边栏、底部（假如宽度低于480px的设备是手机）
```

2.第二题

> 如下代码，请给出输出结果，并解释原理。

```javascript
setTimeout(function() {
  console.log('start');
  new Promise(function(resolve, reject) {
    resolve(true);
    reject(false);
    console.log(1);
  })
    .then(
      function() {
        setTimeout('var x=2;console.log(2)');
        console.log(a);
      },
      function() {
        setTimeout('var x=3;console.log(3)');
        console.log(b);
      }
    )
    .then(
      function() {
        console.log(4);
      },
      function() {
        console.log(5);
      }
    )
    .catch(function() {
      console.log(6);
    });
}, 0);
setTimeout(function() {
  const timer = setInterval(function() {
    console.log(7);
  }, 10);
  const start = Date.now();
  setTimeout(function() {
    while (Date.now() - start <= 30) {}
    clearTimeout(timer);
    try {
      console.log(x);
    } catch (e) {
      console.log(8);
    }
  }, 13);
}, 0);
console.log('end');
```

### 编程题

1.爬楼梯

> 在你面前有一个 n 阶的楼梯，你一步只能上 1 阶或 2 阶，请问计算出你可以采用多少种不同方式爬完这个楼梯。

#### 输入

`一个正整数（n <= 50),表示这个楼梯一共有多少阶`

#### 输出

`一个正整数，表示有多少种不同的方式爬完这个楼梯`

#### 样例输入

`5`

#### 样例输出

`8`

#### Hint

##### 输入样例

`10`

##### 输出样例

`89`

2.失落的 IP

#### 输入

`仅包含数字的字符串`

#### 输出

`所有可能的IP,每行输出一个IP。`

`若无法转换为任何IP，则不用输出任何字符串`

#### 样例输入

```javascript
21199132227;
```

#### 样例输出

```javascript
21.199.13.227
21.199.132.27
211.99.13.227
211.99.132.27
```
