import React, { Component } from 'react';

class Row extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"row " + className}>
                {this.props.children}
            </div>
        );
    }
}

class Column extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let type = (typeof this.props.type === 'undefined')? 'col' : this.props.type;
        return(
            <div {...this.props} className={type +' '+ className}>
                {this.props.children}
            </div>
        );
    }
}

export{
    Row,
    Column
}