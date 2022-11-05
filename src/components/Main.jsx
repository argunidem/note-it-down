import React, { useContext } from 'react';
import Add from './Add';
import Notes from './Notes';
import { TextAreaProvider } from '../context/TextAreaContext';

export const Main = () => {
  return (
    <div className='container'>
      <TextAreaProvider>
        <Add />
        <Notes />
      </TextAreaProvider>
    </div>
  );
};

export default Main;
