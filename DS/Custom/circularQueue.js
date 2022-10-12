export class CircularQueue {
  constructor(size) {
    this.items = new Array(size);
    this.front = 0;
    this.rear = 0;
    this.arrSize = size;
  }
  enqueue(item) {
    // if (this.rear <= this.items.length && this.rear < this.arrSize)
    if (this.rear <= this.arrSize) {
      this.items[this.rear] = item;
      this.rear++;
    } else {
      this.rear = this.front;
      console.log('Circular point reached');
    }
  }
  dequeue() {
    const item = this.items[this.front];
    this.items.pop();
    this.rear--;
    console.log('dequeue item', this.rear);
  }
  print() {
    console.log(this.items.toString());
  }
  size() {
    return this.rear - this.front;
  }
  isEmpty() {
    return this.items.length - (this.rear - this.front);
  }
  peek() {
    return this.items[this.front];
  }
  last() {
    return this.items[this.rear - 1];
  }
}
