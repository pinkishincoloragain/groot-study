import React from 'react';
import useNodes from 'hooks/useNodes';
import * as s from './style';

const DrawingPage = () => {
  const { nodes, setNodes } = useNodes();
  console.log(nodes, setNodes);

  return (
    <s.DrawingPageWrapper>
      <h1>This is Drawing Page</h1>
      <s.DrawingPaper>
        {/* {nodes.map((node) => (
          <Node key={node.data.id} structure={node.structure} data={node.data} />
        ))} */}
      </s.DrawingPaper>
    </s.DrawingPageWrapper>
  );
};

export default DrawingPage;
