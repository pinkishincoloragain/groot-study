import styled from 'styled-components';

export const NodeWrapper = styled.div({
  width: '10px',
  height: '20px',
  padding: '10px',
  border: '1px solid black',
  borderRadius: '5px',
  margin: '10px',

  '&:hover': {
    backgroundColor: 'red',
  },

  '&:active': {
    backgroundColor: 'blue',
  },

  '&:focus': {
    backgroundColor: 'green',
  },
});
