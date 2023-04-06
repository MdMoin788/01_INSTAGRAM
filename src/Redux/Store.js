import { applyMiddleware, compose, combineReducers, legacy_createStore } from 'redux'
import thunk from 'redux-thunk'
// import { NotificationActionReducer } from "./Reducer/Notification/NotificationCreateReducer"
import { Normal } from './Reducers/Normal'
const rootReducer = combineReducers({
    Normal
})
const composeEnhancers = (window ).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const middleware = [thunk]
const enhancer = composeEnhancers(applyMiddleware(...middleware))
export const store = legacy_createStore(rootReducer, enhancer)



