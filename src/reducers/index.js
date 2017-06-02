import {combineReducers} from 'redux'
import * as actions from '../actions'

const initialState = {
    menu: [],
    cart: []
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

        case actions.ADD_PIZZA:
            return state.concat([action.pizza])

        case actions.REMOVE_PIZZA:
            return state.filter(p => p != action.pizza)

        default:
            return state
    }
}

export default combineReducers({ menu, cart })