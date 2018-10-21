import React, { Component } from 'react';

class Card extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"card " + className}>
                {this.props.children}
            </div>
        );
    }
}

class CardHeader extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"card-header " + className}>
                {this.props.children}
            </div>
        );
    }
}

class CardBody extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"card-body " + className}>
                {this.props.children}
            </div>
        );
    }
}

class CardFooter extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <div {...this.props} className={"card-footer " + className}>
                {this.props.children}
            </div>
        );
    }
}

class CardTitle extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <h5 {...this.props} className={"card-title " + className}>
                {this.props.children}
            </h5>
        );
    }
}

class CardSubtitle extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <h6 {...this.props} className={"card-subtitle " + className}>
                {this.props.children}
            </h6>
        );
    }
}

class CardText extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <p {...this.props} className={"card-text " + className}>
                {this.props.children}
            </p>
        );
    }
}

class CardLink extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let href = (typeof this.props.href === 'undefined')? '#' : this.props.href;
        return(
            <a {...this.props} className={"card-link " + className} href={href}>
                {this.props.children}
            </a>
        );
    }
}

export{
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    CardSubtitle,
    CardText,
    CardLink
}