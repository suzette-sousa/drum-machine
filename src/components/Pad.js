import React, {Component} from 'react';

class Pad extends Component {

  constructor() {
    super();
    this.state = {
      isActive: false
    };
  }

  playSound = (isActive) => { 
    this.audio.play();
    this.audio.currentTime = 0;
    this.props.displaySound(this.props.id);
  }

  handleClick = () => { 
    this.playSound();
  }

  handleKeyPress = (e) => {
    if(e.keyCode === this.props.keypad) {
      this.playSound();
    }
  }

  componentDidMount() {
    document.addEventListener('keydown', this.handleKeyPress);
  }
  
  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress);
  }

  render() {

    return (
      <span onClick={this.handleClick}>
        <button id={this.props.id} className={`${this.state.isActive ? 'bg-indigo-800': null} drum-pad text-white bg-indigo-500 border-0 p-6 focus:outline-white hover:bg-indigo-600 text-3xl w-full`}>
          {this.props.itemPad}
          <audio id={this.props.itemPad} className="clip" src={this.props.src} ref={ref => this.audio = ref}>
            Votre navigateur ne parvient pas à lire le fichier audio.'
          </audio>
        </button>
      </span>
    )
  }

}

export default Pad;
