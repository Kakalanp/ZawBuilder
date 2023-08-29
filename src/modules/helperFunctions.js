// WIP, Missing: slam radius, heavy multiplier, heavy slam, heavy slam radius
const getExtraStats = (type) => {
  switch (type) {
    case 'Assault Saw':
      return {
        followThrough: 1,
        blockAngle: 90,
        windUp: 1.0,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 6
      }
    case 'Blade and Whip':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windUp: 0.4,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 4
      }
    case 'Claws':
      return {
        followThrough: 0.8,
        blockAngle: 55,
        windUp: 0.6,
        slamMultiplier: 3,
        slamRadius: 6,
        heavyMultiplier: 5
      }
    case 'Dagger':
      return {
        followThrough: 0.9,
        blockAngle: 45,
        windUp: 0.4,
        slamMultiplier: 2,
        slamRadius: 5,
        heavyMultiplier: 5
      }
    case 'Dual Daggers':
      return {
        followThrough: 0.8,
        blockAngle: 50,
        windUp: 0.5,
        slamMultiplier: 2,
        slamRadius: 6,
        heavyMultiplier: 5
      }
    case 'Dual Swords':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windUp: 0.7,
        slamMultiplier: 2,
        slamRadius: 8,
        heavyMultiplier: 5
      }
    case 'Fist':
      return {
        followThrough: 0.9,
        blockAngle: 50,
        windUp: 0.6,
        slamMultiplier: 3,
        slamRadius: 8,
        heavyMultiplier: 5
      }
    case 'Glaive':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windUp: 0.6,
        slamMultiplier: 3,
        slamRadius: 5,
        heavyMultiplier: 2
      }
    case 'Gunblade':
      return {
        followThrough: 0.5,
        blockAngle: 45,
        windUp: 0.4,
        slamMultiplier: 3,
        slamRadius: 5,
        heavyMultiplier: 4
      }
    case 'Hammer':
      return {
        followThrough: 0.4,
        blockAngle: 50,
        windUp: 1.2,
        slamMultiplier: 3,
        slamRadius: 9,
        heavyMultiplier: 6
      }
    case 'Heavy Blade':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windUp: 1.1,
        slamMultiplier: 3,
        slamRadius: 8,
        heavyMultiplier: 6
      }
    case 'Heavy Scythe':
      return {
        followThrough: 0.4,
        blockAngle: 65,
        windUp: 1.0,
        slamMultiplier: 3,
        slamRadius: 8,
        heavyMultiplier: 6
      }
    case 'Machete':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windUp: 0.7,
        slamMultiplier: 3,
        slamRadius: 8,
        heavyMultiplier: 6
      }
    case 'Nikana':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windUp: 0.5,
        slamMultiplier: 3,
        slamRadius: 6,
        heavyMultiplier: 5
      }
    case 'Nunchaku':
      return {
        followThrough: 0.5,
        blockAngle: 55,
        windUp: 0.5,
        slamMultiplier: 2,
        slamRadius: 6,
        heavyMultiplier: 5
      }
    case 'Polearm':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windUp: 0.9,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 6
      }
    case 'Rapier':
      return {
        followThrough: 0.7,
        blockAngle: 60,
        windUp: 0.5,
        slamMultiplier: 3,
        slamRadius: 6,
        heavyMultiplier: 4.5
      }
    case 'Scythe':
      return {
        followThrough: 0.6,
        blockAngle: 60,
        windUp: 1.0,
        slamMultiplier: 3,
        slamRadius: 8,
        heavyMultiplier: 6
      }
    case 'Sparring':
      return {
        followThrough: 0.9,
        blockAngle: 50,
        windUp: 0.5,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 5
      }
    case 'Staff':
      return {
        followThrough: 0.5,
        blockAngle: 60,
        windUp: 0.5,
        slamMultiplier: 3,
        slamRadius: 6,
        heavyMultiplier: 5
      }
    case 'Sword':
      return {
        followThrough: 0.6,
        blockAngle: 55,
        windUp: 0.6,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 5
      }
    case 'Sword and Shield':
      return {
        followThrough: 0.6,
        blockAngle: 70,
        windUp: 0.7,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 5
      }
    case 'Tonfa':
      return {
        followThrough: 0.6,
        blockAngle: 60,
        windUp: 0.7,
        slamMultiplier: 2,
        slamRadius: 8,
        heavyMultiplier: 5
      }
    case 'Two-Handed Nikana':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windUp: 0.7,
        slamMultiplier: 3,
        slamRadius: 7,
        heavyMultiplier: 6
      }
    case 'Warfan':
      return {
        followThrough: 0.7,
        blockAngle: 55,
        windUp: 0.5,
        slamMultiplier: 3,
        slamRadius: 5,
        heavyMultiplier: 5
      }
    case 'Whip':
      return {
        followThrough: 0.5,
        blockAngle: 45,
        windUp: 0.4,
        slamMultiplier: 3,
        slamRadius: 5,
        heavyMultiplier: 4.5
      }
  }
}

export default getExtraStats
