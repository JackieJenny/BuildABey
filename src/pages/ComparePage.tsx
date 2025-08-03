import { Canvas } from '@react-three/fiber'
import UserBeyModel from '../components/UserBeyModel'
import OpponentBeyModel from '../components/OpponentBeyModel'
import { Environment } from '@react-three/drei'
import { Navbar } from '../components/NavBarFix'
import { Suspense, useState } from "react";
import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { EnergyLayer, FaceBolt, SpinTrack, Tip } from '../BeybladeParts/BeybladeComponents';
import { useSearchParams } from 'react-router-dom';



type BeyName = "leone_self"| "leone_opp" | "pegasus_opp" | "pegasus_self" | "ldrago_self" | "ldrago_opp" | "custom";

type StatBlock = {
  attack: number;
  defense: number;
  stamina: number;
};

// This maps each Bey to its parts
const BEY_PARTS: Record<string, { energy: string; face: string; track: string; tip: string }> = {
  pegasus_self: {
    energy: 'PegasusEnergyLayer',
    face: 'PegasusFaceBolt',
    track: 'PegasusSpinTrack',
    tip: 'PegasusTip'
  },
  leone_self: {
    energy: 'LeoneEnergyLayer',
    face: 'LeoneFaceBolt',
    track: 'LeoneSpinTrack',
    tip: 'LeoneTip'
  },
  ldrago_self: {
    energy: 'LdragoEnergyLayer',
    face: 'LdragoFaceBolt',
    track: 'LdragoSpinTrack',
    tip: 'LdragoTip'
  },
  pegasus_opp: {
    energy: 'PegasusEnergyLayer',
    face: 'PegasusFaceBolt',
    track: 'PegasusSpinTrack',
    tip: 'PegasusTip'
  },
  leone_opp: {
    energy: 'LeoneEnergyLayer',
    face: 'LeoneFaceBolt',
    track: 'LeoneSpinTrack',
    tip: 'LeoneTip'
  },
  ldrago_opp: {
    energy: 'LdragoEnergyLayer',
    face: 'LdragoFaceBolt',
    track: 'LdragoSpinTrack',
    tip: 'LdragoTip'
  },

};

const findStats = (partList: any[], id: string): StatBlock => {
  return partList.find(p => p.id === id) ?? { attack: 0, defense: 0, stamina: 0 };
};

const calculateStats = (beyName: BeyName): StatBlock => {
  const parts = BEY_PARTS[beyName];
  const energy = findStats(EnergyLayer, parts.energy);
  const face = findStats(FaceBolt, parts.face);
  const track = findStats(SpinTrack, parts.track);
  const tip = findStats(Tip, parts.tip);

  return {
    attack: 20 * (energy.attack + face.attack + track.attack + tip.attack),
    defense: 1 * (energy.defense + face.defense + track.defense + tip.defense),
    stamina: 3 * (energy.stamina + face.stamina + track.stamina + tip.stamina),
  };
};


export const calculateWinProbability = (leftBey: BeyName, rightBey: BeyName): number => {
  const left = calculateStats(leftBey);
  const right = calculateStats(rightBey);

  const leftTotal = left.attack + left.defense + left.stamina;
  const rightTotal = right.attack + right.defense + right.stamina;

  if (leftTotal + rightTotal === 0) return 0.5; // Avoid division by zero

  return leftTotal / (leftTotal + rightTotal); // Win probability for the left
};


const BEY_OPTIONS: Record<BeyName, { label: string; img: string }> = {
  leone_self: { label: "Leone", img: "/images/completeRenders/leonefull.png" },
  pegasus_self: { label: "Pegasus", img: "/images/completeRenders/pegasusfull.png" },
  leone_opp: { label: "Leone", img: "/images/completeRenders/leonefull.png" },
  pegasus_opp: { label: "Pegasus", img: "/images/completeRenders/pegasusfull.png" },
  ldrago_self:  { label: "L Drago", img: "/images/completeRenders/ldragofull.png" },
  ldrago_opp: { label: "L Drago", img: "/images/completeRenders/ldragofull.png" },
};

const formatBeyLabel = (beyName: BeyName) => {
  return BEY_OPTIONS[beyName]?.label ?? beyName;
};





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
    <Canvas camera={{ position: [0, 2, 3], fov: 60 }}>
      <Environment preset="sunset" />
      <ambientLight intensity={0.3} />
      <TiltedRotator>
        {children}
      </TiltedRotator>
    </Canvas>
  </div>
)




const ComparePage = () => {

  const [searchParams] = useSearchParams();
  const initialLeftModel = (searchParams.get("model") as BeyName) ?? "pegasus_self";
  const [leftBey, setLeftBey] = useState<BeyName>(initialLeftModel);
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


  const leftWinProbability = calculateWinProbability(leftBey, rightBey); // Just an example
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
  <div
    className="absolute left-0 top-4 w-full bg-neutral-900 text-white rounded-xl shadow-xl z-20 p-2 border border-white/10"
    style={{
      maxHeight: '300px',
      overflowY: 'auto',

      // Hide scrollbar for Firefox and IE/Edge
      scrollbarWidth: 'none',
      msOverflowStyle: 'none',
    }}
  >
    {(["leone_self", "pegasus_self", "ldrago_self"] as BeyName[]).map((bey) => (
      <div
        key={bey}
        onClick={() => handleLeftSelect(bey)}
        className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors"
      >
        <img
          src={BEY_OPTIONS[bey].img}
          alt={BEY_OPTIONS[bey].label}
          className="w-30 h-30 rounded-md object-cover border border-white/20"
        />
        <span className="text-sm font-medium">{BEY_OPTIONS[bey].label}</span>
      </div>
    ))}
  </div>
)}



          <div className="flex flex-col items-center gap-2 flex-1 cursor-pointer" onClick={handleLeftModelClick}>
            <span className="text-white text-lg font-semibold">YOUR BEY</span>
            <div className="w-full h-full">
              <SceneCanvas>
                <Suspense fallback={null}>
                  <UserBeyModel key={`${leftBey}-${Date.now()}`} modelName={leftBey} />
                </Suspense>
              </SceneCanvas>
            </div>
          </div>
          </div>


          {/* Center Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[60vh] w-[33vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner">
            COMPARE
          </div>

          {/* Right Box */}
          <div className="backdrop-blur-md bg-glassgrey/30 h-[50vh] w-[50vh] rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col relative">
          
  {isRightSelectorOpen && (
    <div
      className="absolute right-0 top-4 w-full bg-neutral-900 text-white rounded-xl shadow-xl z-20 p-2 space-y-2 border border-white/10"
      style={{
        maxHeight: '300px',
        overflowY: 'auto',
        // Hide scrollbar for Firefox and IE/Edge
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
      }}
    >
      {(["leone_opp", "pegasus_opp", "ldrago_opp"] as BeyName[]).map((bey) => (
        <div
          key={bey}
          onClick={() => handleRightSelect(bey)}
          className="flex items-center gap-3 cursor-pointer hover:bg-neutral-800 p-2 rounded-lg transition-colors"
        >
          <img
            src={BEY_OPTIONS[bey].img}
            alt={BEY_OPTIONS[bey].label}
            className="w-30 h-30 rounded-md object-cover border border-white/20"
          />
          <span className="text-sm font-medium">{BEY_OPTIONS[bey].label}</span>
        </div>
      ))}
    </div>
  )}

            <div className="flex flex-col items-center gap-2 flex-1 cursor-pointer" onClick={handleRightModelClick}>
              <span className="text-white text-lg font-semibold">{formatBeyLabel(rightBey)}</span>
              <div className="w-full h-full">
                <SceneCanvas>
                  <Suspense fallback={null}>
                    <OpponentBeyModel key={rightBey} modelName={rightBey} />
                  </Suspense>
                </SceneCanvas>
              </div>
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