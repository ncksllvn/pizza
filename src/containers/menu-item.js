import React from 'react'
import {connect} from 'react-redux'
import {addPizza} from '../actions'
import MenuItem from '../components/menu-item'

function mapDispatchToProps(dispatch, ownProps){
    return {
        addToCart(pizza){
            return dispatch(addPizza(pizza))
        }
    }
}

export default connect(null, mapDispatchToProps)(MenuItem)