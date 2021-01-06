import React, {Component} from 'react';

class Power extends Component {

  render() {

    return (
      <div className="flex items-center justify-end py-2">
        <label htmlFor="switchPower" className="mr-2 text-s text-gray-400">Power</label>
        <div className="relative inline-block w-16 align-middle select-none transition duration-200 ease-in">
          <input type="checkbox" name="toggle" id="switchPower" className="toggle-checkbox absolute block w-8 h-8 rounded-full bg-indigo-400 appearance-none cursor-pointer focus:outline-white" onChange={this.props.switchPower} checked={this.props.isPower}/>
          <label htmlFor="switchPower" className="toggle-label block overflow-hidden h-8 rounded-full bg-gray-600 cursor-pointer"></label>
        </div>
      </div>
    )
  }

}

export default Power;
