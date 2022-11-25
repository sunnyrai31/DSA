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
      console.log(prev);
      node.next = prev.next;
      prev.next = node;
      this.size++;
    }
  }
  /**
   *
   * @param {position} position
   * @returns deleteItem
   */
  delete(position) {
    let prev = this.head;
    let deleteItem;
    if (position < 0 || position >= this.size) {
      console.log("Invalid position");
      return -1;
    }
    if (position === 0) {
      this.head = this.head.next;
      deleteItem = prev.data;
      prev = null;
    } else {
      for (let index = 0; index < position - 1; index++) {
        prev = prev.next;
      }
      // console.log(prev);
      let deleteAble = prev.next;
      const nextNode = deleteAble.next;
      prev.next = nextNode;
      deleteItem = deleteAble.data;
      deleteAble = null;
    }
    return deleteItem;
    this.size--;
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
list.insertAt(71, 2);
list.insertAt(12, 1);
list.insertAt(100, 8);

list.printList();
console.log("size", list.size);

/*delete calls */
// current linked list : 4 12 0 71 1 5 6 2 3
// list.delete(0); //12 0 71 1 5 6 2 3
// list.delete(1); //12 71 1 5 6 2 3
console.log("deleted item", list.delete(0)); //12 71 1 5 6 2
list.printList();
console.log("size", list.size);
