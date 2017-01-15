import React, { Component } from 'react';
import Cell from './Cell.jsx';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cells: [],
      width: null
    }
  }
  generateCells(size){
    this.setState({width: size*12})
    let cells = [];
    for(let x = 0; x < size; x++){
      for(let y = 0; y < size; y++){
        cells.push({ x, y })
      }
    }
    this.setState({cells})
  }
  componentWillMount(){
    this.generateCells(50);
  }
  render() {
    return (
      <div className='container'>
        <div style={{"width" : this.state.width}} className='cell-container'>
            { this.state.cells.map( e => <Cell key={Math.random()} coords={{x: e.x, y:e.y}} />) }
        </div>
      </div>
    )
  }
}

export default App;
