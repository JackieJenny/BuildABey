import { EnergyLayer, FaceBolt, SpinTrack, Tip } from "../BeybladeParts/BeybladeComponents";
import { beyConstruct } from "./types";

export function determineWinner(bey1: beyConstruct, bey2: beyConstruct): string {
  function getStats(bey: beyConstruct) {
    const energyLayer = EnergyLayer.find(e => e.name === bey.EnergyLayerName)!;
    const faceBolt = FaceBolt.find(f => f.name === bey.FaceBoltName)!;
    const spinTrack = SpinTrack.find(s => s.name === bey.SpinTrackName)!;
    const tip = Tip.find(t => t.name === bey.TipName)!;

    const attack = energyLayer.attack + faceBolt.attack + spinTrack.attack + tip.attack;
    const defense = energyLayer.defense + faceBolt.defense + spinTrack.defense + tip.defense;
    const stamina = energyLayer.stamina + faceBolt.stamina + spinTrack.stamina + tip.stamina;

    return { attack, defense, stamina };
  }

  const stats1 = getStats(bey1);
  const stats2 = getStats(bey2);

  let score1 = 0;
  let score2 = 0;

  if (stats1.attack > stats2.attack) score1++;
  else if (stats1.attack < stats2.attack) score2++;

  if (stats1.defense > stats2.defense) score1++;
  else if (stats1.defense < stats2.defense) score2++;

  if (stats1.stamina > stats2.stamina) score1++;
  else if (stats1.stamina < stats2.stamina) score2++;

  if (score1 > score2) return "Beyblade 1 wins!";
  else if (score2 > score1) return "Beyblade 2 wins!";
  else return "It's a tie!";
}
