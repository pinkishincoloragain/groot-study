import React from 'react';
import * as s from './style';
import { NodeData } from 'types/mindNode';

const Node = ({ structure, data }: NodeData) => {
  console.log(structure, data);

  return (
    <div>
      <s.NodeWrapper>{data.id}</s.NodeWrapper>
    </div>
  );
};

export default Node;
