import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { ToggleProvider } from './context/ToggleContext';
import { NoteProvider } from './context/NoteContext';
const App = () => {
  return (
    <ToggleProvider>
      <NoteProvider>
        <Navbar />
        <Main />
      </NoteProvider>
    </ToggleProvider>
  );
};

export default App;
