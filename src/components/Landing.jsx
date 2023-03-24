import { useNavigate } from 'react-router-dom';
import { BsArrowRightSquareFill } from 'react-icons/bs';

const Landing = () => {
  const navigate = useNavigate();

  return (
    <main className='flex flex-col items-center w-full mx-auto font-semibold sm:font-bold rounded-md bg-bluish-gray-100 text-slate-200'>
      <div className='relative w-full h-80 mb-8 bg-laptop bg-center bg-cover rounded-t-md lg:h-96 xl:h-[450px]'>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#0A1D44C7] rounded-t-md'></div>
        <div className='absolute bottom-7 w-full px-3 text-center text-white text-lg font-inter font-bold [word-spacing:2px] lg:text-2xl lg:font-black'>
          Never forget a detail, no matter where you are
        </div>
      </div>
      <div className='w-full px-3'>
        <h2 className='text-center text-2xl font-bold [word-spacing:-2px] lg:text-3xl lg:font-extrabold'>
          Note It Down
        </h2>
        <p className='text-center font-inter bg-bluish-gray-100 mt-5 mb-8 rounded-t-md lg:text-lg'>
          Effortlessly capture your ideas and thoughts
        </p>
        <ul className='px-3 mb-10'>
          <li className='max-w-xs mx-auto mb-2 md:max-w-sm lg:max-w-md xl:max-w-lg xl:pl-11'>
            <BsArrowRightSquareFill className='inline m-1 mr-2 text-lg text-white bg-bluish-gray-200' />
            <span className='text-sm font-normal align-middle'>
              Take notes whenever and wherever you are, with just a few taps
            </span>
          </li>
          <li className='max-w-xs mx-auto mb-2 md:max-w-sm lg:max-w-md xl:max-w-lg xl:pl-11'>
            <BsArrowRightSquareFill className='inline m-1 mr-2 text-lg' />
            <span className='text-sm font-normal align-middle'>
              Protect your private information with password-protected notes
            </span>
          </li>
          <li className='max-w-xs mx-auto md:max-w-sm lg:max-w-md xl:max-w-lg xl:pl-11'>
            <BsArrowRightSquareFill className='inline m-1 mr-2 text-lg' />
            <span className='text-sm font-normal align-middle'>
              Choose from a variety of backgrounds to make your notes reflect
              your personal style
            </span>
          </li>
        </ul>
      </div>
      <div className='relative w-full h-80 bg-mobile bg-center bg-cover lg:h-96 xl:h-[450px]'>
        <div className='absolute top-0 right-0 bottom-0 left-0 bg-[#0A1D44C7]'></div>
        <div className='absolute bottom-7 w-full px-3 text-center text-white text-lg font-inter font-bold [word-spacing:2px] lg:text-2xl lg:font-black'>
          Take notes on the go with Note It Down
        </div>
      </div>
      <div className='py-4 sm:py-6'>
        <button
          onClick={() => navigate('/sign-up')}
          className='px-4 py-2 font-semibold bg-white text-slate-600 rounded-[3px] duration-300 sm:px-6 sm:text-lg hover:bg-slate-800 hover:text-white'
        >
          Get Started
        </button>
      </div>
    </main>
  );
};
export default Landing;
