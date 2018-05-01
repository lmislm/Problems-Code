const YouAreI = require('youarei');

var uri = new YouAreI('http://www.xiyanghui.com:8080/product/list?id=123456&sort=discount#title');

console.log(uri.query_get());

console.log(uri); // 所需结果