import React, { Component } from 'react';


class Onclick extends Component{
    render(){
        return (
            <div className='App'>
                <button className='btn btn-primary' onClick={this.handleClick}>Add Data</button>
            </div>
        );
    };
};

export default Onclick;