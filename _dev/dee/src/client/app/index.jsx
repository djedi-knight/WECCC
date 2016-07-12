import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, hashHistory, IndexRoute  } from 'react-router'
import Home from './Home.jsx';
import About from './About.jsx';
import Contact from './Contact.jsx';

class App extends React.Component {
   render() {
    return (
      <div>
        <ul>
        <li><Link to='/home'>Home</Link></li>
          <li><Link to='/about'>About</Link></li>
          <li><Link to='/contact'>Contact</Link></li>
        
          
        </ul>
        {this.props.children}
      </div>
    )
  }
}

// export default App;


render((
   <Router  history = {hashHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
      </Route>
   </Router>
  
), document.getElementById('app'))

//render(<App/>, document.getElementById('app'));








// import React from 'react';
// import {render} from 'react-dom';
// // import AwesomeComponent from './AwesomeComponent.jsx'; //import/refer to/initialize it here
// // import Hello from './Hello.jsx';
// // import TimerComponent from './time.jsx';
// import CombinedComponent from './combinedComponents.jsx';
// //import TableComponent from './TableComponent.jsx';
// import CommunityPage from './CommunityPage.jsx';
// import UpdateForm from './UpdateForm.jsx';
// //import ReactRouter from './ReactRouter.jsx';
// //import TodoApp from './TodoList.jsx'
// var myStyle = {
//          fontSize: 50,
//          color: '#FF00FF'
//       }

// class App extends React.Component {
//   render () {
//     return (
    	 
//     	<div>
//         	<p style = {myStyle}> Hello React!</p>
//         	<CommunityPage />
//         	<CombinedComponent />
//         	<UpdateForm />
        	
        	
        	
        	
//       	</div>
//     );
//   }
// }

// render(<App/>, document.getElementById('app'));