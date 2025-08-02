import BeyCarousel from "../components/BeyCarousel.tsx";
import BeyStatsChart from "../components/BeyStatsChart.tsx";
import { EnergyLayer, FaceBolt, SpinTrack, Tip} from "../BeybladeParts/BeybladeComponents.ts";
import {useState} from "react";
import PresetBeyblades from "../components/presets.ts";
import { Navbar } from "../components/NavBarFix.tsx";

export default function CreateBeyPage() {
    const [selectedEnergy, setSelectedEnergy] = useState(EnergyLayer[0]);
    const [selectedBolt, setSelectedBolt] = useState(FaceBolt[0]);
    const [selectedTrack, setSelectedTrack] = useState(SpinTrack[0]);
    const [selectedTip, setSelectedTip] = useState(Tip[0]);

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
        <div
        className="min-h-screen w-screen p-6 pt-24 bg-cover bg-center text-white"
        style={{ backgroundImage: "url('/images/Background.png')" }}
        >
        <div className="backdrop-blur-md bg-glassgrey/30 w-3/4 h-3/4 rounded-xl p-8 border border-gray-500/50 shadow-lg shadow-inner flex flex-col justify-center items-center">
        <h1 className="text-3xl font-bold mb-6">Craft your masterpiece</h1>

        <BeyCarousel title="FaceBolt" parts={FaceBolt} onSelect={setSelectedBolt} selectedPart={selectedBolt} />
        <BeyCarousel title="Fusion Wheel" parts={EnergyLayer} onSelect={setSelectedEnergy} selectedPart={selectedEnergy} />
        <BeyCarousel title="Spin Track" parts={SpinTrack} onSelect={setSelectedTrack} selectedPart={selectedTrack} />
        <BeyCarousel title="Tip" parts={Tip} onSelect={setSelectedTip} selectedPart={selectedTip} />

        <div className="my-10" />

        <h2 className="text-2xl font-bold mb-4">Choose a Preset</h2>
        <div className="flex flex-wrap gap-4 mb-10">
          {Object.entries(PresetBeyblades).map(([key, preset]) => (
            <button
              key={key}
              onClick={() => {
                setSelectedEnergy(preset.energy);
                setSelectedBolt(preset.bolt);
                setSelectedTrack(preset.track);
                setSelectedTip(preset.tip);
              }}
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              {preset.name}
            </button>
          ))}
        </div>

        <h2 className="text-2xl font-semibold mb-4">Beyblade Stats Overview</h2>
        <BeyStatsChart stats={totalStats} />
        </div>
      </div>
    </>
  );
}

