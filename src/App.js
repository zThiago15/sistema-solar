import React from 'react';
import Header from './components/Header';
import Missions from './components/Missions';
import SolarSystem from './components/SolarSystem';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <body>
        <Header />
        <main>
          <SolarSystem />
        </main>
        <Missions />
      </body>
    );
  }
}

export default App;

/* 
  Tarefas:
  - Colocar textos do sistema solar no meio da pág! [x]
  - Diminuir a imagem [x]
  -
*/