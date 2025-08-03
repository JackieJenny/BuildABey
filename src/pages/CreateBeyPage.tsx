import BeyCarousel from "../components/BeyCarousel.tsx";
import BeyStatsChart from "../components/BeyStatsChart.tsx";
import { EnergyLayer, FaceBolt, SpinTrack, Tip } from "../BeybladeParts/BeybladeComponents.ts";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import PresetBeyblades from "../components/presets.ts";
import { Navbar } from "../components/NavBarFix.tsx";

export default function CreateBeyPage() {
  const navigate = useNavigate();
  const [selectedEnergy, setSelectedEnergy] = useState(EnergyLayer[0]);
  const [selectedBolt, setSelectedBolt] = useState(FaceBolt[0]);
  const [selectedTrack, setSelectedTrack] = useState(SpinTrack[0]);
  const [selectedTip, setSelectedTip] = useState(Tip[0]);
  const [moveUp, setMoveUp] = useState(false);
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    // Trigger fade-in on mount
    setFadeIn(true);
  }, []);

  const handleNext = () => {
  setMoveUp(true);           // triggers exit animation
  setTimeout(() => {
    navigate("/compare");    // change the page you want to go to
  }, 700);                   // matches duration-700
};

  const totalStats = {
    attack:
      selectedEnergy.attack +
      selectedBolt.attack +
      selectedTrack.attack +
      selectedTip.attack,
    defense:
      selectedEnergy.defense +
      selectedBolt.defense +
      selectedTrack.defense +
      selectedTip.defense,
    stamina:
      selectedEnergy.stamina +
      selectedBolt.stamina +
      selectedTrack.stamina +
      selectedTip.stamina,
  };

  return (
    <>
      <Navbar />
      <div className="h-dvh w-dvw flex flex-col justify-center items-center bg-gray-900 text-white pt-16 bg-[url('/images/BackGround2.png')] absolute top-0 left-0 overflow-clip">
        <div
  className={`backdrop-blur-md bg-glassgrey/30 w-5/6 max-w-screen-2xl p-8 rounded-xl border border-gray-600 shadow-lg shadow-inner h-[750px] transform transition-all duration-700 ease-in-out
  ${fadeIn ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}
  ${moveUp ? '-translate-y-full opacity-0' : ''}
`}
>
          <div className="p-6">
            <div className="flex flex-row gap-8 items-start">
              {/* Carousels column */}
              <div className="flex flex-col flex-1">
                <div className="border-2 border-gray-400 rounded-xl p-4 bg-black/30 mb-4">
                  <BeyCarousel
                    title="FaceBolt"
                    parts={FaceBolt}
                    onSelect={setSelectedBolt}
                    selectedPart={selectedBolt}
                  />
                  <BeyCarousel
                    title="Fusion Wheel"
                    parts={EnergyLayer}
                    onSelect={setSelectedEnergy}
                    selectedPart={selectedEnergy}
                  />
                  <BeyCarousel
                    title="Spin Track"
                    parts={SpinTrack}
                    onSelect={setSelectedTrack}
                    selectedPart={selectedTrack}
                  />
                  <BeyCarousel
                    title="Tip"
                    parts={Tip}
                    onSelect={setSelectedTip}
                    selectedPart={selectedTip}
                  />
                  <div className="flex justify-center mt-4">
                    <button
                      className="px-4 py-2 bg-violet-600 text-white rounded"
                      disabled
                    >
                      Create Beyblade
                    </button>
                  </div>
                </div>
              </div>

              {/* Presets and Stats column */}
              <div className="flex flex-col items-center min-w-[340px] gap-8">
                {/* Presets box */}
                <div className="w-full border-2 border-gray-400 rounded-xl p-4 bg-black/30">
                  <h2 className="text-2xl font-bold mb-2 text-center">
                    Choose a Preset
                  </h2>
                  <div className="flex flex-wrap gap-4 justify-center">
                    {Object.entries(PresetBeyblades).map(([key, preset]) => (
                      <button
                        key={key}
                        onClick={() => {
                          setSelectedEnergy(preset.energy);
                          setSelectedBolt(preset.bolt);
                          setSelectedTrack(preset.track);
                          setSelectedTip(preset.tip);
                          handleNext();
                        }}
                        className="w-20 aspect-square flex items-center justify-center hover:border-blue-500 transition glass-btn"
                      >
                        <img
                          src={preset.image}
                          className="w-full h-full object-contain"
                          alt={preset.name}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Stats chart box */}
                <div className="w-full border-2 border-gray-400 rounded-xl p-4 bg-black/30 flex flex-col items-center">
                  <BeyStatsChart stats={totalStats} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
