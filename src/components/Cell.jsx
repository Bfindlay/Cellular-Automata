import React, { Component } from 'react';

class Cell extends Component {

    constructor(props){
        super(props);
        const { coords } = props;
        this.state = {
            coords
        }
    }
    render(){
        return(
            <div className='cell'>
            </div>
        )
    }
}

export default Cell;