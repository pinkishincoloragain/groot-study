import React from 'react';
import { data, structure } from 'types/mindNode';
import * as s from './style';

export interface NodeProps {
  id: number;
  structure: structure;
  data: data;
  selected: boolean;
  setSelectedNode: React.Dispatch<React.SetStateAction<number>>;
}

const Node = ({ id, structure, data, selected, setSelectedNode }: NodeProps) => {
  const handleClick = () => {
    setSelectedNode(id);
  };

  return (
    <s.NodeWrapper selected={selected} onClick={handleClick}>
      <s.NodeValue suppressContentEditableWarning contentEditable>
        id: {id}
      </s.NodeValue>
      <s.NodeContent suppressContentEditableWarning contentEditable>
        isVisible: {structure.isVisible.toString()}
      </s.NodeContent>
      <s.NodeContent suppressContentEditableWarning contentEditable>
        children: {structure.children}
      </s.NodeContent>
      <s.NodeContent suppressContentEditableWarning contentEditable>
        img: {data.img}
      </s.NodeContent>
      <s.NodeContent suppressContentEditableWarning contentEditable>
        links: {data.links}
      </s.NodeContent>
      <s.NodeContent suppressContentEditableWarning contentEditable>
        value: {data.value}
      </s.NodeContent>
    </s.NodeWrapper>
  );
};

export default Node;
