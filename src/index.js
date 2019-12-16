import React from "react"
import ReactDOM from "react-dom"
import { createStore, applyMiddleware } from "redux"
import createSagaMiddleware from 'redux-saga'

import { Provider } from "react-redux"

import App from "./App/App.jsx"
import rootReducer from "./redux/reducers"
import * as serviceWorker from "./serviceWorker"

import mySaga from './redux/sagas'

import "./index.css"


// create the saga middleware
const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

// then run the saga
sagaMiddleware.run(mySaga)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
