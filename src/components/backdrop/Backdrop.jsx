import { motion } from 'framer-motion';

const Backdrop = ({ children, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6 } }}
      onClick={onClick}
      className='absolute top-0 left-0 h-full w-full bg-[#000000b3] flex items-center justify-center'
    >
      {children}
    </motion.div>
  );
};

export default Backdrop;
