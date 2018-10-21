import React, { Component } from 'react';

class Breadcrumb extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <nav {...this.props} aria-label="breadcrumb" className={className}>
                <ol className="breadcrumb">
                    {this.props.children}
                </ol>
            </nav>
        );
    }
}

class BreadcrumbItem extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isActive = (typeof this.props.isActive === 'undefined')? false : this.props.isActive;
        let props = {...{}, ...this.props};
        delete props.isActive;

        if( isActive === true ){
            return(
                <li {...props} className={"breadcrumb-item active " + className} aria-current="page">
                    {this.props.children}
                </li>
            );
        }

        return(
            <li {...props} className={"breadcrumb-item " + className}>
                {this.props.children}
            </li>
        );
    }
}

export{
    Breadcrumb,
    BreadcrumbItem
}