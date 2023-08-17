import React, { useState } from 'react'
import './App.css';
import grips from '../modules/grip';
import links from '../modules/link';
import strikes from '../modules/strike';

function App() {

  const [zawStats, setZawStats] = useState({
    strike: {
      name: '',
      imgSrc: '',
    },
    grip: {
      name: '',
      imgSrc: '',
    },
    link: {
      name: '',
      imgSrc: '',
    }
  });

  function OpenPieceSelection(piece) {
    document.getElementById(`${piece}-selector`).classList.remove('disabled');
    document.getElementById('builder').classList.add('disabled');
  }

  function ClosePieceSelection(piece, part) {
    document.getElementById(`${piece}-selector`).classList.add('disabled');
    document.getElementById('builder').classList.remove('disabled');

    setZawStats({...zawStats, [piece]: {
        name: part.name,
        imgSrc: require('../assets/images/' + piece + '/' + part.img + '.png'),
    }});
}

  return(
    <div>
      <div id='builder'>
        <div className='builder' onClick={() => OpenPieceSelection('strike')}>
          <div>
            <img id='strike-img' src={zawStats.strike.imgSrc}></img>
          </div>
          <div>
            <h3 id='strike-name'>{zawStats.strike.name !== '' ? zawStats.strike.name : 'NONE'}</h3>
            <p>Strike</p>
          </div>
        </div>
        <div className='builder' onClick={() => OpenPieceSelection('grip')}>
          <div>
            <img id='grip-img' src={zawStats.grip.imgSrc}></img>
          </div>
          <div>
            <h3 id='grip-name'>{zawStats.grip.name !== '' ? zawStats.grip.name : 'NONE'}</h3>
            <p>Grip</p>
          </div>
        </div>
        <div className='builder' onClick={() => OpenPieceSelection('link')}>
          <div>
            <img id='link-img' src={zawStats.link.imgSrc}></img>
          </div>
          <div>
            <h3 id='link-name'>{zawStats.link.name !== '' ? zawStats.link.name : 'NONE'}</h3>
            <p>Link</p>
          </div>
        </div>
      </div>
      <div>
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
    </div>
  )
}

export default App;
