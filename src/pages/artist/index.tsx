import React from 'react';
import Header from '../../components/Header/index';
import ProfileInfo from './components/profileInfo';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

function Artist() {
  return (
    <Container>
      <Header />
      <div style={{display:'flex'}}> 
        <ProfileInfo />
        <div style={{flex:2, backgroundColor: 'red'}}>a</div>
      </div>
    </Container>
  );
}

export default Artist;