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

  function ClosePieceSelection(piece, part) {
    document.getElementById(`${piece}-selector`).classList.add('disabled');
    document.getElementById('builder').classList.remove('disabled');

    setZawParts({...zawParts, [piece]: {...part}})
  }

  //this function is only called once in one place, but the scope will change in later versions.
  function createZaw() {
    setZawStats({
      name: `${zawParts.strike.name}-${zawParts.grip.name} (${zawParts.link.name})`,
      type: !!zawParts.grip.type ? zawParts.strike.type2 : zawParts.strike.type1
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
          <p>Name: {zawStats.name}</p>
          <p>Type: {zawStats.type}</p>
          <p>Dmg: {zawStats.dmg}</p>
          <p>Speed: {zawStats.spd}</p>
        </div>
      </div>

      <div className='selector'>
        <div id='strike-selector' className='disabled'>
          <h2>Strikes:</h2>
          {strikes.map(part => {
            return (
              <div key={part.name} onClick={() => ClosePieceSelection('strike', part)}>
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
              <div key={part.name} onClick={() => ClosePieceSelection('grip', part)}>
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
              <div key={part.name} onClick={() => ClosePieceSelection('link', part)}>
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
