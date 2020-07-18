import {appReducer} from './appReducer'
import {combineReducers, createStore, applyMiddleware} from 'redux'
import {reducer as formReducer} from 'redux-form'
import thunk from 'redux-thunk';

let reducers = combineReducers({
	form: formReducer,
	app: appReducer
})

let store = createStore(reducers, applyMiddleware(thunk))

export default store

window.store = store