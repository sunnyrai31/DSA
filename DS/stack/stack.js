/** Stack - > first come/in last serve/out (FILO).
 * *******Basic Operation ********
 * push -> to the top
 * pop -> remove from the top
 * isempty - check whether its empty or not
 * size -> size of list / stack
 * peek -> return the top item of the Stack
 * * */
export class Stack {
  constructor() {
    this.item = [];
  }
  push(item) {
    this.item.push(item);
  }
  pop() {
    this.item.pop();
  }
  isEmpty() {
    return this.item.length === 0;
  }
  peek() {
    return this.item[this.item.length - 1];
  }
  print() {
    console.log(this.item.toString());
  }
}
