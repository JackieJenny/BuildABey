import { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate()
  const [moveUp, setMoveUp] = useState(false)
  const [fadeIn, setFadeIn] = useState(false)

  useEffect(() => {
    // Trigger fade-in for title when component mounts
    setFadeIn(true)
  }, [])

  const handleNext = () => {
    setMoveUp(true)
    setTimeout(() => navigate('/create'), 500) // matches transition duration
  }

  return (
    <>
      <div 
        className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] 
        overflow-hidden"
      >
        <div
          className={`backdrop-blur-md bg-glassgrey/50 w-3/4 h-3/4 rounded-xl p-8 border border-gray-600 shadow-lg shadow-inner flex flex-col justify-center items-center transform transition-all duration-700 ease-in-out ${
          moveUp ? '-translate-y-[120%] opacity-0' : 'translate-y-0 opacity-100'
          }`}>
          <h1 className={`text-8xl big-shoulders mb-20 transition-opacity duration-4000 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
          >
          BUILD A BEY</h1>
          <div className="text-3xl font-inter">
            Choose parts, Cusomise colours and compare with
          </div>
          <div className="text-3xl font-inter mb-8">popular builds online</div>
          <button
            onClick={handleNext}
            className="bg-blue-700 px-8 py-3 rounded-xl text-xl hover:bg-blue-700 transition"
          >
            Create Beyblade
          </button>
        </div>
      </div>
    </>
  )
}
