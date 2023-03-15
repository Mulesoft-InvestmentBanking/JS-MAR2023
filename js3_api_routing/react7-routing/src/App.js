import logo from './logo.svg';
import './App.css';
import { Navigate, Route, Routes, Link } from 'react-router-dom';
import ErrorPage from './views/ErrorPage';
import Location  from './views/Location';
import KeywordPage from './views/KeywordPage';
import DisplayOnLoad from './views/DisplayOnLoad';

const Home =() =>{
  return (
    <fieldset>
      <legend> Home Component</legend>
    </fieldset>
  )
}

const About =() =>{
  return (
    <fieldset>
      <legend> About Component</legend>
    </fieldset>
  )
}

const Footer =()=>{
  return (
    <fieldset>
      <legend> Footer Component</legend>
    </fieldset>
  )  
}




function App() {
  return (
    <div>
      <h1> Routing Demo</h1>
      <p>
        <Link to="/"> Home</Link>|
        <Link to="/about"> About</Link> |
        <Link to="/error404"> Error</Link> |
        <Link to="/location/tokyo"> Tokyo</Link>|
        <Link to="/location/barcelona"> Barcelona</Link> |    
        <Link to="/search/pancakes/brown"> Search for pancakes</Link>|
        <Link to="/search/blackpink/pink"> Search for blackpink</Link>|  
        <Link to="/pokemon/snorlax"> Search for Snorlax</Link> |     
        <Link to="/pokemon/ditto"> Search for ditto</Link> | 
      </p>

      <p>
        <a href='/'> Home</a> | 
        <a href='/about'> About</a> |
      </p>

      <Routes>
        <Route path='/about' element={<About />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="/location/:city" element={<Location />} />
        <Route path="/search/:whatever/:color" element={<KeywordPage />} />
        <Route path="/pokemon/:pokemonName" element={<DisplayOnLoad />} />
        <Route path='/' element={<Home />} />
        <Route path="*" element={<ErrorPage/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
