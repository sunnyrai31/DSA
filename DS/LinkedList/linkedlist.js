class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  /**
   * method is use to create a list and append the item at the end.
   * @param {item} data
   * @returns
   */
  insert(data) {
    const node = new Node(data);
    if (this.size === 0 && data) {
      this.head = node;
      this.size++;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = node;
      this.size++;
    }
  }

  insertAt(data, position) {
    const node = new Node(data);
    let prevNode;
    if (position < 0 || position > this.size) {
      console.log("Invalid position");
      return -1;
    }
    if (position == 0) {
      node.next = this.head;
      this.head = node;
      this.size++;
    } else {
      let prev = this.head;
      for (let index = 0; index < position - 1; index++) {
        prev = prev.next;
      }
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }

  /**
   * method is used to print the list
   */
  printList() {
    if (this.size === 0) {
      console.log("its empty");
    } else {
      let current = this.head;
      while (current) {
        console.log(current.data);
        current = current.next;
      }
    }
  }

  //end of the class
}

const list = new LinkedList();

list.insert(4);
list.insert(1);
list.insert(5);
list.insert(6);
list.insert(2);
list.insert(3);
list.insertAt(0, 1);
list.insertAt(71, 2);
list.insertAt(12, 1);
list.insertAt(100, 100);

list.printList();
console.log("size", list.size);
