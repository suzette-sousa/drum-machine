import React, {Component} from 'react';

class Pad extends Component {
  
  render() {

    return (
      <span>
        <button id={this.props.id} className="drum-pad text-white bg-indigo-500 border-0 py-6 px-10 focus:outline-black hover:bg-indigo-600 text-3xl w-full">{this.props.itemPad}</button>
        <audio id={this.props.itemPad} className="clip" src={this.props.src}>
          Votre navigateur ne parvient pas à lire le fichier audio.'
        </audio>
      </span>
    )
  }

}

export default Pad;
