//WIP: this has to be compared to real-game stats
const getFollowThrough = (type) => {
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
};

//WIP: this has to be compared to real-game stats
const getBlockAngle = (type) => {
  switch(type) {
    case 'Dagger':
    case 'Gunblade':
    case 'Whip': return 45
    case 'Dual Daggers':
    case 'Fist' :
    case 'Hammer':
    case 'Sparring': return 50;
    case 'Claws':
    case 'Glaive':
    case 'Heavy Blade':
    case 'Machete':
    case 'Nikana':
    case 'Nunchaku':
    case 'Polearm':
    case 'Sword':
    case 'Two-Handed Nikana':
    case 'Warfan': return 55;
    case 'Blade and Whip':
    case 'Dual Swords':
    case 'Rapier':
    case 'Scythe':
    case 'Staff':
    case 'Tonfa': return 60
    case 'Heavy Scythe': return 65
    case 'Sword and Shield': return 70;
  }
};

const helpers = {getFollowThrough, getBlockAngle};

export default helpers;
