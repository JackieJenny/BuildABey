import { useNavigate } from 'react-router-dom'

export default function LandingPage() {
  const navigate = useNavigate()
  return (
    <>
        <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
        <h1 className="text-5xl font-bold mb-8">Landing Page</h1>
        <button
            onClick={() => navigate('/create')}
            className="bg-blue-600 px-6 py-3 rounded-xl text-xl hover:bg-blue-700 transition"
        >
            Create Beyblade
        </button>
        </div>
    </>
  )
}
