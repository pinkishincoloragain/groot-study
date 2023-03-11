import MultiLinkedList from "./MultiLikedList.js";
import MultiwayTree from "./MultiwayTree.js";

const mll = new MultiLinkedList();

mll.add(1, null); // add the root node
mll.add(2, 1); // add a child node to the root
mll.add(3, 1); // add another child node to the root
mll.add(4, 2); // add a child node to the first child of the root
mll.add(5, 3); // add a child node to the second child of the root

console.log(mll);

const mwt = new MultiwayTree();

mwt.add(1, null); // add the root node
mwt.add(2, 1); // add a child node to the root
mwt.add(3, 1); // add another child node to the root
mwt.add(4, 2); // add a child node to the first child of the root
mwt.add(5, 3); // add a child node to the second child of the root

mwt.find(4); // find the node with value 4

mwt.traverseDFS(node => console.log(node.value)); // Output: 1 2 4 3 5
mwt.remove(3); // remove the second child of the root

mwt.traverseDFS(node => console.log(node.value)); // Output: 1 2 4 5
