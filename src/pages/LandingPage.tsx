import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useState } from 'react';

export default function LandingPage() {
  const navigate = useNavigate();
  const [isExiting, setIsExiting] = useState(false);

  const handleNavigate = () => {
    setIsExiting(true);

    // Wait for both elements to fade out before navigating
    setTimeout(() => {
      navigate('/create');
    }, 1200); // match exit timing
  };

  return (
    <div
  className="w-screen h-screen"
  style={{ marginTop: "40%" }}
>
      {/* Heading */}
      <motion.h1
        className="text-center font-bold"
        style={{
          fontSize: 'clamp(3rem, 12vw, 8rem)',
          background: 'linear-gradient(45deg, #42037eff, #ff0019ff)',
          backgroundSize: '300% 300%',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
        }}
        initial={{ opacity: 0, x: 200 }}
        animate={
          isExiting
            ? { opacity: 0, x: -200 } // fade out first
            : { opacity: 1, x: 0 } // fade in first
        }
        transition={{
          duration: 1,
          delay: isExiting ? 0 : 0.2, // delay on enter only
        }}
      >
        BUILD A BEY
      </motion.h1>

      {/* Button */}
      <motion.button
  onClick={handleNavigate}
  className="mt-8 bg-blue-600 px-6 py-3 rounded-xl text-xl hover:bg-blue-700 transition text-white"
  initial={{ opacity: 0, x: 200 }}
  animate={
    isExiting
      ? { opacity: 0, x: -200 } // fade out after heading
      : { opacity: 1, x: 0 } // fade in after heading
  }
  transition={{
    duration: 1,
    delay: isExiting ? 0.4 : 0.8, // exit delay 0.4s, enter delay 0.8s
  }}
     // <-- Add this for tap (press) animation
>
  Create Beyblade
</motion.button>
    </div>
  );
}
