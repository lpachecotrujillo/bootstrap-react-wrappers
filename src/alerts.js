import React, { Component } from 'react';

class Alert extends Component{
    render(){
        let className = (typeof this.props.className === 'undefined')? '' : this.props.className;
        let isDismissible = (typeof this.props.isDismissible === 'undefined')? false : this.props.isDismissible;

        if( isDismissible === true ){
            let props = {...{}, ...this.props};
            delete props.isDismissible;
            return(
                <div {...props} className={'alert alert-dismissible ' + className} role="alert">
                    {this.props.children}
                    <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                </div>
            );
        }

        return(
            <div {...this.props} className={'alert ' + className} role="alert">
                {this.props.children}
            </div>
        );
    }
}

class AlertPrimary extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-primary">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertSecondary extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-secondary">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertSuccess extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-success">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertDanger extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-danger">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertWarning extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-warning">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertInfo extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-info">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertLight extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-light">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertDark extends Component{
    render(){
        return(
            <Alert {...this.props} className="alert-dark">
                {this.props.children}
            </Alert>
        );
    }
}

class AlertLink extends Component{
    render(){
        return(
            <a {...this.props} className="alert-link">
                {this.props.children}
            </a>
        );
    }
}

export{
    Alert,
    AlertPrimary,
    AlertSecondary,
    AlertSuccess,
    AlertDanger,
    AlertWarning,
    AlertInfo,
    AlertLight,
    AlertDark,
    AlertLink
}