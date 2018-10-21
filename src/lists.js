import React, { Component } from 'react';

class ListGroup extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let props = {...{}, ...this.props};
        delete props.isDiv;

        if( this.props.isDiv === true ){
            return(
                <div {...props} className={"list-group " + className}>
                    {this.props.children}
                </div>
            );
        }

        return(
            <ul {...props} className={"list-group " + className}>
                {this.props.children}
            </ul>
        );
    }
}

class ListGroupItemLi extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isDisabled = (this.props.isDisabled === true)? 'disabled' : '';
        let isActive = (this.props.isActive === true)? 'active': '';
        let props = {...{}, ...this.props};
        delete props.isDisabled;
        delete props.isActive;
        return(
            <li {...props} className={"list-group-item " + className +" "+ isActive +" "+ isDisabled}>
                {this.props.children}
            </li>
        );
    }
}

class ListGroupItemA extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let href = (typeof this.props.href === 'undefined')? '#' : this.props.href;
        let isDisabled = (this.props.isDisabled === true)? 'disabled' : '';
        let isActive = (this.props.isActive === true)? 'active': '';
        let props = {...{}, ...this.props};
        delete props.isDisabled;
        delete props.isActive;
        delete props.href;
        return(
            <a {...props} className={"list-group-item list-group-item-action " + className +" "+ isActive +" "+ isDisabled} href={href}>
                {this.props.children}
            </a>
        );
    }
}

class ListGroupItemButton extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isDisabled = (this.props.isDisabled === true)? 'disabled' : '';
        let isActive = (this.props.isActive === true)? 'active': '';
        let props = {...{}, ...this.props};
        delete props.isDisabled;
        delete props.isActive;
        return(
            <button {...props} type="button" className={"list-group-item list-group-item-action " + className +" "+ isActive} disabled={isDisabled}>
                {this.props.children}
            </button>
        );
    }
}

export{
    ListGroup,
    ListGroupItemLi,
    ListGroupItemA,
    ListGroupItemButton
}