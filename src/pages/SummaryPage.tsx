import { Navbar } from "../components/NavBarFix.tsx";
import { useNavigate } from 'react-router-dom';

export default function SummaryPage() {
  const navigate = useNavigate()
  return (
    <>
        <Navbar />
            <div
  className="relative w-screen h-screen flex items-center justify-center"
  style={{
    backgroundImage: "url('/images/Background.png')",
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  }}
>
  {/* 👁 Parent Glass Box - wraps left and right */}
  <div className="relative w-full h-[90%] mx-10 backdrop-blur-md bg-white/5 rounded-2xl border border-white/10 flex md:flex-row flex-col p-8 gap-6 shadow-lg">
    
    {/* 👁 Invisible Spacer for Floating Left Box */}
    <div className="w-full md:w-1/3 h-full" />

    {/* 👉 Right Side Content */}
    <div className="w-full md:w-2/3 h-full flex flex-col justify-center text-white">
      <div className="backdrop-blur-md bg-white/5 w-full h-[20rem] rounded-lg p-6 mb-6 shadow-lg">
        <h2 className="text-lg font-bold mb-2">SUMMARY</h2>
        <p>Your custom Beyblade is ready! Review its stats and save it to your collection.</p>
        <div className="flex gap-4 mt-4">
          <button className="bg-blue-500 text-white px-6 py-2 rounded-lg hover:bg-blue-600">
            Save to Collection
          </button>
          <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600">
            Finish
          </button>
        </div>
      </div>
    </div>
  </div>

  {/* 🧊 Floating Left Glass Box */}
  <div className="absolute left-12 top-1/2 -translate-y-1/2 z-10 backdrop-blur-md bg-white/10 rounded-2xl border border-white/20 shadow-xl w-[24rem] h-[85%] p-6 flex flex-col justify-between items-center text-white">
    
    {/* Beyblade Image */}
    <div className="w-full flex justify-center">
      <img src="/images/completeRenders/customfull.png" alt="Saved Beyblade" className="w-64 h-64 object-cover" />
    </div>

    {/* Stats */}
    <div className="w-full mt-4">
      <ul className="text-xl font-semibold space-y-2">
        <li>TYPE: STAMINA</li>
        <li>BOLT: L-DRAGO</li>
        <li>FUSION WHEEL: LEONE</li>
        <li>SPIN TRACK: LEONE</li>
        <li>PERFORMANCE TIP: PEGASUS</li>
      </ul>
    </div>

  </div>
</div>
</>
  )
}

