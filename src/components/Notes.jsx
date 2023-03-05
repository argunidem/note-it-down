import { Fragment, useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Slide, toast } from 'react-toastify';
import Note from './Note';
import Form from './Form';
import Spinner from './Spinner';
import { IoAddOutline } from 'react-icons/io5';

const Notes = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const auth = getAuth();

  const fetchNotes = async () => {
    if (auth.currentUser?.uid) {
      try {
        const notesRef = collection(db, 'notes');

        const q = query(
          notesRef,
          where('userRef', '==', auth.currentUser.uid),
          orderBy('timestamp', 'desc')
        );

        const querySnap = await getDocs(q);

        let notes = [];

        querySnap.forEach((doc) => {
          return notes.push({
            id: doc.id,
            data: doc.data(),
          });
        });

        setNotes(notes);
        setLoading(false);
      } catch (error) {
        toast.error('Could not fetch notes', {
          theme: 'colored',
          transition: Slide,
        });
      }
    }
  };
  useEffect(() => {
    fetchNotes();
  }, [auth.currentUser?.uid]);

  return (
    <Fragment>
      <div
        className={`flex items-center w-full ${
          showForm && 'justify-center'
        } h-40 bg-blue-500`}
      >
        {!showForm ? (
          <button
            className='pl-2 pr-3 bg-slate-200 text-bluish-gray-200 rounded-md border-2 border-bluish-gray-500 transition duration-200 hover:bg-bluish-gray-500 hover:text-white'
            onClick={() => setShowForm(true)}
          >
            <IoAddOutline className='inline' size='40px'></IoAddOutline>
            <span className='font-bold text-lg align-middle'>New Note</span>
          </button>
        ) : (
          <Form setShowForm={setShowForm} fetchNotes={fetchNotes} />
        )}
      </div>
      {loading ? (
        <Spinner />
      ) : notes && notes.length > 0 ? (
        <ul className='grid gap-3 justify-items-center sm:grid-cols-2 xl:grid-cols-3 mt-6 pb-24'>
          {notes.map((note, index) => (
            <Note note={note.data} id={note.id} key={note.id} />
          ))}
        </ul>
      ) : (
        <p className='-mt-10 mx-3 font-bold text-lg xs:text-xl xs:mx-0 text-bluish-gray-100'>
          No notes to show at the moment. Create a new one!
        </p>
      )}
    </Fragment>
  );
};
export default Notes;
