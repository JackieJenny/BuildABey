import { Canvas } from '@react-three/fiber'
import UserBeyModel from '../components/UserBeyModel'
import OpponentBeyModel from '../components/OpponentBeyModel'
import { Environment } from '@react-three/drei'
import { Navbar } from '../components/NavBarFix'
import { useState } from "react";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

type BeyName = "leone_self"| "leone_opp" | "pegasus_opp" | "pegasus_self";





const TiltedRotator = ({ children }: { children: React.ReactNode }) => {
  const ref = useRef<any>();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.01; // Continuous spin
    }
  });

  return (
    <group rotation={[0.2, 0, 0.2]} ref={ref}>
      {children}
    </group>
  );
};

const SceneCanvas = ({ children }: { children: React.ReactNode }) => (
  <div style={{ flex: 1, height: '100%' }}>
    <Canvas camera={{ position: [0, 2, 5], fov: 60 }} shadows>
      <Environment preset="dawn" />
      <ambientLight intensity={0.3} />
      <TiltedRotator>
        {children}
      </TiltedRotator>
    </Canvas>
  </div>
)




const ComparePage = () => {
  const [leftBey, setLeftBey] = useState<BeyName>("pegasus_self");
  const [isLeftSelectorOpen, setIsLeftSelectorOpen] = useState(false);
  const [rightBey, setRightBey] = useState<BeyName>("pegasus_opp");
  const [isRightSelectorOpen, setIsRightSelectorOpen] = useState(false);

  const handleLeftModelClick = () => {
    setIsLeftSelectorOpen(!isLeftSelectorOpen);
  };

  const handleLeftSelect = (beyName: BeyName) => {
    setLeftBey(beyName);
    setIsLeftSelectorOpen(false);
  };

  const handleRightModelClick = () => {
    setIsRightSelectorOpen(!isRightSelectorOpen);
  };

  const handleRightSelect = (beyName: BeyName) => {
    setRightBey(beyName);
    setIsRightSelectorOpen(false);
  };

  return (
    <>
      <Navbar />
      <div className="flex h-screen items-center justify-center px-24" style={{ width: '100vw' }}>
        <div className="flex items-end justify-center gap-0 w-full max-w-[1400px]">

          {/* Left Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[50vh] w-[50vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col relative">
            {isLeftSelectorOpen && (
              <div className="absolute top-4 left-4 bg-white text-black rounded shadow-md p-2 z-10">
                {["leone_self", "pegasus_self"].map((bey) => (
                  <div
                    key={bey}
                    className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleLeftSelect(bey as BeyName)}
                  >
                    {bey.charAt(0).toUpperCase() + bey.slice(1)}
                  </div>
                ))}
              </div>
            )}
            <div className="flex-1 cursor-pointer" onClick={handleLeftModelClick}>
              <SceneCanvas>
                <UserBeyModel key={leftBey} modelName={leftBey} />
              </SceneCanvas>
            </div>
          </div>

          {/* Center Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[60vh] w-[33vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner">
            test
          </div>

          {/* Right Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[50vh] w-[50vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col relative">
            {isRightSelectorOpen && (
              <div className="absolute top-4 left-4 bg-white text-black rounded shadow-md p-2 z-10">
                {["leone_opp", "pegasus_opp"].map((bey) => (
                  <div
                    key={bey}
                    className="cursor-pointer hover:bg-gray-200 px-2 py-1 rounded"
                    onClick={() => handleRightSelect(bey as BeyName)}
                  >
                    {bey.charAt(0).toUpperCase() + bey.slice(1)}
                  </div>
                ))}
              </div>
            )}
            <div className="flex-1 cursor-pointer" onClick={handleRightModelClick}>
              <SceneCanvas>
                <OpponentBeyModel key={rightBey} modelName={rightBey} />

              </SceneCanvas>
            </div>
          </div>

        </div>
      </div>
    </>
  );
}






export default ComparePage
