class MultiwayTreeNode {
  constructor(value, children = []) {
    this.value = value;
    this.children = children;
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChild(child) {
    this.children = this.children.filter(c => c !== child);
  }
}

class MultiwayTree {
  constructor(root = null) {
    this.root = root;
  }

  // Add a node to the tree
  add(value, parentValue) {
    const newNode = new MultiwayTreeNode(value);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.traverseBFS(node => {
        if (node.value === parentValue) {
          node.addChild(newNode);
        }
      });
    }
  }

  // Remove a node from the tree
  remove(value) {
    if (!this.root) {
      return;
    }
    if (this.root.value === value) {
      this.root = null;
      return;
    }
    this.traverseBFS(node => {
      node.children = node.children.filter(c => c.value !== value);
    });
  }

  // Traverse the tree using breadth-first search
  traverseBFS(callback) {
    const queue = [this.root];
    while (queue.length > 0) {
      const node = queue.shift();
      callback(node);
      node.children.forEach(child => {
        queue.push(child);
      });
    }
  }

  // Traverse the tree using depth-first search
  traverseDFS(callback) {
    function traverse(node) {
      callback(node);
      node.children.forEach(child => {
        traverse(child);
      });
    }
    traverse(this.root);
  }

  find(value) {
    if (!this.root) {
      return null;
    }
    let found = null;
    this.traverseBFS(node => {
      if (node.value === value) {
        found = node;
      }
    });
    return found;
  }
}

export default MultiwayTree;

// Usage

const tree = new MultiwayTree();
tree.add(1, null); // add the root node
tree.add(2, 1); // add a child node to the root
tree.add(3, 1); // add another child node to the root
tree.add(4, 2); // add a child node to the first child of the root
tree.add(5, 3); // add a child node to the second child of the root

tree.find(4); // find the node with value 4

tree.traverseDFS(node => console.log(node.value)); // Output: 1 2 4 3 5
tree.remove(3); // remove the second child of the root

tree.traverseDFS(node => console.log(node.value)); // Output: 1 2 4 5
