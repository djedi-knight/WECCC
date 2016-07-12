import React from 'react';
import {render} from 'react-dom';
import {Router, Route, Link, hashHistory} from 'react-router';
import {ButtonToolbar, DropdownButton, MenuItem} from 'react-bootstrap';

class App extends React.Component {
  render () {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/info">Info</Link></li>
        </ul>
        <BootstrapDropdown />
        {this.props.children}
      </div>
    )
  }
}

class About extends React.Component {
  render () {
  	console.log('About page rendered!');
    return (
    	<div>
    		<p>About Page</p>
    	</div>
    );
  }
}

class Info extends React.Component {
  render () {
  	console.log('Info page rendered!');
    return <p>Info Page</p>;
  }
}

class BootstrapDropdown extends React.Component {
	render() {
		const BUTTONS = ['Default', 'Primary', 'Success', 'Info', 'Warning', 'Danger', 'Link'];

		function renderDropdownButton(title, i) {
	  		return (
	    		<DropdownButton bsStyle={title.toLowerCase()} title={title} key={i} id={`dropdown-basic-${i}`}>
	      			<MenuItem eventKey="1">Action</MenuItem>
			      	<MenuItem eventKey="2">Another action</MenuItem>
			      	<MenuItem eventKey="3" active>Active Item</MenuItem>
			      	<MenuItem divider />
			      	<MenuItem eventKey="4">Separated link</MenuItem>
			    </DropdownButton>
	  		);
		}

		return <ButtonToolbar>{BUTTONS.map(renderDropdownButton)}</ButtonToolbar>;
	}
}

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <Route path="about" component={About}/>
      <Route path="info" component={Info}/>
    </Route>
  </Router>
), document.getElementById('app'));