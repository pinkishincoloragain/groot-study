class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.id = null;
  }
}

class MultiLevelLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.id = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
      this.id += 1;
      this.head.id = this.id;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
      this.id += 1;
      this.tail.id = this.id;
    }
  }

  find(data) {
    if (!this.head) {
      return null;
    }
    let found = null;
    let current = this.head;
    while (current) {
      if (current.data === data) {
        found = current;
      }
      current = current.next;
    }
    return found;
  }

  traverse(callback) {
    if (!this.head) {
      return null;
    }
    let current = this.head;
    while (current) {
      callback(current);
      current = current.next;
    }
  }
}

export default MultiLevelLinkedList;
