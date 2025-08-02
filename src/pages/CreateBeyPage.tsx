import { useState } from 'react'

export default function CreateBeyPage() {
  const [name, setName] = useState('')

  return (
    <>
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white px-4">
        <h2 className="text-3xl font-bold mb-4">Beyblade Creation Page</h2>
        <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter beyblade name"
            className="w-full max-w-md px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        </div>
    </>
  )
}
