import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { Button } from 'react-toolbox';
import NavBar from "../NavBar/NavBar.jsx"



export default React.createClass({
  mixins: [PureRenderMixin],


  getInitialState() {
  	    return { signup: false, login: true };
  },

 switchtoggle: function(word){

 		var signup, login;
 		if (word == "signup"){signup = true; login = false;}
 		else {login = true; signup = false};
 		
 		return this.setState({signup:signup,login:login})
},

render() {

    return (
    <div>	

    	<div>
      		<Button id="signupbutton" label= "Sign UP " onClick={this.switchtoggle.bind((null), "signup")} />
			<Button id="loginbutton" label= "Login " onClick={this.switchtoggle.bind((null), "login")} />											
		</div>
		
   			{this.state.signup?<Singup /> : null}
			{this.state.login?<Login /> : null}

		
			<p>Forgot <a href="/forgetpw"> password </a> or <a href="/forgetUser"> Username </a></p>		
	   </div>

    );
  }
});



var Singup = React.createClass({

	getInitialState() {
  	    return { isLoggedIn: true, active: false };
  	},


	sendToggle() {
			var isLoggedIn = this.state.isLoggedIn;
			return this.setState({isLoggedIn:!isLoggedIn})
		
  	},

		render(){

			return (

				<div>								
					<div id="signup">
							<p> Sign In to access your personal dashboard </p>
							<input type="text" id="first" placeholder="First Name"/>
							<input type="text" id="last" placeholder="Last Name"/>
							<input type="email" id="email" placeholder="E-Mail"/>
							<input type="password" id="password" placeholder="Password"/>
						
							<Button id="send" label= "Save " onClick={this.sendToggle} />
				   	</div>
	   			</div>

				);
		}
});







var Login = React.createClass({


	sendToggle() {
		alert(`you are login !`);
			var isLoggedIn = this.state.isLoggedIn;
			return this.setState({isLoggedIn:true})
			
  },



		render(){
			return (
				
					<div id="login">
						<p> Sign Up to access your personal dashboard </p>
						<input type="email" id="email" placeholder="E-Mail"/>
						<input type="password" id="password" placeholder="Password"/>
						
						<Button id="send" label= "Save" onClick={this.sendToggle} />
				   	</div>

				   	
	   			

				);
		}

});
