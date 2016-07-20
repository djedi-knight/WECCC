import React from 'react';
import {render} from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'

class App extends React.Component {
   render() {
      return (
         <div>
            <ul>
               <li><Link>Home</Link></li>
               <li><Link>About</Link></li>
               <li><Link>Contact</Link></li>
            </ul>
        
           {this.props.children}
         </div>
      )
   }
}

export default App;

class Home extends React.Component {
   render() {
      return (
         <div>
            <h1>Home...</h1>
         </div>
      )
   }
}

export default Home;

class About extends React.Component {
   render() {
      return (
         <div>
            <h1>About...</h1>
         </div>
      )
   }
}

export default About;

class Contact extends React.Component {
   render() {
      return (
         <div>
            <h1>Contact...</h1>
         </div>
      )
   }
}

export default Contact;

render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "/home" component = {Home} />
         <Route path = "/about" component = {About} />
         <Route path = "/contact" component = {Contact} />
      </Route>
   </Router>
  
), document.getElementById('app'))
