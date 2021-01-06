import React, {Component} from 'react';

class SliderRange extends Component {

  render() {

    return (
      <div className="flex items-center py-2">
        <span className="mr-2 text-s text-gray-400">Volume</span>
        <input className="overflow-hidden appearance-none bg-gray-600 h-4 w-128" type="range" min="0" max="100" step="1" onInput={this.props.changeVol} value={this.props.inputVol || 0} />
        <span className="ml-2">{this.props.inputVol}</span>
      </div>
    )
  }

}

export default SliderRange;
