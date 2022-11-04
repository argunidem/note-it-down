import React, { useState } from 'react';
import CreateNote from './CreateNote';
import { IoAddOutline } from 'react-icons/io5';

const Add = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div className='add'>
      {!showForm && (
        <button onClick={() => setShowForm((prev) => !prev)}>
          <IoAddOutline size='80px'></IoAddOutline>
          Create A New Note
        </button>
      )}
      <CreateNote showForm={showForm} setShowForm={setShowForm} />
    </div>
  );
};

export default Add;
