import React, { Component } from 'react';

class ButtonGroup extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div className={"btn-group " + className}>
                {this.props.children}
            </div>
        );
    }
}

class ButtonGroupVertical extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div className={"btn-group-vertical " + className}>
                {this.props.children}
            </div>
        );
    }
}

class ButtonToolbar extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div className={"btn-group " + className}>
                {this.props.children}
            </div>
        );
    }
}

export{
    ButtonGroup,
    ButtonGroupVertical,
    ButtonToolbar
}