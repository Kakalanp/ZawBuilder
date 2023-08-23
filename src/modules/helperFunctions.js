//WIP: this has to be compared to real-game stats
const calculateFollowThrough = (type) => {
  switch(type) {
    case 'Hammer' :
    case 'Heavy Scythe': return 0.4;
    case 'Blade and Whip' :
    case 'Staff' :
    case 'Dual Swords' :
    case 'Gunblade' :
    case 'Nunchaku' :
    case 'Whip': return 0.5;
    case 'Heavy Blade' :
    case 'Polearm':
    case 'Scythe' :
    case 'Sword' :
    case 'Sword and Shield' :
    case 'Tonfa': return 0.6;
    case 'Glaive' :
    case 'Machete' :
    case 'Nikana' :
    case 'Rapier' :
    case 'Two-Handed Nikana' :
    case 'Warfan': return 0.7;
    case 'Claws' :
    case 'Dual Daggers': return 0.8
    case 'Dagger' :
    case 'Fist' :
    case 'Sparring': return 0.9;
  }
}

export default calculateFollowThrough
