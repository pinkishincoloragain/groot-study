import React, { KeyboardEvent } from 'react';
import Node from 'components/molecules/Node';
// import { withUtil } from 'components/molecules/WithUtil';
import useNodes from 'hooks/useNodes';
import * as s from './style';

const DrawingPage = () => {
  const { nodes, addNewNode } = useNodes();
  const [pressedKey, setPressedKey] = React.useState<string>('');
  const [keyInfo, setKeyInfo] = React.useState<KeyboardEvent | null>(null);
  const [selectedNode, setSelectedNode] = React.useState<number>(0);
  console.log(keyInfo);

  const handleKeyDown = (e: KeyboardEvent) => {
    setPressedKey(e.key);
    displayKeyInfo(e);
    e.stopPropagation();
  };

  const handleKeyUp = (e: KeyboardEvent) => {
    setPressedKey('');
    e.preventDefault();
  };

  const displayKeyInfo = (e: KeyboardEvent) => {
    if (e.key === 'Tab') {
      addNewNode(selectedNode);
    }

    if ((e.ctrlKey && e.key === 'z') || (e.metaKey && e.key === 'z')) {
      alert('ctrl + z');
    }
    console.log(e);
    setKeyInfo(e);
  };

  // const NodeWithUtil = withUtil(Node);

  return (
    <s.DrawingPageWrapper tabIndex={0} onKeyDown={handleKeyDown} onKeyUp={handleKeyUp}>
      <h1>This is Drawing Page</h1>
      <h2>Pressed key: {pressedKey}</h2>
      <h2>Selected Node: {selectedNode}</h2>
      <s.DrawingPaper>
        {nodes.map(node => (
          <Node
            selected={selectedNode === node.id}
            setSelectedNode={setSelectedNode}
            key={node.id}
            id={node.id}
            structure={node.structure}
            data={node.data}
          />
        ))}
      </s.DrawingPaper>
    </s.DrawingPageWrapper>
  );
};

export default DrawingPage;
