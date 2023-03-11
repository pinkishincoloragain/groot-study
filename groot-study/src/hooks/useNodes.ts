import { useEffect, useState } from 'react';
import { NodeData } from 'types/mindNode';
import initNodes from 'utils/initNodes';

const useNodes = () => {
  useEffect(() => {
    setNodes(initNodes());
  }, []);

  const [nodes, setNodes] = useState<NodeData[]>([]);

  const generateNewNode = (parentId: number) => ({
    id: nodes.length + 1,
    structure: {
      parentNodeId: parentId,
      isVisible: true,
      children: [],
    },
    data: {
      title: null,
      value: null,
      img: null,
      links: null,
    },
  });

  const addNewNode = (parentId: number) => {
    const newNode = generateNewNode(parentId);
    const resNodes = [...nodes, newNode];

    resNodes.find(node => node.id === parentId)?.structure.children.push(newNode.id);
    setNodes(resNodes);
  };

  const deleteNode = (id: number) => {
    // const resNodes = [...nodes];
    // const nodeToDelete = resNodes.find(node => node.id === id);
    // const parentNode = resNodes.find(node => node.id === nodeToDelete?.structure.parentNodeId);

    //bfs

    setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
  };

  return { nodes, addNewNode, deleteNode };
};

export default useNodes;
