import MultiLevelLinkedList from "./MultiLevelLinkedList.js";
import MultiwayTree from "./MultiwayTree.js";

function testMLL() {
  const mll = new MultiLevelLinkedList();

  mll.add(1, null); // add the root node
  mll.add(2, 1); // add a child node to the root
  mll.add(3, 1); // add another child node to the root
  mll.add(4, 2); // add a child node to the first child of the root
  mll.add(5, 3); // add a child node to the second child of the root

  // Root: 1
  // 1st child: 2 - Child: 4
  // 2nd child: 3 - Child: 5

  mll.traverse(node => console.log(node.data));

  console.log(mll);
}

function testMWT() {
  const mwt = new MultiwayTree();

  mwt.add("1", null); // add the root node
  mwt.add("2", "0"); // add a child node to the root
  mwt.add("3", "0"); // add another child node to the root
  mwt.add("4", "0-0"); // add a child node to the first child of the root
  mwt.add("5", "0-1"); // add a child node to the second child of the root

  mwt.traverseBFS(printFormat);
}

const printFormat = node => {
  console.log(
    `NODE_ID: ${node.id}\nDATA: ${node.data}\nChildren: ${node.children.map(c => c.id)}\n`
  );
};

const measureTIme = (func, ...args) => {
  const start = performance.now();
  func(...args);
  const end = performance.now();
  console.log(`Time: ${end - start} ms`);
};

console.log("-----------MultiWay Tree-----------");

measureTIme(testMWT);
// testMWT();
