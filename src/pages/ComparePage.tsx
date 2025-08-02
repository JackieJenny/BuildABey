import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import UserBeyModel from '../components/UserBeyModel'
import OpponentBeyModel from '../components/OpponentBeyModel'
import { Environment } from '@react-three/drei'
import { Navbar } from '../components/NavBarFix'




const SceneCanvas = ({ children }: { children: React.ReactNode }) => (
  <div style={{ flex: 1, height: '100%' }}>
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} shadows>
      <Environment preset="dawn" />
      <ambientLight intensity={0.3} />
      <OrbitControls />
      {children}
    </Canvas>
  </div>
)

const ComparePage = () => {
  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center px-24" style={{ width: '100vw' }}>
        {/* Align inner boxes to bottom */}
        <div className="flex items-end justify-center gap-0 w-full max-w-[1400px]">

          {/* Left Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[50vh] w-[50vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col">
            {/* Dropdown Menu */}
            <select className="mb-4 rounded-md border border-gray-400 bg-white px-2 py-1 text-sm text-black shadow-sm focus:outline-none">
              <option value="default">Select Bey</option>
              <option value="valkyrie">Valkyrie</option>
              <option value="spriggan">Spriggan</option>
              <option value="luinor">Luinor</option>
            </select>

            <div className="flex-1">
              <SceneCanvas>
                <UserBeyModel key="left" />
              </SceneCanvas>
            </div>
          </div> 

          {/* Center Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[60vh] w-[33vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner" >
          test
          </div>

          {/* Right Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[50vh] w-[50vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col">
            {/* Dropdown Menu */}
            <select className="mb-4 rounded-md border border-gray-400 bg-white px-2 py-1 text-sm text-black shadow-sm focus:outline-none">
              <option value="default">Select Bey</option>
              <option value="valkyrie">Valkyrie</option>
              <option value="spriggan">Spriggan</option>
              <option value="luinor">Luinor</option>
            </select>

            {/* Scene */}
            <div className="flex-1">
              <SceneCanvas>
                <OpponentBeyModel key="right" />
              </SceneCanvas>
            </div>
          </div>

        </div>
      </div> 
    </>
  )
}





export default ComparePage
