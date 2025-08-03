import { Navbar } from "../components/NavBarFix.tsx";
import { useNavigate } from 'react-router-dom';

export default function SummaryPage() {
  const navigate = useNavigate()
  return (
    <>
        <Navbar />
            <div
                className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] 
        overflow-hidden"
              >
                {/* Left Side */}
        <div className="flex flex-col items-center w-full md:w-1/3">
          {/* Beyblade Image Box */}
          <div className="bg-transparent rounded-lg shadow-lg w-48 h-48 flex items-center justify-center mb-6">
            {/* Replace src with your saved beyblade image */}
            <img src="/images/completeRenders/customfull.png" alt="Saved Beyblade" className="w-50 h-50 object-cover" />
          </div>
          {/* Stats Section */}
          {/* Stats Section */}
          <div className="backdrop-blur-md bg-gray-100/5 w-80 h-64 flex-1 rounded-xl p-4 border border-gray-500/50 shadow-lg shadow-inner flex items-center justify-center">
            {/* Example stats */}
            <ul>
              <li>TYPE: ATTACK</li>
              <li>ENERGY RING: BLAH</li>
              <li>FUSION WHEEL: BLAH</li>
              <li>SPIN TRACK: BLAH</li>
              <li>PERFORMANCE TIP: BLAH</li>
            </ul>
          </div>
        </div>
        {/* Right Side */}
        <div className="flex flex-col justify-between w-full md:w-2/3 h-full">
          {/* Summary Text Area */}
          <div className="backdrop-blur-md w-[55rem] h-[20rem] rounded-lg p-6 mb-6 shadow-lg items-center
            place-items-center place-content-center">
            <h2 className="text-lg font-bold mb-2">SUMMARY</h2>
            <p>
              {/* Replace with your summary text */}
              Your custom Beyblade is ready! Review its stats and save it to your collection.
            </p>
            {/* button */}
            <div className="flex gap-4">
            <button className="bg-blue-500 text-white px-6 py-2 rounded-lg shadow hover:bg-blue-600">
              Save to Collection
            </button>
            <button onClick={() => navigate("/")} className="bg-green-500 text-white px-6 py-2 rounded-lg shadow hover:bg-green-600">
              Finish
            </button>
          </div>
          
          </div>
        </div>










            </div>

    </>
  )
}
