import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails';
import CounterComponent from './components/CounterComponent';
import StylingComponent from './components/StylingComponent';

function App() {

  return (
    <div className='container mt-5'>
        <h1> Hello React</h1>    
        <StylingComponent inlineColor= "navy" />


        {/* <CounterComponent />

        <VideoDetails title="Wednesday Frog" views={100} hashtags={["Wednesday", "Loud", "frog"]} />
        <VideoDetails title="Wednesday, my dudes" views={1000}  hashtags={["Wednesday", "humpday"]}/>
        <VideoDetails title="Wednesday Addams" views={500} hashtags={["Wednesday", "Addams", "Creepy"]}/> */}
    </div>
  );
}

export default App;
