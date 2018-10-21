import React, { Component } from 'react';

class Badge extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isPill = (typeof this.props.isPill === 'undefined')? false : this.props.isPill;
        let props = {...{}, ...this.props};
        delete props.isPill;

        if( isPill === true ){
            return(
                <span {...props} className={'badge badge-pill ' + className}>
                    {this.props.children}
                </span>
            );
        }

        return(
            <span {...props} className={'badge ' + className}>
                {this.props.children}
            </span>
        );
    }
}


class BadgePrimary extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-primary " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeSecondary extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-secondary " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeSuccess extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-success " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeDanger extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-danger " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeWarning extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-warning " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeInfo extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-info " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeLight extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-light " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

class BadgeDark extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Badge {...this.props} className={"badge-dark " + className}>
                {this.props.children}
            </Badge>
        );
    }
}

export{
    Badge,
    BadgePrimary,
    BadgeSecondary,
    BadgeSuccess,
    BadgeDanger,
    BadgeWarning,
    BadgeInfo,
    BadgeLight,
    BadgeDark
}