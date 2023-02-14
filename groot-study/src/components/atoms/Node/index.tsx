import React from 'react';
import { NodeData } from 'types/mindNode';
import * as s from './style';

const Node = ({ id, structure, data }: NodeData) => {
  console.log(id, structure, data);

  return (
    <div>
      <s.NodeWrapper>{id}</s.NodeWrapper>
    </div>
  );
};

export default Node;
