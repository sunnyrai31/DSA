/*
 * queue -> first come/in first serve/out (FIFO)
 * ********Basic Operation ********
 * enqueue/push - at last
 * dequeue/pop -  from front
 * size - size of queue
 * print - print the whole queue
 * firstElement/peek - find the first
 * LastElement - find the last
 * position - find the position of perticular item
 * isEmpty - true/false iff list is empty.

 *
 * Usage:
 * print,
 * cpu processor usage
 * callback queue in js
 */
export class Queue {
  constructor() {
    this.item = [];
  }
  enqueue(item) {
    this.item.push(item);
  }
  dequeue() {
    return this.item.shift();
  }
  size() {
    return this.item.length;
  }
  isEmpty() {
    return this.item.length === 0;
  }
  print() {
    console.log(this.item.toString());
  }
  peek() {
    if (this.item.length > 0) {
      return this.item[0];
    }
  }
}
