class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class MultiLinkedList {
  constructor() {
    this.heads = [];
    this.size = 0;
  }

  // Insert an element at the end of the list
  add(data, listIndex = 0) {
    const newNode = new Node(data);
    if (!this.heads[listIndex]) {
      this.heads[listIndex] = newNode;
    } else {
      let current = this.heads[listIndex];
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.size++;
  }

  // Remove an element from the list by index
  remove(index, listIndex = 0) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.heads[listIndex];
    if (index === 0) {
      this.heads[listIndex] = current.next;
    } else {
      let previous = null;
      for (let i = 0; i < index; i++) {
        previous = current;
        current = current.next;
      }
      previous.next = current.next;
    }
    this.size--;
    return current.data;
  }

  // Get an element from the list by index
  get(index, listIndex = 0) {
    if (index < 0 || index >= this.size) {
      return null;
    }
    let current = this.heads[listIndex];
    for (let i = 0; i < index; i++) {
      current = current.next;
    }
    return current.data;
  }

  // Return the size of the list
  getSize() {
    return this.size;
  }

  traverseDFS(callback) {
    
  }
}

export default MultiLinkedList;
