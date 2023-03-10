import { NodeData } from 'types/mindNode';
// import sampleData from 'src/assets/sampleData.json';

const sampleData = {
  data: {
    nodes: [
      {
        id: 0,
        structure: {
          parentNodeId: null,
          isVisible: true,
          children: [1],
        },
        data: {
          title: 'defaultNodeTitle0',
          value: 'defaultNode0',
          img: null,
          links: [],
        },
      },
      {
        id: 1,
        structure: {
          parentNodeId: null,
          isVisible: true,
          children: [],
        },
        data: {
          title: 'defaultNodeTitle1',
          value: 'defaultNode1',
          img: null,
          links: [],
        },
      },
    ],
  },
};

const initNodes = () =>
  sampleData.data.nodes.map(({ id, structure, data }: NodeData) => ({
    id,
    structure,
    data,
  }));
export default initNodes;
