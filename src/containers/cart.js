import React from 'react'
import {connect} from 'react-redux'
import {removePizza} from '../actions'
import Cart from '../components/cart'

function mapStateToProps(state, ownProps){
    return {
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch, ownProps){
    return {
        removePizza(pizza){
            return dispatch(removePizza(pizza))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)