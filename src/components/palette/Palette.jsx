import { motion } from 'framer-motion';
import { IoIosArrowDown } from 'react-icons/io';

const Palette = ({ showPalette, setShowPalette, setTheme }) => {
  return (
    <div
      className={`overflow-hidden absolute right-0 bottom-0 left-0 bg-bluish-gray-100 rounded-b-md transition-all duration-700 ${
        showPalette ? 'h-[70px]' : 'h-0'
      }`}
    >
      <div className='relative h-full'>
        <div className='absolute left-1/2 -translate-x-1/2'>
          <IoIosArrowDown
            className='w-8 bg-bluish-gray-200 text-slate-300 rounded-sm text-xl hover:bg-slate-300 hover:text-bluish-gray-200 hover:cursor-pointer'
            onClick={() => setShowPalette(false)}
          />
        </div>
        <div className='flex items-center justify-evenly h-full pt-5'>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-white hover:cursor-pointer'
            onClick={() => setTheme('bg-white text-slate-700')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-yellow-400 hover:cursor-pointer'
            onClick={() => setTheme('bg-yellow-400 text-slate-700')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-teal-500 hover:cursor-pointer'
            onClick={() => setTheme('bg-teal-500')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-blue-400 hover:cursor-pointer'
            onClick={() => setTheme('bg-blue-400')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-indigo-400 hover:cursor-pointer'
            onClick={() => setTheme('bg-indigo-400')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-pink-400 hover:cursor-pointer'
            onClick={() => setTheme('bg-pink-400 text-white')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-red-900 hover:cursor-pointer'
            onClick={() => setTheme('bg-red-900')}
          ></motion.div>
          <motion.div
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 1 }}
            className='w-5 h-5 rounded-full bg-bluish-gray-200 hover:cursor-pointer'
            onClick={() => setTheme('bg-bluish-gray-200')}
          ></motion.div>
        </div>
      </div>
    </div>
  );
};
export default Palette;
