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
    } catch {
      console.log(8);
    }
  }, 13);
}, 0);
console.log('end');
```
