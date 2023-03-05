import { IoAddOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Note = ({ note, id, onDelete }) => {
  return (
    <div className='w-72 h-64 sm:w-60 sm:h-52 md:w-72 md:h-56 lg:w-80 lg:h-64 2xl:w-96 rounded-md bg-bluish-gray-200 text-slate-300'>
      <h4 className='font-bold text-center p-2 border-b border-slate-200'>
        {note.title}
      </h4>
      <p className='px-4 py-2'>{note.note}</p>
      {onDelete && <IoAddOutline onClick={() => onDelete(id, note.title)} />}
    </div>
  );
};
export default Note;
