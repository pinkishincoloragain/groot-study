import React from 'react';
import { NodeData } from 'types/mindNode';
import * as s from './style';

const Node = ({ id, structure, data }: NodeData) => {
  console.log(id, structure, data);

  const [selected, setSelected] = React.useState(false);

  const handleClick = () => {
    setSelected(!selected);
  };

  return (
    <s.Wrapper selected={selected} onClick={handleClick}>
      <s.NodeValue>id: {id}</s.NodeValue>
      <s.NodeContent>isVisible: {structure.isVisible.toString()}</s.NodeContent>
      <s.NodeContent>children: {structure.children}</s.NodeContent>
      <s.NodeContent>img: {data.img}</s.NodeContent>
      <s.NodeContent>links: {data.links}</s.NodeContent>
      <s.NodeContent>value: {data.value}</s.NodeContent>
    </s.Wrapper>
  );
};

export default Node;
