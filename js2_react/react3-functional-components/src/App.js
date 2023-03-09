import logo from './logo.svg';
import './App.css';
import VideoDetails from './components/VideoDetails';

function App() {
  return (
    <div className="App">
      <VideoDetails title="Wednesday Frog" views={100} hashtags={["Wednesday", "Loud", "frog"]} />
      <VideoDetails title="Wednesday, my dudes" views={1000} hashtags={["Wednesday", "humpday"]} />
      <VideoDetails title="Wednesday Addams" views={500} hashtags={["Wednesday", "Addams", "Creepy"]} />

    </div>
  );
}

export default App;
