import {createStore, applyMiddleware} from 'redux'
import {logger} from 'redux-logger'
import thunk from 'redux-thunk'
import reducers from '../reducers'

export default function(){

    const middleware = applyMiddleware(thunk, logger)
    const store = createStore(reducers, middleware)

    return store
}
