// 说明
// 1) Complete the task in weave/queue.js || 1) 完成 weave/queue.js中的任务
// 2) Implement the 'weave' function.  Weave || 2) 实现weave函数.
// receives two queues as arguments and combines the  || Weave 能够将两个队列作为实参，将每个的内容合并到一个新的第三队列中
// contents of each into a new, third queue.
// The third queue should contain the *alterating* content
// of the two queues.  The function should handle
// queues of different lengths without inserting
// 'undefined' into the new one.  || 第三个队列应该包含两个可“修改”的内容。
//                                  函数应该处理不同长度的队列，并排除'undefined'插入新队列。

// *Do not* access the array inside of any queue, only
// use the 'add', 'remove', and 'peek' functions.
// --- Example
//    const queueOne = new Queue();
//    queueOne.add(1);
//    queueOne.add(2);
//    const queueTwo = new Queue();
//    queueTwo.add('Hi');
//    queueTwo.add('There');
//    const q = weave(queueOne, queueTwo);
//    q.remove() // 1
//    q.remove() // 'Hi'
//    q.remove() // 2
//    q.remove() // 'There'
