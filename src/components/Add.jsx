import React from 'react';
import CreateNote from './CreateNote';
import { AiOutlinePlus } from 'react-icons/ai';

const Add = () => {
  return (
    <aside className='add'>
      {/* <button>
        <AiOutlinePlus />
      </button> */}
      <CreateNote />
    </aside>
  );
};

export default Add;
