import React from 'react';
import Home from './pages/home';
import './styles/global.module.scss';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: 'white';
`

function App() {
  return (
    <Container>
      <Home />
    </Container>
  );
}

export default App;
