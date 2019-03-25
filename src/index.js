import React from 'react'
import { render } from 'react-dom'
import { createStore,applyMiddleware } from 'redux'
import { createLogger } from 'redux-logger'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import App from './components/App'
import rootReducer from './reducers'
import {setInitialState} from './actions'


const middleware = [ thunk ];
if (process.env.NODE_ENV !== 'production') {
    middleware.push(createLogger());
}
const store = createStore(rootReducer, applyMiddleware(...middleware))
store.dispatch(setInitialState())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
