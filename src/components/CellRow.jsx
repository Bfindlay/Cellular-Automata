import React, { Component } from 'react';

class CellRow extends Component {

    constructor(props){
        super(props);
    }

    render(){
       //setInterval(this.evolve.bind(this), Math.random()*300);
       
        return(
            <div>
                {this.props.cells.map( e => e)}
            </div>
        )
    }
}

export default CellRow;