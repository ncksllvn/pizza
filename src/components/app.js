import React, { Component } from 'react'
import {Spinner, Navigation, Header, Layout, Content, Badge, Icon} from 'react-mdl'
import Menu from './menu'
import Cart from '../containers/cart'

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

    // If the cart has increased in size, then the user just added a pizza.
    // We redirect to the cart in that case.
    componentWillReceiveProps(nextProps){
        if (this.props.cart.length < nextProps.cart.length){
            this.setState({ page: 'cart' })
        }
    }

    getPage(){
        switch (this.state.page){
            case 'cart':
                return <Cart/>
            case 'home':
            default:
                return <Menu menu={this.props.menu}/>
        }
    }

    render() {
        return (
            <div>
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
                        {this.props.isInitializing ? <Spinner/> : this.getPage()}
                    </Content>
                </Layout>
            </div>
        )
    }

}
