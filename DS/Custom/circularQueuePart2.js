export class CircularQueue2 {
  constructor(size) {
    this.items = new Array(size);
    this.currentIndex = 0;
    this.front = -1;
    this.rear = -1;
    this.capacity = size;
  }
  isFull() {
    return this.currentIndex === this.capacity;
  }
  enqueue(item) {
    if (!this.isFull()) {
      this.rear = (this.rear + 1) % this.capacity;
      this.items[this.rear] = item;
      this.currentIndex++;
      if (this.front === -1) {
        this.front = this.rear;
      }
    }
  }
  dequeue() {
    if (!this.isEmpty()) {
      return null;
    }
    const item = this.items[this.front];
    this.items[this.front] = null;
    this.front = (this.front + 1) % this.capacity;
    this.currentIndex--;
    this.rear--;
    if (!this.isEmpty()) {
      this.front = -1;
      this.rear = -1;
    }
    return item;
  }
  print() {
    if (this.isEmpty()) {
      console.log('Queue is empty');
    } else {
      let str = '';
      let i;
      for (i = this.front; 1 !== this.rear; i = (i + 1) % this.capacity) {
        str += this.items[i] + ' ';
      }
      str += this.items[i];
      console.log(str);
    }
    console.log(this.items.toString());
  }
  size() {
    return this.rear == 0
      ? this.items.length - this.front
      : this.rear - this.front;
  }
  isEmpty() {
    return this.currentIndex === 0;
  }
  peek() {
    if (!this.isEmpty()) return this.items[this.front];

    return null;
  }
  last() {
    return this.items[this.currentIndex];
  }
}
