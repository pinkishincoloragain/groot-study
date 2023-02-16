import React from 'react';
import Node from 'components/molecules/Node';
import useNodes from 'hooks/useNodes';
import * as s from './style';

const DrawingPage = () => {
  const { nodes } = useNodes();
  console.log(nodes);

  return (
    <s.DrawingPageWrapper>
      <h1>This is Drawing Page</h1>
      <s.DrawingPaper>
        {nodes.map((node) => (
          <Node key={node.id} id={node.id} structure={node.structure} data={node.data} />
        ))}
      </s.DrawingPaper>
    </s.DrawingPageWrapper>
  );
};

export default DrawingPage;
