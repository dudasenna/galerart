import React, { useState } from 'react';
import { Button, Input, InputGroup, InputRightElement } from '@chakra-ui/react';
import { EditIcon, CheckIcon } from '@chakra-ui/icons';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: 'flex';
  align-items: 'center';
  padding: 1rem;
  justify-content: 'space-between';
`;

const EditContainer = styled.div`
  align-items: 'center';
  padding-top: 1rem;
`

function ProfileInfo() {
  const [editName, setEditName] = useState(false);
  const [name, setName] = useState('Nome');
  const [editingName, setEditingName] = useState('Nome');

  const [editAge, setEditAge] = useState(false);
  const [age, setAge] = useState('22');
  const [editingAge, setEditingAge] = useState('22');

  const [editSex, setEditSex] = useState(false);
  const [sex, setSex] = useState('Masculino');
  const [editingSex, setEditingSex] = useState('Masculino');

    return (
    <Container>
      <h3>Sobre você</h3>
      <EditContainer>
        <Input 
          type="text"
          value={editName? editingName : name} 
          style={{
            border: 'solid 1px',
            padding: '0.2rem 0 0.2rem 0.5rem',
            borderRadius: '1rem',
            outline: 'none',
          }}
          disabled={!editName}
          onChange={(event) => setEditingName(event.target.value)}
        />
        <Button 
          onClick={
            () => {
              if(editName && editingName.length !== 0) setName(editingName)
              setEditName(!editName)
            }
          }
          style={{
            paddingBottom: '0.2rem',
            backgroundColor: 'white',
            border: 'none',
            outline: 'none',
            paddingLeft: '1rem',
          }}
        >
          {editName ? <CheckIcon boxSize='1.3rem' color='#4299E1'/> : <EditIcon boxSize='1.3rem' color='#4299E1'/>}
        </Button>
      </EditContainer>
      <EditContainer>
        <Input 
          type="text"
          value={editAge? editingAge : age} 
          style={{
            border: 'solid 1px',
            padding: '0.2rem 0 0.2rem 0.5rem',
            borderRadius: '1rem',
            outline: 'none',
          }}
          disabled={!editAge}
          onChange={(event) => setEditingAge(event.target.value)}
        />
        <Button 
          onClick={
            () => {
              if(editAge && editingAge.length !== 0)setAge(editingAge)
              setEditAge(!editAge)
            }
          }
          style={{
            paddingBottom: '0.2rem',
            backgroundColor: 'white',
            border: 'none',
            outline: 'none',
            paddingLeft: '1rem',
          }}
        >
          {editAge ? <CheckIcon boxSize='1.3rem' color='#4299E1'/> : <EditIcon boxSize='1.3rem' color='#4299E1'/>}
        </Button>
      </EditContainer>
      <EditContainer>
        <Input 
          type="text"
          value={editSex? editingSex : sex} 
          style={{
            border: 'solid 1px',
            padding: '0.2rem 0 0.2rem 0.5rem',
            borderRadius: '1rem',
            outline: 'none',
          }}
          disabled={!editSex}
          onChange={(event) => setEditingSex(event.target.value)}
        />
        <Button 
          onClick={
            () => {
              if(editSex && editingSex.length !== 0)setSex(editingSex)
              setEditSex(!editSex)
            }
          }
          style={{
            paddingBottom: '0.2rem',
            backgroundColor: 'white',
            border: 'none',
            outline: 'none',
            paddingLeft: '1rem',
          }}
        >
          {editSex ? <CheckIcon boxSize='1.3rem' color='#4299E1'/> : <EditIcon boxSize='1.3rem' color='#4299E1'/>}
        </Button>
      </EditContainer>
    </Container>
  );
}

export default ProfileInfo;
