import React, { Component } from 'react';

class Nav extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <ul {...this.props} className={"nav " + className}>
                {this.props.children}
            </ul>
        );
    }
}

class NavItem extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <li {...this.props} className={"nav-item " + className}>
                {this.props.children}
            </li>
        );
    }
}

class NavLink extends Component{
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
            <a {...props} className={"nav-link " + className +" "+ isActive +" "+ isDisabled} href={href}>
                {this.props.children}
            </a>
        );
    }
}

class NavContent extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"tab-content " + className}>
                {this.props.children}
            </div>
        );
    }
}

class NavPane extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isActive = (this.props.isActive === true)? 'active show': '';
        let props = {...{}, ...this.props};
        delete props.isActive;
        return(
            <div {...props} className={"tab-pane " + className +" "+ isActive}>
                {this.props.children}
            </div>
        );
    }
}

export{
    Nav,
    NavItem,
    NavLink,
    NavContent,
    NavPane
}