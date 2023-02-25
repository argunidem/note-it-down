import { IoAddOutline } from 'react-icons/io5';
import { BsThreeDotsVertical } from 'react-icons/bs';

const Note = ({ note, id, onDelete }) => {
  return (
    <div className='w-56 h-52 rounded-md bg-bluish-gray-200 text-slate-300 xs:w-72'>
      <h4 className='font-bold text-center p-2 border-b border-slate-200'>
        {note.title}
      </h4>
      <p className='px-4 py-2'>{note.note}</p>
      {onDelete && <IoAddOutline onClick={() => onDelete(id, note.title)} />}
    </div>
  );
};
export default Note;
