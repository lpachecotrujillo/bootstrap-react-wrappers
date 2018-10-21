import React, { Component } from 'react';

class Dropdown extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"dropdown " + className}>
                {this.props.children}
            </div>
        );
    }
}

class DropdownMenu extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"dropdown-menu " + className}>
                {this.props.children}
            </div>
        );
    }
}

class DropdownMenuItem extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <a {...this.props} className={"dropdown-item " + className}>
                {this.props.children}
            </a>
        );
    }
}

export{
    Dropdown,
    DropdownMenu,
    DropdownMenuItem
}