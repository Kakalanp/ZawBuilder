// WIP: this has to be compared to real-game stats
const getFollowThrough = (type) => {
  switch (type) {
    case 'Hammer' :
    case 'Heavy Scythe': return 0.4
    case 'Blade and Whip' :
    case 'Staff' :
    case 'Dual Swords' :
    case 'Gunblade' :
    case 'Nunchaku' :
    case 'Whip': return 0.5
    case 'Heavy Blade' :
    case 'Polearm':
    case 'Scythe' :
    case 'Sword' :
    case 'Sword and Shield' :
    case 'Tonfa': return 0.6
    case 'Glaive' :
    case 'Machete' :
    case 'Nikana' :
    case 'Rapier' :
    case 'Two-Handed Nikana' :
    case 'Warfan': return 0.7
    case 'Claws' :
    case 'Dual Daggers': return 0.8
    case 'Dagger' :
    case 'Fist' :
    case 'Sparring': return 0.9
    case 'Assault Saw': return 1
  }
}

// WIP: this has to be compared to real-game stats
const getBlockAngle = (type) => {
  switch (type) {
    case 'Dagger':
    case 'Gunblade':
    case 'Whip': return 45
    case 'Dual Daggers':
    case 'Fist' :
    case 'Hammer':
    case 'Sparring': return 50
    case 'Claws':
    case 'Glaive':
    case 'Heavy Blade':
    case 'Machete':
    case 'Nikana':
    case 'Nunchaku':
    case 'Polearm':
    case 'Sword':
    case 'Two-Handed Nikana':
    case 'Warfan': return 55
    case 'Blade and Whip':
    case 'Dual Swords':
    case 'Rapier':
    case 'Scythe':
    case 'Staff':
    case 'Tonfa': return 60
    case 'Heavy Scythe': return 65
    case 'Sword and Shield': return 70
    case 'Assault Saw': return 90
  }
}

// WIP: this has to be compared to real-game stats
const getWindup = (type) => {
  switch (type) {
    case 'Blade and Whip':
    case 'Dagger':
    case 'Gunblade':
    case 'Whip': return 0.4
    case 'Dual Daggers':
    case 'Nikana':
    case 'Nunchaku':
    case 'Rapier':
    case 'Sparring':
    case 'Staff':
    case 'Warfan': return 0.5
    case 'Claws':
    case 'Fist' :
    case 'Glaive':
    case 'Sword': return 0.6
    case 'Dual Swords':
    case 'Machete':
    case 'Sword and Shield':
    case 'Tonfa':
    case 'Two-Handed Nikana': return 0.7
    case 'Polearm': return 0.9
    case 'Assault Saw':
    case 'Scythe':
    case 'Heavy Scythe': return 1.0
    case 'Heavy Blade': return 1.1
    case 'Hammer': return 1.2
  }
}

// WIP: this has to be compared to real-game stats
const getSlamMultiplier = (type) => {
  switch (type) {
    case 'Dagger':
    case 'Dual Daggers':
    case 'Nunchaku':
    case 'Dual Swords':
    case 'Tonfa': return 2
    default: return 3
  }
}

// WIP: this has to be compared to real-game stats
const getSlamRadius = (type) => {
  switch (type) {
    case 'Dagger':
    case 'Glaive':
    case 'Gunblade':
    case 'Warfan':
    case 'Whip': return 5
    case 'Dual Daggers':
    case 'Nunchaku':
    case 'Claws':
    case 'Nikana':
    case 'Rapier':
    case 'Staff': return 6
    case 'Assault Saw':
    case 'Blade and Whip':
    case 'Polearm':
    case 'Sparring':
    case 'Sword':
    case 'Sword and Shield':
    case 'Two-Handed Nikana': return 7
    case 'Dual Swords':
    case 'Tonfa':
    case 'Fist' :
    case 'Heavy Blade':
    case 'Heavy Scythe':
    case 'Machete':
    case 'Scythe': return 8
    case 'Hammer': return 9
  }
}

const getHeavyMultiplier = (type) => {
  switch (type) {
    case 'Glaive': return 2
    case 'Blade and Whip':
    case 'Gunblade': return 4
    case 'Rapier':
    case 'Whip': return 4.5
    case 'Claws':
    case 'Dagger':
    case 'Dual Daggers':
    case 'Dual Swords':
    case 'Fist':
    case 'Nikana':
    case 'Nunchaku':
    case 'Sparring':
    case 'Staff':
    case 'Sword':
    case 'Sword and Shield':
    case 'Tonfa':
    case 'Warfan': return 5
    case 'Assault Saw':
    case 'Hammer':
    case 'Heavy Blade':
    case 'Heavy Scythe':
    case 'Machete':
    case 'Polearm':
    case 'Scythe':
    case 'Two-Handed Nikana': return 6
  }
}

// WIP, Missing: slam radius, heavy multiplier, heavy slam, heavy slam radius
const getExtraStats = (type) => {
  switch (type) {
    case 'Assault Saw':
      return {
        followThrough: 1,
        blockAngle: 90,
        windup: 1.0,
        slamMultiplier: 3

      }
    case 'Blade and Whip':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windup: 0.4,
        slamMultiplier: 3
      }
    case 'Claws':
      return {
        followThrough: 0.8,
        blockAngle: 55,
        windup: 0.6,
        slamMultiplier: 3
      }
    case 'Dagger':
      return {
        followThrough: 0.9,
        blockAngle: 45,
        windup: 0.4,
        slamMultiplier: 2
      }
    case 'Dual Daggers':
      return {
        followThrough: 0.8,
        blockAngle: 50,
        windup: 0.5,
        slamMultiplier: 2
      }
    case 'Dual Swords':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windup: 0.7,
        slamMultiplier: 2
      }
    case 'Fist':
      return {
        followThrough: 0.9,
        blockAngle: 50,
        windup: 0.6,
        slamMultiplier: 3
      }
    case 'Glaive':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windup: 0.6,
        slamMultiplier: 3
      }
    case 'Gunblade':
      return {
        followThrough: 0.5,
        blockAngle: 45,
        windup: 0.4,
        slamMultiplier: 3
      }
    case 'Hammer':
      return {
        followThrough: 0.4,
        blockAngle: 50,
        windup: 1.2,
        slamMultiplier: 3
      }
    case 'Heavy Blade':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windup: 1.1,
        slamMultiplier: 3
      }
    case 'Heavy Scythe':
      return {
        followThrough: 0.4,
        blockAngle: 65,
        windup: 1.0,
        slamMultiplier: 3
      }
    case 'Machete':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windup: 0.7,
        slamMultiplier: 3
      }
    case 'Nikana':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windup: 0.5,
        slamMultiplier: 3
      }
    case 'Nunchaku':
      return {
        followThrough: 0.5,
        blockAngle: 55,
        windup: 0.5,
        slamMultiplier: 2
      }
    case 'Polearm':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windup: 0.9,
        slamMultiplier: 3
      }
    case 'Rapier':
      return {
        followThrough: 0.7,
        blockAngle: 60,
        windup: 0.5,
        slamMultiplier: 3
      }
    case 'Scythe':
      return {
        followThrough: 0.6,
        blockAngle: 60,
        windup: 1.0,
        slamMultiplier: 3
      }
    case 'Sparring':
      return {
        followThrough: 0.9,
        blockAngle: 50,
        windup: 0.5,
        slamMultiplier: 3
      }
    case 'Staff':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windup: 0.5,
        slamMultiplier: 3
      }
    case 'Sword':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windup: 0.6,
        slamMultiplier: 3
      }
    case 'Sword and Shield':
      return {
        followThrough: 0.6,
        blockAngle: 70,
        windup: 0.7,
        slamMultiplier: 3
      }
    case 'Tonfa':
      return {
        followThrough: 0.6,
        blockAngle: 60,
        windup: 0.7,
        slamMultiplier: 2
      }
    case 'Two-Handed Nikana':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windup: 0.7,
        slamMultiplier: 3
      }
    case 'Warfan':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windup: 0.5,
        slamMultiplier: 3
      }
    case 'Whip':
      return {
        followThrough: 0.5,
        blockAngle: 45,
        windup: 0.4,
        slamMultiplier: 3
      }
  }
}

const helpers = { getFollowThrough, getBlockAngle, getWindup, getSlamMultiplier, getSlamRadius, getHeavyMultiplier }

export default helpers
