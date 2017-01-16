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
    health(){
        this.setState({color: `rgba(255,0,0,0.8)`})
    }
    componentDidMount(){
    }
    render(){
       //setInterval(this.evolve.bind(this), Math.random()*300);
       
        return(
            <div onClick={()=> console.log(this.state.coords)} style={{backgroundColor: this.state.color}} className='cell' />
        )
    }
}

export default Cell;