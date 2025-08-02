import BeyCarousel from "../components/BeyCarousel.tsx";
import BeyStatsChart from "../components/BeyStatsChart.tsx";
import { EnergyLayer, FaceBolt, SpinTrack, Tip} from "../BeybladeParts/BeybladeComponents.ts";

function CreateBeyPage() {
    return (
        <div className="p-6">
            <h1 className = "text-3xl font-bold mb-6">Craft your masterpiece</h1>
            <BeyCarousel title="FaceBolt" parts={FaceBolt} onSelect={() => {}}/>
            <BeyCarousel title="Fusion Wheel " parts={EnergyLayer} onSelect={() => {}}/>
            <BeyCarousel title="Spin Track" parts={SpinTrack} onSelect={() => {}}/>
            <BeyCarousel title="Tip" parts={Tip} onSelect={() => {}}/>

            <div className="my-10" />

            {/* Horizontal bar chart */}
            <h2 className="text-2xl font-semibold mb-4">Beyblade Stats Overview</h2>
            <BeyStatsChart />
        </div>

    );
}

export default CreateBeyPage;