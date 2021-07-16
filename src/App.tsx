import React from 'react';
import Header from './components/Header/index';
import Artists from './components/Artists/index';
// import Exhibit from './components/Exhibit/index';
import './styles/global.module.scss';

function App() {
  return (
    <div>
      <Header />
      <Artists />
      {/* <Exhibit /> */}
    </div>
  );
}

export default App;
