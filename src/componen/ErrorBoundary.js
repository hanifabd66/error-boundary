import React from "react";

class ErrorBoundary extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = { error: null, errorInfo: null };
    // }
    state = { error: null, errorInfo: null };

    componentDidCatch(error, errorInfo) {
        //catch error in any components below and re-render with error message
        this.setState({
            error: error,
            errorInfo: errorInfo,
        });
        //you can also log error messages to an error reporting serice here
    }

    render() {
        if (this.state.errorInfo) {
            //error path
            return (
                <div>
                    <h2>Something went wrong.</h2>
                    <details style={{ whiteSpace: "pre-wrap", color: this.props.themeColor }}>
                        <br />
                        {this.state.error && this.state.error.toString()}
                        <br />
                        {this.state.errorInfo.componentStack}
                    </details>
                </div>
            );
        }
        //normally, just render children
        return this.props.children;
    }
}

export default ErrorBoundary;