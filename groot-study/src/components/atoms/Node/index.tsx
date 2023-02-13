import React from 'react';
import useNodes from 'hooks/useNodes';
import { NodeData } from 'types/node';
import * as s from './style';

const Node = ({ structure, data }: NodeData) => {
  console.log(structure, data);

  return (
    <div>
      <s.NodeWrapper>{data.id}</s.NodeWrapper>
    </div>
  );
};

export default Node;
