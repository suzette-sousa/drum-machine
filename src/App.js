import React, {Component} from 'react';
import Pad from './components/Pad'
import './App.css';

const btnsPad = [
  {
    btn: 'Q',
    keypad: 81,
    descr: 'applauses',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0021.mp3'
  },
  {
    btn: 'W',
    keypad: 87,
    descr: 'birds',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0100.mp3'
  },
  {
    btn: 'E',
    keypad: 69,
    descr: 'water',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0124.mp3'
  },
  {
    btn: 'A',
    keypad: 65,
    descr: 'walking',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0085.mp3'
  },
  {
    btn: 'S',
    keypad: 83,
    descr: 'inthetrain',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0212.mp3'
  },
  {
    btn: 'D',
    keypad: 68,
    descr: 'bip',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0456.mp3'
  },
  {
    btn: 'Z',
    keypad: 90,
    descr: 'eat',
    src: 'https://lasonotheque.org/UPLOAD/mp3/1114.mp3'
  },
  {
    btn: 'X',
    keypad: 88,
    descr: 'scream',
    src: 'https://lasonotheque.org/UPLOAD/mp3/1228.mp3'
  },
  {
    btn: 'C',
    keypad: 67,
    descr: 'bong',
    src: 'https://lasonotheque.org/UPLOAD/mp3/2280.mp3'
  }
];

class App extends Component {
  constructor() {
    super();
    this.state = {
      displaySound: 'Tapez une lettre au clavier pour jouer le son associé'
    };
  }

  displaySound = displaySound => this.setState({displaySound})

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="text-center text-5xl my-6">Drum machine</h1>
        </header>
        <main className="main bg-black text-white">
          <div id="display" className="text-center p-4">{this.state.displaySound}</div>
          <div id="drum-machine" className="grid grid-cols-3 gap-1">
            {
              btnsPad.map((item, i) => {
                return <Pad
                  key={i}
                  id={item.descr}
                  itemPad={item.btn}
                  src={item.src}
                  displaySound={this.displaySound}
                  keypad={item.keypad} />
              })
            }
          </div>
          <div className="flex justify-between p-4">
            <div className="flex items-center py-2">
              <span className="mr-2 text-s text-gray-400">Volume</span>
              <input className="overflow-hidden appearance-none bg-gray-200 h-4 w-128" type="range" min="1" max="100" step="1" value="15" />
            </div>
            <div className="flex items-center justify-end py-2">
              <label htmlFor="toggle" className="mr-2 text-s text-gray-400">Power</label>
              <div className="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
                <input type="checkbox" name="toggle" id="toggle" className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-white border-4 appearance-none cursor-pointer focus:outline-black"/>
                <label htmlFor="toggle" className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-300 cursor-pointer"></label>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }
}

export default App;
