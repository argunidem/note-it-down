import { useNavigate } from 'react-router-dom';
import Notes from '../components/Notes';
import Spinner from '../components/Spinner';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const Home = ({ loggedIn, checkingStatus }) => {
  const navigate = useNavigate();

  if (checkingStatus) {
    return <Spinner />;
  }

  return loggedIn ? (
    <main className='-mt-12 flex flex-col space-y-20'>
      <Notes />
    </main>
  ) : (
    <main className='-mt-12 xs:mt-6 flex flex-col items-center space-y-11 sm:space-y-20 p-10 w-full mx-auto font-semibold sm:font-bold rounded-md bg-bluish-gray-200 text-slate-200'>
      <h2 className='text-2xl sm:text-3xl text-center'>
        Note it Down <br /> Effortlessly capture your ideas and thoughts
      </h2>
      <div className='w-full sm:w-5/6 lg:w-1/2 mx-auto'>
        <p className='texct-xl sm:text-2xl'>
          <BsArrowRightSquareFill className='inline mb-1 p-1' /> Take control of
          your notes
        </p>
        <p className='texct-xl sm:text-2xl'>
          <BsArrowRightSquareFill className='inline mb-1 p-1' /> Take your notes
          with you wherever you go!
        </p>
        <p className='texct-xl sm:text-2xl'>
          <BsArrowRightSquareFill className='inline mb-1 p-1' /> Never forget an
          important detail again
        </p>
      </div>
      <button
        onClick={() => navigate('/sign-up')}
        className='bg-white text-slate-800 p-3 text-center font-bold text-lg rounded-md transition duration-300 hover:bg-slate-800 hover:text-white'
      >
        Get Started
      </button>
    </main>
  );
};
export default Home;
