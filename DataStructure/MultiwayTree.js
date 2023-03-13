class MultiwayTreeNode {
  constructor(data, children = []) {
    this.data = data;
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
  add(data, parentData) {
    const newNode = new MultiwayTreeNode(data);
    if (!this.root) {
      this.root = newNode;
    } else {
      this.traverseBFS(node => {
        if (node.data === parentData) {
          node.addChild(newNode);
        }
      });
    }
  }

  // Remove a node from the tree
  remove(data) {
    if (!this.root) {
      return;
    }
    if (this.root.data === data) {
      this.root = null;
      return;
    }
    this.traverseBFS(node => {
      node.children = node.children.filter(c => c.data !== data);
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

  find(data) {
    if (!this.root) {
      return null;
    }
    let found = null;
    this.traverseBFS(node => {
      if (node.data === data) {
        found = node;
      }
    });
    return found;
  }
}

export default MultiwayTree;
