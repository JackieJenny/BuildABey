import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

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
    <div className="h-dvh w-dvw flex justify-center items-center bg-gray-900 text-white bg-[url('/images/Background.png')] bg-cover bg-center overflow-hidden">
      <div
        className={`backdrop-blur-md bg-glassgrey/50 w-3/4 h-3/4 rounded-xl p-8 border border-gray-600 shadow-lg shadow-inner flex flex-col justify-center items-center transform transition-all duration-700 ease-in-out ${
          moveUp ? '-translate-y-[120%] opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        {/* Title fades in on load */}
        <h1
          className={`text-4xl font-bold mb-20 transition-opacity duration-4000 ${
            fadeIn ? 'opacity-100' : 'opacity-0'
          }`}
        >
          Welcome to Beyblade Builder
        </h1>

        {/* Button stays visible and static */}
        <button
          onClick={handleNext}
          className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg text-white font-semibold"
        >
          Start Building
        </button>
      </div>
    </div>
  )
}
