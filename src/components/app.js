import React, { Component } from 'react'
import {Spinner, Navigation, Header, Layout, Content, Badge, Icon} from 'react-mdl'
import Menu from './menu'

export default class App extends Component {

    constructor(props){
        super(props)
        this.state = {
            page: 'home'
        }
    }

    componentWillMount(){
        return this.props.getMenu()
    }

    render() {
        return (
            <div style={{height: '300px', position: 'relative'}}>
                <Layout fixedHeader>
                    <Header title={<span><i className="material-icons">local_pizza</i> Pizza Palace</span>}>
                        <Navigation>
                            <a href="#" onClick={() => this.setState({ page: 'home' })}>
                                <Icon name="home"/> Menu
                            </a>
                            <a href="#" onClick={() => this.setState({ page: 'cart' })}>
                                <Badge text={this.props.cart.length}><Icon name="shopping_cart"/></Badge>
                            </a>
                        </Navigation>
                    </Header>
                    <Content>
                        <div className="mdl-typography--text-center">
                            {this.props.isInitializing ? <Spinner/> : <Menu menu={this.props.menu}/>}
                        </div>
                    </Content>
                </Layout>
            </div>
        )
    }

}
