import { useNavigate } from 'react-router-dom'

export default function CreateBeyPage() {
  const navigate = useNavigate()


  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Beyblade Creation Page</h2>
        <button
            onClick={() => navigate('/summary')}
            className="bg-blue-600 px-6 py-3 rounded-xl text-xl hover:bg-blue-700 transition"
        >
            Test
        </button>
        </div>
    </>
  )
}