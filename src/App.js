import React from 'react';
import Navbar from './components/Navbar';
import Main from './components/Main';
import { NoteProvider } from './context/NoteContext';

const App = () => {
  return (
    <NoteProvider>
      <Navbar />
      <Main />
    </NoteProvider>
  );
};

export default App;
