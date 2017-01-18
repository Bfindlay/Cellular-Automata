import React, { Component } from 'react';
import { connect } from 'react-redux';
import { retrieveCells, setCells, evolveCells } from '../actions'

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


  render() {
    const { cells, evolveCells } = this.props;
    return (
      <div className='container'>
        <h4> Welcome To Cellular Automata </h4>
        <div className='input-container'>
          <input type='number' onChange={(e)=> this.setState({size:e.target.value})}placeholder='Cell Grid Size'/ >
          <input type='button' onClick={() => this.generateCells(this.state.size)}value='Generate'/>
        </div>
          <div style={{"width" : this.state.width}} className='cell-container'>
            { cells.map( (arr) => {
                arr = arr.map( (element) => {
                  return <Cell key={Math.random()} coords={element.location}/> 
                });
                return <CellRow key={Math.random()} cells={arr} />
            })}
            <input type='button' onClick={() => setInterval(()=> evolveCells(cells),500) }value='Evolve'/>
        </div>      
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
   
   this.neighbours = [
    {x: x-1, y: y-1},
    {x, y: y-1},
    {x: x+1, y: y-1},
    {x: x-1, y},
    {x: x+1, y},
    {x: x-1, y: y+1},
    {x, y: y+1},
    {x: x+1, y: y+1}
  ]

    const r = Math.random();
    this.color = (r <= 0.05) ? `rgba(255, 10, 50, 0.8)` : `rgba(4, 236, 50, ${r})`
    this.health = (r*5);
  }
  setColor(color){
    this.color = color;
  }
  evolve(cells){
    cells.forEach(e => {
      if(e.health <= 0.4){
        e.setColor(`rgba(255, 10, 50, 0.8)`);
      }
    })
  }
  setHealth(x){
    this.health = x;
  }
 
}

const mapStateToProps = ({ Cellular }) => {
  const { cells } = Cellular;
  return {cells};
}
export default connect(mapStateToProps, { retrieveCells, setCells, evolveCells })(App);


//  this.topLeft = {x: x-1, y: y-1}
//     this.top = {x, y: y-1}
//     this.topRight = {x: x+1, y: y-1}

//     this.midLeft = {x: x-1, y}
//     this.midRight = {x: x+1, y}

//     this.botLeft = {x: x-1, y: y+1}
//     this.bot = {x, y: y+1}
//     this.botRight = {x: x+1, y: y+1}

