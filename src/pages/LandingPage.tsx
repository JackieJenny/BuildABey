import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()

  return (
    <>
      <div 
        className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] 
        bg-cover bg-center"
      >
        <div className="backdrop-blur-md bg-glassgrey/30 w-3/4 h-3/4 rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold mb-8">BUILD A BEY</h1>
          <button
            onClick={() => navigate('/create')}
            className="bg-blue-600 px-6 py-3 rounded-xl text-xl hover:bg-blue-700 transition"
          >
            Create Beyblade, random push
          </button>
        </div>
      </div>
    </>
  )
}