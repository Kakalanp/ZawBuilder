import './App.css';
import grips from '../modules/grip';
import links from '../modules/link';
import strikes from '../modules/strike'

function App() {
  return(
    <div>
      <h2>Grips:</h2>
      {grips.map(element => {
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            < img src={require('../assets/images/grip/' + element.img + '.png')} alt={element.name} />
          </div>
        );
      })}
      <h2>Links:</h2>
      {links.map(element => {
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            < img src={require('../assets/images/link/' + element.img + '.png')} alt={element.name} />
          </div>
        );
      })}
      <h2>Strikes:</h2>
      {strikes.map(element => {
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            < img src={require('../assets/images/strike/' + element.img + '.png')} alt={element.name} />
          </div>
        );
      })}
    </div>
  )
}

export default App;
