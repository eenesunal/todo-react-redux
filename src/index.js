import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware, compose } from "redux"
import createSagaMiddleware from 'redux-saga'
import { Provider } from "react-redux"

import App from "./App/App.jsx"
import rootReducer from "./redux/reducers"
import mySaga from './redux/sagas'

import "./index.css"

const sagaMiddleware = createSagaMiddleware()
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose

const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(sagaMiddleware)
));

sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root")
)
