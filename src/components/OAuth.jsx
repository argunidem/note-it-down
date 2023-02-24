import { useLocation, useNavigate } from 'react-router-dom';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { doc, setDoc, getDoc, serverTimestamp } from 'firebase/firestore';
import { db } from '../firebase.config';
import { Slide, toast } from 'react-toastify';
import googleIcon from '../assets/googleIcon.svg';

const OAuth = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const onGoogleClick = async () => {
    try {
      const auth = getAuth();
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      //! Check for user
      const docRef = doc(db, 'users', user.uid);
      const docSnap = await getDoc(docRef);

      //! If user doesn't exist create user
      if (!docSnap.exists()) {
        await setDoc(doc(db, 'users', user.uid), {
          name: user.displayName,
          email: user.email,
          timestamp: serverTimestamp(),
        });
      }

      navigate('/');
    } catch (error) {
      toast.error('Could not authorize with Google', {
        transition: Slide,
      });
    }
  };

  return (
    <div className='w-2/3 mx-auto'>
      <button
        className='w-full py-1.5 font-bold text-sm text-gray-500 rounded-sm bg-white transition duration-200 hover:bg-slate-50'
        onClick={onGoogleClick}
      >
        <img src={googleIcon} alt='google' className='inline w-5 mr-2' />
        <span className=' align-middle'>
          Sign {location.pathname === '/sign-up' ? 'up' : 'in'} with Google
        </span>
      </button>
    </div>
  );
};
export default OAuth;
