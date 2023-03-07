import styled from 'styled-components';

export const DrawingPageWrapper = styled.div({
  display: 'flex',
  flexDirection: 'column',
  padding: '20px 20px',
  // width: '100%',
  height: '100%',
});

export const DrawingPaper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: '10px',
  padding: '20px 20px',
  height: 'min(100%, 100vh - 100px)',
  backgroundColor: '#E8DED1',
});

export const LogWrapper = styled.div({
  display: 'flex',
  flexWrap: 'wrap',
});

export const Log = styled.div({
  display: 'flex',
  margin: '10px 10px',
});
