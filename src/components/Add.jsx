import React, { useContext } from 'react';
import CreateNote from './CreateNote';
import { IoAddOutline } from 'react-icons/io5';
import ToggleContext from '../context/ToggleContext';

const Add = () => {
  const { showForm, setShowForm } = useContext(ToggleContext);

  return (
    <div className='add'>
      {!showForm && (
        <button onClick={() => setShowForm((prev) => !prev)}>
          <IoAddOutline size='80px'></IoAddOutline>
          Create A New Note
        </button>
      )}
      <CreateNote />
    </div>
  );
};

export default Add;
