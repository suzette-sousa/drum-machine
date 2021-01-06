import React, {Component} from 'react';

class Pad extends Component {

  playSound = () => { 
    this.sound.play();
    this.sound.currentTime = 0;
    this.props.displaySound(this.props.id);
    this.sound.volume = this.props.volume;
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
        <button id={this.props.id} className={`drum-pad text-white bg-indigo-500 border-0 p-6 focus:outline-white hover:bg-indigo-600 text-3xl w-full`}>
          {this.props.itemPad}
          <audio id={this.props.itemPad} className="clip" src={this.props.src} ref={ref => this.sound = ref}>
            Votre navigateur ne parvient pas à lire le fichier audio.'
          </audio>
        </button>
      </span>
    )
  }

}

export default Pad;
