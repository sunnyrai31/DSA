// Import stylesheets
import './style.css';
import { Stack } from './DS/Custom/stack.js';
import { Queue } from './DS/Custom/queue.js';
import { QueueViaObj } from './DS/Custom/queueObjectWay.js';

console.log('******stack via array way O(n)******');
const stack = new Stack();
console.log(stack);
stack.push(1);
stack.push(2);
stack.push(3);
stack.print();
console.log(stack.peek());
console.log(stack.isEmpty());

console.log('******queue via array way O(n)******');
const queue = new Queue();
for (let i = 0; i < 1; i++) {
  queue.enqueue(i);
}
queue.print();

queue.dequeue();
queue.print();

console.log(queue.peek());
console.log(queue.lastItem());

console.log('******queue via objecct way O(1)******');
const queueViaObj = new QueueViaObj();
for (let i = 0; i < 10; i++) {
  queueViaObj.enqueue(i);
}
queueViaObj.print();
queueViaObj.dequeue();
queueViaObj.print();

console.log(queueViaObj.peek());
