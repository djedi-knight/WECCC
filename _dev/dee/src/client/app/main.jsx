import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import About from './About.jsx';
import todoApp from './reducers/reducers';

class main extends React.Component{

	let store = createStore(todoApp)

	// let rootElement = document.getElementById('about')

}
render(

   <Provider store = {store}>
      <About />
   </Provider>,
	
   // rootElement
);