var n;
while ((n = read_line())) {
  var arr = read_line().split(' ');
  fn1(n, arr);
}

function fn1(n, arr) {
  var dong = arr[0];
  var index = 0;
  var i = 0;
  while (n > 1) {
    arr.sort(compare);
    index = arr.indexOf(dong);
    if (n - index === 1) {
      break;
    }
    dong++;
    i++;
    arr[index] = dong;
    arr[n - 1]--;
  }
  print(i);
}

function compare(a, b) {
  return a - b;
}