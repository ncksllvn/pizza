import {combineReducers} from 'redux'
import * as actions from '../actions'

const initialState = {
    menu: [],
    cart: {}
}

function menu(state=initialState.menu, action){
    switch (action.type){
        case actions.RECEIVE_MENU:
            return action.menu

        default:
            return state
    }
}

function cart(state=initialState.cart, action){
    switch (action.type){
        default:
            return state
    }
}

export default combineReducers({ menu, cart })