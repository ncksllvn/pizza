import React, { Component } from 'react'

export default class MenuItem extends Component {

    render(){
        return (
            <div>{JSON.stringify(this.props.pizza)}</div>
        )
    }

}