export class QueueViaObj {
  constructor() {
    this.item = {};
    this.front = 0;
    this.rear = 0;
  }
  isEmpty() {
    return this.rear - this.front;
  }
  enqueue(element) {
    this.item[this.rear] = element;
    this.rear++;
  }
  dequeue() {
    const item = this.item[this.front];
    delete this.item[this.front];
    this.front++;
    return item;
  }
  peek() {
    return this.item[this.front];
  }
  print() {
    console.log(this.item);
  }
  size() {
    return this.rear - this.front === 0;
  }
}
