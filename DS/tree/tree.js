class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
class Tree {
  constructor() {
    this.root = null;
  }
  insert(data) {
    const treeNode = new Node(data);
    if (!root) this.root = treeNode;
    else {
      //   if (data < this.root.left) this.insert(data);
      //   if (data > this.root.right) this.insert(data);
    }
  }
  printTree() {
    console.log(this.root);
  }
}
const tree = new Tree();
tree.insert(5);
tree.printTree();
