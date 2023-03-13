import MultiLinkedList from "./MultiLikedList.js";
import MultiwayTree from "./MultiwayTree.js";

function testMLL() {
  const mll = new MultiLinkedList();

  mll.add(1, null); // add the root node
  mll.add(2, 1); // add a child node to the root
  mll.add(3, 1); // add another child node to the root
  mll.add(4, 2); // add a child node to the first child of the root
  mll.add(5, 3); // add a child node to the second child of the root

  // Root: 1
  // 1st child: 2 - Child: 4
  // 2nd child: 3 - Child: 5

  mll.traverseDFS(node => console.log(node.value));

  console.log(mll);
}

function testMWT() {
  const mwt = new MultiwayTree();

  mwt.add(1, null); // add the root node
  mwt.add(2, 1); // add a child node to the root
  mwt.add(3, 1); // add another child node to the root
  mwt.add(4, 2); // add a child node to the first child of the root
  mwt.add(5, 3); // add a child node to the second child of the root

  // Root: 1
  // 1st child: 2 - Child: 4
  // 2nd child: 3 - Child: 5

  mwt.find(4); // find the node with value 4

  mwt.traverseDFS(node => console.log(node.value));
  mwt.remove(3);

  mwt.traverseDFS(node => console.log(node.value));

  console.log(mwt);
}

console.log("-------Multi-level Linked List-------");
testMLL();
console.log("-----------MultiWay Tree-----------");
testMWT();
