import './App.css';
import Testimony from './components/Testimony';
import testimonyJson from './json/testimony.json'

function App() {
  return (
    <div className="App">
      <div className='main-container'>
        <h1>Here is what our alumni say about freeCodeCamp:</h1>
        <Testimony testimonyJson={testimonyJson[0]} />
        <Testimony testimonyJson={testimonyJson[1]} />
        <Testimony testimonyJson={testimonyJson[2]} />
      </div>
    </div>
  );
}

export default App;
