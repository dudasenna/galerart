import React from 'react';
import Home from './pages/home';
import Profile from './pages/profile';
import './styles/global.module.scss';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 1rem 0 1rem;
`

function App() {
  return (
    <Container>
      <Home />
      {/* <Profile /> */}
    </Container>
  );
}

export default App;
