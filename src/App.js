import './App.css';
import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination();

function playNote(note) {
  synth.triggerAttackRelease(note, "8n")
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div id="wrapper">
          <ul class="set">
            <li class="white b" onClick={() => playNote('C4')}></li>
            <li class="black as" onClick={() => playNote('C4')}></li>
            <li class="white a" onClick={() => playNote('B4')}></li>
            <li class="black gs" onClick={() => playNote('C4')}></li>
            <li class="white g" onClick={() => playNote('E5')}></li>
            <li class="black fs" onClick={() => playNote('C4')}></li>
            <li class="white f" onClick={() => playNote('G8')}></li>
            <li class="white e" onClick={() => playNote('A9')}></li>
            <li class="black ds" onClick={() => playNote('C4')}></li>
            <li class="white d" onClick={() => playNote('D1')}></li>
            <li class="black cs" onClick={() => playNote('C4')}></li>
            <li class="white c" onClick={() => playNote('B1')}></li>
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
