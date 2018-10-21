import React, { Component } from 'react';

class Pagination extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <nav>
                <ul {...this.props} className={"pagination " + className}>
                    {this.props.children}
                </ul>
            </nav>
        );
    }
}

class PaginationItem extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isDisabled = (this.props.isDisabled === true)? 'disabled' : '';
        let isActive = (this.props.isActive === true)? 'active': '';
        let props = {...{}, ...this.props};
        delete props.isDisabled;
        delete props.isActive;
        return(
            <li {...props} className={"page-item " + className +" "+ isDisabled +" "+ isActive}>
                {this.props.children}
            </li>
        );
    }
}

class PaginationLink extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let href = (typeof this.props.href === 'undefined')? '#' : this.props.href;
        let props = {...{}, ...this.props};
        delete props.href;
        return(
            <a {...props} className={"page-link " + className} href={href}>
                {this.props.children}
            </a>
        );
    }
}

export{
    Pagination,
    PaginationItem,
    PaginationLink
}