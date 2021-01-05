import Pad from './components/Pad'
import './App.css';

const btnsPad = [
  {
    btn: 'Q',
    descr: 'applauses',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0021.mp3'
  },
  {
    btn: 'W',
    descr: 'birds',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0100.mp3'
  },
  {
    btn: 'E',
    descr: 'water',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0124.mp3'
  },
  {
    btn: 'A',
    descr: 'walking',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0085.mp3'
  },
  {
    btn: 'S',
    descr: 'inthetrain',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0212.mp3'
  },
  {
    btn: 'D',
    descr: 'bip',
    src: 'https://lasonotheque.org/UPLOAD/mp3/0456.mp3'
  },
  {
    btn: 'Z',
    descr: 'eat',
    src: 'https://lasonotheque.org/UPLOAD/mp3/1114.mp3'
  },
  {
    btn: 'X',
    descr: 'scream',
    src: 'https://lasonotheque.org/UPLOAD/mp3/1228.mp3'
  },
  {
    btn: 'C',
    descr: 'bong',
    src: 'https://lasonotheque.org/UPLOAD/mp3/2280.mp3'
  }
];
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-center text-5xl my-6">Drum machine</h1>
      </header>
      <main className="main">
        <div id="drum-machine" className="grid grid-cols-3 gap-1">
          {
            btnsPad.map((item, i) => {
              return <Pad
                key={i}
                id={item.descr}
                itemPad={item.btn}
                src={item.src} />
            })
          }
          <div className="flex items-center py-2">
            <span className="mr-2 text-s text-gray-600">Volume</span>
            <input className="overflow-hidden appearance-none bg-gray-200 h-4 w-128" type="range" min="1" max="100" step="1" value="15" />
          </div>
          <div id="display" className="flex items-center py-2"><span className="text-s text-gray-600">Son : </span></div>
          <div className="flex items-center justify-end py-2">
            <label htmlFor="toggle" className="mr-2 text-s text-gray-600">Power</label>
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

export default App;
