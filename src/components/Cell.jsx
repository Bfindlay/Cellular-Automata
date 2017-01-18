import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCellColor } from '../actions';

class Cell extends Component {

    constructor(props){
        super(props);
    }

    evolve(){
        let opacity = Math.random();
        if(opacity <= 0.05){
            return this.props.setCellColor(this.props.coords,`rgba(255,0,0,${Math.random()})` )
        }
            return this.props.setCellColor(this.props.coords,`rgba(${Math.random()*10},255,${Math.random()*10},${Math.random()})` )
        
    }
    health(){
        this.setState({color: `rgba(255,0,0,0.8)`})
    }
    
    componentDidMount(){
         
    }
    render(){
      // setInterval(this.evolve.bind(this), 3000);
       const { cells, coords } = this.props;
       const node = cells[coords.x][coords.y];
        return(
            <div style={{backgroundColor: node.color}} className='cell' />
        )
    }
}
const mapStateToProps = ({ Cellular }) => {
    const { cells } = Cellular;
    return { cells }
}
export default connect(mapStateToProps, {setCellColor })(Cell);