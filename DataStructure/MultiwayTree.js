class Node {
  constructor(data, children = [], id) {
    this.data = data;
    this.children = children;
    this.id = id;
  }

  addChild(child) {
    this.children.push(child);
  }

  removeChild(childId) {
    this.children = this.children.filter(c => c.id !== childId);
  }
}

class MultiwayTree {
  constructor(root = null) {
    this.root = root;
    // this.map = new Map();
  }

  /**
   *
   * @param {string} nodeData
   * @param {string} parentNodeId
   *
   * @returns {void}
   *
   */
  add(nodeData, parentNodeId) {
    if (parentNodeId === null) {
      this.root = new Node(nodeData, [], "0");
    } else {
      const parentNode = this.findById(parentNodeId);
      const targetIdx = parentNode?.children.length || 0;
      const newNode = new Node(nodeData, [], `${parentNodeId}-${targetIdx}`);
      if (!parentNode) {
        return;
      }
      parentNode.addChild(newNode);
    }
  }

  /**
   *
   * @param {string} nodeId
   * @returns {void}
   */
  remove(nodeId) {
    if (!this.root) {
      return;
    }
    if (this.root.id === nodeId) {
      this.root = null;
      return;
    }
    this.traverseBFS(node => {
      node.children = node.children.filter(c => c.id !== nodeId);
    });
  }

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

  traverseDFS(callback) {
    function traverse(node) {
      callback(node);
      node.children.forEach(child => {
        traverse(child);
      });
    }
    traverse(this.root);
  }

  /**
   *
   * @param {string} nodeId
   *
   * @returns {Node | null}
   */
  findById(nodeId) {
    if (!this.root) {
      return null;
    }
    let found = null;
    this.traverseBFS(node => {
      if (node.id === nodeId) {
        found = node;
      }
    });
    return found;
  }
}

export default MultiwayTree;
