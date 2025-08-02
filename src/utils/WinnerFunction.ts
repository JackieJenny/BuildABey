import { EnergyLayer, FaceBolt, SpinTrack, Tip } from "../BeybladeParts/BeybladeComponents";
import { beyConstruct } from "./types";

const getComponentStats = (componentArray: any[], name: string) => {
    return componentArray.find(comp => comp.name === name) ?? { attack: 0, defense: 0, stamina: 0 };
};

const sumStats = (bey: beyConstruct, randomFactor = 0): { attack: number, defense: number, stamina: number } => {
    const energy = getComponentStats(EnergyLayer, bey.EnergyLayerName);
    const face = getComponentStats(FaceBolt, bey.FaceBoltName);
    const spin = getComponentStats(SpinTrack, bey.SpinTrackName);
    const tip = getComponentStats(Tip, bey.TipName);

    // Add small random noise if factor > 0
    const noise = () => (Math.random() * 2 - 1) * randomFactor;

    return {
        attack: energy.attack + face.attack + spin.attack + tip.attack + noise(),
        defense: energy.defense + face.defense + spin.defense + tip.defense + noise(),
        stamina: energy.stamina + face.stamina + spin.stamina + tip.stamina + noise()
    };
};

export function determineWinner(bey1: beyConstruct, bey2: beyConstruct, trials = 10): {
    bey1Wins: number;
    bey2Wins: number;
    drawCount: number;
    bey1WinRate: number;
    bey2WinRate: number;
} {
    let bey1Wins = 0;
    let bey2Wins = 0;
    let drawCount = 0;

    for (let i = 0; i < trials; i++) {
        const stats1 = sumStats(bey1, 0.3); // ±0.3 random noise
        const stats2 = sumStats(bey2, 0.3);

        let score1 = 0;
        let score2 = 0;

        if (stats1.attack > stats2.attack) score1++;
        else if (stats2.attack > stats1.attack) score2++;

        if (stats1.defense > stats2.defense) score1++;
        else if (stats2.defense > stats1.defense) score2++;

        if (stats1.stamina > stats2.stamina) score1++;
        else if (stats2.stamina > stats1.stamina) score2++;

        if (score1 > score2) bey1Wins++;
        else if (score2 > score1) bey2Wins++;
        else drawCount++;
    }

    return {
        bey1Wins,
        bey2Wins,
        drawCount,
        bey1WinRate: Math.round((bey1Wins / trials) * 100),
        bey2WinRate: Math.round((bey2Wins / trials) * 100),
    };
}



