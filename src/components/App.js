import './App.css';
import grips from '../modules/grip';
import links from '../modules/link';
import strikes from '../modules/strike';

function OpenPieceSelection(piece) {
  const element = document.getElementById(`${piece}-selector`).classList.remove('disabled');
}

function ClosePieceSelection(piece) {
  const element = document.getElementById(`${piece}-selector`).classList.add('disabled');
}

function App() {
  return(
    <div>
      <div id='builder'>
        <div className='builder' onClick={() => OpenPieceSelection('strike')}>
          <div>
            <img id='strike-img'></img>
          </div>
          <div>
            <h3 id='strike-name'>NONE</h3>
            <p>Strike</p>
          </div>
        </div>
        <div className='builder' onClick={() => OpenPieceSelection('grip')}>
          <div>
            <img id='grip-img'></img>
          </div>
          <div>
            <h3 id='grip-name'>NONE</h3>
            <p>Grip</p>
          </div>
        </div>
        <div className='builder' onClick={() => OpenPieceSelection('link')}>
          <div>
            <img id='link-img'></img>
          </div>
          <div>
            <h3 id='link-name'>NONE</h3>
            <p>Link</p>
          </div>
        </div>
      </div>
      <div>
        <div id='strike-selector' className='disabled'>
          <h2>Strikes:</h2>
          {strikes.map(element => {
            return (
              <div key={element.name} onClick={() => ClosePieceSelection('strike')}>
                <p>{element.name}</p>
                < img src={require('../assets/images/strike/' + element.img + '.png')} alt={element.name} />
              </div>
            );
          })}
        </div>
        <div id='grip-selector' className='disabled'>
          <h2>Grips:</h2>
          {grips.map(element => {
            return (
              <div key={element.name} onClick={() => ClosePieceSelection('grip')}>
                <p>{element.name}</p>
                < img src={require('../assets/images/grip/' + element.img + '.png')} alt={element.name} />
              </div>
            );
          })}
        </div>
        <div id='link-selector' className='disabled'>
          <h2>Links:</h2>
          {links.map(element => {
            return (
              <div key={element.name} onClick={() => ClosePieceSelection('link')}>
                <p>{element.name}</p>
                < img src={require('../assets/images/link/' + element.img + '.png')} alt={element.name} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
