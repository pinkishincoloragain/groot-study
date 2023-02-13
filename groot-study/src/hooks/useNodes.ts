import { useState } from 'react';
import sampleData from '../assets/sampledata.json';

const useNodes = () => {
  const [nodes, setNodes] = useState(sampleData.data.nodes);
  const [structureNodes, setStructureNodes] = useState(sampleData.data.nodes);

  return { nodes, setNodes };
};

export default useNodes;
