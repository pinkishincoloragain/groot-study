import { useEffect, useState } from 'react';
import { NodeData } from 'types/mindNode';
import initNodes from 'utils/initNodes';

const useNodes = () => {
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
    setNodes(prevNodes => prevNodes.filter(node => node.id !== id));
  };

  useEffect(() => {
    setNodes(initNodes());
  }, []);

  return { nodes, addNewNode, deleteNode };
};

export default useNodes;
