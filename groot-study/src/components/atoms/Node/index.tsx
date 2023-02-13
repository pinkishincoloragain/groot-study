import React from 'react';
import useNodes from 'hooks/useNodes';
import * as s from './style';
import { structure, data } from '../../../types/node';

interface NodeProps {
  structure: structure;
  data: data;
}

const Node = ({ structure, data }: NodeProps) => {
  const { nodes, setNodes } = useNodes();

  // const { id } = node;

  return <div>{/* <s.NodeWrapper>{data.id}</s.NodeWrapper> */}</div>;
};

export default Node;
