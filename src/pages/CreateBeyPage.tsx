import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CreateBeyPage() {
  const navigate = useNavigate();

  return (
    <motion.div
      className="w-screen h-screen flex flex-col items-center justify-center bg-gray-800 text-white"
      initial={{ opacity: 0, x: 500 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -500 }}
      transition={{ duration: 1, delay: 0.2 }}
    >
      <h2 className="text-4xl mb-8">Create Your Beyblade</h2>
      <button
        onClick={() => navigate('/summary')}
        className="bg-red-600 px-6 py-3 rounded-xl text-xl hover:bg-red-700 transition"
      >
        Finish
      </button>
    </motion.div>
  );
}