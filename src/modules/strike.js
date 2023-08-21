const balla = {
    name: 'Balla',
    type1: 'Dagger',
    range1: '1.7',
    type2: 'Staff',
    range2: '3.0',
    dmg: 224,
    dmgType: 'puncture',
    impact: 11.2,
    puncture: 134.4,
    slash: 78.4,
    viral: 0,
    spdMod: 0.083,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'balla'
  };

  const cyath = {
    name: 'Cyath',
    type1: 'Machete',
    range1: '2.6',
    type2: 'Polearm',
    range2: '3.0',
    dmg: 230,
    dmgType: 'slash',
    impact: 46,
    puncture: 11.5,
    slash: 172.5,
    viral: 0,
    spdMod: 0,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'cyath'
  };

  const dehtat = {
    name: 'Dehtat',
    type1: 'Rapier',
    range1: '2.5',
    type2: 'Polearm',
    range2: '3.0',
    dmg: 224,
    dmgType: 'puncture',
    impact: 22.4,
    puncture: 112,
    slash: 89.6,
    viral: 0,
    spdMod: 0.083,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'dehtat'
  };

  const dokrahm = {
    name: 'Dokrahm',
    type1: 'Scythe',
    range1: '1.7',
    type2: 'Heavy',
    range2: '()',
    dmg: 309,
    dmgType: 'slash',
    impact: 46.4,
    puncture: 108.1,
    slash: 154.5,
    viral: 0,
    spdMod: 0.083,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'dokrahm'
  };

  const kronsh = {
    name: 'Kronsh',
    type1: 'Machete',
    range1: '2.6',
    type2: 'Polearm',
    range2: '3.0',
    dmg: 234,
    dmgType: 'impact',
    impact: 163.8,
    puncture: null,
    slash: 70.2,
    viral: 0,
    spdMod: -0.067,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'kronsh'
  };

  const mewan = {
    name: 'Mewan',
    type1: 'Sword',
    range1: '2.5',
    type2: 'Polearm',
    range2: '3.0',
    dmg: 224,
    dmgType: 'slash',
    impact: 56,
    puncture: 78.4,
    slash: 89.6,
    viral: 0,
    spdMod: -0.067,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'mewan'
  };

  const ooltha = {
    name: 'Ooltha',
    type1: 'Sword',
    range1: '2.5',
    type2: 'Staff',
    range2: '3.0',
    dmg: 224,
    dmgType: 'slash',
    impact: 22.4,
    puncture: 89.6,
    slash: 112,
    viral: 0,
    spdMod: 0,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'ooltha'
  };

  const rabvee = {
    name: 'Rabvee',
    type1: 'Machete',
    range1: '2.6',
    type2: 'Hammer',
    range2: '3.0',
    dmg: 234,
    dmgType: 'impact',
    impact: 140.4,
    puncture: 11.7,
    slash: 81.9,
    viral: 0,
    spdMod: -0.067,
    critChance: 18,
    critMulti: 2,
    statusChance: 18,
    img: 'rabvee'
  };

  const sepfahn = {
    name: 'Sepfahn',
    type1: 'Nikana',
    range1: '2.5',
    type2: 'Staff',
    range2: '3.0',
    dmg: 226,
    dmgType: 'slash',
    impact: 22.6,
    puncture: 56.5,
    slash: 146.9,
    viral: 0,
    spdMod: 0,
    critChance: 20,
    critMulti: 2,
    statusChance: 20,
    img: 'sepfahn'
  };

  const plagueKeewar = {
    name: 'Plague Keewar',
    type1: 'Scythe',
    range1: '1.7',
    type2: 'Staff',
    range2: '3.0',
    dmg: 306,
    dmgType: 'viral',
    impact: 88,
    puncture: 57,
    slash: 91,
    viral: 70,
    spdMod: -0.033,
    critChance: 18,
    critMulti: 2,
    statusChance: 22,
    img: 'plague-keewar'
  };
  
  const plagueKripath = {
    name: 'Plague Kripath',
    type1: 'Rapier',
    range1: '2.5',
    type2: 'Polearm',
    range2: '3.0',
    dmg: 213,
    dmgType: 'viral',
    impact: 30,
    puncture: 70,
    slash: 49,
    viral: 64,
    spdMod: 0.033,
    critChance: 22,
    critMulti: 2.2,
    statusChance: 18,
    img: 'plague-kripath'
  }

  const strikes = [balla, cyath, dehtat, dokrahm, kronsh, mewan, ooltha, rabvee, sepfahn, plagueKeewar, plagueKripath];

  export default strikes;
