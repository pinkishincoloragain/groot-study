import { useState } from 'react';
import { NodeData } from 'types/node';
import sampleData from 'assets/sampledata.json';

const useNodes = () => {
  const [nodes, setNodes] = useState<NodeData[]>([]);
  const [structureNodes, setStructureNodes] = useState(sampleData.data.nodes);

  return { nodes, setNodes };
};

export default useNodes;
