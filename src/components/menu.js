import React, { Component } from 'react'
import {Tabs, Tab} from 'react-mdl'
import MenuItem from '../containers/menu-item'

export default class Menu extends Component {

    constructor(props){
        super(props)
        this.state = { tabIndex: 0 }
    }

    render() {
        return (
            <div style={{ maxWidth: '70%', margin: '0 auto' }}>
                <h2 className="mdl-typography--text-center">Create a pizza</h2>
                <Tabs onChange={tabIndex => this.setState({tabIndex})}>
                    {this.props.menu.map((size, index) => <Tab key={size.name}>{size.name}</Tab>)}
                </Tabs>
                <MenuItem pizza={this.props.menu[this.state.tabIndex]}/>
            </div>
        )
    }

}
