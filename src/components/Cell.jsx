import React, { Component } from 'react';

class Cell extends Component {

    constructor(props){
        super(props);
        const { coords } = props;
        this.state = {
            coords,
            color: `rgba(4, 236, 50, ${Math.random()})`
        }
    }
    evolve(){
        let opacity = Math.random();
         this.setState({color: `rgba(4,236,50,${opacity})`});
        
    }
    render(){
       //setInterval(this.evolve.bind(this), Math.random()*300);
        return(
            <div style={{backgroundColor: this.state.color}} className='cell'>
            </div>
        )
    }
}

export default Cell;