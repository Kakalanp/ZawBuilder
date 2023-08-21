const balla = {
    name: 'Balla',
    type1: 'Dagger',
    range1: '1.7',
    type2: 'Staff',
    range2: '3.0',
    dmg: 224,
    dmgType: 'puncture',
    impact: 5,
    puncture: 60,
    slash: 35,
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
    impact: 20,
    puncture: 5,
    slash: 75,
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
    impact: 10,
    puncture: 50,
    slash: 40,
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
    impact: 15,
    puncture: 35,
    slash: 50,
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
    impact: 70,
    puncture: 0,
    slash: 30,
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
    impact: 25,
    puncture: 35,
    slash: 40,
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
    impact: 10,
    puncture: 40,
    slash: 50,
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
    impact: 60,
    puncture: 5,
    slash: 35,
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
    impact: 10,
    puncture: 25,
    slash: 65,
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
    impact: 29,
    puncture: 19,
    slash: 30,
    viral: 23,
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
    impact: 14,
    puncture: 33,
    slash: 23,
    viral: 30,
    spdMod: 0.033,
    critChance: 22,
    critMulti: 2.2,
    statusChance: 18,
    img: 'plague-kripath'
  }

  const strikes = [balla, cyath, dehtat, dokrahm, kronsh, mewan, ooltha, rabvee, sepfahn, plagueKeewar, plagueKripath];

  export default strikes;
