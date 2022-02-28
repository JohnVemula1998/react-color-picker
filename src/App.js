import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      color:"ffffff"
    }
  }
  changeType = () => {
    const color = document.getElementById("inputId").value
    this.setState({
      color: color,
    })
    //console.log(color);
  }
  render() {
    return (
      <div className="App" style= {{background:this.state.color}}>
        <div className='colorpicker'>
          <h1 style={{color:this.state.color}}>Color picker</h1>
        <input id='inputId' type="color" onChange={this.changeType}/>
        <p style={{color:this.state.color}}>{this.state.color}</p>
        </div>
        
      </div>
    );
  }
}

export default App;
