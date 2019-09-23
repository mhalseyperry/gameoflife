import React, { Component } from 'react';

class Box extends Component {

    render(){
        const { boxClass, id, selectBox} = this.props;
        return(
            <div
                className={boxClass}
                id={id}
                onClick={selectBox}
            />
        );
    }
}
export default Box;
