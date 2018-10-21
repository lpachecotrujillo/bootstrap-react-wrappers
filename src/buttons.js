import React, { Component } from 'react';

class Button extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let type = (typeof this.props.type === 'undefined')? 'button' : this.props.type;
        let isDisabled = (this.props.isDisabled === true);
        let isActive = (this.props.isActive === true)? 'active': '';

        if( this.props.isOutline === true ){
            className = className.replace('btn-','btn-outline-');
        }

        let props = {...{}, ...this.props};
        delete props.isOutline;
        delete props.isDisabled;
        delete props.isActive;

        return(
            <button {...props} type={type} className={"btn " + className +' '+ isActive} disabled={isDisabled}>
                {this.props.children}
            </button>
        );
    }
}

class ButtonPrimary extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-primary " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonSecondary extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-secondary " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonSuccess extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-success " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonDanger extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-danger " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonWarning extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-warning " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonInfo extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-info " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonLight extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-light " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonDark extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-dark " + className}>
                {this.props.children}
            </Button>
        );
    }
}

class ButtonLink extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        return(
            <Button {...this.props} className={"btn-link " + className}>
                {this.props.children}
            </Button>
        );
    }
}

export{
    Button,
    ButtonPrimary,
    ButtonSecondary,
    ButtonSuccess,
    ButtonDanger,
    ButtonWarning,
    ButtonInfo,
    ButtonLight,
    ButtonDark,
    ButtonLink
}