import logo from './logo.svg';
import './App.css';
import FetchPokemon from './components/FetchPokemon';
import DisplayOnLoad from './components/DisplayOnLoad';
import ChallengeContainer from './components/challenge/ChallengeContainer';

function App() {
  return (
    <div className="App">
      {/* <DisplayOnLoad /> */}
      {/* <FetchPokemon /> */}
      <ChallengeContainer />
    </div>
  );
}

export default App;
