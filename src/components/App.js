import React, { useState, useEffect } from 'react'
import './App.css';
import grips from '../modules/grip';
import links from '../modules/link';
import strikes from '../modules/strike';

function App() {

  const [zawParts, setZawParts] = useState({
    strike: {},
    grip: {},
    link: {}
  });

  const [zawStats, setZawStats] = useState({});

  useEffect(() => {
    if ((Object.keys(zawParts.strike).length !== 0) && 
        (Object.keys(zawParts.grip).length !== 0) &&
        (Object.keys(zawParts.link).length !== 0)) {
          createZaw();
          document.getElementById('finalZaw').classList.remove('disabled');
    }
  },[zawParts])

  function OpenPieceSelection(piece) {
    document.getElementById(`${piece}-selector`).classList.remove('disabled');
    document.getElementById('builder').classList.add('disabled');
  }

  function SelectPiece(piece, part) {
    document.getElementById(`${piece}-selector`).classList.add('disabled');
    document.getElementById('builder').classList.remove('disabled');

    setZawParts({...zawParts, [piece]: {...part}})
  }

  //this function is only called once in one place, but the scope will change in later versions.
  function createZaw() {
    setZawStats({
      speed: zawParts.grip.speed + zawParts.strike.spdMod + + zawParts.link.spdMod,
      type: !!zawParts.grip.type ? zawParts.strike.type2 : zawParts.strike.type1,
      //DMG
      dmgTotal: zawParts.strike.dmg + zawParts.grip.dmgMod + zawParts.link.dmgMod,
      dmgType: 'TBD',
      crtChance: zawParts.strike.critChance + zawParts.link.crtMod,
      crtMultiplier: zawParts.strike.critMulti,
      statusChance: zawParts.strike.statusChance + zawParts.link.stsMod,
      slash: 'TBD',
      impact: 'TBD',
      puncture: 'TBD',
      viral: 'TBD',
      //heavy attack
      heavyDmg: 'TBD',
      heavySlamAtk: 'TBD',
      heavySlamRadialDmg: 'TBD',
      heavySlamRadius: 'TBD',
      windUp: 'TBD',
      //extras
      stancePolarity: 'TBD',
      range: 'TBD',
      slamAtk: 'TBD',
      slamRadialDmg: 'TBD',
      slamRadius: 'TBD',
      slideAtk: 'TBD',
      blockAngle: 'TBD',
      comboDuration: 5,
      followThrough: 'TBD',
    });
  }

  return(
    <>
      <div id='builder'>
        <div className='piece' onClick={() => OpenPieceSelection('strike')}>
          <div>
            <img id='strike-img' src={zawParts.strike.img && require('../assets/images/strike/' + zawParts.strike.img + '.png')}></img>
          </div>
          <div>
            <h3 id='strike-name'>{zawParts.strike.name !== '' ? zawParts.strike.name : 'NONE'}</h3>
            <p>Strike</p>
          </div>
        </div>
        <div className='piece' onClick={() => OpenPieceSelection('grip')}>
          <div>
            <img id='grip-img' src={zawParts.grip.img && require('../assets/images/grip/' + zawParts.grip.img + '.png')}></img>
          </div>
          <div>
            <h3 id='grip-name'>{zawParts.grip.name !== '' ? zawParts.grip.name : 'NONE'}</h3>
            <p>Grip</p>
          </div>
        </div>
        <div className='piece' onClick={() => OpenPieceSelection('link')}>
          <div>
            <img id='link-img' src={zawParts.link.img && require('../assets/images/link/' + zawParts.link.img + '.png')}></img>
          </div>
          <div>
            <h3 id='link-name'>{zawParts.link.name !== '' ? zawParts.link.name : 'NONE'}</h3>
            <p>Link</p>
          </div>
        </div>
      </div>

      <div id='finalZaw' className='disabled'>
        <div id='zaRender'></div>
        <div id='zawStats'>
          <h3>PRIMARY:</h3>
          <p>Type: {zawStats.type}</p>
          <p>Speed: {zawStats.speed}</p>
          <h3>DAMAGE:</h3>
          <p>Dmg: {zawStats.dmgTotal} {`(Mainly ${dmgType})`}</p>
          <p>Crit chance: {zawStats.crtChance}</p>
          <p>Crit damage: {zawStats.crtMultiplier}</p>
          <p>Status: {zawStats.statusChance}</p>
          <h3>HEAVY ATTACK:</h3>

          {/*
      impact: 'TBD',
      puncture: 'TBD',
      viral: 'TBD',
      //heavy attack
      heavyDmg: 'TBD',
      heavySlamAtk: 'TBD',
      heavySlamRadialDmg: 'TBD',
      heavySlamRadius: 'TBD',
      windUp: 'TBD',
      //extras
      stancePolarity: 'TBD',
      range: 'TBD',
      slamAtk: 'TBD',
      slamRadialDmg: 'TBD',
      slamRadius: 'TBD',
      slideAtk: 'TBD',
      blockAngle: 'TBD',
      comboDuration: 5,
      followThrough: 'TBD',
          */}

        </div>
      </div>

      <div className='selector'>
        <div id='strike-selector' className='disabled'>
          <h2>Strikes:</h2>
          {strikes.map(part => {
            return (
              <div key={part.name} onClick={() => SelectPiece('strike', part)}>
                <p>{part.name}</p>
                < img src={require('../assets/images/strike/' + part.img + '.png')} alt={part.name} />
              </div>
            );
          })}
        </div>
        <div id='grip-selector' className='disabled'>
          <h2>Grips:</h2>
          {grips.map(part => {
            return (
              <div key={part.name} onClick={() => SelectPiece('grip', part)}>
                <p>{part.name}</p>
                < img src={require('../assets/images/grip/' + part.img + '.png')} alt={part.name} />
              </div>
            );
          })}
        </div>
        <div id='link-selector' className='disabled'>
          <h2>Links:</h2>
          {links.map(part => {
            return (
              <div key={part.name} onClick={() => SelectPiece('link', part)}>
                <p>{part.name}</p>
                < img src={require('../assets/images/link/' + part.img + '.png')} alt={part.name} />
              </div>
            );
          })}
        </div>
      </div>
    </>
  )
}

export default App;
