import React, {Component} from 'react';
import Pad from './components/Pad'
import './App.css';
import SliderRange from './components/SliderRange';

const btnsPad = [
  {
    btn: 'Q',
    keypad: 81,
    descr: 'Heater-1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3'
  },
  {
    btn: 'W',
    keypad: 87,
    descr: 'Heater-2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3'
  },
  {
    btn: 'E',
    keypad: 69,
    descr: 'Heater-3',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3'
  },
  {
    btn: 'A',
    keypad: 65,
    descr: 'Heater-4_1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3'
  },
  {
    btn: 'S',
    keypad: 83,
    descr: 'Heater-6',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3'
  },
  {
    btn: 'D',
    keypad: 68,
    descr: 'Dsc_Oh',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3'
  },
  {
    btn: 'Z',
    keypad: 90,
    descr: 'KRP4_KICK_1',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3'
  },
  {
    btn: 'X',
    keypad: 88,
    descr: 'Cev_H2',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3'
  },
  {
    btn: 'C',
    keypad: 67,
    descr: 'Brk_Snr',
    src: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      displaySound: 'Une lettre (clic ou clavier) = un son associé',
      power: true,
      inputVol: 50,
      volume: 0.5
    };
    this.changeVol = this.changeVol.bind(this);
  }

  displaySound = displaySound => this.setState({displaySound});

  changeVol(e) {
    const volume = e.target.value / 100;
    
    this.setState({
      volume: volume,
      inputVol: e.target.value
    })

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center text-4xl my-6">Drum machine</h1>
        </header>
        <main className="main bg-black text-white">
          <div id="display" className="text-center p-4 uppercase">{this.state.displaySound}</div>
          <div id="drum-machine" className="grid grid-cols-3 gap-1">
            {
              btnsPad.map((item, i) => {
                return <Pad
                  key={i}
                  id={item.descr}
                  itemPad={item.btn}
                  src={item.src}
                  displaySound={this.displaySound}
                  keypad={item.keypad}
                  volume={this.state.volume}
                  />
              })
            }
          </div>
          <div className="flex justify-between p-4">
            <SliderRange 
              inputVol={this.state.inputVol}
              changeVol={this.changeVol}
            />
            <div className="flex items-center justify-end py-2">
              <label htmlFor="toggle" className="mr-2 text-s text-gray-400">Power</label>
              <div className="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-indigo-400 appearance-none cursor-pointer focus:outline-white" />
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-600 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
