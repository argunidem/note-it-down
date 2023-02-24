import { Fragment, useState } from 'react';
import { getAuth, updateProfile } from 'firebase/auth';
import { updateDoc, doc } from 'firebase/firestore';
import { db } from '../firebase.config';
import { useNavigate } from 'react-router-dom';
import { toast, Slide } from 'react-toastify';

const Profile = () => {
  const auth = getAuth();
  const [changeDetails, setChangeDetails] = useState(false);
  const [formData, setFormData] = useState({
    name: auth.currentUser.displayName,
    email: auth.currentUser.email,
  });

  const { name, email } = formData;

  const navigate = useNavigate();

  const onLogout = () => {
    auth.signOut();
    navigate('/');
  };

  const onSubmit = async () => {
    try {
      if (auth.currentUser.displayName !== name) {
        await updateProfile(auth.currentUser, {
          displayName: name,
        });

        const userRef = doc(db, 'users', auth.currentUser.uid);
        await updateDoc(userRef, {
          name,
        });
      }
    } catch (error) {
      toast.error('Could not update profile details', {
        theme: 'colored',
        transition: Slide,
      });
    }
  };

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  return (
    <Fragment>
      <header className='flex justify-between -mt-16 mb-28 px-2'>
        <p className='text-xl sm:text-2xl font-bold sm:font-extrabold text-bluish-gray-500'>
          My Profile
        </p>
        <button
          type='button'
          onClick={onLogout}
          className='font-semibold text-blue-400 transition duration-200 hover:text-blue-500'
        >
          Logout
        </button>
      </header>

      <main className='mx-3'>
        <div className='flex justify-between items-center mb-4'>
          <p className='font-semibold'>Personal Details</p>
          <p
            onClick={() => {
              changeDetails && onSubmit();
              setChangeDetails((prevState) => !prevState);
            }}
            className='w-20 py-1 text-center rounded-md cursor-pointer bg-bluish-gray-100 text-slate-200 transition duration-200 hover:bg-blue-1000'
          >
            {changeDetails ? 'done' : 'change'}
          </p>
        </div>

        <div>
          <form className='flex flex-col w-60 space-y-2'>
            <input
              type='text'
              id='name'
              className={`px-4 py-1 rounded-md ${
                !changeDetails
                  ? 'disabled:bg-white'
                  : 'font-semibold bg-bluish-gray-100 text-white'
              }`}
              disabled={!changeDetails}
              value={name}
              onChange={onChange}
            />
            <input
              type='text'
              id='email'
              className={`px-4 py-1 rounded-md ${
                !changeDetails
                  ? 'disabled:bg-white'
                  : 'font-semibold bg-bluish-gray-100 text-white'
              }`}
              disabled={!changeDetails}
              value={email}
              onChange={onChange}
            />
          </form>
        </div>
      </main>
    </Fragment>
  );
};
export default Profile;
