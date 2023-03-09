import { Fragment, useState } from 'react';
import { toast, Slide } from 'react-toastify';
import { Link, useNavigate } from 'react-router-dom';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import OAuth from '../components/OAuth';
import { MdVisibility, MdVisibilityOff } from 'react-icons/md';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';

const SignIn = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const { email, password } = formData;

  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    try {
      const auth = getAuth();

      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      if (userCredential.user) {
        navigate('/');
      }
    } catch (error) {
      toast.error('Bad User Credentials', {
        theme: 'colored',
        transition: Slide,
      });
    }
  };

  return (
    <Fragment>
      <div className='flex flex-col items-center space-y-7 md:space-y-12 px-4 pt-10'>
        <header>
          <p className='text-2xl xs:text-4xl text-center font-bold text-bluish-gray-500'>
            Welcome Back!
          </p>
        </header>

        <main>
          <form onSubmit={onSubmit} className='flex flex-col space-y-5'>
            <div className='relative w-full xs:max-w-max'>
              <FaUserAlt className='absolute left-2 top-3 text-bluish-gray-500' />
              <input
                type='email'
                placeholder='Email'
                id='email'
                value={email}
                onChange={onChange}
                className='w-full xs:w-72 pl-9 py-2 rounded-md placeholder:text-gray-500 placeholder:font-semibold focus:bg-blue-50'
              />
            </div>

            <div className='relative w-full xs:max-w-max'>
              <FaLock className='absolute left-2 top-3 text-bluish-gray-500' />
              <input
                type={showPassword ? 'text' : 'password'}
                placeholder='Password'
                id='password'
                value={password}
                onChange={onChange}
                className='w-full xs:w-72 pl-9 py-2 rounded-md placeholder:text-gray-500 placeholder:font-semibold focus:bg-blue-50'
              />
              {showPassword ? (
                <MdVisibilityOff
                  className='absolute top-3 right-2 text-xl cursor-pointer text-bluish-gray-500 hover:text-slate-500'
                  onClick={() => setShowPassword(false)}
                />
              ) : (
                <MdVisibility
                  className='absolute top-3 right-2 text-xl cursor-pointer text-bluish-gray-500 hover:text-slate-500'
                  onClick={() => setShowPassword(true)}
                />
              )}
            </div>

            <div className='py-8 flex flex-col items-center space-y-3 xs:flex-row-reverse xs:justify-between xs:items-center xs:space-y-0'>
              <button className='bg-bluish-gray-500 text-slate-200 px-3 py-1 font-bold rounded-lg transition duration-200 group hover:bg-bluish-gray-100'>
                Log In
                <FiArrowRight className='inline pl-1 text-xl text-slate-200 bg-bluish-gray-500 transition duration-200 group-hover:bg-bluish-gray-100' />
              </button>
              <Link
                to='/forgot-password'
                className='font-bold text-blue-400 transition duration-200 hover:text-blue-500'
              >
                Forgot Password?
              </Link>
            </div>
          </form>

          <OAuth />

          <p className='mt-8 text-right font-semibold text-slate-600'>
            Don't have an account?
          </p>
          <Link
            to='/sign-up'
            className='block text-right font-bold mb-24 text-blue-400 transition duration-200 hover:text-blue-500'
          >
            Sign up now!
          </Link>
        </main>
      </div>
    </Fragment>
  );
};
export default SignIn;
