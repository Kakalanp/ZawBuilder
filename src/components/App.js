import './App.css';
import grips from '../modules/grip'
import links from '../modules/link'

function App() {
  return(
    <div>
      <h2>Grips:</h2>
      {grips.map(element => {
        console.log(element)
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            < img src={require('../assets/images/grip/' + element.name.toLowerCase().split(' ').join('-') + '.png')} alt={element.name.toLowerCase().split(' ').join('-')} />
          </div>
        );
      })}
      {/* <h2>Links:</h2>
      {links.map(element => {
        console.log(element)
        return (
          <div key={element.name}>
            <p>{element.name}</p>
            < img src={require('../assets/images/link/' + element.name.toLowerCase().split(' ').join('-') + '.png')} alt={element.name.toLowerCase().split(' ').join('-')} />
          </div>
        );
      })} */}
    </div>
  )
}

export default App;
