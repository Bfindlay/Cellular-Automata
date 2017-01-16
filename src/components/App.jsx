import React, { Component } from 'react';
import Cell from './Cell.jsx';
import CellRow from './CellRow.jsx';
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
    let arr = [];
    for(let x = 0; x < size; x++){
        arr[x] = [];    
        for(let y = 0; y < size; y++){ 
            let c = new C(x, y);
            arr[x][y] = c;    
        }    
    }
    this.setState({cells: arr})
  }

  componentWillMount(){
    this.generateCells(10);
  }

  render() {
    return (
      <div className='container'>
        <div style={{"width" : this.state.width}} className='cell-container'>
            { this.state.cells.map( (arr) => {
                arr = arr.map( element => {
                  return <Cell key={Math.random()} coords={element.location}/> 
                });
                return <CellRow cells={arr} />
            })}
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
    this.parent = null;
    this.left = null;
    this.right = null;
    this.child = null;
    this.health = 1;
  }
  linkNode(node){
    const { parent, left, right, child } = node;
    this.parent = parent;
    this.left = left;
    this.right = right;
    this.child = child;
  }
  setHealth(x){
    this.health = x;
  }
  getNeighbours(){
    return { parent: this.parent, left: this.left, right:this.right, child: this.child};
  }
}

export default App;
