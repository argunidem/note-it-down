import { useState, useEffect } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  addDoc,
  collection,
  serverTimestamp,
  updateDoc,
  doc,
} from 'firebase/firestore';
import { db } from '../firebase.config';
import { Slide, toast } from 'react-toastify';
import Card from './shared/Card';
import Spinner from './Spinner';
import { textAreaHeight } from './utils/scroll';
import { IoAddOutline } from 'react-icons/io5';

const Form = ({
  setShowForm,
  fetchNotes,
  isEditing,
  editData,
  setIsUpdated,
  id,
}) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    title: isEditing ? editData.title : '',
    note: isEditing ? editData.note : '',
    userRef: '',
  });
  const { title, note } = formData;

  const auth = getAuth();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setFormData({ ...formData, userRef: user.uid });
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (loading && !isEditing) {
    return <Spinner />;
  }

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (note.length < 1) {
      toast.error('Your note field is empty!', {
        transition: Slide,
        theme: 'colored',
        hideProgressBar: 'hide',
      });
    } else {
      if (!isEditing) {
        const formDataCopy = {
          ...formData,
          timestamp: serverTimestamp(),
          theme: 'bg-bluish-gray-200 text-slate-300',
        };
        await addDoc(collection(db, 'notes'), formDataCopy);
        fetchNotes();
        toast.success('Your new note has been created.', {
          autoClose: 1500,
          transition: Slide,
          theme: 'colored',
        });
        setShowForm(false);
      } else {
        const docRef = doc(db, 'notes', id);
        await updateDoc(docRef, formData);
        setIsUpdated(true);
      }
    }
    setLoading(false);
  };

  const onChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Card isForm={true} onSubmit={submitHandler}>
      {!isEditing && (
        <IoAddOutline
          size='26px'
          onClick={() => setShowForm(false)}
          className='absolute -top-2 -right-2 rotate-45 rounded-full bg-red-800 text-white hover:bg-red-700 hover:cursor-pointer'
        />
      )}
      <input
        type='text'
        placeholder='Title'
        name='title'
        className='px-3 py-1 bg-bluish-gray-200 text-slate-300 rounded-t-md'
        id='title'
        value={title}
        onChange={onChange}
      />
      <textarea
        name='message'
        placeholder='Your note'
        className='h-52 px-3 py-1 bg-bluish-gray-200 text-slate-300 resize-none'
        id='note'
        value={note}
        onChange={onChange}
        onKeyUp={textAreaHeight}
      />
      <button className='py-1 bg-bluish-gray-100 text-slate-300 font-semibold rounded-b-md hover:bg-teal-600'>
        Save{isEditing && ' Changes'}
      </button>
    </Card>
  );
};
export default Form;
