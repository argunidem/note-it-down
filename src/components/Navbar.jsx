import { Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import { AiFillHome } from 'react-icons/ai';
import { BsFillPersonFill } from 'react-icons/bs';

const Navbar = ({ loggedIn, status }) => {
  const navigate = useNavigate();

  return (
    <header className='fixed top-0 left-0 right-0 z-50 h-24 flex justify-center bg-bluish-gray-200 text-slate-300'>
      <div className='w-full xs:w-5/6 px-3 xs:px-5 sm:w-4/5 max-w-7xl flex justify-between items-center'>
        <h1
          onClick={() => navigate('/')}
          className='font-extrabold text-xl cursor-pointer xs:text-2xl lg:text-3xl'
        >
          Note It Down
        </h1>
        <nav className='mt-1'>
          <ul className='flex items-center space-x-2 xs:space-x-4 sm:space-x-6 font-semibold text-sm xs:text-base'>
            {status ? (
              <span></span>
            ) : loggedIn ? (
              <Fragment>
                <li
                  onClick={() => navigate('/')}
                  className='cursor-pointer transition duration-200 hover:text-slate-400'
                >
                  <AiFillHome className='hidden mb-1 sm:inline' />
                  <span> Home</span>
                </li>
                <li
                  onClick={() => navigate('/profile')}
                  className='border border-slate-600 rounded-md px-2 py-1 cursor-pointer transition duration-200 hover:bg-slate-800 active:translate-y-0.5 sm:px-3'
                >
                  <BsFillPersonFill className='hidden mb-1 sm:inline' />
                  <span> Profile</span>
                </li>
              </Fragment>
            ) : (
              <Fragment>
                <li
                  onClick={() => navigate('/sign-in')}
                  className='cursor-pointer transition duration-200 hover:text-slate-400'
                >
                  Log In
                </li>
                <li
                  onClick={() => navigate('/sign-up')}
                  className='border border-slate-600 rounded-md px-2 py-1 cursor-pointer transition duration-200 hover:bg-slate-800 active:translate-y-0.5 sm:px-3'
                >
                  Sign Up
                </li>
              </Fragment>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
