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


  const leftWinProbability = 0.7; // Just an example
  const leftPercent = leftWinProbability * 100;
  const rightPercent = (1 - leftWinProbability) * 100;

  return (
    <>
      <Navbar />
      <div className="flex flex-col h-screen items-center justify-center px-24" style={{ width: '100vw' , backgroundImage: "url('/images/Background.png')"}}>
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
            COMPARE
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

<div className="w-full max-w-[1400px] mt-8 px-4 flex flex-col items-center">
  {/* OUTER WRAPPER (THE BUBBLE) */}
  <div className="w-full bg-transparent rounded-full border border-white/60 p-1 shadow-inner">
    {/* INNER CONTENT */}
    <div className="relative w-full h-6 bg-transparent flex items-center justify-center rounded-full overflow-hidden">
      
      {/* LEFT BAR */}
      <div
        className="bg-white h-full transition-all duration-500"
        style={{
          width: `${leftPercent / 2}%`,
          marginRight: '2px',
          borderRadius: '9999px',
        }}
      />

      {/* CENTER DIVIDER */}
      <div className="w-1 h-4 bg-white/70 rounded-full mx-1" />

      {/* RIGHT BAR */}
      <div
        className="bg-white h-full transition-all duration-500"
        style={{
          width: `${rightPercent / 2}%`,
          marginLeft: '2px',
          borderRadius: '9999px',
        }}
      />
    </div>
  </div>

  {/* PERCENT LABELS */}
  <div className="w-full flex justify-between text-white text-sm font-semibold mt-2 px-2">
    <span>{leftPercent.toFixed(0)}%</span>
    <span>{rightPercent.toFixed(0)}%</span>
  </div>
</div>



      </div>
    </>
  );
}



export default ComparePage