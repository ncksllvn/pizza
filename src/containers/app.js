import React from 'react'
import {connect} from 'react-redux'
import {getMenu} from '../actions'
import App from '../components/app'

function mapStateToProps(state, ownProps){
    return {
        isInitializing: state.menu.length == 0,
        cart: state.cart,
        menu: state.menu
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        getMenu(){
            return dispatch(getMenu())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)