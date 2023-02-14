import { useState } from 'react';
import { NodeData } from 'types/mindNode';

const useNodes = () => {
  const [nodes, setNodes] = useState<NodeData[]>([]);

  if (nodes.length === 0) {
    // setNodes(initNodes());
  }

  return { nodes, setNodes };
};

export default useNodes;
