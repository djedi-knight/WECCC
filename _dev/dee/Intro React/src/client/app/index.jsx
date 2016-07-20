import React from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import main from './main.jsx'
import todoApp from './reducers/reducers'

let store = createStore(todoApp)

let rootElement = document.getElementById('app')

render(

   <Provider store = {store}>
      <main />
   </Provider>,
  
   rootElement
)
