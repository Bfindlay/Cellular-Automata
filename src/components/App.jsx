import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCells, setCells } from '../actions'

import Cell from './Cell.jsx';
import CellRow from './CellRow.jsx';
class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      cells: [],
      width: null,
      size: null
    }
  }
  generateCells(size){
    this.setState({width: size*12})
    let arr = [];
    for(let x = 0; x < size; x++){
        arr[x] = [];    
        for(let y = 0; y < size; y++){ 
            let c = new C(x, y);
            arr[x][y] = c;    
        }    
    }
    this.props.setCells(arr);
  }



  renderGrid(){
    const { cells } = this.props;
    return (
        <div style={{"width" : this.state.width}} className='cell-container'>
            { cells.map( (arr) => {
                arr = arr.map( (element) => {
                  return <Cell key={Math.random()} coords={element.location}/> 
                });
                return <CellRow key={Math.random()} cells={arr} />
            })}
        </div>
    )
  }
  render() {
    const { cells } = this.props;
    return (
      <div className='container'>
        <h4> Welcome To Cellular Automata </h4>
        <div className='input-container'>
          <input type='number' onChange={(e)=> this.setState({size:e.target.value})}placeholder='Cell Grid Size'/ >
          <input type='button' onClick={() => this.generateCells(this.state.size)}value='Generate'/>
        </div>
          { this.renderGrid() }
      </div>
    )
  }
}

class C {
  constructor(x, y){
    this.location = { 
      x: x,
      y: y
    }

    this.color = `rgba(4, 236, 50, ${Math.random()})`
    this.topLeft = {x: x-1, y: y-1}
    this.top = {x, y: y-1}
    this.topRight = {x: x+1, y: y-1}
    
    this.midLeft = {x: x-1, y}
    this.midRight = {x: x+1, y}

    this.botLeft = {x: x-1, y: y+1}
    this.bot = {x, y: y+1}
    this.botRight = {x: x+1, y: y+1}

    this.health = 1;
  }
  setColor(color){
    this.color = color;
  }
  setHealth(x){
    this.health = x;
  }
 
}

const mapStateToProps = ({ Cellular }) => {
  const { cells } = Cellular;
  return {cells};
}
export default connect(mapStateToProps, { retrieveCells, setCells })(App);
