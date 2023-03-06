import styled from 'styled-components';

// NodeWrapper with props: selected
export const NodeWrapper = styled.div<{ selected: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border: 2px solid black;
  border-radius: 12px;
  margin: 12px;
  padding: 12px;
  background-color: ${props => (props.selected ? 'lightgray' : 'white')};

  &:hover {
    background-color: lightgray;
  }

  &:focus {
    outline: none;
  }

  &:active {
    background-color: gray;
  }
`;

export const NodeContent = styled.div({
  display: 'flex',
  flexDirection: 'column',
  // justifyContent: 'center',
  // alignItems: 'center',
});

export const NodeButton = styled.button({
  display: 'flex',
  flexDirection: 'column',
});

export const NodeValue = styled.div({
  display: 'flex',
  flexDirection: 'column',
});
