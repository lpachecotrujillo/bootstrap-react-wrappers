import React, { Component } from 'react';

class Container extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"container " + className}>
                {this.props.children}
            </div>
        );
    }
}

class ContainerFluid extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"container-fluid " + className}>
                {this.props.children}
            </div>
        );
    }
}

export{
    Container,
    ContainerFluid
}