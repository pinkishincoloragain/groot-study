import { useEffect, useState } from 'react';
import { NodeData } from 'types/mindNode';
import initNodes from 'utils/initNodes';

const useNodes = () => {
  const [nodes, setNodes] = useState<NodeData[]>([]);

  useEffect(() => {
    setNodes(initNodes());
  }, []);

  return { nodes, setNodes };
};

export default useNodes;
