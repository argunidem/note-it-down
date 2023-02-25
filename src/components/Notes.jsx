import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { collection, getDocs, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Slide, toast } from 'react-toastify';
import Spinner from './Spinner';
import Note from './Note';

const Notes = () => {
  const [notes, setNotes] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const auth = getAuth();
    const fetchNotes = async () => {
      if (auth?.currentUser?.uid) {
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
          // toast.error('Could not fetch notes', {
          toast.error(error.message, {
            theme: 'colored',
            transition: Slide,
          });
        }
      }
    };

    fetchNotes();
  });

  return loading ? (
    <Spinner />
  ) : notes && notes.length > 0 ? (
    <ul className='flex flex-col items-center justify-center space-y-5 pb-24 sm:flex-row sm:space-y-0 sm:space-x-2'>
      {notes.map((note) => (
        <Note note={note.data} id={note.id} key={note.id} />
      ))}
    </ul>
  ) : (
    <p className='-mt-10 mx-3 font-bold text-lg xs:text-xl xs:mx-0 text-bluish-gray-100'>
      No notes to show at the moment. Create a new one!
    </p>
  );
};
export default Notes;
