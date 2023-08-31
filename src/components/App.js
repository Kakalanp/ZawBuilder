import React, { useState, useEffect } from 'react'
import './App.css'
import getExtraStats from '../modules/helperFunctions'
import grips from '../modules/grip'
import links from '../modules/link'
import strikes from '../modules/strike'

function App () {
  const [zawParts, setZawParts] = useState({
    strike: {},
    grip: {},
    link: {}
  })

  const [zawStats, setZawStats] = useState({})

  useEffect(() => {
    if ((Object.keys(zawParts.strike).length !== 0) &&
        (Object.keys(zawParts.grip).length !== 0) &&
        (Object.keys(zawParts.link).length !== 0)) {
      createZaw()
      document.getElementById('finalZaw').classList.remove('disabled')
    }
  }, [zawParts])

  // Let's hope I don't forget to delete this later
  useEffect(() => {
    console.log(zawStats)
  }, [zawStats])

  function OpenPieceSelection (piece) {
    document.getElementById(`${piece}-selector`).classList.remove('disabled')
    document.getElementById('builder').classList.add('disabled')
  }

  function SelectPiece (piece, part) {
    document.getElementById(`${piece}-selector`).classList.add('disabled')
    document.getElementById('builder').classList.remove('disabled')

    setZawParts({ ...zawParts, [piece]: { ...part } })
  }

  // this function is only called once in one place, but the scope will change in later versions.
  function createZaw () {
    const zawType = zawParts.grip.type ? zawParts.strike.type2 : zawParts.strike.type1
    const zawDamage = zawParts.strike.dmg + zawParts.grip.dmgMod + zawParts.link.dmgMod
    const zawExtraStats = getExtraStats(zawType)
    setZawStats({
      speed: zawParts.grip.speed + zawParts.strike.spdMod + zawParts.link.spdMod,
      type: zawType,
      // DMG
      dmgTotal: zawDamage,
      dmgType: zawParts.strike.dmgType,
      crtChance: zawParts.strike.critChance + zawParts.link.crtMod,
      crtMultiplier: zawParts.strike.critMulti.toFixed(1),
      statusChance: zawParts.strike.statusChance + zawParts.link.stsMod,
      slash: Math.round((zawDamage * (zawParts.strike.slash / 100)) * 10) / 10,
      impact: Math.round((zawDamage * (zawParts.strike.impact / 100)) * 10) / 10,
      puncture: Math.round((zawDamage * (zawParts.strike.puncture / 100)) * 10) / 10,
      viral: Math.round((zawDamage * (zawParts.strike.viral / 100)) * 10) / 10,
      // heavy attack
      heavyDmg: zawExtraStats.heavyMultiplier * zawDamage,
      heavySlamAtk: zawExtraStats.heavySlamMultiplier * zawDamage,
      heavySlamRadialDmg: zawExtraStats.heavySlamMultiplier * zawDamage,
      heavySlamRadius: 'WIP', // No info on wiki, have to do my own research
      windUp: zawExtraStats.windUp,
      // extras
      stancePolarity: zawParts.grip.type ? zawParts.strike.polarity2 : zawParts.strike.polarity1,
      range: zawParts.grip.type ? zawParts.strike.range2 : zawParts.strike.range1,
      slamAtk: zawExtraStats.slamMultiplier * zawDamage,
      slamRadialDmg: zawDamage,
      slamRadius: `${zawExtraStats.slamRadius}m`,
      slideAtk: 'WIP', // No info on wiki, have to do my own research
      blockAngle: zawExtraStats.blockAngle,
      comboDuration: 5,
      followThrough: zawExtraStats.followThrough
    })
  }

  const rotate = (e) => {
    if (e.target.classList.contains('part-back')) e.target.parentElement.classList.toggle('rotated')
    else e.target.classList.toggle('rotated')
  }

  return (
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

      <div className='selector'>
        <div id='strike-selector' className='disabled'>
          <h2>Strikes:</h2>
          <div className='part-layout'>
            {strikes.map(part => {
              return (
                <div key={part.name}>
                  <div className="part-inner" onClick={rotate}>
                    <div className="part-front">
                      <img src={require('../assets/images/strike/' + part.img + '.png')} alt={part.name} />
                      <p className='part-name'>{part.name}</p>
                    </div>
                    <div className="part-back" onClick={() => SelectPiece('strike', part)}>
                      <h3>{part.name}</h3>
                      <p>{part.spdMod === 0 ? '' : (part.spdMod > 0 ? `Speed: +${part.spdMod}` : `Speed: ${part.spdMod}`)}</p>
                      <p>Total damage: {part.dmg}</p>
                      <p>Crit chance: {`${part.critChance}%`}</p>
                      <p>Crit damage: {`${part.critMulti} X`}</p>
                      <p>Status: {`${part.statusChance}%`}</p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div id='grip-selector' className='disabled'>
          <h2>Grips:</h2>
          <div className='part-layout'>
            {grips.map(part => {
              return (
                <div key={part.name}>
                  <div className="part-inner" onClick={rotate}>
                    <div className="part-front">
                      <img src={require('../assets/images/grip/' + part.img + '.png')} alt={part.name} />
                      <p className='part-name'>{part.name}</p>
                    </div>
                    <div className="part-back" onClick={() => SelectPiece('grip', part)}>
                      <h3>{part.name}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div id='link-selector' className='disabled'>
          <h2>Links:</h2>
          <div className='part-layout'>
            {links.map(part => {
              return (
                <div key={part.name}>
                  <div className="part-inner" onClick={rotate}>
                    <div className="part-front">
                      <img src={require('../assets/images/link/' + part.img + '.png')} alt={part.name} />
                      <p className='part-name'>{part.name}</p>
                    </div>
                    <div className="part-back" onClick={() => SelectPiece('link', part)}>
                      <h3>{part.name}</h3>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
      <div id='finalZaw' className='disabled'>
        <div id='zaRender'></div>
        <div id='zawStats'>
          <h3>PRIMARY:</h3>
          <p>Type: {zawStats.type}</p>
          <p>Speed: {zawStats.speed}</p>
          <p>Range: {zawStats.range}</p>
          <h3>DAMAGE:</h3>
          <p>Damage: {zawStats.dmgTotal} {`(Mainly ${zawStats.dmgType}, ${zawParts.strike[zawStats.dmgType]}%)`}</p>
          <p>Slash: {zawStats.slash}</p>
          <p>Impact: {zawStats.impact}</p>
          <p>Puncture: {zawStats.puncture}</p>
          {zawStats.viral > 0 && (<p>Viral: {zawStats.viral}</p>)}
          <p>Crit chance: {`${zawStats.crtChance}%`}</p>
          <p>Crit damage: {`${zawStats.crtMultiplier} X`}</p>
          <p>Status: {`${zawStats.statusChance}%`}</p>
        </div>
      </div>

    </>
  )
}

export default App
