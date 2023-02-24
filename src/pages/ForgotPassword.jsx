import { useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { Slide, toast } from 'react-toastify';
import { FaArrowRight } from 'react-icons/fa';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const auth = getAuth();
      await sendPasswordResetEmail(auth, email);
      setEmail('');
      toast.success('Email was sent', {
        transition: Slide,
      });
    } catch (error) {
      toast.error('Could not send reset email', {
        theme: 'colored',
        transition: Slide,
      });
    }
  };

  return (
    <div className=''>
      <header>
        <p>Forgot Password</p>
      </header>

      <main>
        <form onSubmit={onSubmit}>
          <input
            type='email'
            id='email'
            placeholder='Email'
            value={email}
            onChange={onChange}
          />
          <Link to='/sign-in'>Sign In</Link>
          <div>
            <div className='font-bold text-xl text-bluish-gray-100'>
              Send Reset Link
            </div>
            <button>
              <FaArrowRight className='p-2 rounded-md text-4xl text-white bg-bluish-gray-100 transition duration-200 hover:bg-blue-800' />
            </button>
          </div>
        </form>
      </main>
    </div>
  );
};
export default ForgotPassword;
