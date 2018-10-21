import React, { Component } from 'react';

class Collapse extends Component {
    render() {
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"collapse " + className}>
                {this.props.children}
            </div>
        );
    }
}

export{
    Collapse
}