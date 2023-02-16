import React from 'react';
import styled from 'styled-components';

interface Wrapper extends React.HTMLAttributes<HTMLDivElement> {
  selected: boolean;
}

export const Wrapper = styled.div<Wrapper>`
  background-color: ${(props) => (props.selected ? 'yellow' : 'white')};
`;

export const NodeWrapper = styled.div<{ selected: boolean }>`
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    minWidth: '120px',
    padding: '10px',
    border: '1px solid black',
    borderRadius: '5px',
    margin: '10px',
    backgroundColor: ${(props) => (props.selected ? 'yellow' : 'white')},

    '&:hover': {
      backgroundColor: 'red',
    },

    '&:active': {
      backgroundColor: 'blue',
    },

    '&:focus': {
      backgroundColor: 'green',
    },
  
`;

export const NodeContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
});

export const NodeValue = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
