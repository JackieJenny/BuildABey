import {EnergyLayer, FaceBolt, SpinTrack, Tip} from "../BeybladeParts/BeybladeComponents.ts";

const PresetBeyblades = {
    PegasusCombo: {
        image: '/images/completeRenders/pegasusfull.png',
        name: 'Pegasus',
        energy: EnergyLayer.find(p => p.id === 'PegasusEnergyLayer')!,
        bolt: FaceBolt.find(p => p.id === "PegasusFaceBolt")!,
        track: SpinTrack.find(p => p.id === "PegasusSpinTrack")!,
        tip: Tip.find(p => p.id === "PegasusTip")!
    },
    LdragoCombo: {
        image: '/images/completeRenders/ldragofull.png',
        name: 'Ldrago',
        energy: EnergyLayer.find(p => p.id === 'LdragoEnergyLayer')!,
        bolt: FaceBolt.find(p => p.id === "LdragoFaceBolt")!,
        track: SpinTrack.find(p => p.id === "LdragoSpinTrack")!,
        tip: Tip.find(p => p.id === "LdragoTip")!
    }
};

export default PresetBeyblades;