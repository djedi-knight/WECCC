import React from 'react';
import {render} from 'react-dom';
// import AwesomeComponent from './AwesomeComponent.jsx'; //import/refer to/initialize it here
// import Hello from './Hello.jsx';
// import TimerComponent from './time.jsx';
import CombinedComponent from './combinedComponents.jsx';
//import TableComponent from './TableComponent.jsx';
import CommunityPage from './CommunityPage.jsx'
var myStyle = {
         fontSize: 50,
         color: '#FF00FF'
      }
      
class App extends React.Component {
  render () {
    return (
    	 
    	<div>
        	<p style = {myStyle}> Hello React!</p>
        	<CommunityPage />
        	<CombinedComponent />
        	
        	
      	</div>
    );
  }
}

render(<App/>, document.getElementById('app'));

// <AwesomeComponent />  // render it here 
        	// <Hello />
        	// <TimerComponent /> 
        	 //TableComponent />}