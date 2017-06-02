import React, { Component } from 'react';

export default class App extends Component {

    componentWillMount(){
        return this.props.getMenu()
    }

    render() {

        if (this.props.isInitializing){
            return <h2>I am initializng</h2>
        }

        return (
            <div className="App">
                <h1>App</h1>
            </div>
        )
    }

}
