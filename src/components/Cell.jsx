import React, { Component } from 'react';

import { connect } from 'react-redux';
import { setCellColor } from '../actions';

class Cell extends Component {

    constructor(props){
        super(props);
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
       //setInterval(this.evolve.bind(this), Math.random()*10000);
       const { cells, coords } = this.props;
       const node = cells[coords.x][coords.y];
       //console.log(node);
        return(
            <div onClick={()=> this.props.setCellColor(this.props.coords)} style={{backgroundColor: node.color}} className='cell' />
        )
    }
}
const mapStateToProps = ({ Cellular }) => {
    const { cells } = Cellular;
    return { cells }
}
export default connect(mapStateToProps,{setCellColor })(Cell);