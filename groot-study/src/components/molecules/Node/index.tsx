import React from 'react';
import { data, structure } from 'types/mindNode';
import * as s from './style';

export interface NodeProps {
  id: number;
  structure: structure;
  data: data;
  selected: boolean;
  setSelectedNode: React.Dispatch<React.SetStateAction<string>>;
}

const Node = ({ id, structure, data, selected, setSelectedNode }: NodeProps) => {
  const handleClick = () => {
    setSelectedNode(id.toString());
  };

  return (
    <s.NodeWrapper selected={selected} onClick={handleClick}>
      <s.NodeValue>id: {id}</s.NodeValue>
      <s.NodeContent>isVisible: {structure.isVisible.toString()}</s.NodeContent>
      <s.NodeContent>children: {structure.children}</s.NodeContent>
      <s.NodeContent>img: {data.img}</s.NodeContent>
      <s.NodeContent>links: {data.links}</s.NodeContent>
      <s.NodeContent>value: {data.value}</s.NodeContent>
    </s.NodeWrapper>
  );
};

export default Node;
